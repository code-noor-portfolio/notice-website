import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ETAPES = ['Achat', 'Email de licence', 'Activation de Notice'] as const

const ARTICLES = [
  {
    title: 'Livraison numérique',
    text: 'Notice est fourni sous forme numérique. Après validation de la commande et du paiement, les informations nécessaires à l’activation de la licence sont transmises au client par email.',
  },
  {
    title: 'Clé de licence',
    text: 'Une clé de licence est générée pour permettre l’activation de Notice. La clé est associée aux informations nécessaires à la validation de la licence, notamment au SIRET renseigné lors de la commande lorsque celui-ci est requis.',
  },
  {
    title: 'Activation',
    text: 'L’activation permet à Notice de vérifier la validité de la licence et les appareils autorisés à l’utiliser.',
  },
  {
    title: 'Problème d’activation',
    text: 'En cas de difficulté lors de l’activation, le client peut contacter le support Notice afin d’obtenir une assistance.',
  },
] as const

export function LivraisonActivation() {
  return (
    <Section id="livraison-activation" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Licence
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Recevez et activez votre licence
          </h2>

          <ol className="mx-auto mt-10 max-w-xs list-none">
            {ETAPES.map((etape, index) => (
              <li key={etape}>
                {index > 0 ? (
                  <p className="py-2 text-center text-fg-tertiary" aria-hidden>
                    ↓
                  </p>
                ) : null}
                <p className="rounded-xl border border-border bg-surface px-5 py-3 text-center text-[15px] font-medium text-fg">
                  {etape}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-10">
            {ARTICLES.map((article) => (
              <section key={article.title}>
                <h3 className="text-[17px] font-medium text-fg">{article.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                  {article.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
