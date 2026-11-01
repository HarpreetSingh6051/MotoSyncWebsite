import React, { useRef, useState } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  borderColor?: string
  variant?: 'blue' | 'purple' | 'red'
}

export const SpotlightCard = ({
  children,
  className,
  spotlightColor = 'rgba(16, 177, 251, 0.16)',
  borderColor = 'rgba(16, 177, 251, 0.45)',
  variant = 'blue',
  ...props
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'purple':
        return {
          spotlight: 'rgba(139, 92, 246, 0.18)',
          borderGlow: 'rgba(168, 85, 247, 0.55)',
          corner: 'border-neon-purple',
        }
      case 'red':
        return {
          spotlight: 'rgba(239, 68, 68, 0.18)',
          borderGlow: 'rgba(239, 68, 68, 0.55)',
          corner: 'border-neon-red',
        }
      default:
        return {
          spotlight: spotlightColor,
          borderGlow: borderColor,
          corner: 'border-electric-500',
        }
    }
  }

  const vStyles = getVariantStyles()

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-[#04060a] p-6 backdrop-blur-2xl transition-all duration-300',
        'hover:border-white/25 hover:shadow-2xl hover:shadow-black/90 tech-bracket',
        className,
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${vStyles.spotlight}, transparent 45%)`,
        }}
      />

      {/* Dynamic Specular Border Glow Mask */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, ${vStyles.borderGlow}, transparent 75%)`,
          maskImage: 'linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black)',
          WebkitMaskClip: 'border-box',
          maskClip: 'border-box',
        }}
      />

      {/* NVIDIA Style Industrial Grid Dots Background */}
      <div className="absolute inset-0 bg-dots-pattern bg-[size:16px_16px] opacity-15 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
