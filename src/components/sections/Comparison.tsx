import { Check, X } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { COMPARISON } from '@/constants/comparison'

export function Comparison() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionTitle
          label="Comparatif"
          title="Pourquoi choisir un logiciel local ?"
        />

        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-border">
          <div className="grid grid-cols-3 bg-navy-900">
            <div className="p-4 text-sm font-medium text-white/60" />
            <div className="p-4 text-center">
              <span className="text-white font-semibold">Notice</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-white/50 text-sm">Logiciels cloud</span>
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-t border-slate-border ${
                i % 2 === 1 ? 'bg-slate-50' : 'bg-white'
              }`}
            >
              <div className="p-4 text-sm text-slate-secondary">{row.feature}</div>
              <div className="p-4 flex justify-center">
                {row.notice ? (
                  <Check size={18} className="text-success" />
                ) : (
                  <X size={18} className="text-slate-tertiary" />
                )}
              </div>
              <div className="p-4 flex justify-center">
                {row.cloud === true ? (
                  <Check size={18} className="text-success" />
                ) : row.cloud === false ? (
                  <X size={18} className="text-red-400" />
                ) : (
                  <span className="text-xs text-slate-tertiary">{row.cloud}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
