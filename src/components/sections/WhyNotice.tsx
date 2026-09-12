'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HardDrive, KeyRound, Monitor, WifiOff, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const POINTS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Vos données restent chez vous.',
    text: 'Les données de votre activité sont stockées localement sur votre ordinateur. Vous choisissez également où conserver vos sauvegardes.',
    icon: HardDrive,
  },
  {
    title: 'Travaillez hors ligne.',
    text: 'Notice fonctionne sans connexion Internet au quotidien. Internet est nécessaire uniquement pour certaines opérations comme les mises à jour et la validation de licence.',
    icon: WifiOff,
  },
  {
    title: 'Vous achetez Notice. Vous ne le louez pas.',
    text: 'La licence vous permet d’utiliser Notice sans abonnement mensuel obligatoire. Après la première année, les mises à jour sont optionnelles.',
    icon: KeyRound,
  },
  {
    title: 'Windows ou macOS. À vous de choisir.',
    text: 'Notice fonctionne sur Windows et macOS, avec une licence permettant d’utiliser le logiciel sur deux appareils.',
    icon: Monitor,
  },
]

export function WhyNotice() {
  return (
    <Section id="pourquoi" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Pourquoi Notice ?
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Un logiciel qui s’adapte à votre façon de travailler.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice a été pensé pour rester simple au quotidien, tout en vous
            laissant le contrôle de votre logiciel et de vos données.
          </p>
        </div>

        <motion.ul
          className="mx-auto mt-12 grid max-w-3xl list-none gap-x-12 gap-y-10 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {POINTS.map((point) => (
            <motion.li
              key={point.title}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <point.icon
                size={20}
                strokeWidth={1.75}
                className="text-primary"
                aria-hidden
              />
              <h3 className="mt-3 text-[17px] font-semibold leading-snug text-fg">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
                {point.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-12 text-center">
          <Link
            href="/fonctionnalites"
            className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
          >
            En savoir plus sur le fonctionnement de Notice →
          </Link>
        </p>
      </Container>
    </Section>
  )
}
