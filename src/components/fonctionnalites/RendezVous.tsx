import { Bell, CalendarDays } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const FIL = ['Client', 'Chantier', 'Rendez-vous', 'Suivi'] as const

export function RendezVous() {
  return (
    <Section id="rendez-vous" className="scroll-mt-24 bg-background">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Rendez-vous & rappels
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              N’oubliez plus vos rendez-vous importants.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Organisez vos rendez-vous directement dans Notice et recevez des
              rappels pour garder le fil de votre journée.
            </p>
          </div>

          <RendezVousFil />

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <CalendarDays
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Votre agenda au même endroit.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Ajoutez vos rendez-vous et retrouvez facilement les
                interventions prévues.
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
                Un rappel au bon moment.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Notice vous rappelle les rendez-vous importants pour vous aider
                à ne rien oublier.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function RendezVousFil() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:row-span-2 lg:row-start-1 lg:col-start-2 lg:mx-0 lg:ml-auto">
      <div className="rounded-xl border border-border bg-surface px-6 py-8">
        <ol className="flex flex-col items-center">
          {FIL.map((step, index) => {
            const highlighted = step === 'Rendez-vous'

            return (
              <li key={step} className="flex flex-col items-center">
                <p
                  className={cn(
                    'flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em]',
                    highlighted
                      ? 'rounded-lg bg-detail px-3 py-2 text-primary'
                      : 'text-fg-secondary'
                  )}
                >
                  {highlighted ? (
                    <CalendarDays size={14} strokeWidth={1.75} aria-hidden />
                  ) : null}
                  {step}
                </p>
                {index < FIL.length - 1 ? (
                  <span className="my-2.5 text-fg-tertiary" aria-hidden>
                    ↓
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary lg:text-left">
        Le rendez-vous s’inscrit dans le même fil que votre activité.
      </figcaption>
    </figure>
  )
}
