import type { Metadata } from 'next'
import { ComingSoon } from '@/components/bientot-disponible/ComingSoon'

export const metadata: Metadata = {
  title: 'Bientôt disponible',
  description:
    'Le téléchargement et l’activation de Notice arrivent bientôt. Découvrez en attendant ce que Notice peut faire pour votre activité.',
  openGraph: {
    title: 'Bientôt disponible — Notice',
    description:
      'Nous préparons le téléchargement et l’essai gratuit de Notice.',
  },
}

export default function BientotDisponiblePage() {
  return <ComingSoon />
}
