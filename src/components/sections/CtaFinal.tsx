'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function CtaFinal() {
  return (
    <section className="section-padding bg-navy-700">
      <div className="container-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à simplifier votre facturation ?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Licence à vie. Sans compte. Vos données restent sur votre ordinateur.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href="/bientot-disponible"
              size="lg"
              className="bg-white text-navy-700 hover:bg-slate-50"
            >
              Acheter Notice
            </Button>
            <Button
              href="/bientot-disponible"
              variant="secondary"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              Télécharger
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
