import { CreditCard, KeyRound, Mail, MessageSquare, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const FINALITES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Gestion et validation de votre licence',
    text: 'Certaines informations, notamment la clé de licence et le SIRET associé à la licence, sont utilisées afin d’activer Notice et de vérifier la validité de votre licence. Ces informations sont stockées dans Firebase.',
    icon: KeyRound,
  },
  {
    title: 'Traitement des paiements',
    text: 'Lorsque vous achetez une licence Notice, le paiement est traité par Stripe. Les informations nécessaires au traitement du paiement sont transmises à Stripe dans le cadre de la transaction.',
    icon: CreditCard,
  },
  {
    title: 'Envoi des informations de licence',
    text: 'Après l’achat ou l’activation de votre licence, certaines informations nécessaires peuvent être utilisées pour vous transmettre votre clé de licence par email. Cet envoi est effectué à l’aide du service Resend.',
    icon: Mail,
  },
  {
    title: 'Répondre à vos demandes',
    text: 'Lorsque vous nous contactez depuis le formulaire du site, les informations saisies sont utilisées afin de répondre à votre demande. Le formulaire prépare un email dans votre propre application de messagerie ; le site ne stocke pas directement le contenu du message.',
    icon: MessageSquare,
  },
]

export function Utilisation() {
  return (
    <Section id="utilisation" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Utilisation des données
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Pourquoi certaines données sont-elles utilisées ?
          </h2>

          <ul className="mt-12 list-none space-y-10">
            {FINALITES.map((finalite) => (
              <li key={finalite.title}>
                <finalite.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                <h3 className="mt-3 text-[17px] font-medium leading-snug text-fg">
                  {finalite.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                  {finalite.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
