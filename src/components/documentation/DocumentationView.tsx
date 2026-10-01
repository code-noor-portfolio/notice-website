'use client'

import { useEffect, useState } from 'react'
import { DOC_NAV, type DocNavId } from '@/constants/documentation'
import { DocNav } from '@/components/documentation/DocNav'
import { DocumentationSections } from '@/components/documentation/DocumentationSections'

export function DocumentationView() {
  const [activeId, setActiveId] = useState<DocNavId>(DOC_NAV[0].id)
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    const sections = DOC_NAV.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )
        const next = visible[0]?.target.id as DocNavId | undefined
        if (next) setActiveId(next)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Documentation Notice
          </p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Bien démarrer avec Notice
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Retrouvez ici les principales étapes pour installer Notice,
            découvrir le logiciel, commencer votre essai gratuit et utiliser
            les fonctionnalités essentielles de votre activité.
          </p>
        </header>

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <DocNav
            activeId={activeId}
            open={tocOpen}
            onToggle={() => setTocOpen((open) => !open)}
            onSelect={(id) => {
              setActiveId(id)
              setTocOpen(false)
            }}
          />
          <div className="mt-8 min-w-0 lg:mt-0">
            <DocumentationSections />
          </div>
        </div>
      </div>
    </div>
  )
}
