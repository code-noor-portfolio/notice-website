'use client'

import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

function Emphase({ children }: { children: ReactNode }) {
  return <span className="font-medium text-fg">{children}</span>
}

const QUESTIONS = [
  {
    id: 'faq-utilisation-hors-ligne',
    question: 'Puis-je utiliser Notice sans Internet ?',
    answer: (
      <>
        Oui. Notice fonctionne <Emphase>hors ligne</Emphase> pour votre
        utilisation quotidienne. Une connexion Internet est notamment
        nécessaire pour les mises à jour et la validation de la licence.
      </>
    ),
  },
  {
    id: 'faq-utilisation-appareils',
    question: 'Combien d’appareils sont inclus dans ma licence ?',
    answer: (
      <>
        Votre licence Notice permet d’utiliser le logiciel sur{' '}
        <Emphase>2 appareils</Emphase>.
      </>
    ),
  },
  {
    id: 'faq-utilisation-changer',
    question: 'Puis-je changer d’ordinateur ?',
    answer:
      'Oui. Vos données peuvent être sauvegardées puis transférées sur un nouvel ordinateur. La gestion de l’activation de la licence permet ensuite d’utiliser Notice sur vos appareils autorisés.',
  },
  {
    id: 'faq-utilisation-connexion',
    question: 'Une connexion Internet est-elle obligatoire pour travailler ?',
    answer: (
      <>
        Non. L’absence de connexion Internet ne bloque pas votre travail
        quotidien dans Notice. La connexion est utilisée notamment pour la
        validation de la licence et les mises à jour.
      </>
    ),
  },
] as const

export function Utilisation() {
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
    <Section id="utilisation" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Utilisation
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Travailler simplement, même sans Internet
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
