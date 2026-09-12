'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const QUESTIONS = [
  {
    id: 'faq-essai',
    question: 'Puis-je essayer Notice gratuitement ?',
    answer:
      'Oui. Vous pouvez essayer Notice gratuitement pendant 30 jours, sans carte bancaire et sans engagement. L’essai donne accès à toutes les fonctionnalités.',
  },
  {
    id: 'faq-hors-ligne',
    question: 'Notice fonctionne-t-il sans Internet ?',
    answer:
      'Oui. Notice fonctionne hors ligne au quotidien. Une connexion Internet est nécessaire pour certaines opérations, notamment les mises à jour et la validation de licence.',
  },
  {
    id: 'faq-renouvellement',
    question: 'Que se passe-t-il après la première année ?',
    answer:
      'Notice continue de fonctionner. Après la première année, le renouvellement à 99 € HT/an est optionnel et permet de continuer à recevoir les nouvelles versions et mises à jour.',
  },
] as const

export function MiniFaq() {
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
    <Section id="questions" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Une question ?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Une question avant de commencer ?
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

          <p className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
            >
              Voir toutes les questions →
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  )
}
