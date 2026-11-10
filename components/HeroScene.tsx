'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, ChevronDown, Compass, Shield, Zap, Sparkles, Radio } from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms for highway background & road perspective lines
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const roadPerspective = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.7], ['0px', '-40px'])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-void select-none"
    >
      {/* SCENE 1 BACKGROUND: Moody Highway Night Atmosphere with Glowing Speed Streaks */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {/* Deep radial atmosphere glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-cyan-500/15 via-orange-500/5 to-transparent blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[350px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-[120px]" />

        {/* Cinematic Highway Perspective Grid */}
        <motion.div
          style={{ scale: roadPerspective }}
          className="absolute inset-x-0 bottom-0 h-[65vh] flex items-center justify-center opacity-40 [perspective:800px]"
        >
          {/* Vanishing Horizon Light Bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_20px_rgba(0,243,255,0.8)]" />

          {/* Perspective Ground Grid (Simulating asphalt highway running towards horizon) */}
          <div
            className="w-[180%] h-full origin-top [transform:rotateX(75deg)]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 243, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '80px 40px',
            }}
          />

          {/* Highway Central Neon Streak (Golden Hour / Amber Tail-light Glow) */}
          <div className="absolute inset-y-0 w-1 bg-gradient-to-t from-orange-500 via-amber-400 to-transparent blur-[2px] opacity-80" />
          <div className="absolute inset-y-0 w-12 bg-gradient-to-t from-orange-500/30 to-transparent blur-xl" />
        </motion.div>

        {/* Ambient Floating Dust / Star Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </motion.div>

      {/* FOREGROUND: Hero Headline, Value Proposition, Glowing CTAs & Live Telemetry */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Scene Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-surface-glass px-4 py-1.5 text-xs font-display font-semibold text-cyan-400 mb-8 shadow-[0_0_20px_rgba(0,243,255,0.2)] backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="tracking-widest uppercase text-[11px]">
            THE ALL-IN-ONE MOTORCYCLE PACK PLATFORM
          </span>
        </motion.div>

        {/* Main Aggressive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] text-textHeading leading-[1.02] font-display mb-6"
        >
          RIDE TOGETHER.{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 bg-clip-text text-transparent glow-cyan">
            SYNC YOUR PACK.
          </span>
        </motion.h1>

        {/* Subheadline (Core USP: Replace WhatsApp, Google Maps, Splitwise) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-textSupport font-sans max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Plan the route, track live locations, split the bills, and chat. <br className="hidden sm:inline" />
          <span className="text-white font-medium">One app for the entire journey.</span> No more switching between WhatsApp, Google Maps, and Splitwise.
        </motion.p>

        {/* CTA Stack: Glowing Sunset Orange Primary & Ghost Journey Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          {/* Primary APK Download with Sunset Orange glow */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={APK_URL}
            download="motosync.apk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 px-8 py-4 text-base font-bold text-void font-display shadow-[0_0_35px_rgba(255,107,0,0.45)] hover:shadow-[0_0_50px_rgba(255,107,0,0.7)] transition duration-300"
          >
            <Download className="w-5 h-5 text-void stroke-[2.5]" />
            <span>Download Android APK</span>
          </motion.a>

          {/* Secondary CTA: Jump to Story */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-textHeading backdrop-blur-xl hover:bg-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition duration-300 font-display shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Watch The Journey</span>
          </motion.a>
        </motion.div>

        {/* Live Rider Proof Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-textHeading font-display tracking-tight">
              0 Apps
            </span>
            <span className="text-xs text-textMuted font-mono mt-0.5">
              Juggled On The Road
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display tracking-tight glow-cyan">
              &lt; 18ms
            </span>
            <span className="text-xs text-textMuted font-mono mt-0.5">
              Mesh Intercom Ping
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-textHeading font-display tracking-tight">
              1-Tap UPI
            </span>
            <span className="text-xs text-textMuted font-mono mt-0.5">
              Dhaba Bill Split
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-display tracking-tight glow-orange">
              100%
            </span>
            <span className="text-xs text-textMuted font-mono mt-0.5">
              Offline Mesh Ready
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Downward Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-textMuted text-xs font-mono tracking-widest uppercase cursor-pointer pointer-events-auto"
        onClick={() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span>SCROLL TO RIDE</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  )
}
