'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, FolderClosed, History, Monitor, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

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

          <div className="lg:row-span-2 lg:row-start-1 lg:col-start-2">
            <ScreenshotFrame
              src="/screens/notice_restoration_screenshot.png"
              alt="Restauration d’une sauvegarde dans Notice"
            />
            <DataFlowVisual />
          </div>

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
      className="mt-6 rounded-xl border border-border bg-surface px-4 py-5 sm:px-6"
      aria-label="Parcours des données : Notice, sauvegarde, puis restauration"
    >
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
        <FlowNode
          eyebrow="Notice"
          title="Vos données"
          detail="Dans le logiciel"
        />
        <FlowArrow className="hidden sm:flex" />
        <ArrowDown
          size={16}
          className="mx-auto text-fg-tertiary sm:hidden"
          aria-hidden
        />
        <FlowNode
          eyebrow="Votre ordinateur"
          title="Sauvegarde"
          detail="Dossier que vous choisissez"
        />
      </div>

      <div className="my-4 flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-border" />
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
          Restauration
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
        <p className="text-center text-sm text-fg-secondary sm:max-w-[12rem] sm:text-right">
          Depuis votre sauvegarde
        </p>
        <ArrowRight
          size={16}
          className="hidden shrink-0 text-primary sm:block"
          aria-hidden
        />
        <ArrowDown
          size={16}
          className="text-primary sm:hidden"
          aria-hidden
        />
        <FlowNode
          eyebrow="Notice"
          title="Données restaurées"
          detail="De retour dans votre logiciel"
          accent
        />
      </div>
    </div>
  )
}

function FlowNode({
  eyebrow,
  title,
  detail,
  accent = false,
}: {
  eyebrow: string
  title: string
  detail: string
  accent?: boolean
}) {
  return (
    <div
      className={
        accent
          ? 'w-full max-w-[14rem] rounded-lg border border-primary/30 bg-detail px-4 py-3 text-center'
          : 'w-full max-w-[14rem] rounded-lg border border-border bg-detail px-4 py-3 text-center'
      }
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
        {eyebrow}
      </p>
      <p className="mt-1.5 text-[15px] font-medium text-fg">{title}</p>
      <p className="mt-0.5 text-xs text-fg-tertiary">{detail}</p>
    </div>
  )
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <ArrowRight size={16} className="shrink-0 text-fg-tertiary" />
    </span>
  )
}
