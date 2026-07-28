import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Notice — Logiciel de facturation pour artisans',
  description:
    'Créez vos devis et factures en moins de 2 minutes. 100 % local, sans abonnement, sans compte. Windows & macOS.',
  keywords: [
    'facturation artisan',
    'logiciel devis facture',
    'sans abonnement',
    'local',
    'plombier',
    'électricien',
  ],
  openGraph: {
    title: 'Notice — Facturation pour artisans',
    description: 'Rapide. Local. Sans abonnement.',
    url: 'https://notice.code-noor.com',
    siteName: 'Notice',
    locale: 'fr_FR',
    type: 'website',
  },
  metadataBase: new URL('https://notice.code-noor.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={ibmPlex.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
