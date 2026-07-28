import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Historique des versions — Notice',
}

export default function VersionsPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-text mb-3">
          Historique des versions
        </h1>
        <p className="text-slate-secondary mb-10 text-sm">
          Les notes de version apparaîtront ici à la publication de la v1.0.0.
        </p>

        <div className="border border-slate-border rounded-xl p-6">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-semibold text-slate-text">v1.0.0</h2>
            <span className="text-xs text-slate-tertiary">À venir</span>
          </div>
          <p className="text-sm text-slate-secondary">
            Première version publique — devis, factures, Factur-X, licence à vie.
          </p>
          <Link
            href="/telecharger"
            className="inline-block mt-4 text-sm text-navy-500 hover:underline"
          >
            Page téléchargement →
          </Link>
        </div>
      </div>
    </section>
  )
}
