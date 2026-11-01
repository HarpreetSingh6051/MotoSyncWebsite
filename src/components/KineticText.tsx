import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface KineticTextProps {
  text: string
  className?: string
  delay?: number
  highlightWords?: string[]
  highlightClassName?: string
}

export const KineticText = ({
  text,
  className,
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 glow-amber',
}: KineticTextProps) => {
  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn('inline-flex flex-wrap gap-x-2.5 gap-y-1', className)}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord,
        )

        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={cn(
              'inline-block',
              isHighlight && highlightClassName,
            )}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
