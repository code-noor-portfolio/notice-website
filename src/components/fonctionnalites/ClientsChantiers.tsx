import { FileText, HardHat, Image, ListChecks, UserRound } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ATTACHES = [
  { label: 'Documents', icon: FileText },
  { label: 'Photos', icon: Image },
  { label: 'Avancement', icon: ListChecks },
] as const

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
                  <HardHat
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
              </div>
            </div>
          </div>

          <ClientChantierRelation />
        </div>
      </Container>
    </Section>
  )
}

function ClientChantierRelation() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
      <div className="rounded-xl border border-border bg-surface px-6 py-7">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Client
          </p>
          <p className="mt-2 text-[15px] font-medium text-fg">Jean Dupont</p>
        </div>

        <p className="my-3 text-center text-fg-tertiary" aria-hidden>
          ↓
        </p>

        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Chantier
          </p>
          <p className="mt-2 text-[15px] font-medium text-fg">
            Rénovation de salle de bain
          </p>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-border pt-4">
          {ATTACHES.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-[15px] text-fg-secondary"
            >
              <item.icon
                size={16}
                strokeWidth={1.75}
                className="text-primary"
                aria-hidden
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary lg:text-left">
        Le chantier reste rattaché au client.
      </figcaption>
    </figure>
  )
}
