import { Introduction } from '@/components/faq/Introduction'
import { General } from '@/components/faq/General'
import { EssaiLicence } from '@/components/faq/EssaiLicence'
import { DonneesSauvegardes } from '@/components/faq/DonneesSauvegardes'
import { Utilisation } from '@/components/faq/Utilisation'
import { FacturationElectronique } from '@/components/faq/FacturationElectronique'
import { CtaFinal } from '@/components/faq/CtaFinal'

export default function FaqPage() {
  return (
    <>
      <Introduction />
      <General />
      <EssaiLicence />
      <DonneesSauvegardes />
      <Utilisation />
      <FacturationElectronique />
      <CtaFinal />
    </>
  )
}
