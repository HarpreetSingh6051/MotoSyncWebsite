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
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-neutral-900 origin-left z-50 shadow-sm pointer-events-none"
    />
  )
}
