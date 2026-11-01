'use client'

import { motion } from 'framer-motion'
import { Bell, Check, Clock, MapPin, Users } from 'lucide-react'

const CONFIRMED_RIDERS = [
  { name: 'Arjun', role: 'Captain', bike: 'Fat Bob 114', color: '#10b1fb', delay: 0.2 },
  { name: 'Simran', role: 'Wing', bike: 'Himalayan 450', color: '#8b5cf6', delay: 0.4 },
  { name: 'Kabir', role: 'Navigator', bike: 'Scrambler 900', color: '#38bdf8', delay: 0.6 },
  { name: 'Zoya', role: 'Sweep', bike: 'KTM 390', color: '#ef4444', delay: 0.8 },
]

export const JourneyScene1 = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Step Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1 text-xs font-mono font-bold text-electric-300 mb-4"
      >
        SCENE 01 // PLANNING
      </motion.div>

      {/* Headline (Max 6 words) */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-black text-center text-white mb-2 tracking-tight"
      >
        The Ride Is Planned.
      </motion.h2>

      {/* Caption (Max 15 words) */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl text-center text-white/60 mb-12"
      >
        Your pack gets notified instantly.
      </motion.p>

      {/* Center Phone Mockup + Pop-in Avatars */}
      <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
        {/* Glowing Backlight */}
        <div className="absolute inset-0 bg-gradient-radial from-electric-500/25 via-neon-purple/15 to-transparent blur-3xl pointer-events-none" />

        {/* Phone Frame */}
        <div className="relative rounded-[40px] border-[5px] border-[#1a2333] bg-[#05070a] p-4 shadow-2xl overflow-hidden aspect-[9/18]">
          {/* Top Speaker / Dynamic Island */}
          <div className="mx-auto w-28 h-4 rounded-full bg-black mb-6 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
          </div>

          {/* Phone Screen: Push Notification Card */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-electric-500/40 bg-[#0a101d]/90 p-4 shadow-2xl backdrop-blur-xl mb-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-electric-400">
                <Bell className="h-3.5 w-3.5 animate-bounce" />
                <span>MOTOSYNC DISPATCH</span>
              </div>
              <span className="text-[10px] text-white/40 font-mono">NOW</span>
            </div>

            <p className="text-base font-bold text-white leading-snug">
              🏍️ Sunday Sunrise Ride
            </p>
            <p className="text-xs text-white/60 mt-0.5">Pack of 8 · 6:00 AM Departure</p>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1 text-electric-300">
                <Clock className="h-3 w-3" /> 06:00 AM
              </span>
              <span className="flex items-center gap-1 text-neon-purple">
                <MapPin className="h-3 w-3" /> NH-44 Haveli
              </span>
            </div>
          </motion.div>

          {/* Roster confirmations preview */}
          <div className="space-y-2 mt-4 px-1">
            <p className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
              Confirmed Pack (4/8)
            </p>
            {CONFIRMED_RIDERS.map((rider, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rider.delay, duration: 0.4 }}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-2 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: rider.color }}
                  />
                  <span className="font-semibold text-white">{rider.name}</span>
                  <span className="text-[10px] text-white/40">({rider.bike})</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400">
                  <Check className="h-3 w-3" /> GOING
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Friends' Floating Confirm Avatars (Pop in around phone) */}
        {CONFIRMED_RIDERS.map((rider, i) => {
          const positions = [
            'top-16 -left-12 sm:-left-20',
            'top-36 -right-12 sm:-right-20',
            'bottom-36 -left-12 sm:-left-20',
            'bottom-16 -right-12 sm:-right-20',
          ]
          return (
            <motion.div
              key={rider.name}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: rider.delay + 0.3, type: 'spring', stiffness: 200 }}
              className={`absolute ${positions[i]} hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#060910]/95 p-2 shadow-2xl backdrop-blur-xl z-20`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-black font-mono shadow-lg"
                style={{ backgroundColor: rider.color }}
              >
                {rider.name[0]}
              </div>
              <div className="pr-1 text-left">
                <p className="text-xs font-bold text-white leading-none">{rider.name}</p>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <Check className="h-2.5 w-2.5" /> Confirmed
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
