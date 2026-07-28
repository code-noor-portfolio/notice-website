'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { purchaseLicense } from '@/lib/notice-api'
import { PRICING, formatPrice } from '@/constants/pricing'
import { STRIPE_ENABLED, createCheckoutSession } from '@/lib/stripe'

/**
 * Purchase form — shaped like a future Stripe Checkout entry.
 * Today: POST /api/purchase → Resend (paiement simulé).
 * Later: Stripe Checkout → webhook → LicenseService.issue.
 */
export function PurchaseForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !email.includes('@')) {
      setError('Veuillez saisir un email valide.')
      return
    }
    if (email !== emailConfirm) {
      setError('Les deux adresses email ne correspondent pas.')
      return
    }

    setLoading(true)
    try {
      if (STRIPE_ENABLED) {
        const origin =
          typeof window !== 'undefined' ? window.location.origin : ''
        const session = await createCheckoutSession({
          email,
          successUrl: `${origin}/acheter/succes?email=${encodeURIComponent(email)}`,
          cancelUrl: `${origin}/acheter`,
        })
        window.location.href = session.url
        return
      }

      await purchaseLicense(email)
      router.push(`/acheter/succes?email=${encodeURIComponent(email)}`)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer.'
      )
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-secondary leading-relaxed">
        Votre clé de licence sera envoyée immédiatement à l&apos;adresse email
        indiquée. Conservez-la précieusement — elle sera nécessaire pour activer
        Notice.
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-text mb-1.5"
        >
          Adresse email *
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.fr"
          autoComplete="email"
          required
          className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="emailConfirm"
          className="block text-sm font-medium text-slate-text mb-1.5"
        >
          Confirmez votre email *
        </label>
        <input
          id="emailConfirm"
          type="email"
          value={emailConfirm}
          onChange={(e) => setEmailConfirm(e.target.value)}
          placeholder="votre@email.fr"
          autoComplete="email"
          required
          className="w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Génération de votre licence…
          </>
        ) : (
          <>Recevoir ma clé — {formatPrice(PRICING.desktopPrice)}</>
        )}
      </Button>

      <p className="text-xs text-slate-tertiary text-center">
        {STRIPE_ENABLED
          ? 'Paiement sécurisé via Stripe'
          : 'Paiement simulé · Votre clé sera envoyée instantanément par email'}
      </p>
    </form>
  )
}
