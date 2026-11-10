import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type PillVariant = 'primary' | 'ghost' | 'settle' | 'quiet'
type PillSize = 'sm' | 'md' | 'lg'

type SharedProps = {
  children: ReactNode
  variant?: PillVariant
  size?: PillSize
  className?: string
  icon?: ReactNode
  trailingIcon?: ReactNode
  fullWidth?: boolean
}

type LinkProps = SharedProps & {
  href: string
  onClick?: () => void
}

type ActionProps = SharedProps & {
  href?: undefined
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

export type PillButtonProps = LinkProps | ActionProps

const base =
  'group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold tracking-tight transition duration-300 ease-cinema active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50'

const sizes: Record<PillSize, string> = {
  sm: 'h-10 px-4 text-xs',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-[15px] sm:h-[3.75rem] sm:px-9 sm:text-base',
}

const variants: Record<PillVariant, string> = {
  primary:
    'glow-ember bg-gradient-to-b from-[#f97316] to-[#ea580c] text-white shadow-md hover:brightness-105 active:brightness-95',
  ghost:
    'glass-card bg-white/90 text-ink border border-black/10 hover:border-black/20 hover:bg-white hover:text-ink shadow-xs',
  settle:
    'glow-settle bg-gradient-to-b from-[#10b981] to-[#059669] text-white shadow-md hover:brightness-105 active:brightness-95',
  quiet:
    'border border-black/10 bg-black/[0.03] text-mist hover:border-black/20 hover:text-ink hover:bg-black/[0.06]',
}

export function PillButton(props: PillButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon,
    trailingIcon,
    fullWidth,
  } = props

  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    fullWidth && 'w-full',
    className,
  )

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.28), transparent 58%)',
        }}
      />
      {icon ? <span className="relative flex shrink-0 items-center">{icon}</span> : null}
      <span className="relative">{children}</span>
      {trailingIcon ? (
        <span className="relative flex shrink-0 items-center transition-transform duration-300 ease-cinema group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      ) : null}
    </>
  )

  if (props.href !== undefined) {
    const external = /^https?:\/\//.test(props.href)
    return (
      <a
        href={props.href}
        onClick={props.onClick}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props['aria-label']}
      className={classes}
    >
      {content}
    </button>
  )
}
