import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

/**
 * Temporary showcase page for CTAs that are not yet live
 * (download, trial, purchase, demo). No forms or commerce.
 */
export function ComingSoon() {
  return (
    <section className="bg-background pb-24 pt-28 md:pb-32 md:pt-36">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <Logo className="justify-center [&_img]:h-9 md:[&_img]:h-11" />

          <p className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Bientôt disponible
          </p>

          <h1 className="mt-3 max-w-lg text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Notice arrive bientôt.
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-secondary">
            Nous préparons actuellement le téléchargement et l’activation de
            Notice pour vous permettre de commencer votre essai gratuitement.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-fg-tertiary">
            30 jours gratuits · Sans carte bancaire · Sans engagement
          </p>

          <p className="mt-14 max-w-md text-[15px] leading-relaxed text-fg-secondary">
            En attendant, découvrez ce que Notice peut faire pour votre
            activité.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-4">
            <Button
              href="/fonctionnalites"
              size="lg"
              className="w-full sm:w-auto"
            >
              Découvrir les fonctionnalités
            </Button>
            <Link
              href="/contact"
              className="text-sm text-fg-secondary transition-colors duration-150 hover:text-fg"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
