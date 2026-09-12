import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function ApresPremiereAnnee() {
  return (
    <Section id="apres-premiere-annee" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Après la première année
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Continuez à votre rythme.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Après la première année, vous pouvez choisir de renouveler votre
            licence pour continuer à recevoir les nouvelles versions et les
            mises à jour.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-surface px-6 py-10 text-center sm:px-10">
          <p className="text-[2.75rem] font-semibold leading-none tracking-tight text-fg sm:text-[3.25rem]">
            99&nbsp;€{' '}
            <span className="text-lg font-medium text-fg-secondary">HT / an</span>
          </p>
          <p className="mt-3 text-[15px] text-fg-secondary">
            Renouvellement facultatif
          </p>

          <p className="mt-8 text-[15px] leading-relaxed text-fg-secondary">
            Ce renouvellement vous permet de bénéficier des nouvelles versions
            de Notice, des évolutions du logiciel et des mises à jour
            nécessaires lorsque la réglementation évolue.
          </p>

          <p className="mt-5 text-[15px] font-medium text-fg">
            Vous restez libre de renouveler ou non.
          </p>
        </div>
      </Container>
    </Section>
  )
}
