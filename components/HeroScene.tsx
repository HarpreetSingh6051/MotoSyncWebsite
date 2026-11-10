'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, Sparkles } from 'lucide-react'
import { HeroWheel3D } from '@/components/HeroWheel3D'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

export const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.7], [0, -40])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Volumetric Atmospheric Radiance */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-electric-500/18 via-violet-500/8 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-gradient-radial from-ember-500/12 via-violet-500/6 to-transparent blur-[110px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
      >
        {/* Left Column: Technical Branding, Word-by-Word Title, Micro-interactions */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          {/* Badge: Technical Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1 text-xs font-display font-semibold text-electric-300 mb-6 shadow-[0_0_15px_-3px_rgba(16,177,251,0.5)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400 animate-ping" />
            <span className="tracking-wider uppercase">PACK CONNECTED // LIVE MESH</span>
          </motion.div>

          {/* Headline: 64-96px desktop / 40-48px mobile, tight tracking (-0.03em), line-height 1.05 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.03em] text-text-heading leading-[1.05] mb-6 font-display"
          >
            Ride Together.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-violet-400 to-ember-400 glow-blue">
              Sync Your Pack.
            </span>
          </motion.h1>

          {/* Support Line: 16-18px desktop, relaxed line-height */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-text-support font-sans leading-[1.6] mb-8 max-w-lg mx-auto lg:mx-0"
          >
            One seamless app for your riding group. Live radar, group fuel splits, and instant comms.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={APK_URL}
              download="motosync.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-button bg-gradient-to-r from-electric-500 via-violet-500 to-ember-500 px-8 py-4 text-sm font-bold text-midnight-950 font-display shadow-[0_0_35px_-5px_rgba(16,177,251,0.6)] hover:shadow-[0_0_45px_rgba(16,177,251,0.8)] transition duration-200"
            >
              <Download className="h-4 w-4 text-midnight-950" />
              <span>Download Android APK</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-button border border-surface-border bg-midnight-900/60 px-7 py-4 text-sm font-semibold text-text-heading backdrop-blur-xl hover:border-electric-400/50 hover:bg-midnight-850/80 transition duration-200 font-display"
            >
              <Sparkles className="h-4 w-4 text-electric-400" />
              <span>See How It Works</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Photorealistic 3D Wheel with PBR lighting & Parallax */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
          <HeroWheel3D />
        </div>
      </motion.div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 flex flex-col items-center justify-center gap-2 text-text-muted text-xs font-display uppercase tracking-widest pointer-events-none select-none"
      >
        <span>SCROLL TO START THE JOURNEY</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 text-electric-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
