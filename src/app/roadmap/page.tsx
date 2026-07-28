import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roadmap — Notice',
}

const items = [
  { status: 'En cours', title: 'Site vitrine + licence Firebase', when: '2026' },
  { status: 'Prochain', title: 'Stripe Checkout en production', when: '2026' },
  { status: 'Prochain', title: 'Binaires Windows / macOS signés', when: '2026' },
  { status: 'Plus tard', title: 'Notice Mobile (iOS & Android)', when: '—' },
]

export default function RoadmapPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-text mb-3">Roadmap</h1>
        <p className="text-slate-secondary mb-10 text-sm">
          Ce sur quoi nous travaillons. Pas de dates promises — juste la
          direction.
        </p>
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex items-start justify-between gap-4 border border-slate-border rounded-xl p-5"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                  {item.status}
                </span>
                <p className="font-medium text-slate-text mt-1">{item.title}</p>
              </div>
              <span className="text-xs text-slate-tertiary flex-shrink-0">
                {item.when}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
