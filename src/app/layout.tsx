import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { SiteChrome } from '@/components/layout/SiteChrome'
import { SITE } from '@/constants/site'
import '@/app/globals.css'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Notice — Gestion pour artisans indépendants',
    template: '%s — Notice',
  },
  description:
    'Notice est l’outil de gestion pensé pour les artisans indépendants. Clients, chantiers, devis, factures et maintenance — simplement. Windows & macOS, hors ligne, données locales.',
  keywords: [
    'logiciel artisan',
    'devis facture',
    'gestion chantier',
    'sans abonnement',
    'hors ligne',
    'Notice',
  ],
  openGraph: {
    title: 'Notice — Gestion pour artisans indépendants',
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'fr_FR',
    type: 'website',
  },
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={ibmPlex.variable}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
        >
          Aller au contenu
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
