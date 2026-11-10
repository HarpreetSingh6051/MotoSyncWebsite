import { cn } from '@/lib/cn'

type ChapterTagProps = {
  index: string
  label: string
  tone?: 'cyan' | 'ember' | 'settle'
  className?: string
}

const tones = {
  cyan: {
    dot: 'bg-radar shadow-[0_0_8px_rgba(37,99,235,0.7)]',
    text: 'text-radar',
    line: 'via-radar/40',
  },
  ember: {
    dot: 'bg-ember shadow-[0_0_8px_rgba(234,88,12,0.7)]',
    text: 'text-ember',
    line: 'via-ember/40',
  },
  settle: {
    dot: 'bg-settle shadow-[0_0_8px_rgba(5,150,105,0.7)]',
    text: 'text-settle',
    line: 'via-settle/40',
  },
} as const

export function ChapterTag({ index, label, tone = 'cyan', className }: ChapterTagProps) {
  const t = tones[tone]
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', t.dot)} />
      <span
        className={cn(
          'font-mono text-[10px] font-medium uppercase tracking-[0.32em] sm:text-[11px]',
          t.text,
        )}
      >
        {index} / {label}
      </span>
      <span className={cn('h-px w-10 bg-gradient-to-r from-black/15 to-transparent sm:w-16', t.line)} />
    </div>
  )
}
