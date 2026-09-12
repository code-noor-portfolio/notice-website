import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const INCLUS = [
  'Toutes les fonctionnalités de Notice',
  'Mises à jour du logiciel',
  'Support',
  'Utilisation sur 2 appareils',
  'Factur-X',
  'Sauvegardes et restauration',
  'Export des données',
] as const

export function PremiereAnnee() {
  return (
    <Section id="premiere-annee" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            La première année
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Tout est inclus pour commencer.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            La première année, votre licence comprend l’ensemble des
            fonctionnalités disponibles dans Notice, ainsi que les mises à jour
            et le support.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-2xl list-none gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {INCLUS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-fg-strong"
            >
              <Check
                size={16}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-fg-tertiary">
          Vous pouvez utiliser Notice sur Windows ou macOS.
        </p>
      </Container>
    </Section>
  )
}
