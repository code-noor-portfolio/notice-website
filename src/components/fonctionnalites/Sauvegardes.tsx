import { FolderClosed, History, RefreshCw } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const POINTS = [
  {
    title: 'Des sauvegardes automatiques.',
    text: 'Notice effectue automatiquement des sauvegardes régulières, au minimum quotidiennes.',
    icon: RefreshCw,
  },
  {
    title: 'Vous choisissez leur emplacement.',
    text: 'Choisissez le dossier dans lequel vous souhaitez conserver vos sauvegardes et gardez la maîtrise de leur stockage.',
    icon: FolderClosed,
  },
  {
    title: 'Restaurez une sauvegarde précédente.',
    text: 'En cas de besoin, sélectionnez une sauvegarde existante pour retrouver l’état correspondant de vos données.',
    icon: History,
  },
] as const

export function Sauvegardes() {
  return (
    <Section id="sauvegardes" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Sauvegardes
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Gardez une copie de votre activité.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice effectue des sauvegardes automatiques régulières de vos
            données. Vous pouvez également lancer une sauvegarde manuelle à
            tout moment et choisir où conserver vos fichiers.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl list-none gap-8 sm:grid-cols-3 sm:gap-6">
          {POINTS.map((point) => (
            <li key={point.title} className="text-center sm:text-left">
              <point.icon
                size={20}
                strokeWidth={1.75}
                className="mx-auto text-primary sm:mx-0"
                aria-hidden
              />
              <h3 className="mt-3 text-[17px] font-semibold text-fg">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {point.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-fg-tertiary">
          Besoin de faire une copie maintenant ? Lancez une sauvegarde
          manuelle à tout moment.
        </p>

        <div className="mx-auto mt-10 max-w-2xl border-t border-border pt-8 text-center">
          <h3 className="text-[17px] font-semibold text-fg">
            Vous changez d’ordinateur ?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Vos données et vos sauvegardes peuvent être transférées vers votre
            nouvel appareil. Notice est conçu pour vous permettre de conserver
            la maîtrise de vos données lorsque vous changez de matériel.
          </p>
        </div>
      </Container>
    </Section>
  )
}
