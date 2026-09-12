import { Banknote, Wallet } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const FIL = [
  { label: 'Facture', amount: '1 250 €', note: null },
  { label: 'Paiement', amount: '750 €', note: 'payé' },
  { label: 'Solde', amount: '500 €', note: 'restant' },
] as const

export function Paiements() {
  return (
    <Section id="paiements" className="scroll-mt-24 bg-background">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Paiements
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Gardez un œil sur vos règlements.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Enregistrez les paiements reçus et visualisez rapidement les
              factures réglées, partiellement réglées ou encore à payer.
            </p>
          </div>

          <PaiementFil />

          <div className="space-y-8 lg:col-start-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Wallet
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Visualisez ce qui est réglé.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Retrouvez rapidement l’état des règlements de vos factures et
                identifiez les sommes qui restent à recevoir.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-fg">
                <Banknote
                  size={18}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                Les paiements partiels sont suivis.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                Enregistrez les paiements au fur et à mesure et gardez une
                vision du montant restant à régler.
              </p>
            </div>

            <p className="text-[15px] leading-relaxed text-fg-secondary">
              Votre tableau de bord vous permet également de garder une vue
              d’ensemble sur votre activité et vos règlements.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function PaiementFil() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:row-span-2 lg:row-start-1 lg:col-start-2 lg:mx-0 lg:ml-auto">
      <div className="rounded-xl border border-border bg-surface px-6 py-8">
        <ol className="flex flex-col items-center">
          {FIL.map((step, index) => {
            const isPayment = step.label === 'Paiement'

            return (
              <li key={step.label} className="flex flex-col items-center">
                {index > 0 ? (
                  <span className="my-2.5 text-fg-tertiary" aria-hidden>
                    ↓
                  </span>
                ) : null}
                <p
                  className={cn(
                    'text-xs font-medium uppercase tracking-[0.14em]',
                    isPayment
                      ? 'text-[#247A52] dark:text-[#38B77C]'
                      : 'text-fg-secondary'
                  )}
                >
                  {step.label}
                </p>
                <p
                  className={cn(
                    'mt-1.5 text-[15px] font-medium',
                    isPayment
                      ? 'text-[#247A52] dark:text-[#38B77C]'
                      : 'text-fg'
                  )}
                >
                  {step.amount}
                  {step.note ? (
                    <span className="ml-1.5 text-sm font-normal text-fg-secondary">
                      {step.note}
                    </span>
                  ) : null}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fg-tertiary lg:text-left">
        Exemple illustratif — Facture → Paiement → Solde.
      </figcaption>
    </figure>
  )
}
