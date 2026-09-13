'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const QUESTIONS = [
  {
    id: 'faq-donnees-stockage',
    question: 'Où sont stockées mes données ?',
    answer:
      'Les données de votre activité sont stockées localement sur votre ordinateur. Elles ne sont pas envoyées dans un cloud pour permettre le fonctionnement quotidien de Notice.',
  },
  {
    id: 'faq-donnees-emplacement',
    question: 'Puis-je choisir où sauvegarder mes données ?',
    answer:
      'Oui. Notice vous permet de choisir l’emplacement de vos sauvegardes. Vous pouvez également effectuer une sauvegarde manuellement à tout moment.',
  },
  {
    id: 'faq-donnees-automatique',
    question: 'Notice effectue-t-il des sauvegardes automatiquement ?',
    answer:
      'Oui. Notice effectue régulièrement des sauvegardes automatiques, au minimum une fois par jour, et vous pouvez également déclencher une sauvegarde manuellement.',
  },
  {
    id: 'faq-donnees-restaurer',
    question: 'Puis-je restaurer une ancienne sauvegarde ?',
    answer:
      'Oui. Vous pouvez restaurer une sauvegarde précédente afin de retrouver l’état de vos données correspondant à cette sauvegarde.',
  },
  {
    id: 'faq-donnees-transfert',
    question: 'Puis-je transférer mes données sur un nouvel ordinateur ?',
    answer:
      'Oui. Vos données et vos sauvegardes peuvent être transférées vers votre nouvel appareil.',
  },
] as const

export function DonneesSauvegardes() {
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
    <Section id="donnees-sauvegardes" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Données & sauvegardes
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Vos données restent sous votre contrôle
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
                      <ChevronDown
                        size={18}
                        strokeWidth={1.75}
                        className={cn(
                          'shrink-0 text-primary transition-transform duration-200',
                          isOpen && 'rotate-180'
                        )}
                        aria-hidden
                      />
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
