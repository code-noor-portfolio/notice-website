import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

export function CtaFinal() {
  return (
    <Section
      id="cta-final"
      className="scroll-mt-24 bg-primary py-12 md:py-16 dark:bg-night-surface"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#F4F6F8] dark:text-night-primary">
            Découvrir Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem] md:text-[2.25rem] dark:text-night-text">
            Une gestion plus simple commence ici.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            Découvrez comment Notice peut vous accompagner dans la gestion
            quotidienne de votre activité.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-white px-5 py-3 text-[15px] font-medium text-fg transition-colors duration-150 hover:bg-detail sm:w-auto dark:bg-night-text dark:text-night-surface dark:hover:bg-[#E2E7ED]"
            >
              {CTA.decouvrir.label}
            </button>
            <PendingLink
              href={CTA.essayer.href}
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-[15px] font-medium text-white transition-colors duration-150 hover:border-white hover:bg-white/10 sm:w-auto dark:border-night-border dark:text-night-text dark:hover:border-night-secondary dark:hover:bg-night-detail"
            >
              Essayer Notice gratuitement
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
