import { useState } from 'react'
import TimerCircle from '../components/TimerCircle'
import PrimaryButton from '../components/PrimaryButton'
import PlanLink from '../components/PlanLink'
import TargetPicker from '../components/TargetPicker'

export const plans = [
  { fast: 12, label: 'BEGINNER' },
  { fast: 14, label: 'LIGHT' },
  { fast: 16, label: 'STANDARD' },
  { fast: 18, label: 'ADVANCED' },
  { fast: 20, label: 'WARRIOR' },
]

export default function Index() {
  const [targetHours, setTargetHours] = useState(20)
  const [isPickingPlan, setIsPickingPlan] = useState(false)

  const currentPlan =
    plans.find((plan) => plan.fast === targetHours) ?? plans[plans.length - 1]
  const planWindowLabel = `${currentPlan.fast}:${24 - currentPlan.fast}`

  return (
    <div className="min-h-screen text-slate-50">
      <div className="mx-auto max-w-md px-6 pt-10 pb-12">
        {/* Header */}
        <header>
          <p className="text-[11px] font-semibold tracking-[0.35em] text-slate-500">
            INTERMITTENT
          </p>
          <div className="mt-2 flex items-center justify-between">
            <h1 className="text-[26px] font-semibold">
              FAST TRACKER
            </h1>

            {/* Right-side icons placeholders */}
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full border border-slate-600/60" />
              <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]" />
            </div>
          </div>
        </header>
        <main className="flex flex-col justify-center pt-4 gap-10">
          <TimerCircle value={targetHours} unit="HOURS" />
          <PrimaryButton className="w-full max-w-md">START SESSION</PrimaryButton>
          <PlanLink
            planLabel={planWindowLabel}
            onClick={() => setIsPickingPlan(true)}
          />
        </main>

        {isPickingPlan && (
          <TargetPicker
            targetHours={targetHours}
            onSelect={setTargetHours}
            onClose={() => setIsPickingPlan(false)}
          />
        )}
      </div>
    </div>
  )
}
