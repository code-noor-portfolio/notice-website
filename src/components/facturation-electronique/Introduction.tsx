import { Container } from '@/components/ui/Container'

const FLUX = [
  { label: 'Facture', note: 'préparée dans Notice' },
  { label: 'Factur-X', note: 'format prêt à transmettre' },
  { label: 'Votre solution de transmission', note: 'vous la choisissez' },
] as const

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-16 pt-28 md:pb-20 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Facturation électronique
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            La facturation électronique, sans vous compliquer la vie.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice vous permet de préparer vos factures au format Factur-X afin
            de les utiliser avec la solution de transmission de votre choix.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice s’occupe de votre facture. Vous restez libre de choisir
            comment elle sera transmise.
          </p>
          <p className="mt-6 text-sm text-fg-tertiary">
            Factur-X · Vos données restent chez vous · Vous choisissez votre
            solution
          </p>
        </div>

        <figure className="mx-auto mt-12 max-w-sm">
          <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Notice
          </p>
          <ol className="mt-4 list-none">
            {FLUX.map((step, index) => {
              const isLast = index === FLUX.length - 1

              return (
                <li key={step.label}>
                  {index > 0 ? (
                    <p className="py-2 text-center text-fg-tertiary" aria-hidden>
                      ↓
                    </p>
                  ) : null}
                  <div
                    className={
                      isLast
                        ? 'rounded-xl border border-dashed border-border bg-detail px-5 py-4 text-center'
                        : 'rounded-xl border border-border bg-surface px-5 py-4 text-center'
                    }
                  >
                    <p className="text-[15px] font-medium text-fg">{step.label}</p>
                    <p className="mt-1 text-sm text-fg-secondary">{step.note}</p>
                  </div>
                </li>
              )
            })}
          </ol>
          <figcaption className="mt-4 text-center text-sm text-fg-tertiary">
            Notice prépare la facture. La transmission se fait avec la solution
            de votre choix.
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
