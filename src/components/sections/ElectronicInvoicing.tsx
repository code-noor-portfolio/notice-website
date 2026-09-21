'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'

const STEPS = [
  {
    title: 'Créez votre facture',
    text: 'Préparez votre facture directement dans Notice.',
  },
  {
    title: 'Exportez en Factur-X',
    text: 'Générez votre facture dans un format adapté aux échanges électroniques.',
  },
  {
    title: 'Choisissez votre solution',
    text: 'Utilisez ensuite la solution de transmission (PDP) qui correspond à votre activité.',
  },
]

export function ElectronicInvoicing() {
  return (
    <Section id="facturation-electronique" className="scroll-mt-24 bg-surface">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ScreenshotFrame
            src="/screens/notice_facturation_screenshot.png"
            alt="Facture Notice, prête à être exportée au format Factur-X"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              Facturation électronique
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
              La facturation électronique, sans vous enfermer.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
              Notice vous permet de générer vos factures au format Factur-X et
              de les utiliser avec la solution de transmission (PDP) de votre
              choix.
            </p>

            <ol className="mt-8 space-y-5">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-3.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[13px] font-medium text-primary"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-fg">{step.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-fg-secondary">
              <span className="font-medium text-fg">
                Notice n’est pas une plateforme de dématérialisation partenaire
                (PDP).
              </span>{' '}
              Notice se concentre sur la gestion de votre activité et la
              préparation de vos factures. Vous restez libre de choisir votre
              solution de transmission (PDP).
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
