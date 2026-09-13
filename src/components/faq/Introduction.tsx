import { Container } from '@/components/ui/Container'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Questions fréquentes
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Vous avez une question sur Notice ?
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Retrouvez ici les réponses aux questions les plus fréquentes sur
            Notice, son fonctionnement, sa licence et vos données.
          </p>
        </div>
      </Container>
    </section>
  )
}
