import { Check } from 'lucide-react'

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-secondary">
      <Check size={16} className="text-success mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}
