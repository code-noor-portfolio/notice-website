'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame'
import { CTA } from '@/constants/site'

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="flex min-h-[100svh] items-center bg-background pb-16 pt-28 md:pb-24 md:pt-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h1 className="max-w-xl text-[2rem] font-semibold leading-[1.15] text-fg sm:text-[2.5rem] md:text-[2.75rem]">
              Votre métier est déjà assez compliqué.
              <span className="mt-1 block text-fg-strong">
                Votre logiciel ne devrait pas l’être.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg font-medium text-fg-strong">
              Notice est l’outil de gestion pensé pour les artisans
              indépendants.
            </p>

            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Clients, chantiers, rendez-vous, devis, factures et maintenance :
              gardez le fil de votre activité, simplement.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={CTA.decouvrir.href} size="lg">
                {CTA.decouvrir.label}
              </Button>
              <Button href={CTA.essayer.href} variant="secondary" size="lg">
                {CTA.essayer.label}
              </Button>
            </div>

            <p className="mt-6 text-sm text-fg-tertiary">
              Windows & macOS · Fonctionne hors ligne · Vos données restent sur
              votre ordinateur
            </p>
          </motion.div>

          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          >
            <ScreenshotFrame
              src="/screens/notice_dahsboard_screenshot.png"
              alt="Tableau de bord Notice, le logiciel de gestion pour artisans"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
