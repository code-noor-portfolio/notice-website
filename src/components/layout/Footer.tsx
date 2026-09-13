import { CodeNoorLogo } from '@/components/ui/CodeNoorLogo'
import { Logo } from '@/components/ui/Logo'
import { PendingLink } from '@/components/ui/PendingLink'
import { SITE } from '@/constants/site'

const columns = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '/fonctionnalites' },
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Facturation électronique', href: '/facturation-electronique' },
      { label: 'Télécharger', href: '/telecharger' },
    ],
  },
  {
    title: 'Notice',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'CGV', href: '/cgv' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-night-background text-night-text">
      <div className="container-content py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-night-secondary">
              L’outil de gestion pensé pour les artisans indépendants.
              Tout ce dont vous avez besoin. Rien de plus.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-sm font-medium text-night-text">
                {column.title}
              </p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <PendingLink
                      href={link.href}
                      className="text-sm text-night-secondary transition-colors duration-150 hover:text-night-primary"
                    >
                      {link.label}
                    </PendingLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-night-border pt-6 text-xs text-night-secondary md:flex-row md:items-center">
          <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span aria-hidden>—</span>
            <CodeNoorLogo inverted />
          </p>
          <p>notice.code-noor.com</p>
        </div>
      </div>
    </footer>
  )
}
