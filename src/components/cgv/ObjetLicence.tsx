import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ARTICLES = [
  {
    title: 'Objet',
    text: 'Notice est un logiciel de gestion destiné principalement aux artisans indépendants et aux petites structures. Il permet notamment de gérer les clients, chantiers, rendez-vous, devis, factures, paiements et éléments de maintenance.',
  },
  {
    title: 'Licence',
    text: 'L’achat de Notice donne accès à une licence d’utilisation du logiciel. La licence est définitive et n’est pas limitée à une durée d’un an.',
  },
  {
    title: 'Première année',
    text: 'La première année suivant l’achat comprend les fonctionnalités disponibles, les mises à jour du logiciel et le support, selon les conditions applicables à l’offre souscrite.',
  },
  {
    title: 'Utilisation sur les appareils',
    text: 'Une licence permet l’utilisation de Notice sur 2 appareils.',
  },
  {
    title: 'Renouvellement',
    text: 'À l’issue de la première année, le client peut choisir de renouveler son accès aux nouvelles versions et aux mises à jour pour 99 € HT/an. Ce renouvellement est facultatif.',
  },
  {
    title: 'Absence de renouvellement',
    text: 'En l’absence de renouvellement, le client conserve le droit d’utiliser la version de Notice dont il dispose. Le non-renouvellement ne transforme pas la licence définitive en abonnement et n’empêche pas l’utilisation de la version déjà acquise.',
  },
] as const

export function ObjetLicence() {
  return (
    <Section id="objet-licence" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            La licence Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Une licence définitive pour votre logiciel
          </h2>

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
