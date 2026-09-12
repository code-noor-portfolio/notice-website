'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  FileText,
  HardHat,
  Receipt,
  UserRound,
  Wallet,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const STEPS: { label: string; icon: LucideIcon; highlight?: boolean }[] = [
  { label: 'Client', icon: UserRound },
  { label: 'Chantier', icon: HardHat },
  { label: 'Rendez-vous', icon: CalendarDays },
  { label: 'Devis', icon: FileText },
  { label: 'Facture', icon: Receipt },
  { label: 'Paiement', icon: Wallet },
  { label: 'Maintenance', icon: Wrench, highlight: true },
]

export function ActivityThread() {
  return (
    <Section id="fil" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Votre activité, en un seul fil
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Gardez le fil de votre activité.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            De la création du client au suivi de la maintenance, Notice relie
            les étapes essentielles de votre quotidien.
          </p>
        </div>

        <motion.ol
          className="mt-12 hidden list-none lg:flex lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          aria-label="Parcours d’activité Notice"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.label}
              className={cn(
                'flex items-start',
                index < STEPS.length - 1 && 'min-w-0 flex-1'
              )}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <StepNode step={step} />
              {index < STEPS.length - 1 ? (
                <div
                  className="mt-5 h-px min-w-4 flex-1 bg-separator"
                  aria-hidden
                />
              ) : null}
            </motion.li>
          ))}
        </motion.ol>

        <motion.ol
          className="mx-auto mt-10 max-w-xs list-none lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          aria-label="Parcours d’activité Notice"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.label}
              className="flex gap-3.5"
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
              }}
            >
              <div className="flex w-10 flex-col items-center">
                <StepMark highlight={step.highlight} icon={step.icon} />
                {index < STEPS.length - 1 ? (
                  <div className="w-px flex-1 bg-separator" aria-hidden />
                ) : null}
              </div>
              <p
                className={cn(
                  'pb-6 pt-2 text-[15px] font-medium',
                  step.highlight ? 'text-primary' : 'text-fg-strong',
                  index === STEPS.length - 1 && 'pb-0'
                )}
              >
                {step.label}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <p className="mx-auto mt-12 max-w-md text-center text-[15px] text-fg-secondary">
          Un seul endroit pour suivre votre activité, sans multiplier les
          outils.
        </p>
        <p className="mt-3 text-center">
          <Link
            href="/fonctionnalites"
            className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
          >
            Découvrir les fonctionnalités →
          </Link>
        </p>
      </Container>
    </Section>
  )
}

function StepNode({
  step,
}: {
  step: (typeof STEPS)[number]
}) {
  return (
    <div className="flex min-w-[4.5rem] flex-col items-center gap-2.5 px-1">
      <StepMark highlight={step.highlight} icon={step.icon} />
      <p
        className={cn(
          'whitespace-nowrap text-center text-[13px] font-medium leading-tight',
          step.highlight ? 'text-primary' : 'text-fg-strong'
        )}
      >
        {step.label}
      </p>
    </div>
  )
}

function StepMark({
  highlight,
  icon: Icon,
}: {
  highlight?: boolean
  icon: LucideIcon
}) {
  return (
    <span
      className={cn(
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
        highlight
          ? 'border-primary bg-primary text-white'
          : 'border-border bg-surface text-fg-secondary'
      )}
    >
      <Icon size={16} strokeWidth={1.75} />
    </span>
  )
}
