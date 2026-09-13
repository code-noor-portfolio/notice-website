import { KeyRound, Minimize2, UserRound, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/constants/site'

const PRINCIPES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Simplicité',
    text: 'Aller à l’essentiel pour vous permettre de gérer votre activité sans complexité inutile.',
    icon: Minimize2,
  },
  {
    title: 'Liberté',
    text: 'Travailler sans abonnement obligatoire, sans dépendre d’une connexion Internet et garder le contrôle de vos données.',
    icon: KeyRound,
  },
  {
    title: 'Proximité',
    text: 'Concevoir Notice en restant proche des besoins réels des artisans et faire évoluer le logiciel à partir de leurs usages.',
    icon: UserRound,
  },
]

export function Philosophie() {
  return (
    <Section id="philosophie" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Notre philosophie
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Un logiciel doit simplifier votre travail.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice est construit autour d’une conviction simple : votre
            logiciel doit s’adapter à votre façon de travailler, et non
            l’inverse.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-10 md:grid-cols-3 md:gap-8">
          {PRINCIPES.map((principe) => (
            <li key={principe.title} className="text-center md:text-left">
              <principe.icon
                size={20}
                strokeWidth={1.75}
                className="mx-auto text-primary md:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-fg">
                {principe.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {principe.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-lg text-center text-lg font-medium leading-snug text-fg">
          {SITE.philosophy}
        </p>
      </Container>
    </Section>
  )
}
