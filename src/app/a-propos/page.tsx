import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'L’origine de Notice et l’approche de CODE NOOR : un logiciel né d’un besoin réel d’artisan.',
  openGraph: {
    title: 'À propos — Notice',
    description: 'L’histoire de Notice et de CODE NOOR.',
  },
}

export default function AProposPage() {
  return (
    <PlaceholderPage
      title="À propos de Notice"
      description="Cette page racontera l’origine de Notice et l’approche de CODE NOOR : un logiciel simple, adapté au quotidien d’un artisan, sans abonnement obligatoire et sans dépendre du cloud."
    />
  )
}
