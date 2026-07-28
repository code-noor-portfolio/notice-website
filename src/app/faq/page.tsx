'use client'

import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ, FAQ_CATEGORIES, type FaqCategory } from '@/constants/faq'
import { cn } from '@/lib/utils'
import { CtaFinal } from '@/components/sections/CtaFinal'

export default function FaqPage() {
  const [category, setCategory] = useState<FaqCategory | 'Tous'>('Tous')
  const [open, setOpen] = useState<string | null>(FAQ[0]?.question ?? null)

  const items = useMemo(
    () =>
      category === 'Tous'
        ? FAQ
        : FAQ.filter((f) => f.category === category),
    [category]
  )

  return (
    <>
      <section className="section-padding pt-28 bg-white">
        <div className="container-content max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-text mb-3">
            Questions fréquentes
          </h1>
          <p className="text-slate-secondary mb-10">
            Organisées par thème. Une question manquante ?{' '}
            <a href="/contact" className="text-navy-500 hover:underline">
              Contactez-nous
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {(['Tous', ...FAQ_CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-150',
                  category === cat
                    ? 'bg-navy-700 text-white border-navy-700'
                    : 'bg-white text-slate-secondary border-slate-border hover:border-navy-500'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="divide-y divide-slate-border border border-slate-border rounded-2xl overflow-hidden">
            {items.map((item) => {
              const isOpen = open === item.question
              return (
                <div key={item.question} className="bg-white">
                  <button
                    type="button"
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : item.question)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                        {item.category}
                      </span>
                      <span className="block text-sm font-medium text-slate-text mt-0.5">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'text-slate-tertiary flex-shrink-0 mt-1 transition-transform duration-150',
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
      <CtaFinal />
    </>
  )
}
