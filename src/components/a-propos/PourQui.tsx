import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const SITUATIONS = [
  {
    title: 'Votre activité',
    text: 'Vous gérez des clients, des chantiers, des rendez-vous, des devis et des factures.',
  },
  {
    title: 'Votre organisation',
    text: 'Vous cherchez un outil simple pour centraliser votre activité sans multiplier les logiciels.',
  },
  {
    title: 'Votre besoin',
    text: 'Vous voulez travailler efficacement sans consacrer votre temps à apprendre et administrer un logiciel complexe.',
  },
] as const

export function PourQui() {
  return (
    <Section id="pour-qui" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Pour qui ?
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Notice est pensé pour les artisans indépendants.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice s’adresse principalement aux artisans indépendants et aux
            petites structures qui souhaitent gérer simplement leur activité au
            quotidien.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-4 md:grid-cols-3 md:gap-5">
          {SITUATIONS.map((situation) => (
            <li
              key={situation.title}
              className="rounded-xl border border-border bg-surface px-5 py-6"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {situation.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
                {situation.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] leading-relaxed text-fg-secondary">
          Notice n’a pas vocation à remplacer un ERP ou un logiciel de gestion
          destiné aux grandes équipes. Il est conçu pour rester simple et
          adapté aux besoins d’une petite activité.
        </p>

        <p className="mx-auto mt-8 max-w-lg text-center text-lg font-medium leading-snug text-fg">
          Si vous cherchez un outil simple pour gérer votre activité au
          quotidien, Notice est fait pour vous.
        </p>
      </Container>
    </Section>
  )
}
