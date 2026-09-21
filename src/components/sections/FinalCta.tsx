import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

export function FinalCta() {
  return (
    <Section
      id="commencer"
      className="scroll-mt-24 bg-primary py-12 md:py-16 dark:bg-night-surface"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem] md:text-[2.25rem] dark:text-night-text">
            Votre métier est déjà assez compliqué.
            <span className="mt-1 block">
              Commencez à simplifier votre gestion.
            </span>
          </h2>

          <div className="mt-8">
            <PendingLink
              href={CTA.telecharger.href}
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-[15px] font-medium text-fg transition-colors duration-150 hover:bg-detail sm:w-auto dark:bg-muted dark:text-fg dark:hover:bg-night-secondary"
            >
              Essayer Notice gratuitement
            </PendingLink>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            30 jours gratuits · Sans carte bancaire · Sans engagement
          </p>
        </div>
      </Container>
    </Section>
  )
}
