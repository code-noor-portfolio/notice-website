'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

const QUESTIONS = [
  {
    id: 'faq-facturx-generer',
    question: 'Notice permet-il de générer des factures Factur-X ?',
    answer:
      'Oui. Notice permet de générer vos factures au format Factur-X directement depuis le logiciel.',
  },
  {
    id: 'faq-facturx-pdp',
    question: 'Notice est-il une PDP ?',
    answer:
      'Non. Notice n’est pas une plateforme de dématérialisation partenaire (PDP). Notice vous permet de préparer votre facture au format Factur-X, puis vous restez libre de choisir la solution utilisée pour sa transmission.',
  },
  {
    id: 'faq-facturx-choix',
    question: 'Puis-je choisir ma solution de transmission ?',
    answer:
      'Oui. Notice ne vous impose pas une solution de transmission particulière. Vous choisissez la solution adaptée à votre activité pour assurer la transmission de vos factures.',
  },
  {
    id: 'faq-facturx-transmission',
    question: 'Notice transmet-il directement mes factures électroniques ?',
    answer:
      'Non. Notice prépare et génère votre facture au format Factur-X. La transmission est ensuite réalisée avec la solution que vous avez choisie.',
  },
] as const

export function FacturationElectronique() {
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
    <Section id="facturation-electronique" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Facturation électronique
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Et pour la facturation électronique ?
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
