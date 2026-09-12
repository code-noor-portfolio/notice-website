import type { Metadata } from 'next'
import { PRICING, formatPrice } from '@/constants/pricing'

export const metadata: Metadata = {
  title: 'CGU',
}

export default function CguPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-2xl space-y-4 text-sm text-slate-secondary leading-relaxed">
        <h1 className="text-3xl font-bold text-slate-text mb-6">
          Conditions générales d’utilisation
        </h1>
        <p>
          La licence Notice autorise l’installation sur{' '}
          {PRICING.maxDevices} ordinateurs pour un usage professionnel. Prix
          public : {formatPrice(PRICING.desktopPrice)} (paiement unique).
        </p>
        <p>
          Les mises à jour sont incluses pendant{' '}
          {PRICING.updatesIncludedMonths} mois. Le renouvellement optionnel est
          de {formatPrice(PRICING.updatesPrice)} / an.
        </p>
        <p>
          Satisfait ou remboursé 30 jours — contactez
          support@notice.code-noor.com.
        </p>
        <p className="text-slate-tertiary text-xs pt-8">
          Version provisoire — CGU juridiques complètes à finaliser avant vente
          publique.
        </p>
      </div>
    </section>
  )
}
