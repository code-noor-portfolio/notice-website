import { Banknote, Wallet } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

export function Paiements() {
  return (
    <Section id="paiements" className="scroll-mt-24 bg-background">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Paiements
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Gardez un œil sur vos règlements.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Enregistrez les paiements reçus et visualisez rapidement les
              factures réglées, partiellement réglées ou encore à payer.
            </p>
          </div>

          <div className="lg:row-span-2 lg:row-start-1 lg:col-start-2">
            <ScreenshotFrame
              src="/screens/notice_comptability_screenshot.png"
              alt="Suivi des paiements et de la comptabilité dans Notice"
            />
          </div>

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Wallet
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Visualisez ce qui est réglé.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Retrouvez rapidement l’état des règlements de vos factures et
                identifiez les sommes qui restent à recevoir.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Banknote
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Les paiements partiels sont suivis.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Enregistrez les paiements au fur et à mesure et gardez une
                vision du montant restant à régler.
              </p>
            </div>

            <p className="text-[15px] leading-relaxed text-fg-secondary">
              Votre tableau de bord vous permet également de garder une vue
              d’ensemble sur votre activité et vos règlements.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
