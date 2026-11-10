'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Sparkles } from 'lucide-react'
import { HeroWheel3D } from '@/components/HeroWheel3D'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

export const HeroScene = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Radial Highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-radial from-neutral-300/20 via-neutral-200/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-gradient-radial from-neutral-400/10 via-neutral-200/5 to-transparent blur-[110px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column: Headline + CTA */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1 text-xs font-display font-semibold text-neutral-600 mb-6 shadow-studio-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wider uppercase">Pack Connected</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.03em] text-neutral-950 leading-[1.05] mb-6 font-display">
            Ride Together.{' '}
            <span className="text-neutral-400">
              Sync Your Pack.
            </span>
          </h1>

          {/* Support Line */}
          <p className="text-base sm:text-lg lg:text-xl text-slateText-body font-sans leading-[1.6] mb-8 max-w-lg mx-auto lg:mx-0">
            One seamless app for your riding group. Live radar, group fuel splits, and instant comms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={APK_URL}
              download="motosync.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-button bg-neutral-950 px-8 py-4 text-sm font-bold text-white font-display shadow-studio-md hover:bg-neutral-800 transition duration-200"
            >
              <Download className="h-4 w-4 text-neutral-300" />
              <span>Download Android APK</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-button border border-neutral-300 bg-white/80 px-7 py-4 text-sm font-semibold text-neutral-950 backdrop-blur-xl hover:border-neutral-400 hover:bg-white transition duration-200 font-display shadow-studio-sm"
            >
              <Sparkles className="h-4 w-4 text-neutral-500" />
              <span>See How It Works</span>
            </motion.a>
          </div>
        </div>

        {/* Right Column: 3D Wheel */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">
          <HeroWheel3D />
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="mt-6 flex flex-col items-center justify-center gap-2 text-neutral-400 text-xs font-display uppercase tracking-widest pointer-events-none select-none">
        <span>SCROLL TO START THE JOURNEY</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 text-neutral-500" />
        </motion.div>
      </div>
    </section>
  )
}
