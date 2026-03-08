import React from 'react'

export interface TargetPickerProps {
  targetHours: number
  onSelect: (hours: number) => void
  onClose: () => void
}

const plans = [
  { fast: 12, label: 'BEGINNER' },
  { fast: 14, label: 'LIGHT' },
  { fast: 16, label: 'STANDARD' },
  { fast: 18, label: 'ADVANCED' },
  { fast: 20, label: 'WARRIOR' },
]

const TargetPicker: React.FC<TargetPickerProps> = ({
  targetHours,
  onSelect,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md rounded-t-3xl border border-slate-800 bg-[var(--color-bg-soft)] px-6 pt-6 pb-10 shadow-2xl animate-slide-up"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-slate-600/40" />

        <h3 className="mb-6 text-center text-2xl font-semibold tracking-[0.25em]">
          SELECT PLAN
        </h3>

        <div className="space-y-3">
          {plans.map((plan) => {
            const isActive = targetHours === plan.fast
            const windowLabel = `${plan.fast}:${24 - plan.fast}`

            return (
              <button
                key={plan.fast}
                type="button"
                onClick={() => {
                  onSelect(plan.fast)
                  onClose()
                }}
                className={
                  'flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-sm font-semibold transition-colors ' +
                  (isActive
                    ? 'bg-[var(--color-primary)] text-[#05080c] border-[var(--color-primary)]'
                    : 'bg-[var(--color-bg-soft)] border-slate-700 hover:border-[var(--color-primary)]/60')
                }
              >
                <span className="text-[13px] uppercase tracking-[0.25em]">
                  {plan.label}
                </span>
                <span className="tabular-nums text-[13px] tracking-[0.18em]">
                  {windowLabel}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TargetPicker

