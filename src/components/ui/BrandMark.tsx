import { cn } from '@/lib/cn'

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn('h-9 w-9', className)} aria-hidden>
      <defs>
        <linearGradient id="brand-gradient" x1="5" y1="5" x2="35" y2="35">
          <stop stopColor="#2563eb" />
          <stop offset="0.55" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="12"
        stroke="url(#brand-gradient)"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      <path
        d="M10 28V14l10 9 10-9v14"
        stroke="url(#brand-gradient)"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20.5" r="1.7" fill="#2563eb" />
    </svg>
  )
}
