import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/constants/site'

export function DonneesCollectees() {
  return (
    <Section id="donnees-collectees" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Données personnelles
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Quelles données sont concernées ?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Cette section décrit uniquement les traitements identifiés dans le
            fonctionnement actuel du site public. Les points non confirmés
            dans le projet sont indiqués comme à compléter.
          </p>

          <div className="mt-12 space-y-12">
            <Category title="Formulaire de contact">
              <p className="text-[15px] leading-relaxed text-fg-secondary">
                Le bouton « Préparer mon message » ouvre votre application de
                messagerie avec les informations que vous avez saisies. Le site
                n’envoie pas ces informations vers un serveur et ne les stocke
                pas.
              </p>
              <Fact
                label="Données concernées"
                value="Type de demande, nom, adresse email, sujet et message. Si vous signalez un problème, vous pouvez aussi indiquer la version de Notice, le système utilisé et une description du problème."
              />
              <Fact
                label="Finalité"
                value="Vous permettre de préparer un message destiné à l’adresse de contact officielle, afin que nous puissions répondre à votre demande."
              />
              <Fact
                label="Caractère obligatoire"
                value="Le type de demande, le nom, l’adresse email et le message sont nécessaires pour préparer l’email. Le sujet et les informations liées à un problème sont facultatifs."
              />
              <Fact
                label="Durée de conservation"
                value="Le site ne conserve pas ces informations. Si vous envoyez le message depuis votre messagerie, sa conservation dépend ensuite de votre boîte mail et de celle du destinataire. Cette durée n’est pas encore précisée dans le projet."
              />
              <Fact
                label="Destinataires"
                value={`Si vous envoyez le message, il est adressé à ${SITE.email}. Le site n’en garde pas de copie.`}
              />
            </Category>

            <Category title="Données techniques">
              <p className="text-[15px] leading-relaxed text-fg-secondary">
                Le projet ne confirme pas aujourd’hui la collecte d’adresse IP,
                de journaux techniques, de données de navigateur, de données de
                connexion ou de cookies par le site.
              </p>
              <Fact label="Données concernées" pending />
              <Fact label="Finalité" pending />
              <Fact label="Caractère obligatoire" pending />
              <Fact label="Durée de conservation" pending />
              <Fact label="Destinataires" pending />
            </Category>

            <Category title="Services tiers">
              <p className="text-[15px] leading-relaxed text-fg-secondary">
                Aucun service de mesure d’audience, de publicité, de gestion de
                comptes ou d’envoi de newsletter n’est identifié dans le site
                public actuel.
              </p>
              <Fact
                label="Services utilisés"
                pending
                pendingLabel="À compléter si un service tiers est mis en place"
              />
              <Fact label="Rôle" pending />
              <Fact label="Données éventuellement partagées" pending />
            </Category>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function Category({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
        {title}
      </h3>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

function Fact({
  label,
  value,
  pending,
  pendingLabel = 'À compléter',
}: {
  label: string
  value?: string
  pending?: boolean
  pendingLabel?: string
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:gap-6">
      <p className="text-[15px] font-medium text-fg">{label}</p>
      <p className="text-[15px] leading-relaxed text-fg-secondary">
        {pending ? <span className="text-fg-tertiary">{pendingLabel}</span> : value}
      </p>
    </div>
  )
}
