import type { Metadata } from 'next'
import { DocumentationView } from '@/components/documentation/DocumentationView'

export const metadata: Metadata = {
  title: {
    absolute: 'Documentation Notice — Guide d’utilisation',
  },
  description:
    'Découvrez comment installer et utiliser Notice : démo, essai gratuit, création de clients et devis, facturation, sauvegardes, exports, rappels et plus.',
}

export default function DocumentationPage() {
  return <DocumentationView />
}
