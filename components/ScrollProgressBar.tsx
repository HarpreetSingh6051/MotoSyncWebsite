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
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 via-orange-500 to-cyan-400 origin-left z-50 shadow-[0_0_12px_rgba(0,243,255,0.7)] pointer-events-none"
    />
  )
}
