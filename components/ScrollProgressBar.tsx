'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-electric-500 via-neon-purple to-neon-crimson origin-left z-50 shadow-[0_0_12px_#10b1fb]"
    />
  )
}
