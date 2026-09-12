import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function Exports() {
  return (
    <Section id="exports" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Exports & facturation électronique
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Vos données restent exploitables.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Notice vous permet d’exporter vos factures au format Factur-X et de
            récupérer vos données comptables dans un format adapté à vos
            besoins.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-[17px] font-semibold text-fg">
              Factur-X pour vos factures.
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
              Générez vos factures au format Factur-X directement depuis Notice
              pour pouvoir les utiliser avec la solution de transmission de
              votre choix.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-fg-secondary">
              Notice prépare votre facture. Vous restez libre de choisir la
              solution utilisée pour sa transmission.
            </p>
            <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-fg-secondary">
              Facture Notice
            </p>
            <p className="my-2 text-center text-fg-tertiary" aria-hidden>
              ↓
            </p>
            <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Factur-X
            </p>
          </div>

          <div>
            <h3 className="text-[17px] font-semibold text-fg">
              Exportez vos données comptables.
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
              Notice permet d’exporter les données nécessaires au suivi
              comptable au format FEC.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-tertiary">
              Notice est un outil de gestion et ne remplace pas un logiciel de
              comptabilité certifié ou l’accompagnement de votre
              expert-comptable.
            </p>
            <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-fg-secondary">
              Données Notice
            </p>
            <p className="my-2 text-center text-fg-tertiary" aria-hidden>
              ↓
            </p>
            <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-primary">
              FEC
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-border pt-8">
          <p className="text-[15px] leading-relaxed text-fg-secondary">
            <span className="font-medium text-fg">Notice n’est pas une PDP.</span>{' '}
            Notice se concentre sur la gestion de votre activité et la
            préparation de vos factures. Pour leur transmission, vous choisissez
            la solution adaptée à votre entreprise.
          </p>
          <p className="mt-5">
            <Link
              href="/facturation-electronique"
              className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
            >
              En savoir plus sur la facturation électronique →
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  )
}
