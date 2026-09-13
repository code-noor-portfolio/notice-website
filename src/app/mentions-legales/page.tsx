import type { Metadata } from 'next'
import { Introduction } from '@/components/mentions-legales/Introduction'
import { Informations } from '@/components/mentions-legales/Informations'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Informations relatives à l’éditeur et à l’hébergement du site Notice.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Introduction />
      <Informations />
    </>
  )
}
