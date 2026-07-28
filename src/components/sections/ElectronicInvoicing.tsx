'use client'

import { motion } from 'framer-motion'
import { FileCode2, FileJson, FileType } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const formats = [
  {
    icon: FileCode2,
    name: 'Factur-X',
    badge: 'Recommandé',
    description: 'PDF/A-3 avec XML embarqué — lisible et machine.',
  },
  {
    icon: FileJson,
    name: 'UBL 2.1',
    badge: null,
    description: 'Format XML standard pour l’échange B2B.',
  },
  {
    icon: FileType,
    name: 'CII',
    badge: null,
    description: 'Cross Industry Invoice — conforme aux obligations.',
  },
]

export function ElectronicInvoicing() {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-navy-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Facturation électronique
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Factures électroniques Factur-X. Conformes. Libres.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Notice génère vos factures électroniques au format Factur-X. Vous
            restez libre de choisir la plateforme de dépôt qui correspond à
            votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {formats.map((fmt, i) => (
            <motion.div
              key={fmt.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <fmt.icon size={22} className="text-navy-500" />
                {fmt.badge && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-success bg-success/10 px-2 py-1 rounded-full">
                    {fmt.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{fmt.name}</h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {fmt.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="/documentation"
            variant="secondary"
            className="bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  )
}
