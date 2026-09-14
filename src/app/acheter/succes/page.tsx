'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * UX-only success page after Stripe Checkout.
 * NEVER issues a license — the Stripe webhook is the sole authority.
 */
function SuccessContent() {
  const params = useSearchParams()
  const sessionId = params.get('session_id')

  return (
    <div className="bg-white rounded-2xl border border-slate-border shadow-sm p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
        <Check size={28} className="text-success" />
      </div>
      <h1 className="text-2xl font-bold text-slate-text mb-2">
        Merci pour votre achat
      </h1>
      <p className="text-sm text-slate-secondary leading-relaxed mb-6">
        Votre licence vous sera envoyée par email après confirmation du
        paiement. Vérifiez également vos spams.
      </p>

      <div className="w-full bg-slate-50 rounded-xl p-4 text-left space-y-2 mb-6">
        <p className="text-xs font-medium text-slate-text">Prochaines étapes :</p>
        {[
          'Surveillez votre boîte mail pour la clé NOTICE-…',
          'Téléchargez Notice sur la page Télécharger',
          'Activez avec votre SIRET et votre clé de licence',
        ].map((step, i) => (
          <div
            key={step}
            className="flex items-start gap-2 text-xs text-slate-secondary"
          >
            <span className="w-4 h-4 rounded-full bg-navy-700 text-white flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            {step}
          </div>
        ))}
      </div>

      {sessionId ? (
        <p className="text-[10px] text-slate-tertiary mb-4 break-all">
          Référence session : {sessionId}
        </p>
      ) : null}

      <div className="flex flex-col gap-2">
        <Button href="/telecharger" size="md" className="w-full">
          Télécharger Notice
        </Button>
        <Button href="/" variant="secondary" size="md" className="w-full">
          Retour à l&apos;accueil
        </Button>
      </div>
    </div>
  )
}

export default function AcheterSuccesPage() {
  return (
    <section className="section-padding pt-28 bg-slate-50 min-h-screen">
      <div className="container-content max-w-lg">
        <Suspense
          fallback={
            <div className="bg-white rounded-2xl p-8 text-center text-slate-secondary text-sm">
              Chargement…
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </div>
    </section>
  )
}
