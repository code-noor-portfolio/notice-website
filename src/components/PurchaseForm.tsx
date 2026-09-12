'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { purchaseLicense } from '@/lib/notice-api'
import { PRICING, formatPrice } from '@/constants/pricing'
import { STRIPE_ENABLED, createCheckoutSession } from '@/lib/stripe'
import { isValidSiret, normalizeSiret } from '@/lib/siret'

/**
 * Purchase form — company + SIRET + email.
 * Today: POST /api/purchase → key bound to SIRET → Resend.
 * Later: Stripe Checkout → webhook → LicenseService.issue.
 */
export function PurchaseForm() {
  const router = useRouter()
  const [companyName, setCompanyName] = useState('')
  const [siret, setSiret] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const company = companyName.trim()
    if (!company || company.length < 2) {
      setError('Veuillez saisir le nom de votre entreprise.')
      return
    }
    if (!isValidSiret(siret)) {
      setError('SIRET invalide. Il doit comporter 14 chiffres (contrôle Luhn).')
      return
    }
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
      const normalizedSiret = normalizeSiret(siret)

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

      await purchaseLicense({
        companyName: company,
        siret: normalizedSiret,
        email,
      })
      const q = new URLSearchParams({
        email,
        company: company,
        siret: normalizedSiret,
      })
      router.push(`/acheter/succes?${q.toString()}`)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer.'
      )
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-secondary leading-relaxed">
        La clé de licence sera liée au <strong>SIRET</strong> de votre
        entreprise. À l&apos;activation dans Notice, vous devrez saisir
        exactement ce SIRET avec votre clé.
      </div>

      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-slate-text mb-1.5"
        >
          Nom de l&apos;entreprise *
        </label>
        <input
          id="companyName"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Martin Plomberie"
          autoComplete="organization"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="siret"
          className="block text-sm font-medium text-slate-text mb-1.5"
        >
          SIRET *
        </label>
        <input
          id="siret"
          type="text"
          inputMode="numeric"
          value={siret}
          onChange={(e) => setSiret(e.target.value)}
          placeholder="123 456 789 00012"
          autoComplete="off"
          required
          className={inputClass}
        />
        <p className="text-xs text-slate-tertiary mt-1.5">
          14 chiffres — sera demandé à l&apos;activation de Notice
        </p>
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
          className={inputClass}
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
          className={inputClass}
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
          : 'Paiement simulé · Clé envoyée par email, liée à votre SIRET'}
      </p>
    </form>
  )
}
