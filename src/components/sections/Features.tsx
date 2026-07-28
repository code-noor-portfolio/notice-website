'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AppScreenshot } from '@/components/ui/AppScreenshot'
import { Check } from 'lucide-react'
import { FEATURES } from '@/constants/features'

export function Features() {
  return (
    <section id="fonctionnalites" className="section-padding bg-slate-50 scroll-mt-20">
      <div className="container-content">
        <SectionTitle
          label="Fonctionnalités"
          title="Tout ce dont vous avez besoin. Rien de plus."
        />

        <div className="space-y-28">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <AppScreenshot
                  src={feature.screenshot}
                  alt={`Notice — ${feature.category}`}
                  fallbackIcon={feature.icon}
                />
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <span className="inline-block text-xs font-semibold text-navy-500 uppercase tracking-widest bg-navy-50 px-3 py-1 rounded-full mb-4">
                  {feature.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-text mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-slate-secondary"
                    >
                      <Check
                        size={15}
                        className="text-success mt-0.5 flex-shrink-0"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
