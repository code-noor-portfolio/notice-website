import { Container } from '@/components/ui/Container'
import { SITE } from '@/constants/site'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Conditions générales
          </p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Conditions générales de vente
          </h1>
          <p className="mt-4 text-sm text-fg-tertiary">
            Dernière mise à jour : [DATE À COMPLÉTER]
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Les présentes conditions générales définissent les conditions dans
            lesquelles {SITE.name}, logiciel édité par {SITE.company}, est
            proposé à la vente et utilisé par ses clients.
          </p>
        </div>
      </Container>
    </section>
  )
}
