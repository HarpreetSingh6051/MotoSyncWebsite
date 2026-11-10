'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-electric-500 via-violet-500 to-ember-500 origin-left z-50 shadow-[0_0_15px_rgba(16,177,251,0.7)] pointer-events-none"
    />
  )
}
