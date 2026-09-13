import { Container } from '@/components/ui/Container'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Confidentialité
          </p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Votre confidentialité compte.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Cette page explique quelles données peuvent être collectées lorsque
            vous utilisez le site Notice, pourquoi elles peuvent être utilisées
            et quels sont vos droits.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Nous cherchons à limiter la collecte au strict nécessaire et à vous
            donner une information claire sur l’utilisation de vos données.
          </p>
        </div>
      </Container>
    </section>
  )
}
