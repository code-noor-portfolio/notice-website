'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const QUESTIONS = [
  {
    id: 'faq-general-destinataires',
    question: 'À qui s’adresse Notice ?',
    answer:
      'Notice est principalement pensé pour les artisans indépendants et les petites structures qui souhaitent gérer simplement leurs clients, chantiers, rendez-vous, devis, factures, paiements et maintenance.',
  },
  {
    id: 'faq-general-ordinateur',
    question: 'Notice fonctionne-t-il sur quel ordinateur ?',
    answer: 'Notice est disponible sur Windows et macOS.',
  },
  {
    id: 'faq-general-compte',
    question: 'Ai-je besoin d’un compte pour utiliser Notice ?',
    answer:
      'Notice est conçu pour fonctionner sans dépendre d’un compte en ligne. Vos données restent sur votre ordinateur.',
  },
  {
    id: 'faq-general-internet',
    question: 'Notice a-t-il besoin d’Internet pour fonctionner ?',
    answer:
      'Non. Notice peut être utilisé hors ligne. Une connexion Internet est nécessaire notamment pour la validation de la licence et les mises à jour.',
  },
  {
    id: 'faq-general-comptabilite',
    question: 'Notice remplace-t-il un logiciel de comptabilité ?',
    answer:
      'Non. Notice est un outil de gestion et de suivi de votre activité. Il ne remplace pas un logiciel de comptabilité certifié ni l’accompagnement de votre expert-comptable.',
  },
] as const

export function General() {
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
    <Section id="general" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Les questions essentielles
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
