import React from 'react'

interface PlanLinkProps {
  planLabel?: string
  onClick?: () => void
  className?: string
}

const PlanLink: React.FC<PlanLinkProps> = ({
  planLabel = '20:4',
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'inline-flex items-center justify-center gap-1 ' +
        'text-[14px] font-semibold uppercase tracking-[0.25em] ' +
        'text-slate-500 ' +
        'transition-colors duration-150 ' +
        'hover:text-[var(--color-primary)] ' +
        'focus-visible:outline-none focus-visible:ring-2 ' +
        'focus-visible:ring-[var(--color-primary)] ' +
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ' +
        (className ? ` ${className}` : '')
      }
    >
      {planLabel} PLAN · CHANGE →
    </button>
  )
}

export default PlanLink