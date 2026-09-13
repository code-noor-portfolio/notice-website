import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/constants/site'

const ARTICLES = [
  {
    title: 'Utilisation du logiciel',
    text: 'Le client est responsable de l’utilisation qu’il fait de Notice et des informations qu’il saisit dans le logiciel.',
  },
  {
    title: 'Données',
    text: 'Le client reste responsable de l’exactitude, de la conservation et de la sauvegarde de ses données métier.',
  },
  {
    title: 'Usage professionnel',
    text: 'Notice est un outil de gestion. Il appartient au client de vérifier que son utilisation du logiciel répond aux besoins et obligations propres à son activité.',
  },
  {
    title: 'Comptabilité',
    text: 'Notice ne remplace pas un logiciel de comptabilité ni les conseils d’un professionnel de la comptabilité. Les exports proposés par Notice doivent être utilisés et vérifiés par le client ou son expert-comptable selon ses besoins.',
  },
  {
    title: 'Facturation électronique',
    text: 'Notice permet notamment de générer des factures au format Factur-X. Le client reste responsable du choix de sa solution de transmission et de son utilisation dans le cadre de ses obligations professionnelles.',
  },
] as const

export function Responsabilites() {
  return (
    <Section id="responsabilites" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Responsabilités
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Chacun garde la maîtrise de son activité.
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

            <section>
              <h3 className="text-[17px] font-medium text-fg">
                Fonctionnement du logiciel
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {SITE.company} s’efforce d’assurer le bon fonctionnement de
                Notice et de corriger les anomalies identifiées. Les
                conditions et limites de responsabilité seront précisées dans
                la version définitive des présentes conditions générales.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  )
}
