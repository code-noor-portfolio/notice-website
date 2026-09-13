import type { Metadata } from 'next'
import { Introduction } from '@/components/facturation-electronique/Introduction'
import { CeQueFaitNotice } from '@/components/facturation-electronique/CeQueFaitNotice'
import { ComprendreFacturX } from '@/components/facturation-electronique/ComprendreFacturX'
import { VotreChoix } from '@/components/facturation-electronique/VotreChoix'
import { RoleDeNotice } from '@/components/facturation-electronique/RoleDeNotice'
import { SePreparer } from '@/components/facturation-electronique/SePreparer'
import { CtaFinal } from '@/components/facturation-electronique/CtaFinal'

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
    <>
      <Introduction />
      <CeQueFaitNotice />
      <ComprendreFacturX />
      <VotreChoix />
      <RoleDeNotice />
      <SePreparer />
      <CtaFinal />
    </>
  )
}
