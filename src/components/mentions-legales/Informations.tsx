import { CodeNoorLogo } from '@/components/ui/CodeNoorLogo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SITE } from '@/constants/site'

export function Informations() {
  return (
    <Section id="informations" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl space-y-12">
          <LegalBlock title="Éditeur du site">
            <CodeNoorLogo className="mb-2" />
            <Field label="Raison sociale" value={SITE.company} />
            <Field label="Forme juridique" pending />
            <Field label="Adresse" pending />
            <Field label="SIRET" pending />
            <Field
              label="N° de TVA intracommunautaire"
              pending
              pendingLabel="À compléter si applicable"
            />
            <Field label="Adresse email de contact" value={SITE.email} href={`mailto:${SITE.email}`} />
          </LegalBlock>

          <LegalBlock title="Directeur de la publication">
            <Field label="Directeur de la publication" pending />
          </LegalBlock>

          <LegalBlock title="Hébergeur">
            <Field label="Nom de l’hébergeur" pending />
            <Field label="Adresse" pending />
            <Field label="Coordonnées" pending />
          </LegalBlock>

          <LegalBlock title="Propriété intellectuelle">
            <p className="text-[15px] leading-relaxed text-fg-tertiary">
              À compléter — aucun texte de propriété intellectuelle n’est
              encore prévu dans le projet.
            </p>
          </LegalBlock>

          <LegalBlock title="Contact">
            <Field label="Adresse email" value={SITE.email} href={`mailto:${SITE.email}`} />
          </LegalBlock>
        </div>
      </Container>
    </Section>
  )
}

function LegalBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  )
}

function Field({
  label,
  value,
  href,
  pending,
  pendingLabel = 'À compléter',
}: {
  label: string
  value?: string
  href?: string
  pending?: boolean
  pendingLabel?: string
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-6">
      <p className="text-[15px] font-medium text-fg">{label}</p>
      <p className="text-[15px] leading-relaxed">
        {pending ? (
          <span className="text-fg-tertiary">{pendingLabel}</span>
        ) : href ? (
          <a
            href={href}
            className="text-fg-secondary underline decoration-border underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-fg-tertiary"
          >
            {value}
          </a>
        ) : (
          <span className="text-fg-secondary">{value}</span>
        )}
      </p>
    </div>
  )
}
