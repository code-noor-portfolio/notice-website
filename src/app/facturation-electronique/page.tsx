import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Facturation électronique',
  description:
    'Le rôle de Notice dans la facturation électronique et Factur-X, expliqué simplement.',
  openGraph: {
    title: 'Facturation électronique — Notice',
    description:
      'Ce que Notice prépare pour Factur-X, sans se présenter comme une PDP.',
  },
}

export default function FacturationElectroniquePage() {
  return (
    <PlaceholderPage
      title="Facturation électronique"
      description="Cette page expliquera précisément le rôle de Notice concernant Factur-X et la facturation électronique — sans présenter Notice comme une PDP."
    />
  )
}
