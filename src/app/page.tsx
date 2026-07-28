import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { DataLocal } from '@/components/sections/DataLocal'
import { WhyNotice } from '@/components/sections/WhyNotice'
import { Features } from '@/components/sections/Features'
import { ElectronicInvoicing } from '@/components/sections/ElectronicInvoicing'
import { Comparison } from '@/components/sections/Comparison'
import { Pricing } from '@/components/sections/Pricing'
import { Story } from '@/components/sections/Story'
import { Faq } from '@/components/sections/Faq'
import { CtaFinal } from '@/components/sections/CtaFinal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <DataLocal />
      <WhyNotice />
      <Features />
      <ElectronicInvoicing />
      <Comparison />
      <Story />
      <Pricing />
      <Faq limit={6} />
      <CtaFinal />
    </>
  )
}
