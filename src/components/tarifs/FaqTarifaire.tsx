'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const QUESTIONS = [
  {
    id: 'faq-abonnement',
    question: 'Est-ce que Notice fonctionne sans abonnement ?',
    answer:
      'Oui. Notice s’achète avec une licence définitive. Aucun abonnement n’est obligatoire pour continuer à utiliser le logiciel.',
  },
  {
    id: 'faq-premiere-annee',
    question: 'Que comprend la première année ?',
    answer:
      'La première année comprend toutes les fonctionnalités de Notice, les mises à jour, le support, l’utilisation sur 2 appareils, Factur-X, les sauvegardes et l’export des données.',
  },
  {
    id: 'faq-apres',
    question: 'Que se passe-t-il après la première année ?',
    answer:
      'Vous pouvez renouveler votre licence pour 99 € HT/an afin de continuer à recevoir les nouvelles versions et les mises à jour. Le renouvellement est facultatif. Si vous ne renouvelez pas, vous pouvez continuer à utiliser la version que vous possédez.',
  },
  {
    id: 'faq-essai',
    question: 'Puis-je essayer Notice avant de l’acheter ?',
    answer:
      'Oui. Notice peut être essayé gratuitement pendant 30 jours, sans carte bancaire et sans engagement. Vous pouvez utiliser la version complète pendant cette période.',
  },
  {
    id: 'faq-appareils',
    question: 'Puis-je utiliser Notice sur plusieurs appareils ?',
    answer: 'Votre licence permet d’utiliser Notice sur 2 appareils.',
  },
] as const

export function FaqTarifaire() {
  const [openId, setOpenId] = useState<string | null>(null)

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const buttons = event.currentTarget
      .closest('[data-faq]')
      ?.querySelectorAll<HTMLButtonElement>('button[data-faq-trigger]')
    if (!buttons?.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      buttons[(index + 1) % buttons.length]?.focus()
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      buttons[(index - 1 + buttons.length) % buttons.length]?.focus()
    }
    if (event.key === 'Home') {
      event.preventDefault()
      buttons[0]?.focus()
    }
    if (event.key === 'End') {
      event.preventDefault()
      buttons[buttons.length - 1]?.focus()
    }
  }

  return (
    <Section id="questions-tarifs" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Des questions sur les tarifs ?
          </h2>

          <div data-faq className="mt-10 border-t border-border">
            {QUESTIONS.map((item, index) => {
              const isOpen = openId === item.id
              const panelId = `${item.id}-reponse`

              return (
                <div key={item.id} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      data-faq-trigger
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                    >
                      <span className="text-[15px] font-medium text-fg">
                        {item.question}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-lg leading-none text-fg-secondary"
                        aria-hidden
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <motion.div
                    id={panelId}
                    role="region"
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[15px] leading-relaxed text-fg-secondary">
                      {item.answer}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
