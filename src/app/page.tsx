import { Hero } from '@/components/sections/Hero'
import { ActivityThread } from '@/components/sections/ActivityThread'
import { WhyNotice } from '@/components/sections/WhyNotice'
import { ElectronicInvoicing } from '@/components/sections/ElectronicInvoicing'
import { YourData } from '@/components/sections/YourData'
import { ForArtisans } from '@/components/sections/ForArtisans'
import { TryNotice } from '@/components/sections/TryNotice'
import { LicenseOffer } from '@/components/sections/LicenseOffer'
import { Origin } from '@/components/sections/Origin'
import { MiniFaq } from '@/components/sections/MiniFaq'
import { FinalCta } from '@/components/sections/FinalCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ActivityThread />
      <WhyNotice />
      <ElectronicInvoicing />
      <YourData />
      <ForArtisans />
      <TryNotice />
      <LicenseOffer />
      <Origin />
      <MiniFaq />
      <FinalCta />
    </>
  )
}
