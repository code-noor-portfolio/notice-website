import {
  ArrowRightFromLine,
  Check,
  FileText,
  Receipt,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ETAPES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Créez votre facture',
    text: 'Créez votre facture normalement dans Notice, à partir de votre client, de votre chantier et de vos prestations.',
    icon: Receipt,
  },
  {
    title: 'Générez votre Factur-X',
    text: 'Notice vous permet de générer votre facture au format Factur-X.',
    icon: FileText,
  },
  {
    title: 'Transmettez-la avec la solution de votre choix',
    text: 'Vous utilisez ensuite la solution de transmission adaptée à votre activité.',
    icon: ArrowRightFromLine,
  },
]

const FAIT = [
  'Créer vos factures',
  'Gérer vos clients, chantiers et prestations',
  'Générer vos factures au format Factur-X',
  'Conserver vos données localement',
  'Exporter vos données',
] as const

export function Exports() {
  return (
    <Section id="exports" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Avec Notice
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Préparez votre facture. Choisissez ensuite comment la transmettre.
          </h2>
        </div>

        <ol
          className="mt-12 hidden list-none md:flex md:items-start"
          aria-label="Ce que fait Notice"
        >
          {ETAPES.map((etape, index) => (
            <li
              key={etape.title}
              className={`flex items-start ${index < ETAPES.length - 1 ? 'min-w-0 flex-1' : ''}`}
            >
              <div className="w-[13.5rem] shrink-0 text-left">
                <p className="text-[13px] font-medium text-primary">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <etape.icon
                  size={20}
                  strokeWidth={1.75}
                  className="mt-3 text-primary"
                  aria-hidden
                />
                <p className="mt-3 text-[15px] font-medium text-fg">
                  {etape.title}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-fg-secondary">
                  {etape.text}
                </p>
              </div>
              {index < ETAPES.length - 1 ? (
                <div
                  className="mt-3 flex min-w-6 flex-1 items-center px-2"
                  aria-hidden
                >
                  <span className="h-px w-full bg-separator" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <ol
          className="mx-auto mt-10 max-w-md list-none md:hidden"
          aria-label="Ce que fait Notice"
        >
          {ETAPES.map((etape, index) => (
            <li key={etape.title} className="flex gap-4">
              <div className="flex w-8 flex-col items-center">
                <span className="text-[13px] font-medium text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < ETAPES.length - 1 ? (
                  <span className="mt-2 w-px flex-1 bg-separator" aria-hidden />
                ) : null}
              </div>
              <div className={index < ETAPES.length - 1 ? 'pb-8' : undefined}>
                <etape.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                <p className="mt-2 text-[15px] font-medium text-fg">
                  {etape.title}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                  {etape.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Notice n’impose pas une solution de transmission particulière.
        </p>

        <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Le rôle de Notice
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Notice s’occupe de votre facture. Pas de vous imposer sa
            transmission.
          </h3>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
            <h4 className="text-[17px] font-semibold text-fg">
              Notice vous permet de :
            </h4>
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
            <h4 className="text-[17px] font-semibold text-fg">
              Notice ne remplace pas une solution de transmission.
            </h4>
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

        <div className="mx-auto mt-16 max-w-2xl border-t border-border pt-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Factur-X
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Factur-X, simplement.
          </h3>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Factur-X est un format de facture électronique qui associe un
            document PDF lisible à des données structurées permettant son
            traitement informatique.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Pour vous, la facture reste facilement lisible. Pour les outils
            informatiques qui la traitent, les informations de la facture sont
            également disponibles dans un format structuré.
          </p>
        </div>

        <figure className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4">
            <div className="w-full rounded-xl border border-border bg-surface px-5 py-5 text-center sm:w-44">
              <p className="text-[15px] font-medium text-fg">PDF lisible</p>
              <p className="mt-1 text-sm text-fg-secondary">pour vous</p>
            </div>
            <p
              className="text-[15px] font-medium text-fg-tertiary sm:self-center"
              aria-hidden
            >
              +
            </p>
            <div className="w-full rounded-xl border border-border bg-surface px-5 py-5 text-center sm:w-44">
              <p className="text-[15px] font-medium text-fg">
                Données structurées
              </p>
              <p className="mt-1 text-sm text-fg-secondary">pour les logiciels</p>
            </div>
          </div>
          <p className="mt-4 text-center text-fg-tertiary" aria-hidden>
            ↓
          </p>
          <div className="mx-auto max-w-[12rem] rounded-xl border border-border bg-surface px-5 py-4 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Factur-X
            </p>
          </div>
        </figure>

        <p className="mx-auto mt-10 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Notice peut générer vos factures au format Factur-X directement
          depuis l’application.
        </p>
      </Container>
    </Section>
  )
}
