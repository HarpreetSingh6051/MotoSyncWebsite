import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type GlassGlow = 'none' | 'cyan' | 'ember' | 'settle'

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  glow?: GlassGlow
  hairline?: boolean
}

const glowClass: Record<GlassGlow, string> = {
  none: '',
  cyan: 'glow-cyan',
  ember: 'glow-ember',
  settle: 'glow-settle',
}

export function GlassCard({
  children,
  className,
  glow = 'none',
  hairline = true,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card glass-deep panel-glow relative overflow-hidden rounded-[1.75rem]',
        glowClass[glow],
        className,
      )}
      {...rest}
    >
      {hairline ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      ) : null}
      {children}
    </div>
  )
}
