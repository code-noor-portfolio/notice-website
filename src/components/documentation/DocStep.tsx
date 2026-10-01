interface DocStepProps {
  n: number
  children: React.ReactNode
}

export function DocStep({ n, children }: DocStepProps) {
  return (
    <div className="flex gap-3.5 sm:gap-4">
      <span
        aria-hidden
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-medium text-white"
      >
        {n}
      </span>
      <div className="min-w-0 flex-1 space-y-3 text-[15px] leading-relaxed text-fg-strong">
        {children}
      </div>
    </div>
  )
}

export function DocSteps({ children }: { children: React.ReactNode }) {
  return <div className="space-y-8">{children}</div>
}
