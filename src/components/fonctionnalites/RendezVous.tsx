import { Bell, CalendarDays } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

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

          <div className="lg:row-span-2 lg:row-start-1 lg:col-start-2">
            <ScreenshotFrame
              src="/screens/notice_reminders_screenshot.png"
              alt="Rappels et rendez-vous dans Notice"
            />
          </div>

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
                Notice vous envoie une notification sur votre ordinateur pour
                vous rappeler les rendez-vous importants et vous aider à ne
                rien oublier.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
