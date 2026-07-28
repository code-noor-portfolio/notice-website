'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function SuccessContent() {
  const params = useSearchParams()
  const email = params.get('email') || 'votre boîte mail'

  return (
    <div className="bg-white rounded-2xl border border-slate-border shadow-sm p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
        <Check size={28} className="text-success" />
      </div>
      <h1 className="text-2xl font-bold text-slate-text mb-2">
        Commande confirmée
      </h1>
      <p className="text-sm text-slate-secondary leading-relaxed mb-6">
        Votre clé de licence a été envoyée à{' '}
        <strong className="text-slate-text">{email}</strong>. Vérifiez
        également vos spams.
      </p>

      <div className="w-full bg-slate-50 rounded-xl p-4 text-left space-y-2 mb-6">
        <p className="text-xs font-medium text-slate-text">Prochaines étapes :</p>
        {[
          'Téléchargez Notice sur la page Télécharger',
          'Installez le logiciel sur votre ordinateur',
          'Saisissez votre email et votre clé de licence',
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

      <Button href="/telecharger" size="md" className="w-full">
        Télécharger Notice maintenant
      </Button>
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
