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
    id: 'faq-essai-gratuit',
    question: 'Puis-je essayer Notice gratuitement ?',
    answer: (
      <>
        Oui. Notice peut être essayé gratuitement pendant{' '}
        <Emphase>30 jours</Emphase>, sans carte bancaire et sans engagement.
        L’essai donne accès à la version complète du logiciel.
      </>
    ),
  },
  {
    id: 'faq-essai-plusieurs',
    question: 'Puis-je bénéficier de plusieurs essais gratuits ?',
    answer:
      'Non. Chaque entreprise peut bénéficier d’un seul essai gratuit de 30 jours. L’essai est associé au SIRET renseigné lors de la création de votre entreprise. Changer d’ordinateur ou réinstaller Notice ne permet pas de recommencer un essai.',
  },
  {
    id: 'faq-essai-restauration',
    question: 'Puis-je restaurer une sauvegarde pendant mon essai ?',
    answer:
      'Non. L’essai gratuit démarre avec une nouvelle base de données afin que vous puissiez découvrir Notice avec vos propres données. Vous pouvez sauvegarder votre travail pendant l’essai, mais la restauration de sauvegardes est disponible après activation d’une licence.',
  },
  {
    id: 'faq-essai-fin',
    question: 'Que se passe-t-il à la fin des 30 jours ?',
    answer:
      'À la fin de la période d’essai, vos données restent sur votre ordinateur. Vous pouvez ensuite choisir d’acheter Notice si le logiciel vous convient.',
  },
  {
    id: 'faq-licence-prix',
    question: 'Combien coûte Notice ?',
    answer: (
      <>
        La licence définitive de Notice coûte <Emphase>549&nbsp;€ HT</Emphase>.
        La première année comprend les fonctionnalités, les mises à jour et le
        support.
      </>
    ),
  },
  {
    id: 'faq-renouvellement',
    question: 'Le renouvellement est-il obligatoire ?',
    answer: (
      <>
        Non. Après la première année, le renouvellement est{' '}
        <Emphase>facultatif</Emphase>. Il coûte <Emphase>99&nbsp;€ HT/an</Emphase>{' '}
        et permet de continuer à bénéficier des nouvelles versions et des mises
        à jour.
      </>
    ),
  },
  {
    id: 'faq-sans-renouvellement',
    question: 'Que se passe-t-il si je ne renouvelle pas ?',
    answer:
      'Notice continue de fonctionner avec la version que vous possédez. Vous pourrez continuer à utiliser votre logiciel et vos données. Vous pourrez également choisir de renouveler plus tard si vous souhaitez bénéficier des nouvelles versions.',
  },
] as const

export function EssaiLicence() {
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
    <Section id="essai-licence" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Essai & licence
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Essayer Notice avant de choisir
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
