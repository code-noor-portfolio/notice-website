import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { CTA } from '@/constants/site'

const GARANTIES = [
  '30 jours gratuits',
  'Toutes les fonctionnalités',
  'Sans carte bancaire',
  'Sans engagement',
] as const

export function EssaiGratuit() {
  return (
    <Section id="essai-gratuit" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Essai gratuit
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Essayez Notice pendant 30 jours.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Prenez le temps de découvrir Notice avec votre propre activité.
            Pendant 30 jours, vous pouvez utiliser la version complète du
            logiciel gratuitement, sans carte bancaire et sans engagement.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-xl list-none gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {GARANTIES.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-fg-strong"
            >
              <Check
                size={16}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-lg text-center text-[15px] leading-relaxed text-fg-secondary">
          Vos données restent sur votre ordinateur, y compris à la fin de la
          période d’essai. Vous pourrez choisir d’acheter Notice plus tard si
          le logiciel vous convient.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <Button href={CTA.essayer.href} size="lg" className="w-full sm:w-auto">
            Essayer Notice gratuitement
          </Button>
          <p className="mt-4 text-sm leading-relaxed text-fg-tertiary">
            Windows & macOS · Vos données restent chez vous
          </p>
        </div>
      </Container>
    </Section>
  )
}
