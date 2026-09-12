import { Bell, UserRound, Wrench } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const FIL = [
  'Prestation',
  'Facture payée',
  'Rappel de maintenance',
  'Client à recontacter',
] as const

export function Maintenance() {
  return (
    <Section id="maintenance" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Maintenance
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Ne laissez pas vos clients après le chantier.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Certaines prestations ou certains équipements nécessitent un
              entretien régulier. Avec Notice, programmez vos rappels de
              maintenance et gardez le contact avec vos clients dans le temps.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Une chaudière installée aujourd’hui ? Définissez l’intervalle de
              maintenance correspondant et Notice pourra vous proposer le
              rappel au moment prévu.
            </p>
          </div>

          <MaintenanceFil />

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Wrench
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Programmez vos rappels.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Définissez un intervalle de maintenance pour les prestations ou
                éléments concernés de votre catalogue.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Bell
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Notice vous rappelle quand agir.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Lorsqu’une facture est entièrement réglée, Notice peut proposer
                de programmer le rappel de maintenance correspondant.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <UserRound
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Gardez le contact avec vos clients.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Retrouvez les maintenances à venir et les rappels à effectuer
                directement dans votre activité.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-fg-tertiary">
              Les intervalles de maintenance peuvent être définis directement
              dans votre catalogue de prestations et de matériaux.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function MaintenanceFil() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:row-span-2 lg:row-start-1 lg:col-start-2 lg:mx-0 lg:ml-auto">
      <div className="rounded-xl border border-border bg-surface px-6 py-8">
        <ol className="flex flex-col items-center">
          {FIL.map((step, index) => {
            const highlighted = step === 'Rappel de maintenance'

            return (
              <li key={step} className="flex flex-col items-center">
                {index > 0 ? (
                  <span className="my-2.5 text-fg-tertiary" aria-hidden>
                    ↓
                  </span>
                ) : null}
                <p
                  className={cn(
                    'flex items-center gap-2 text-center text-xs font-medium uppercase tracking-[0.14em]',
                    highlighted
                      ? 'rounded-lg bg-detail px-3 py-2 text-primary'
                      : 'text-fg-secondary'
                  )}
                >
                  {highlighted ? (
                    <Wrench size={14} strokeWidth={1.75} aria-hidden />
                  ) : null}
                  {step}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary lg:text-left">
        La maintenance continue après le règlement.
      </figcaption>
    </figure>
  )
}
