import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

const POINTS = [
  {
    title: 'Votre activité en un coup d’œil.',
    text: 'Retrouvez les principaux indicateurs de votre activité sans parcourir chaque écran.',
  },
  {
    title: 'Vos devis et vos factures.',
    text: 'Gardez une vue sur les documents en cours et leur état.',
  },
  {
    title: 'Vos règlements.',
    text: 'Identifiez rapidement les paiements reçus et les montants restant à régler.',
  },
  {
    title: 'Ce qui mérite votre attention.',
    text: 'Retrouvez les informations utiles à votre suivi quotidien depuis un même endroit.',
  },
] as const

interface TableauDeBordProps {
  showScreenshot?: boolean
}

export function TableauDeBord({ showScreenshot = false }: TableauDeBordProps) {
  return (
    <Section id="tableau-de-bord" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Tableau de bord
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Gardez une vue d’ensemble sur votre activité.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Le tableau de bord de Notice rassemble les informations importantes
            de votre activité pour vous permettre de voir rapidement ce qui est
            en cours et ce qui mérite votre attention.
          </p>
        </div>

        {showScreenshot ? (
          <div className="mx-auto mt-10 max-w-5xl">
            <ScreenshotFrame
              src="/screens/dashboard.webp"
              alt="Tableau de bord de Notice, vue d’ensemble de l’activité"
            />
          </div>
        ) : null}

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-x-12 gap-y-8 sm:grid-cols-2">
          {POINTS.map((point) => (
            <li key={point.title}>
              <h3 className="text-[17px] font-semibold text-fg">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
