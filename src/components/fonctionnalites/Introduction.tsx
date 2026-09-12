import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { CTA } from '@/constants/site'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-16 pt-28 md:pb-20 md:pt-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Les fonctionnalités de Notice
          </p>
          <h1 className="mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Tout ce qu’il faut pour gérer votre activité.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Clients, chantiers, rendez-vous, devis, factures, paiements et
            maintenance : Notice rassemble les outils essentiels à votre
            quotidien dans un seul logiciel.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Découvrez comment Notice vous accompagne à chaque étape de votre
            activité.
          </p>
          <p className="mt-6">
            <PendingLink
              href={CTA.telecharger.href}
              className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
            >
              Essayer Notice gratuitement →
            </PendingLink>
          </p>
        </div>
      </Container>
    </section>
  )
}
