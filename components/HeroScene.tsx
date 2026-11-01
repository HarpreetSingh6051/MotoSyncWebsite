'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Sparkles } from 'lucide-react'
import { HeroWheel3D } from '@/components/HeroWheel3D'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

export const HeroScene = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-electric-500/18 via-neon-purple/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-radial from-neon-purple/15 to-transparent blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Left Column (Headline + Buttons) */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          {/* Label: Ride Together */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-electric-500/10 px-3.5 py-1 text-xs font-mono font-bold text-electric-300 mb-6 shadow-[0_0_15px_-3px_#10b1fb]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400 animate-ping" />
            <span>RIDE TOGETHER</span>
          </motion.div>

          {/* Headline: Max 6 words */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6"
          >
            Ride Together.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-neon-violet to-neon-purple glow-blue">
              Sync Your Pack.
            </span>
          </motion.h1>

          {/* Short Line: Max 15 words */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-white/70 font-normal leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            One app for your whole riding group.
          </motion.p>

          {/* Two Glowing Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={APK_URL}
              download="motosync.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-electric-500 via-neon-purple to-neon-fuchsia px-8 py-4 text-sm font-black text-white shadow-[0_0_30px_-5px_#10b1fb] hover:opacity-95 active:scale-95 transition duration-200"
            >
              <Download className="h-4 w-4 text-white" />
              <span>Download Android APK</span>
            </a>

            <a
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl hover:border-electric-400 hover:bg-white/[0.1] hover:text-white transition duration-200"
            >
              <Sparkles className="h-4 w-4 text-electric-400" />
              <span>See How It Works</span>
            </a>
          </motion.div>
        </div>

        {/* Right / Background: Large 3D Rotating Motorcycle Wheel */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]">
          <HeroWheel3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex flex-col items-center justify-center gap-2 text-white/40 text-xs font-mono"
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
