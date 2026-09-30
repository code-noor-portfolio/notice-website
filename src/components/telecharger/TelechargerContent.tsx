import { Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { TelechargerOsDownloads } from '@/components/telecharger/TelechargerOsDownloads'

const DEMO_POINTS = [
  'Découvrez l’interface et la navigation.',
  'Parcourez des clients et des chantiers fictifs.',
  'Explorez les devis, factures, paiements et rendez-vous.',
  'Naviguez librement dans le logiciel.',
]

const TRIAL_POINTS = [
  'Créez votre entreprise.',
  'Utilisez Notice normalement.',
  'Créez vos clients, chantiers, devis et factures.',
  'Enregistrez votre activité et découvrez votre véritable fonctionnement avec Notice.',
]

const AFTER_INSTALL = [
  {
    title: 'Avec une licence',
    text: 'Activez Notice avec votre clé de licence.',
  },
  {
    title: 'Mode démo',
    text: 'Ouvrez directement Notice avec des données fictives et explorez le logiciel.',
  },
  {
    title: 'Mode essai',
    text: 'Créez votre entreprise et utilisez Notice avec vos propres données pendant 30 jours.',
  },
]

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
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
  )
}

export function TelechargerContent() {
  return (
    <>
      <section className="bg-background pb-16 pt-28 md:pb-24 md:pt-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Télécharger Notice
            </p>
            <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
              Votre logiciel de gestion, prêt à découvrir.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Téléchargez Notice sur Windows ou macOS et choisissez ensuite
              comment vous souhaitez le découvrir.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
              Comment souhaitez-vous découvrir Notice ?
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="rounded-xl border border-border bg-background p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-semibold text-fg">
                Découvrir la démo
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
                Explorez Notice avec des données fictives, sans créer votre
                propre entreprise.
              </p>
              <CheckList items={DEMO_POINTS} />
              <p className="mt-6 text-sm leading-relaxed text-fg-tertiary">
                La démo est destinée à découvrir Notice. Elle ne permet pas de
                créer vos propres données.
              </p>
            </article>

            <article className="rounded-xl border border-border bg-background p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-semibold text-fg">
                Essayer Notice gratuitement
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
                Utilisez Notice avec vos propres données pendant 30 jours, dans
                les conditions normales d’utilisation du logiciel.
              </p>
              <CheckList items={TRIAL_POINTS} />
              <p className="mt-6 text-[15px] font-medium text-fg">
                30 jours gratuits · Sans carte bancaire · Sans engagement
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-tertiary">
                L’essai est associé au SIRET renseigné lors de la création de
                votre entreprise. Une entreprise ne peut bénéficier que d’un
                seul essai de 30 jours. Réinstaller Notice ou changer
                d’ordinateur ne permet pas de recommencer un essai.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="telechargements" className="scroll-mt-24 bg-background">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
              Téléchargez Notice
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Notice est disponible sur Windows et macOS.
            </p>
          </div>

          <TelechargerOsDownloads />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
              Une fois Notice installé
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Au premier lancement, Notice vous propose trois possibilités.
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-4xl list-none gap-8 sm:grid-cols-3">
            {AFTER_INSTALL.map((item) => (
              <li key={item.title} className="text-center sm:text-left">
                <h3 className="text-[15px] font-medium text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-10 max-w-xl text-center text-[15px] leading-relaxed text-fg-secondary">
            Vous pouvez quitter la démo ou l’essai à tout moment et revenir au
            menu de choix des modes dans Notice.
          </p>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
              Votre travail reste à vous.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Les données créées pendant votre période d’essai sont enregistrées
              localement sur votre ordinateur. Elles ne sont pas supprimées à la
              fin des 30 jours.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Après l’achat d’une licence, vous pourrez restaurer les données de
              votre période d’essai et continuer votre activité avec Notice.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-fg-tertiary">
              La restauration des sauvegardes est disponible après activation
              d’une licence.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary py-12 md:py-16 dark:bg-night-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-semibold leading-tight text-white sm:text-[2rem] dark:text-night-text">
              Découvrez Notice à votre rythme.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[#F4F6F8] dark:text-night-secondary">
              Commencez par la démo si vous souhaitez simplement découvrir le
              logiciel, ou choisissez l’essai gratuit pour travailler avec vos
              propres données.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
              <p className="text-[15px] font-medium text-white dark:text-night-text">
                Démo · Données fictives
              </p>
              <p className="text-[15px] font-medium text-white dark:text-night-text">
                Essai · 30 jours avec vos données
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
