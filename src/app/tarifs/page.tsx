import type { Metadata } from 'next'
import { Pricing } from '@/components/sections/Pricing'
import { CtaFinal } from '@/components/sections/CtaFinal'

export const metadata: Metadata = {
  title: 'Tarifs — Notice',
  description: 'Un prix. Une fois. Licence à vie sans abonnement.',
}

export default function TarifsPage() {
  return (
    <>
      <div className="pt-8">
        <Pricing />
      </div>
      <CtaFinal />
    </>
  )
}
