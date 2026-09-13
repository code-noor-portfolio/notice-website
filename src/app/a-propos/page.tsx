import type { Metadata } from 'next'
import { Introduction } from '@/components/a-propos/Introduction'
import { Origine } from '@/components/a-propos/Origine'
import { Philosophie } from '@/components/a-propos/Philosophie'
import { PourQui } from '@/components/a-propos/PourQui'
import { CtaFinal } from '@/components/a-propos/CtaFinal'

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
    <>
      <Introduction />
      <Origine />
      <Philosophie />
      <PourQui />
      <CtaFinal />
    </>
  )
}
