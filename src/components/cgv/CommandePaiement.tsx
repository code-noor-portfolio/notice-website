import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function CommandePaiement() {
  return (
    <Section id="commande-paiement" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Commande & paiement
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Acheter une licence Notice
          </h2>

          <div className="mt-12 space-y-10">
            <Article title="Passer commande">
              <p>
                Le client peut acheter une licence Notice au prix indiqué sur
                le site au moment de la commande. Les informations relatives à
                l’offre et à son prix sont présentées avant la validation de
                la commande.
              </p>
            </Article>

            <Article title="Prix">
              <p className="text-fg">Licence Notice : 549 € HT</p>
              <p className="mt-2">
                Le prix applicable est celui affiché au moment de la commande.
              </p>
            </Article>

            <Article title="Paiement">
              <p>
                Le paiement est effectué en ligne via Stripe. Les informations
                de paiement nécessaires à la transaction sont traitées par
                Stripe selon ses propres conditions et sa politique de
                confidentialité.
              </p>
            </Article>

            <Article title="Validation">
              <p>
                La validation de la commande intervient après confirmation du
                paiement.
              </p>
            </Article>

            <Article title="Confirmation">
              <p>
                Après validation de la commande, les informations nécessaires
                à l’utilisation de la licence sont transmises au client par
                email.
              </p>
            </Article>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Article({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="text-[17px] font-medium text-fg">{title}</h3>
      <div className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
        {children}
      </div>
    </section>
  )
}
