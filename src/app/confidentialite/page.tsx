import type { Metadata } from 'next'
import { Introduction } from '@/components/confidentialite/Introduction'
import { DonneesCollectees } from '@/components/confidentialite/DonneesCollectees'
import { Utilisation } from '@/components/confidentialite/Utilisation'
import { ServicesTiers } from '@/components/confidentialite/ServicesTiers'

export const metadata: Metadata = {
  title: 'Confidentialité',
  description:
    'Quelles données peuvent être collectées lorsque vous utilisez le site Notice, pourquoi elles peuvent être utilisées et quels sont vos droits.',
}

export default function ConfidentialitePage() {
  return (
    <>
      <Introduction />
      <DonneesCollectees />
      <Utilisation />
      <ServicesTiers />
    </>
  )
}
