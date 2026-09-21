import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Documentation Notice : installation, licence, Factur-X.',
}

const sections = [
  {
    title: 'Démarrage',
    items: [
      'Installation Windows / macOS',
      'Activation de la licence',
      'Premier devis en 2 minutes',
    ],
  },
  {
    title: 'Facturation électronique',
    items: [
      'Générer un Factur-X',
    ],
  },
  {
    title: 'Données',
    items: [
      'Sauvegardes automatiques',
      'Export / import .notice',
      'Export comptable',
    ],
  },
]

export default function DocumentationPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-text mb-3">Documentation</h1>
        <p className="text-slate-secondary mb-12">
          Guides en cours de rédaction. En attendant, la{' '}
          <Link href="/faq" className="text-navy-500 hover:underline">
            FAQ
          </Link>{' '}
          couvre les questions les plus fréquentes.
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-slate-text mb-3">
                {s.title}
              </h2>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-secondary border-b border-slate-border py-2"
                  >
                    {item}{' '}
                    <span className="text-slate-tertiary text-xs">— bientôt</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
