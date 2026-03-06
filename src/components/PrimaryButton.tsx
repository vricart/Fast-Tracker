import React from 'react'

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-xl ' +
    'bg-[var(--color-primary)] px-8 py-4 ' +
    'text-[14px] font-semibold uppercase tracking-[0.25em] ' +
    'text-[#05080c] ' +
    'transition-colors duration-150 ' +
    'hover:brightness-105 active:brightness-95 ' +
    'focus-visible:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-[var(--color-primary)] ' +
    'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]'

  const widthClass = fullWidth ? ' w-full' : ''
  const classes = base + widthClass + (className ? ` ${className}` : '')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default PrimaryButton