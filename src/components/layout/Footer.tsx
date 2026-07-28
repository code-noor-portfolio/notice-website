import Link from 'next/link'

const columns = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '/#fonctionnalites' },
      { label: 'Tarifs', href: '/tarifs' },
      { label: 'Télécharger', href: '/telecharger' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Versions', href: '/versions' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Documentation', href: '/documentation' },
      { label: 'Contact', href: '/contact' },
      { label: 'Support', href: '/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'CGU', href: '/cgu' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-content py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-navy-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <span className="text-lg font-bold">Notice</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Logiciel de devis et facturation pour artisans.
              Local. Sans abonnement. Licence à vie.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white/80 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Notice — Code Noor</p>
          <p>notice.code-noor.com</p>
        </div>
      </div>
    </footer>
  )
}
