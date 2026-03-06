import React from 'react'

interface TimerCircleProps {
  value?: number
  unit?: string
  /** 0–1 progress for the green ring */
  progress?: number
  size?: number
  strokeWidth?: number
}

const TimerCircle: React.FC<TimerCircleProps> = ({
  value = 20,
  unit = 'HOURS',
  progress = 0,
  size = 300,
  strokeWidth = 10,
}) => {
  const center = size / 2
  const radius = (size - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - Math.min(Math.max(progress, 0), 1))

  const tickCount = 60

  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const angle = (i / tickCount) * 2 * Math.PI - Math.PI / 2
    const isMajor = i % 5 === 0

    const outerR = radius + strokeWidth
    const innerR = radius + (isMajor ? -10 : -5)

    const x1 = center + outerR * Math.cos(angle)
    const y1 = center + outerR * Math.sin(angle)
    const x2 = center + innerR * Math.cos(angle)
    const y2 = center + innerR * Math.sin(angle)

    return { x1, y1, x2, y2, isMajor, key: i }
  })

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        {/* Tick marks */}
        {ticks.map((t) => (
          <line
            key={t.key}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="#3D424B"
            strokeWidth={t.isMajor ? 2.5 : 1.5}
            opacity={t.isMajor ? 0.75 : 0.35}
            strokeLinecap="round"
          />
        ))}

        {/* Track ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#24272D"
          strokeWidth={strokeWidth}
        />

        {/* Progress ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[56px] font-semibold leading-none text-[#F5F7FA]">
          {value}
        </span>
        <span className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-[#7E8088]">
          {unit}
        </span>
      </div>
    </div>
  )
}

export default TimerCircle