'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

const INCLUDED = [
  'Toutes les fonctionnalités',
  '2 appareils',
  'Mises à jour pendant 1 an',
  'Support pendant 1 an',
  'Factur-X',
]

export function LicenseOffer() {
  return (
    <Section id="tarif" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Un logiciel que vous achetez
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Votre logiciel. Pour de bon.
          </h2>
          <p className="mt-4 text-lg font-medium text-fg">
            Vous achetez Notice. Vous ne le louez pas.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Une licence perpétuelle à 549&nbsp;€ HT, avec la première année de
            mises à jour et de support incluse.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-lg border-y border-border bg-surface px-6 py-10 text-center sm:px-10">
          <p className="text-[2.25rem] font-semibold leading-none tracking-tight text-fg">
            549&nbsp;€{' '}
            <span className="text-lg font-medium text-fg-secondary">HT</span>
          </p>
          <p className="mt-2 text-[15px] text-fg-secondary">Licence perpétuelle</p>

          <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-2.5 text-left">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-fg-strong"
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

          <div className="mx-auto mt-8 max-w-sm border-t border-border pt-6">
            <p className="text-[15px] leading-relaxed text-fg-secondary">
              Après la première année : 99&nbsp;€ HT/an, uniquement si vous
              souhaitez continuer à recevoir les nouvelles versions et mises à
              jour.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
              Sans renouvellement, votre logiciel continue de fonctionner.
            </p>
            <p className="mt-4 text-[15px] font-medium text-fg">
              Pas de renouvellement obligatoire pour continuer à utiliser
              Notice.
            </p>
          </div>

          <div className="mt-8">
            <Button href={CTA.acheter.href} size="lg" className="w-full sm:w-auto">
              {CTA.acheter.label}
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/tarifs"
            className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
          >
            Voir les tarifs en détail →
          </Link>
        </p>
      </Container>
    </Section>
  )
}
