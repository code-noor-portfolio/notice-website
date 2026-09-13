import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const IDEES = [
  {
    title: 'Votre facture',
    text: 'Vous la créez et la gérez directement dans Notice.',
  },
  {
    title: 'Votre format',
    text: 'Vous pouvez générer votre facture au format Factur-X.',
  },
  {
    title: 'Votre solution',
    text: 'Vous choisissez librement la solution avec laquelle vous souhaitez assurer sa transmission.',
  },
] as const

const FLUX = [
  { label: 'Notice', outside: false },
  { label: 'Factur-X', outside: false },
  { label: 'Votre solution de transmission', outside: true },
] as const

export function VotreChoix() {
  return (
    <Section id="votre-choix" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Votre choix
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Notice prépare votre facture. Vous choisissez la suite.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice n’est pas une plateforme de dématérialisation partenaire
            (PDP). Le logiciel vous permet de générer votre facture au format
            Factur-X, puis vous restez libre de choisir la solution utilisée
            pour sa transmission.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-10 sm:grid-cols-3 sm:gap-8">
          {IDEES.map((idee) => (
            <li key={idee.title} className="text-center sm:text-left">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {idee.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {idee.text}
              </p>
            </li>
          ))}
        </ul>

        <figure className="mx-auto mt-12 max-w-sm">
          <ol className="list-none">
            {FLUX.map((step, index) => (
              <li key={step.label}>
                {index > 0 ? (
                  <p className="py-2 text-center text-fg-tertiary" aria-hidden>
                    ↓
                  </p>
                ) : null}
                <div
                  className={
                    step.outside
                      ? 'rounded-xl border border-dashed border-border bg-background px-5 py-4 text-center'
                      : 'rounded-xl border border-border bg-surface px-5 py-4 text-center'
                  }
                >
                  <p className="text-[15px] font-medium text-fg">{step.label}</p>
                </div>
              </li>
            ))}
          </ol>
          <figcaption className="mt-4 text-center text-sm text-fg-tertiary">
            La transmission se fait en dehors de Notice, avec la solution de
            votre choix.
          </figcaption>
        </figure>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Notice ne vous enferme pas dans une solution particulière.
        </p>
      </Container>
    </Section>
  )
}
