import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { ChapterTag } from '@/components/ui/ChapterTag'
import { cn } from '@/lib/cn'

type SceneCopyProps = {
  index: string
  label: string
  tone?: 'cyan' | 'ember' | 'settle'
  title: ReactNode
  body?: ReactNode
  bullets?: string[]
  className?: string
  bodyClassName?: string
  bulletsClassName?: string
  children?: ReactNode
}

const bulletTones = {
  cyan: 'border-radar/25 bg-radar/10 text-radar',
  ember: 'border-ember/25 bg-ember/10 text-ember',
  settle: 'border-settle/25 bg-settle/10 text-settle',
} as const

export function SceneCopy({
  index,
  label,
  tone = 'cyan',
  title,
  body,
  bullets,
  className,
  bodyClassName,
  bulletsClassName,
  children,
}: SceneCopyProps) {
  return (
    <div className={cn('max-w-xl', className)}>
      <ChapterTag index={index} label={label} tone={tone} />
      <h2 className="mt-6 text-balance font-display text-[clamp(2.25rem,5.2vw,4.5rem)] font-bold leading-[0.98] text-ink">
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            'mt-5 text-pretty text-sm leading-7 text-mist sm:text-base sm:leading-8',
            bodyClassName,
          )}
        >
          {body}
        </p>
      ) : null}
      {bullets?.length ? (
        <ul className={cn('mt-7 grid gap-3', bulletsClassName)}>
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-mist">
              <span
                className={cn(
                  'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border',
                  bulletTones[tone],
                )}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="leading-6">{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  )
}
