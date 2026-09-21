import { BrickWall, FileText, Image, ListChecks, UserRound } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

export function ClientsChantiers() {
  return (
    <Section id="clients-chantiers" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Clients & chantiers
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Retrouvez tout ce qui concerne votre client et son chantier.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Créez vos clients, retrouvez leurs informations et gérez leurs
              chantiers depuis un même endroit.
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Les informations liées au chantier restent regroupées :
              documents, photos, avancement et éléments nécessaires à son
              suivi.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                  <UserRound
                    size={18}
                    strokeWidth={1.75}
                    className="text-primary"
                    aria-hidden
                  />
                  Vos clients, simplement.
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                  Retrouvez facilement vos clients et leurs informations
                  utiles. Les coordonnées et les informations nécessaires à
                  votre activité sont accessibles depuis leur fiche.
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                  <BrickWall
                    size={18}
                    strokeWidth={1.75}
                    className="text-primary"
                    aria-hidden
                  />
                  Un espace pour chaque chantier.
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                  Associez un chantier à votre client et retrouvez au même
                  endroit les informations et documents qui permettent de
                  suivre son avancement.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-fg-secondary">
                  <li className="flex items-center gap-1.5">
                    <FileText size={14} className="text-primary" aria-hidden />
                    Documents
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Image size={14} className="text-primary" aria-hidden />
                    Photos
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ListChecks size={14} className="text-primary" aria-hidden />
                    Avancement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ScreenshotFrame
            src="/screens/notice_client_page_screenshot.png"
            alt="Fiche client Notice avec chantiers et documents associés"
          />
        </div>
      </Container>
    </Section>
  )
}
