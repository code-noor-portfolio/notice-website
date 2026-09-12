import type { Metadata } from 'next'
import { Introduction } from '@/components/tarifs/Introduction'
import { Offre } from '@/components/tarifs/Offre'
import { PremiereAnnee } from '@/components/tarifs/PremiereAnnee'
import { ApresPremiereAnnee } from '@/components/tarifs/ApresPremiereAnnee'
import { VousRestezLibre } from '@/components/tarifs/VousRestezLibre'
import { EssaiGratuit } from '@/components/tarifs/EssaiGratuit'
import { LeChoix } from '@/components/tarifs/LeChoix'
import { FaqTarifaire } from '@/components/tarifs/FaqTarifaire'
import { CtaFinal } from '@/components/tarifs/CtaFinal'

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Notice fonctionne avec une licence définitive à 549 € HT, sans abonnement obligatoire. Windows et macOS.',
  openGraph: {
    title: 'Tarifs — Notice',
    description:
      'Un logiciel que vous achetez. Pas que vous louez. Licence définitive, sans abonnement obligatoire.',
  },
}

export default function TarifsPage() {
  return (
    <>
      <Introduction />
      <Offre />
      <PremiereAnnee />
      <ApresPremiereAnnee />
      <VousRestezLibre />
      <EssaiGratuit />
      <LeChoix />
      <FaqTarifaire />
      <CtaFinal />
    </>
  )
}
