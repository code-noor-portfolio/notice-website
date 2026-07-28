'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQ } from '@/constants/faq'
import { cn } from '@/lib/utils'

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? FAQ.slice(0, limit) : FAQ
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white scroll-mt-20">
      <div className="container-content max-w-3xl">
        <SectionTitle
          label="FAQ"
          title="Questions fréquentes"
          description="Les réponses directes, sans jargon marketing."
        />

        <div className="divide-y divide-slate-border border border-slate-border rounded-2xl overflow-hidden">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.question} className="bg-white">
                <button
                  type="button"
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-slate-text">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'text-slate-tertiary flex-shrink-0 mt-0.5 transition-transform duration-150',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-slate-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
