import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'CGV',
  description: 'Conditions générales de vente de Notice.',
  openGraph: {
    title: 'CGV — Notice',
    description: 'Conditions générales de vente de Notice.',
  },
}

export default function CgvPage() {
  return (
    <PlaceholderPage
      title="Conditions générales de vente"
      description="Les conditions générales de vente seront publiées ici. En attendant, les informations essentielles restent disponibles sur la page Tarifs et par e-mail."
    />
  )
}
