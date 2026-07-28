'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Send } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

const steps = [
  {
    icon: Download,
    title: 'Installez Notice',
    description:
      'Téléchargez, installez, lancez. Aucun compte à créer. Vous êtes opérationnel en quelques minutes.',
  },
  {
    icon: FileText,
    title: 'Créez vos devis et factures',
    description:
      'Catalogue, clients, chantiers : tout est local. Un devis professionnel en moins de 2 minutes.',
  },
  {
    icon: Send,
    title: 'Exportez vos factures électroniques',
    description:
      'Quand vous en avez besoin, générez un Factur-X et déposez-le sur la plateforme de votre choix.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionTitle
          label="Comment ça marche"
          title="Trois étapes. Pas plus."
          description="L'artisan comprend immédiatement. Pas de jargon, pas de parcours cloud."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-700 flex items-center justify-center mx-auto mb-5">
                <step.icon size={24} />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-7 h-7 rounded-full bg-navy-700 text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-text mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px bg-slate-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
