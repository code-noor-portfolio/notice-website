import type { Metadata } from 'next'
import { TelechargerContent } from '@/components/telecharger/TelechargerContent'

export const metadata: Metadata = {
  title: 'Télécharger',
  description:
    'Téléchargez Notice sur Windows ou macOS. Découvrez la démo ou essayez le logiciel gratuitement pendant 30 jours.',
  openGraph: {
    title: 'Télécharger Notice',
    description:
      'Téléchargez Notice et choisissez ensuite la démo ou l’essai gratuit de 30 jours.',
  },
}

export default function TelechargerPage() {
  return <TelechargerContent />
}
