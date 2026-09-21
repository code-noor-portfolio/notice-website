import { KeyRound, Monitor, SlidersHorizontal, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const IDEES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Acheter',
    text: 'Une licence définitive, sans abonnement obligatoire.',
    icon: KeyRound,
  },
  {
    title: 'Utiliser',
    text: 'Continuez à utiliser votre version même si vous ne renouvelez pas.',
    icon: Monitor,
  },
  {
    title: 'Choisir',
    text: 'Renouvelez uniquement lorsque vous souhaitez bénéficier des nouvelles versions et mises à jour.',
    icon: SlidersHorizontal,
  },
]

export function LeChoix() {
  return (
    <Section id="le-choix" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Le choix de Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Vous achetez votre logiciel. Vous gardez le choix.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice a été pensé avec un modèle simple : acheter le logiciel,
            l’utiliser aussi longtemps que vous le souhaitez, puis choisir
            vous-même si vous voulez bénéficier des nouvelles versions.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-10 sm:grid-cols-3 sm:gap-8">
          {IDEES.map((idee) => (
            <li key={idee.title} className="text-center sm:text-left">
              <idee.icon
                size={20}
                strokeWidth={1.75}
                className="mx-auto text-primary sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-fg">
                {idee.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {idee.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Votre logiciel ne devient pas inutilisable parce que vous choisissez
          de ne pas renouveler.
        </p>
      </Container>
    </Section>
  )
}
