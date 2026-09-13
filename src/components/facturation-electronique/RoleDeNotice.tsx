import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const FAIT = [
  'Créer vos factures',
  'Gérer vos clients, chantiers et prestations',
  'Générer vos factures au format Factur-X',
  'Conserver vos données localement',
  'Exporter vos données',
] as const

export function RoleDeNotice() {
  return (
    <Section id="role-de-notice" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Le rôle de Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Notice s’occupe de votre facture. Pas de vous imposer sa
            transmission.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
            <h3 className="text-[17px] font-semibold text-fg">
              Notice vous permet de :
            </h3>
            <ul className="mt-6 list-none space-y-3">
              {FAIT.map((item) => (
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
          </div>

          <div className="rounded-xl border border-border bg-detail px-6 py-8 sm:px-8">
            <h3 className="text-[17px] font-semibold text-fg">
              Notice ne remplace pas une solution de transmission.
            </h3>
            <p className="mt-6 text-[15px] leading-relaxed text-fg-secondary">
              Notice n’est pas une plateforme de dématérialisation partenaire
              (PDP). Le logiciel prépare votre facture au format Factur-X, puis
              vous utilisez la solution de transmission de votre choix.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
              Vous restez libre de choisir la solution qui correspond à votre
              activité.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
