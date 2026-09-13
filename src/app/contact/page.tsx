import type { Metadata } from 'next'
import { Introduction } from '@/components/contact/Introduction'
import { Formulaire } from '@/components/contact/Formulaire'
import { BesoinAide } from '@/components/contact/BesoinAide'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Une question sur Notice ? Écrivez-nous depuis votre application de messagerie.',
}

export default function ContactPage() {
  return (
    <>
      <Introduction />
      <Formulaire />
      <BesoinAide />
    </>
  )
}
