import { ArrowRightFromLine, FileText, Receipt, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ETAPES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Créez votre facture',
    text: 'Créez votre facture normalement dans Notice, à partir de votre client, de votre chantier et de vos prestations.',
    icon: Receipt,
  },
  {
    title: 'Générez votre Factur-X',
    text: 'Notice vous permet de générer votre facture au format Factur-X.',
    icon: FileText,
  },
  {
    title: 'Transmettez-la avec la solution de votre choix',
    text: 'Vous utilisez ensuite la solution de transmission adaptée à votre activité.',
    icon: ArrowRightFromLine,
  },
]

export function CeQueFaitNotice() {
  return (
    <Section id="avec-notice" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Avec Notice
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Préparez votre facture. Choisissez ensuite comment la transmettre.
          </h2>
        </div>

        <ol
          className="mt-12 hidden list-none md:flex md:items-start"
          aria-label="Ce que fait Notice"
        >
          {ETAPES.map((etape, index) => (
            <li
              key={etape.title}
              className={`flex items-start ${index < ETAPES.length - 1 ? 'min-w-0 flex-1' : ''}`}
            >
              <Etape etape={etape} index={index} />
              {index < ETAPES.length - 1 ? (
                <div
                  className="mt-3 flex min-w-6 flex-1 items-center px-2"
                  aria-hidden
                >
                  <span className="h-px w-full bg-separator" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <ol
          className="mx-auto mt-10 max-w-md list-none md:hidden"
          aria-label="Ce que fait Notice"
        >
          {ETAPES.map((etape, index) => (
            <li key={etape.title} className="flex gap-4">
              <div className="flex w-8 flex-col items-center">
                <span className="text-[13px] font-medium text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < ETAPES.length - 1 ? (
                  <span className="mt-2 w-px flex-1 bg-separator" aria-hidden />
                ) : null}
              </div>
              <div className={index < ETAPES.length - 1 ? 'pb-8' : undefined}>
                <etape.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                <p className="mt-2 text-[15px] font-medium text-fg">
                  {etape.title}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                  {etape.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Notice n’impose pas une solution de transmission particulière.
        </p>
      </Container>
    </Section>
  )
}

function Etape({
  etape,
  index,
}: {
  etape: (typeof ETAPES)[number]
  index: number
}) {
  return (
    <div className="w-[13.5rem] shrink-0 text-left">
      <p className="text-[13px] font-medium text-primary">
        {String(index + 1).padStart(2, '0')}
      </p>
      <etape.icon
        size={20}
        strokeWidth={1.75}
        className="mt-3 text-primary"
        aria-hidden
      />
      <p className="mt-3 text-[15px] font-medium text-fg">{etape.title}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-fg-secondary">
        {etape.text}
      </p>
    </div>
  )
}
