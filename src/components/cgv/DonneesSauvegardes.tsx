import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function DonneesSauvegardes() {
  return (
    <Section id="donnees-sauvegardes" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Vos données
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Vos données restent sur votre ordinateur.
          </h2>
          <p className="mt-6 text-[17px] font-medium leading-snug text-fg">
            Vos données métier restent sous votre contrôle.
          </p>

          <div className="mt-12 space-y-10">
            <Article title="Stockage local">
              <p>
                Notice est conçu pour fonctionner avec un stockage local des
                données de l’activité. Les données métier saisies dans Notice
                sont conservées sur l’ordinateur de l’utilisateur et ne sont
                pas stockées dans le cloud pour le fonctionnement courant du
                logiciel.
              </p>
            </Article>

            <Article title="Sauvegardes">
              <p>
                Notice propose des fonctionnalités de sauvegarde et de
                restauration permettant à l’utilisateur de conserver des
                copies de ses données. L’utilisateur choisit l’emplacement de
                ses sauvegardes.
              </p>
            </Article>

            <Article title="Responsabilité des sauvegardes">
              <p>
                L’utilisateur est responsable de la conservation de ses
                sauvegardes et doit s’assurer qu’elles sont disponibles et
                protégées contre leur perte, leur suppression ou leur
                détérioration.
              </p>
              <p className="mt-3">
                Il est recommandé de conserver régulièrement plusieurs copies
                de sauvegarde sur des supports ou emplacements distincts.
              </p>
            </Article>

            <Article title="Perte de données">
              <p>
                L’utilisateur reste responsable de ses données et de leur
                sauvegarde. Les fonctionnalités de sauvegarde de Notice
                constituent un outil d’aide à la conservation des données et
                ne remplacent pas une stratégie de sauvegarde adaptée.
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
