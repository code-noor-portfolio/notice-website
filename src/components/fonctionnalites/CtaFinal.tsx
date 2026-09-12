import Link from 'next/link'
import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

export function CtaFinal() {
  return (
    <Section
      id="essayer"
      className="scroll-mt-24 bg-primary py-16 md:py-20 dark:bg-night-surface"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#F4F6F8] dark:text-night-primary">
            Prêt à essayer ?
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem] dark:text-night-text">
            Tout ce dont vous avez besoin.
            <span className="mt-1 block">Rien de plus.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            Découvrez Notice avec votre activité pendant 30 jours, gratuitement
            et sans engagement.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <PendingLink
              href={CTA.telecharger.href}
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-[15px] font-medium text-[#202B38] transition-colors duration-150 hover:bg-detail sm:w-auto dark:bg-muted dark:text-fg dark:hover:bg-night-secondary"
            >
              Essayer Notice gratuitement
            </PendingLink>
            <Link
              href="/tarifs"
              className="text-sm text-[#F4F6F8] transition-colors duration-150 hover:text-white dark:text-night-secondary dark:hover:text-night-text"
            >
              Voir les tarifs →
            </Link>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
            30 jours gratuits · Sans carte bancaire · Sans engagement · Windows
            & macOS
          </p>
        </div>
      </Container>
    </Section>
  )
}
