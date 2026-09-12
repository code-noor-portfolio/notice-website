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

export function VousRestezLibre() {
  return (
    <Section id="vous-restez-libre" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Vous restez libre
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Et si vous ne renouvelez pas ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
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
