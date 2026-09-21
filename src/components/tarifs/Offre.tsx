import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

const INCLUS = [
  'Toutes les fonctionnalités de Notice',
  'Mises à jour du logiciel',
  'Support',
  'Utilisation sur 2 appareils',
  'Factur-X',
  'Sauvegardes et restauration',
  'Export des données',
] as const

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

        <div className="mx-auto mt-10 max-w-md border-y border-border bg-surface px-6 py-10 text-center sm:px-10">
          <p className="text-[2.75rem] font-semibold leading-none tracking-tight text-fg sm:text-[3.25rem]">
            549&nbsp;€{' '}
            <span className="text-lg font-medium text-fg-secondary">HT</span>
          </p>
          <p className="mt-3 text-[15px] text-fg-secondary">Licence définitive</p>

          <div className="mt-8">
            <Button href={CTA.acheter.href} size="lg" className="w-full">
              {CTA.acheter.label}
            </Button>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-fg-tertiary">
            Le prix comprend la première année de mises à jour et de support.
          </p>
        </div>

        <div id="premiere-annee" className="mx-auto mt-14 max-w-2xl scroll-mt-24 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            La première année
          </p>
          <h3 className="mt-3 text-xl font-semibold text-fg md:text-[1.5rem]">
            Tout est inclus pour commencer.
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            La première année, votre licence comprend l’ensemble des
            fonctionnalités disponibles dans Notice, ainsi que les mises à jour
            et le support.
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-2xl list-none gap-x-10 gap-y-3.5 sm:grid-cols-2">
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

        <p className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-fg-tertiary">
          Vous pouvez utiliser Notice sur Windows ou macOS.
        </p>
      </Container>
    </Section>
  )
}
