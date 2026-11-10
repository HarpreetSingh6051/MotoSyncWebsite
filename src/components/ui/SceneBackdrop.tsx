import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/cn'
import { useMounted, usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

type SceneBackdropProps = {
  src: string
  className?: string
  imageClassName?: string
  overlayClassName?: string
  range?: number
  priority?: boolean
  position?: string
}

export function SceneBackdrop({
  src,
  className,
  imageClassName,
  overlayClassName,
  range = 90,
  priority = false,
  position = 'center',
}: SceneBackdropProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = usePrefersReducedMotion()
  const mounted = useMounted()
  const still = mounted && reduce
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <motion.img
        src={src}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={
          still
            ? { objectPosition: position }
            : {
                y: mounted ? y : 0,
                scale: 1.14,
                objectPosition: position,
              }
        }
        className={cn(
          'absolute inset-0 h-full w-full object-cover opacity-65',
          imageClassName,
        )}
      />
      <div className={cn('absolute inset-0', overlayClassName)} />
    </div>
  )
}
