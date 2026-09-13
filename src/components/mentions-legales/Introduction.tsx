import { Container } from '@/components/ui/Container'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Informations légales
          </p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Mentions légales
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Retrouvez ici les informations relatives à l’éditeur et à
            l’hébergement du site Notice.
          </p>
        </div>
      </Container>
    </section>
  )
}
