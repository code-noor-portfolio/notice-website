'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Shield } from 'lucide-react'
import { PRICING, formatPrice } from '@/constants/pricing'

export function Pricing() {
  const [notifyEmail, setNotifyEmail] = useState('')
  const [notifyDone, setNotifyDone] = useState(false)

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    if (!notifyEmail.includes('@')) return
    // Placeholder: wire to Resend / waitlist later
    setNotifyDone(true)
  }

  return (
    <section id="tarifs" className="section-padding bg-slate-50 scroll-mt-20">
      <div className="container-content">
        <SectionTitle
          label="Tarifs"
          title="Un prix. Une fois."
          description="Pas d'abonnement mensuel. Pas de niveau freemium. Pas de fonctionnalité cachée derrière un tier supérieur."
        />

        <div className="max-w-md mx-auto">
          <div className="bg-navy-950 rounded-2xl p-8 text-center">
            <span className="inline-block text-xs font-semibold text-white/50 uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full mb-6">
              Licence Notice
            </span>

            <div className="mb-2">
              <span className="text-6xl font-bold text-white">
                {PRICING.desktopPrice}
              </span>
              <span className="text-white/60 text-xl"> {PRICING.currency}</span>
            </div>
            <p className="text-white/40 text-sm mb-8">
              paiement unique · TVA incluse
            </p>

            <div className="border-t border-white/10 mb-8" />

            <ul className="space-y-3 text-left mb-8">
              {[
                `${PRICING.maxDevices} ordinateurs (Windows & macOS)`,
                'Toutes les fonctionnalités incluses',
                'Sauvegardes automatiques',
                'Facturation électronique Factur-X',
                'Export comptable (FEC)',
                'Support par email',
                `1 an de mises à jour`,
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="text-success">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href="/acheter"
              size="lg"
              className="w-full bg-white text-navy-700 hover:bg-slate-50 font-semibold"
            >
              Acheter Notice
            </Button>

            <div className="flex items-center justify-center gap-2 mt-4 text-white/35 text-xs">
              <Shield size={13} />
              Satisfait ou remboursé 30 jours
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-slate-secondary">
              Renouvellement des mises à jour après 1 an :{' '}
              <span className="font-medium text-slate-text">
                {formatPrice(PRICING.updatesPrice)} / an
              </span>{' '}
              — optionnel
            </p>
          </div>

          <div className="mt-6 bg-white rounded-xl border border-slate-border p-6 text-center">
            <p className="text-sm font-medium text-slate-text mb-1">
              Notice Mobile
            </p>
            <p className="text-xs text-slate-secondary mb-4">
              En développement — soyez averti lors de sa sortie.
            </p>
            {notifyDone ? (
              <p className="text-xs text-success">Merci — on vous préviendra.</p>
            ) : (
              <form
                onSubmit={handleNotify}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  className="flex-1 border border-slate-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                  aria-label="Email pour être averti de Notice Mobile"
                />
                <button
                  type="submit"
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-navy-50 text-navy-700 hover:bg-navy-100 transition-all duration-150"
                >
                  Me prévenir
                </button>
              </form>
            )}
            <p className="mt-3 text-[10px] text-slate-tertiary">
              Ou{' '}
              <Link href="/contact" className="underline hover:text-slate-text">
                contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
