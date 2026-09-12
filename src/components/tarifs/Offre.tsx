import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

/** Prêt à devenir un vrai lien d’achat quand COMMERCE_ENABLED passera à true. */
const ACHETER = { label: 'Acheter Notice', href: '/acheter' } as const

export function Offre() {
  return (
    <Section id="offre" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Licence Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Une licence définitive, simplement.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice s’achète une seule fois. Vous disposez d’une licence
            définitive pour utiliser le logiciel, sans abonnement obligatoire.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-surface px-6 py-10 text-center sm:px-10">
          <p className="text-[2.75rem] font-semibold leading-none tracking-tight text-fg sm:text-[3.25rem]">
            549&nbsp;€{' '}
            <span className="text-lg font-medium text-fg-secondary">HT</span>
          </p>
          <p className="mt-3 text-[15px] text-fg-secondary">Licence définitive</p>

          <div className="mt-8">
            <Button href={ACHETER.href} size="lg" className="w-full">
              {ACHETER.label}
            </Button>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-fg-tertiary">
            Le prix comprend la première année de mises à jour et de support.
          </p>
        </div>
      </Container>
    </Section>
  )
}
