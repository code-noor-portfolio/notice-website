import { FileText, Mail, Receipt } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { cn } from '@/lib/utils'

const MAIN_FLOW = [
  'Client',
  'Chantier',
  'Devis',
  'Acompte',
  'Facture',
  'Avoir',
] as const

export function DevisFacturation() {
  return (
    <Section id="devis-facturation" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Devis & facturation
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Créez vos devis et factures sans repartir de zéro.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Préparez rapidement vos documents à partir de votre catalogue,
              puis transformez simplement vos devis en factures lorsque le
              chantier avance.
            </p>
          </div>

          <div className="space-y-6 lg:row-span-2 lg:row-start-1 lg:col-start-2">
            <ScreenshotFrame
              src="/screens/notice_documents_screenshot.png"
              alt="Documents Notice : devis, acomptes, factures et avoirs"
            />
            <DocumentsFil />
          </div>

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <FileText
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Des devis professionnels, simplement.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Créez vos devis à partir des prestations et matériaux de votre
                catalogue, avec les informations de votre client et de votre
                chantier.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Votre catalogue vous permet de retrouver rapidement vos
                prestations et matériaux lors de la création de vos documents.
              </p>
            </div>

            <div>
              <h3 className="text-[17px] font-semibold text-fg">
                Un devis accepté ? Continuez simplement votre suivi.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Transformez votre devis en facture sans ressaisir les
                informations déjà saisies.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Receipt
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Des factures prêtes à être envoyées.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Créez vos factures depuis vos chantiers ou vos devis et
                retrouvez facilement vos documents dans Notice.
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Notice prend également en charge les acomptes et les avoirs.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Mail
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Envoyez vos documents depuis votre propre messagerie.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Lorsque vous choisissez d’envoyer un document, Notice peut
                ouvrir votre application de messagerie avec un message
                prérempli et le document associé.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function DocumentsFil() {
  return (
    <figure>
      <div className="rounded-xl border border-border bg-surface px-4 py-6 sm:px-6">
        <ol className="flex flex-col items-center">
          {MAIN_FLOW.map((step, index) => {
            const highlighted =
              step === 'Devis' ||
              step === 'Acompte' ||
              step === 'Facture' ||
              step === 'Avoir'

            return (
              <li key={step} className="flex w-full flex-col items-center">
                {index > 0 ? (
                  <span className="my-2 text-fg-tertiary" aria-hidden>
                    ↓
                  </span>
                ) : null}
                <p
                  className={cn(
                    'text-xs font-medium uppercase tracking-[0.14em]',
                    highlighted
                      ? 'rounded-lg bg-detail px-3 py-2 text-primary'
                      : 'text-fg-secondary'
                  )}
                >
                  {step}
                </p>
              </li>
            )
          })}
        </ol>

        <div className="mt-6 space-y-2 border-t border-border pt-5">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            Chemins directs
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <Shortcut label="Chantier → Facture" />
            <Shortcut label="Devis → Facture" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary">
        Le fil principal, avec des accès directs vers la facture.
      </figcaption>
    </figure>
  )
}

function Shortcut({ label }: { label: string }) {
  return (
    <p className="rounded-lg border border-dashed border-border bg-detail px-3 py-2 text-center text-xs font-medium text-fg-secondary">
      {label}
    </p>
  )
}
