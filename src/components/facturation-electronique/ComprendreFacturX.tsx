import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function ComprendreFacturX() {
  return (
    <Section id="factur-x" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Factur-X
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Factur-X, simplement.
          </h2>
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

        <figure className="mx-auto mt-12 max-w-xl">
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
              <p className="mt-1 text-sm text-fg-secondary">
                pour les logiciels
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-fg-tertiary" aria-hidden>
            ↓
          </p>
          <div className="mx-auto mt-0 max-w-[12rem] rounded-xl border border-border bg-surface px-5 py-4 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Factur-X
            </p>
          </div>
          <figcaption className="sr-only">
            Factur-X associe un PDF lisible et des données structurées.
          </figcaption>
        </figure>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Notice peut générer vos factures au format Factur-X directement
          depuis l’application.
        </p>
      </Container>
    </Section>
  )
}
