'use client'

import { motion } from 'framer-motion'
import { Compass, Gauge, MapPin, Radio, Shield } from 'lucide-react'

export const JourneyScene2 = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Step Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1 text-xs font-mono font-bold text-electric-300 mb-4"
      >
        SCENE 02 // RENDEZVOUS
      </motion.div>

      {/* Headline (Max 6 words) */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-black text-center text-white mb-2 tracking-tight"
      >
        Meet At The Spot.
      </motion.h2>

      {/* Caption (Max 15 words) */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl text-center text-white/60 mb-12"
      >
        See everyone live.
      </motion.p>

      {/* Center Phone Screen with Dark Live Map & Converging Riders */}
      <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
        {/* Glowing Backlight */}
        <div className="absolute inset-0 bg-gradient-radial from-electric-500/30 via-neon-purple/15 to-transparent blur-3xl pointer-events-none" />

        {/* Phone Frame */}
        <div className="relative rounded-[40px] border-[5px] border-[#1a2333] bg-[#020408] p-4 shadow-2xl overflow-hidden aspect-[9/18] flex flex-col justify-between">
          {/* Top Dynamic Island & Live Status */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 z-20">
            <div className="flex items-center gap-1.5 font-mono text-xs text-electric-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-electric-400 animate-ping" />
              <span>LIVE PACK RADAR</span>
            </div>
            <span className="text-[10px] font-mono text-white/50">8 RIDERS ONLINE</span>
          </div>

          {/* Map Surface Viewport with Concentric Radar Grid */}
          <div className="relative my-auto w-full aspect-square rounded-full border border-electric-500/25 bg-[#03060c] overflow-hidden flex items-center justify-center shadow-inner">
            {/* Concentric Range Rings */}
            <div className="absolute inset-6 rounded-full border border-electric-500/15 border-dashed" />
            <div className="absolute inset-14 rounded-full border border-electric-500/20" />
            <div className="absolute inset-22 rounded-full border border-neon-purple/20 border-dashed" />

            {/* Crosshairs */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-electric-500/20 -translate-y-1/2" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-electric-500/20 -translate-x-1/2" />

            {/* Sweeping Radar Scan */}
            <div
              className="absolute inset-0 origin-center pointer-events-none"
              style={{
                animation: 'radar-sweep 3s linear infinite',
                background: 'conic-gradient(from 0deg at 50% 50%, rgba(16, 177, 251, 0.4) 0deg, rgba(139, 92, 246, 0.1) 45deg, transparent 90deg, transparent 360deg)',
              }}
            />

            {/* Central Meeting Destination Pin */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-neon-red/20 border border-neon-red flex items-center justify-center animate-bounce shadow-[0_0_15px_#ef4444]">
                <MapPin className="h-4 w-4 text-neon-red" />
              </div>
              <span className="mt-1 rounded bg-black/90 px-1.5 py-0.5 text-[9px] font-mono font-bold text-white border border-white/20 whitespace-nowrap">
                Paddock Meetup (NH-44)
              </span>
            </div>

            {/* Converging Rider 1 (Top Left -> Center) */}
            <motion.div
              animate={{ x: [-55, -12], y: [-50, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute z-10 flex items-center gap-1"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-electric-400 shadow-[0_0_12px_#10b1fb] flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
              <span className="rounded bg-black/80 px-1 py-0.2 text-[8px] font-mono text-white/80">Arjun</span>
            </motion.div>

            {/* Converging Rider 2 (Bottom Right -> Center) */}
            <motion.div
              animate={{ x: [60, 15], y: [50, 10] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: 'easeInOut' }}
              className="absolute z-10 flex items-center gap-1"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-neon-purple shadow-[0_0_12px_#8b5cf6] flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
              <span className="rounded bg-black/80 px-1 py-0.2 text-[8px] font-mono text-white/80">Simran</span>
            </motion.div>

            {/* Converging Rider 3 (Bottom Left -> Center) */}
            <motion.div
              animate={{ x: [-50, -10], y: [45, 12] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: 'easeInOut' }}
              className="absolute z-10 flex items-center gap-1"
            >
              <span className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
              <span className="rounded bg-black/80 px-1 py-0.2 text-[8px] font-mono text-white/80">Kabir</span>
            </motion.div>
          </div>

          {/* Bottom Telemetry HUD */}
          <div className="rounded-2xl border border-white/10 bg-black/80 p-3 z-20 space-y-1.5 font-mono text-[11px]">
            <div className="flex items-center justify-between text-white/70">
              <span>ETA TO MEETUP:</span>
              <span className="font-bold text-electric-400">04 MIN</span>
            </div>
            <div className="flex items-center justify-between text-white/50 text-[10px]">
              <span>FORMATION:</span>
              <span className="text-emerald-400 font-semibold">STAGGERED 15M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
