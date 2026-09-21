'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const SITUATIONS = [
  {
    title: 'Vous gérez vos clients et vos chantiers au quotidien.',
    text: 'Retrouvez au même endroit les informations liées à vos clients, vos chantiers, vos rendez-vous et vos documents.',
  },
  {
    title: 'Votre administratif prend moins de place.',
    text: 'Devis, factures, paiements et rappels sont regroupés dans le même outil.',
  },
  {
    title: 'Vous voulez un logiciel qui reste simple.',
    text: 'Pas besoin de mettre en place une usine à gaz pour gérer une activité d’artisan. Notice se concentre sur ce dont vous avez réellement besoin.',
  },
]

export function ForArtisans() {
  return (
    <Section id="artisans" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Pensé pour les artisans
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Un logiciel qui parle votre métier.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice est conçu pour les artisans indépendants et les petites
            structures qui veulent gérer leur activité simplement, sans passer
            leurs journées à gérer leur logiciel.
          </p>
        </div>

        <motion.ul
          className="mx-auto mt-14 grid max-w-3xl list-none gap-x-16 gap-y-12 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {SITUATIONS.map((situation, index) => (
            <motion.li
              key={situation.title}
              className={
                index === 2
                  ? 'border-t border-border pt-12 md:col-span-2 md:mx-auto md:max-w-md md:border-t-0 md:pt-0'
                  : ''
              }
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <h3 className="text-[17px] font-semibold leading-snug text-fg">
                {situation.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {situation.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mx-auto mt-16 max-w-xl text-center text-xl font-semibold leading-snug text-fg md:text-[1.4rem]">
          Le logiciel doit s’adapter à votre façon de travailler.
          <span className="mt-1 block text-primary">Pas l’inverse.</span>
        </p>
      </Container>
    </Section>
  )
}
