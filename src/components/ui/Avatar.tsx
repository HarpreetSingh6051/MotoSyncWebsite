import { cn } from '@/lib/cn'

type AvatarProps = {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  ring?: string
  className?: string
  online?: boolean
}

const sizes = {
  xs: 'h-7 w-7',
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
} as const

export function Avatar({ src, alt, size = 'md', ring, className, online }: AvatarProps) {
  return (
    <span className={cn('relative inline-flex shrink-0', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          'rounded-full border border-white/15 object-cover',
          sizes[size],
        )}
        style={ring ? { boxShadow: `0 0 0 2px ${ring}, 0 0 22px -4px ${ring}` } : undefined}
      />
      {online ? (
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0d1015] bg-settle" />
      ) : null}
    </span>
  )
}
