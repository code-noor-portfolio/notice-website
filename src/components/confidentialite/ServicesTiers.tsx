import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const SERVICES = [
  {
    name: 'Vercel',
    role: 'Hébergement et mise à disposition du site internet.',
  },
  {
    name: 'Firebase',
    role: 'Gestion des informations nécessaires à l’activation et à la validation des licences, notamment la clé de licence et le SIRET associé.',
    data: 'Clé de licence et SIRET associé à la licence.',
  },
  {
    name: 'Stripe',
    role: 'Traitement sécurisé des paiements lors de l’achat d’une licence.',
    data: 'Informations nécessaires au traitement du paiement, transmises à Stripe dans le cadre de la transaction.',
  },
  {
    name: 'Resend',
    role: 'Service utilisé pour l’envoi des emails nécessaires à la transmission des informations de licence.',
    data: 'Informations nécessaires pour vous envoyer votre clé de licence par email.',
  },
  {
    name: 'Mustang',
    role: 'Bibliothèque utilisée par le logiciel Notice pour générer des documents au format Factur-X. Mustang n’est pas un service en ligne : elle fonctionne dans l’application, sur votre ordinateur.',
    data: 'Aucune donnée n’est envoyée à un service Mustang. La génération du document se fait localement dans Notice.',
  },
] as const

export function ServicesTiers() {
  return (
    <Section id="services-tiers" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Services utilisés
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Les services utilisés par Notice
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Certains services techniques sont utilisés pour assurer le
            fonctionnement du site, le traitement des paiements et la gestion
            des licences.
          </p>

          <ul className="mt-12 list-none space-y-10">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <h3 className="text-[17px] font-medium text-fg">{service.name}</h3>
                <div className="mt-3 space-y-3">
                  <Row label="Rôle" value={service.role} />
                  {'data' in service ? (
                    <Row label="Données concernées" value={service.data} />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:gap-6">
      <p className="text-[15px] font-medium text-fg">{label}</p>
      <p className="text-[15px] leading-relaxed text-fg-secondary">{value}</p>
    </div>
  )
}
