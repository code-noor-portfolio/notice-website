'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FolderClosed, History, Monitor, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const POINTS: { title: string; text: string; extra?: string; icon: LucideIcon }[] = [
  {
    title: 'Vos données restent sur votre ordinateur.',
    text: 'Les données de votre activité sont stockées localement. Elles ne sont pas envoyées automatiquement vers un cloud.',
    icon: Monitor,
  },
  {
    title: 'Vous choisissez vos sauvegardes.',
    text: 'Notice effectue des sauvegardes automatiques régulières, au minimum quotidiennes, et vous pouvez lancer une sauvegarde manuelle à tout moment.',
    extra: 'Vous choisissez où les conserver.',
    icon: FolderClosed,
  },
  {
    title: 'Vous pouvez revenir en arrière.',
    text: 'En cas de besoin, restaurez une sauvegarde précédente et retrouvez vos données.',
    icon: History,
  },
]

export function YourData() {
  return (
    <Section id="donnees" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Vos données
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
              Vos données. Votre choix.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Avec Notice, les données de votre activité restent sur votre
              ordinateur. Vous choisissez également où conserver vos
              sauvegardes et pouvez restaurer vos données quand vous en avez
              besoin.
            </p>
          </div>

          <DataFlowVisual />

          <motion.div
            className="lg:col-start-1"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <ul className="space-y-6">
              {POINTS.map((point) => (
                <li key={point.title} className="flex gap-3.5">
                  <point.icon
                    size={20}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="text-[15px] font-medium text-fg">{point.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                      {point.text}
                    </p>
                    {point.extra ? (
                      <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                        {point.extra}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-fg-secondary">
              Vous changez d’ordinateur ? Vos données et vos sauvegardes
              peuvent être transférées vers votre nouvel appareil.
            </p>

            <p className="mt-5">
              <Link
                href="/fonctionnalites"
                className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
              >
                En savoir plus sur vos données et vos sauvegardes →
              </Link>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

function DataFlowVisual() {
  return (
    <div
      className="flex flex-col items-center justify-center lg:row-span-2 lg:row-start-1 lg:col-start-2"
      aria-hidden
    >
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface px-6 py-7 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
          Notice
        </p>
        <p className="mt-4 text-[15px] font-medium text-fg">Vos données</p>
        <span className="mt-3 block text-fg-tertiary">↓</span>
        <p className="mt-3 text-[15px] text-fg-secondary">Votre ordinateur</p>
      </div>

      <span className="my-2 text-fg-tertiary">↓</span>

      <div className="w-full max-w-sm rounded-xl border border-border bg-surface px-6 py-6 text-center">
        <p className="text-[15px] font-medium text-fg">Sauvegarde</p>
        <p className="mt-1 text-sm text-fg-secondary">dossier choisi</p>
      </div>
    </div>
  )
}
