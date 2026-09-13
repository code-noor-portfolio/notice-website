import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const PRECISIONS = [
  'ce que vous faisiez lorsque le problème est apparu ;',
  'ce que vous attendiez ;',
  'ce qui s’est réellement produit ;',
  'votre version de Notice ;',
  'votre système (Windows ou macOS).',
] as const

export function BesoinAide() {
  return (
    <Section id="besoin-aide" className="scroll-mt-24 bg-background py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Support
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem]">
            Un problème avec Notice ?
          </h2>
          <p className="mx-auto mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Si vous rencontrez un problème, décrivez simplement ce qui s’est
            passé dans le formulaire. Plus votre description est précise, plus
            il sera facile de vous aider.
          </p>

          <p className="mx-auto mt-8 text-[15px] leading-relaxed text-fg">
            Pensez, si possible, à préciser :
          </p>
          <ul className="mx-auto mt-3 max-w-sm list-disc space-y-1.5 pl-5 text-left text-[15px] leading-relaxed text-fg-secondary">
            {PRECISIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mx-auto mt-8 text-[15px] leading-relaxed text-fg-secondary">
            Vous n’avez pas besoin de connaître les détails techniques.
            Décrivez simplement le problème avec vos mots.
          </p>
        </div>
      </Container>
    </Section>
  )
}
