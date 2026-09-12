'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { formatSiretDisplay } from '@/lib/siret'

function SuccessContent() {
  const params = useSearchParams()
  const email = params.get('email') || 'votre boîte mail'
  const company = params.get('company')
  const siret = params.get('siret')

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
        <strong className="text-slate-text">{email}</strong>
        {company ? (
          <>
            {' '}
            pour <strong className="text-slate-text">{company}</strong>
          </>
        ) : null}
        . Vérifiez également vos spams.
      </p>

      {(company || siret) && (
        <div className="w-full bg-slate-50 rounded-xl p-4 text-left text-xs text-slate-secondary space-y-1 mb-6">
          {company && (
            <p>
              <span className="font-medium text-slate-text">Entreprise :</span>{' '}
              {company}
            </p>
          )}
          {siret && (
            <p>
              <span className="font-medium text-slate-text">SIRET :</span>{' '}
              {formatSiretDisplay(siret)}
            </p>
          )}
          <p className="pt-2 text-slate-tertiary">
            À l&apos;activation, utilisez exactement ce SIRET avec votre clé.
          </p>
        </div>
      )}

      <div className="w-full bg-slate-50 rounded-xl p-4 text-left space-y-2 mb-6">
        <p className="text-xs font-medium text-slate-text">Prochaines étapes :</p>
        {[
          'Téléchargez Notice sur la page Télécharger',
          'Installez le logiciel sur votre ordinateur',
          'Saisissez votre SIRET et votre clé de licence',
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

      <div className="flex flex-col gap-2">
        <Button href="/telecharger" size="md" className="w-full">
          Télécharger Notice maintenant
        </Button>
        <Button href="/verifier" variant="secondary" size="md" className="w-full">
          Vérifier une clé (clé + SIRET)
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
