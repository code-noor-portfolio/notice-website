import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const CONDITIONS = [
  'Durée : 30 jours',
  'Sans carte bancaire',
  'Sans engagement',
  'Accès aux fonctionnalités de la version d’essai',
  'Les données restent stockées localement sur l’ordinateur de l’utilisateur',
] as const

export function EssaiGratuit() {
  return (
    <Section id="essai-gratuit" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Essai gratuit
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            30 jours pour essayer Notice
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Notice peut être utilisé gratuitement pendant une période d’essai
            de 30 jours. Cette période permet au client de découvrir et tester
            les fonctionnalités du logiciel avant de décider de l’acheter.
          </p>

          <ul className="mt-10 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-fg-secondary">
            {CONDITIONS.map((item) => (
              <li key={item}>
                <span className="text-fg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[15px] leading-relaxed text-fg-secondary">
            À l’issue de la période d’essai, le client peut choisir d’acquérir
            une licence Notice.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            La fin de la période d’essai n’entraîne pas la suppression
            automatique des données stockées localement.
          </p>
        </div>
      </Container>
    </Section>
  )
}
