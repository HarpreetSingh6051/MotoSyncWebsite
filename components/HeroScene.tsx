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

  // Subtle Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-void select-none"
    >
      {/* SCENE 1 BACKGROUND: Moody Highway Night Atmosphere with Glowing Speed Streaks */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        {/* Deep radial atmosphere glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-gradient-radial from-cyan-500/15 via-orange-500/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[250px] sm:h-[350px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-[100px]" />

        {/* Cinematic Highway Perspective Grid */}
        <div className="absolute inset-x-0 bottom-0 h-[55vh] sm:h-[65vh] flex items-center justify-center opacity-40 [perspective:800px]">
          {/* Vanishing Horizon Light Bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_20px_rgba(0,243,255,0.8)]" />

          {/* Perspective Ground Grid */}
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

          {/* Highway Central Amber/Sunset Tail-light Streak */}
          <div className="absolute inset-y-0 w-1 bg-gradient-to-t from-orange-500 via-amber-400 to-transparent blur-[2px] opacity-80" />
          <div className="absolute inset-y-0 w-12 bg-gradient-to-t from-orange-500/30 to-transparent blur-xl" />
        </div>

        {/* Subtle Starfield Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </motion.div>

      {/* FOREGROUND: Hero Content (SSR Visible Immediately - No Blank Initial States) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Scene Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-surface-glass px-3.5 py-1 text-[10px] sm:text-xs font-mono font-semibold text-cyan-400 mb-6 sm:mb-8 shadow-[0_0_15px_rgba(0,243,255,0.2)] backdrop-blur-xl max-w-full">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="tracking-widest uppercase truncate">
            PACK CONNECTED // LIVE MESH
          </span>
        </div>

        {/* Main Aggressive Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-[-0.03em] text-textHeading leading-[1.08] font-display mb-5 sm:mb-6 px-2">
          RIDE TOGETHER.{' '}
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 bg-clip-text text-transparent glow-cyan">
            SYNC YOUR PACK.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-textSupport font-sans max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
          Plan the route, track live locations, split the bills, and chat.{' '}
          <span className="text-white font-medium">One app for the entire journey.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 px-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={APK_URL}
            download="motosync.apk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-void font-display shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_45px_rgba(255,107,0,0.6)] transition duration-300"
          >
            <Download className="w-4 sm:w-5 h-4 sm:h-5 text-void stroke-[2.5]" />
            <span>Download Android APK</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-textHeading backdrop-blur-xl hover:bg-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition duration-300 font-display shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Watch The Journey</span>
          </motion.a>
        </div>

        {/* Live Metrics Proof Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-3xl sm:max-w-4xl px-4">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-3xl font-extrabold text-textHeading font-display tracking-tight">
              0 Apps
            </span>
            <span className="text-[10px] sm:text-xs text-textMuted font-mono mt-0.5">
              Juggled On The Road
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-3xl font-extrabold text-cyan-400 font-display tracking-tight glow-cyan">
              &lt; 18ms
            </span>
            <span className="text-[10px] sm:text-xs text-textMuted font-mono mt-0.5">
              Mesh Intercom Ping
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-3xl font-extrabold text-textHeading font-display tracking-tight">
              1-Tap UPI
            </span>
            <span className="text-[10px] sm:text-xs text-textMuted font-mono mt-0.5">
              Dhaba Bill Split
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl sm:text-3xl font-extrabold text-orange-400 font-display tracking-tight glow-orange">
              100%
            </span>
            <span className="text-[10px] sm:text-xs text-textMuted font-mono mt-0.5">
              Offline Mesh Ready
            </span>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-textMuted text-[10px] font-mono tracking-widest uppercase cursor-pointer"
        onClick={() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span>SCROLL TO RIDE</span>
        <ChevronDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
      </div>
    </section>
  )
}
