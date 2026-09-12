import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
}

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-2xl prose-like space-y-4 text-sm text-slate-secondary leading-relaxed">
        <h1 className="text-3xl font-bold text-slate-text mb-6">Mentions légales</h1>
        <p>
          Éditeur : Code Noor — Notice. Site : notice.code-noor.com.
        </p>
        <p>
          Contact : support@notice.code-noor.com
        </p>
        <p>
          Hébergement du site : GitHub Pages. API licences : Google Cloud /
          Firebase (région europe-west1).
        </p>
        <p className="text-slate-tertiary text-xs pt-8">
          Document à compléter (SIRET, adresse, RCS) avant mise en production
          commerciale.
        </p>
      </div>
    </section>
  )
}
