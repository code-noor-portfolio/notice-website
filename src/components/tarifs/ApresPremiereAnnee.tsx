import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ETAPES = [
  {
    title: 'Vous achetez Notice',
    text: 'Vous obtenez une licence définitive.',
  },
  {
    title: 'La première année est incluse',
    text: 'Mises à jour et support compris.',
  },
  {
    title: 'Vous choisissez ensuite',
    text: 'Vous renouvelez si vous souhaitez continuer à recevoir les nouvelles versions.',
  },
] as const

export function ApresPremiereAnnee() {
  return (
    <Section id="apres-premiere-annee" className="scroll-mt-24 bg-background">
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

        <div className="mx-auto mt-10 max-w-md border-y border-border bg-surface px-6 py-10 text-center sm:px-10">
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

        <div id="vous-restez-libre" className="mx-auto mt-14 max-w-2xl scroll-mt-24 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Vous restez libre
          </p>
          <h3 className="mt-3 text-xl font-semibold text-fg md:text-[1.5rem]">
            Et si vous ne renouvelez pas ?
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Rien ne vous oblige à renouveler. Notice continue de fonctionner
            avec la version que vous possédez.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Vous pouvez continuer à utiliser votre logiciel et vos données sans
            interruption. Vous pourrez décider de renouveler plus tard,
            notamment si vous souhaitez bénéficier d’une nouvelle version ou
            d’une mise à jour réglementaire.
          </p>
          <p className="mx-auto mt-6 max-w-md text-[15px] font-medium leading-relaxed text-fg">
            Pas de renouvellement obligatoire. Pas de blocage de votre logiciel.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-3xl list-none gap-8 sm:grid-cols-3 sm:gap-6">
          {ETAPES.map((etape, index) => (
            <li key={etape.title} className="text-center sm:text-left">
              <span
                className="inline-flex h-7 w-7 items-center justify-center text-[13px] font-medium text-primary"
                aria-hidden
              >
                {index + 1}
              </span>
              <p className="mt-2 text-[15px] font-medium text-fg">{etape.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                {etape.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
