import { FolderClosed, History, RefreshCw } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

interface SauvegardesProps {
  showScreenshot?: boolean
}

export function Sauvegardes({ showScreenshot = false }: SauvegardesProps) {
  return (
    <Section id="sauvegardes" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Sauvegardes
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Gardez une copie de votre activité.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Notice effectue des sauvegardes automatiques régulières de vos
              données. Vous pouvez également lancer une sauvegarde manuelle à
              tout moment et choisir où conserver vos fichiers.
            </p>
          </div>

          {showScreenshot ? (
            <div className="lg:row-span-2 lg:row-start-1 lg:col-start-2">
              <ScreenshotFrame
                src="/screens/sauvegardes.webp"
                alt="Paramètres de sauvegarde de Notice"
              />
            </div>
          ) : (
            <SauvegardeSchema />
          )}

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <RefreshCw
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Des sauvegardes automatiques.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Notice effectue automatiquement des sauvegardes régulières, au
                minimum quotidiennes.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <FolderClosed
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Vous choisissez leur emplacement.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Choisissez le dossier dans lequel vous souhaitez conserver vos
                sauvegardes et gardez la maîtrise de leur stockage.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <History
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Restaurez une sauvegarde précédente.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                En cas de besoin, sélectionnez une sauvegarde existante pour
                retrouver l’état correspondant de vos données.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-fg-tertiary">
              Besoin de faire une copie maintenant ? Lancez une sauvegarde
              manuelle à tout moment.
            </p>

            <div className="border-t border-border pt-8">
              <h3 className="text-[17px] font-semibold text-fg">
                Vous changez d’ordinateur ?
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Vos données et vos sauvegardes peuvent être transférées vers
                votre nouvel appareil.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Notice est conçu pour vous permettre de conserver la maîtrise
                de vos données lorsque vous changez de matériel.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function SauvegardeSchema() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:row-span-2 lg:row-start-1 lg:col-start-2 lg:mx-0 lg:ml-auto">
      <div className="rounded-xl border border-border bg-surface px-6 py-8 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
          Vos données
        </p>
        <p className="my-2.5 text-fg-tertiary" aria-hidden>
          ↓
        </p>
        <p className="text-[15px] font-medium text-fg">Sauvegarde</p>
        <p className="my-2.5 text-fg-tertiary" aria-hidden>
          ↓
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[15px] font-medium text-fg">Dossier choisi</p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-fg">Copie manuelle</p>
          </div>
        </div>
        <p className="my-2.5 text-fg-tertiary" aria-hidden>
          ↓
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
          Restauration
        </p>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary lg:text-left">
        Vous choisissez où conserver vos sauvegardes.
      </figcaption>
    </figure>
  )
}
