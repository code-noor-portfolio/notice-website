import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Confidentialité — Notice',
}

export default function ConfidentialitePage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-2xl space-y-4 text-sm text-slate-secondary leading-relaxed">
        <h1 className="text-3xl font-bold text-slate-text mb-6">
          Politique de confidentialité
        </h1>
        <p>
          Notice Desktop stocke vos données métier (clients, devis, factures)
          uniquement sur votre ordinateur. Elles ne sont pas envoyées à nos
          serveurs.
        </p>
        <p>
          Lors de l’achat et de l’activation, nous traitons votre adresse email
          et les métadonnées de licence (statut, appareils) via notre API Firebase
          pour délivrer et vérifier votre licence.
        </p>
        <p>
          Contact RGPD / support : support@notice.code-noor.com
        </p>
      </div>
    </section>
  )
}
