'use client'

import { Button } from '@/components/ui/Button'
import { PendingLink } from '@/components/ui/PendingLink'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

const POINTS = [
  {
    title: '30 jours gratuits',
    text: 'Testez Notice pendant 30 jours.',
  },
  {
    title: 'Sans carte bancaire',
    text: 'Aucune information bancaire n’est demandée pour commencer.',
  },
  {
    title: 'Toutes les fonctionnalités',
    text: 'L’essai donne accès à la version complète de Notice.',
  },
  {
    title: 'Vos données restent chez vous',
    text: 'Vos données sont stockées localement sur votre ordinateur.',
  },
]

export function TryNotice() {
  return (
    <Section id="essayer" className="scroll-mt-24 bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Essayez Notice
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Essayez Notice gratuitement pendant 30 jours.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Testez Notice avec votre activité, sans carte bancaire et sans
            engagement.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl list-none gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <li key={point.title} className="text-center sm:text-left">
              <p className="text-[15px] font-medium text-fg">{point.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-fg-secondary">
                {point.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-[15px] leading-relaxed text-fg-secondary">
          Vous pouvez tester Notice avec vos propres données et prendre votre
          décision tranquillement. À la fin de l’essai, vos données restent
          disponibles sur votre ordinateur.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Button href={CTA.telecharger.href} size="lg" className="w-full sm:w-auto">
            Essayer Notice gratuitement
          </Button>
          <PendingLink
            href={CTA.telecharger.href}
            className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
          >
            Découvrir la démo →
          </PendingLink>
        </div>
      </Container>
    </Section>
  )
}
