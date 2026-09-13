import type { Metadata } from 'next'
import { Introduction } from '@/components/cgv/Introduction'
import { ObjetLicence } from '@/components/cgv/ObjetLicence'
import { EssaiGratuit } from '@/components/cgv/EssaiGratuit'
import { CommandePaiement } from '@/components/cgv/CommandePaiement'
import { LivraisonActivation } from '@/components/cgv/LivraisonActivation'
import { DonneesSauvegardes } from '@/components/cgv/DonneesSauvegardes'
import { Responsabilites } from '@/components/cgv/Responsabilites'

export const metadata: Metadata = {
  title: 'CGV',
  description:
    'Conditions générales de vente de Notice, logiciel édité par CODE NOOR.',
}

export default function CgvPage() {
  return (
    <>
      <Introduction />
      <ObjetLicence />
      <EssaiGratuit />
      <CommandePaiement />
      <LivraisonActivation />
      <DonneesSauvegardes />
      <Responsabilites />
    </>
  )
}
