import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

const ACHETER = {
  label: 'Acheter Notice',
  href: '/bientot-disponible',
} as const

export function CtaFinal() {
  return (
    <Section
      id="cta-final"
      className="scroll-mt-24 bg-primary py-20 md:py-28 dark:bg-night-surface"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem] md:text-[2.25rem] dark:text-night-text">
            Prêt à essayer Notice ?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            Découvrez Notice pendant 30 jours, gratuitement et sans engagement.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PendingLink
              href={CTA.essayer.href}
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-[15px] font-medium text-fg transition-colors duration-150 hover:bg-detail sm:w-auto dark:bg-night-text dark:text-night-surface dark:hover:bg-[#E2E7ED]"
            >
              Essayer Notice gratuitement
            </PendingLink>
            <PendingLink
              href={ACHETER.href}
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-[15px] font-medium text-white transition-colors duration-150 hover:border-white hover:bg-white/10 sm:w-auto dark:border-night-border dark:text-night-text dark:hover:border-night-secondary dark:hover:bg-night-detail"
            >
              {ACHETER.label}
            </PendingLink>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            30 jours gratuits · Sans carte bancaire · Sans engagement
          </p>
        </div>
      </Container>
    </Section>
  )
}
