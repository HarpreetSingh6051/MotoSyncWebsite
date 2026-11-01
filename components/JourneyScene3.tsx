'use client'

import { motion } from 'framer-motion'
import { Check, Coffee, Fuel, Receipt, Split, Users } from 'lucide-react'

const SHARES = [
  { name: 'Arjun', share: '₹600', paid: true, color: '#10b1fb', delay: 0.2 },
  { name: 'Simran', share: '₹600', paid: true, color: '#8b5cf6', delay: 0.4 },
  { name: 'Kabir', share: '₹600', paid: true, color: '#38bdf8', delay: 0.6 },
  { name: 'Zoya', share: '₹600', paid: true, color: '#ef4444', delay: 0.8 },
  { name: 'Dev', share: '₹600', paid: true, color: '#10b981', delay: 1.0 },
  { name: 'Ananya', share: '₹600', paid: true, color: '#f59e0b', delay: 1.2 },
  { name: 'Harpreet', share: '₹600', paid: true, color: '#ec4899', delay: 1.4 },
  { name: 'Rohan', share: '₹600', paid: true, color: '#a855f7', delay: 1.6 },
]

export const JourneyScene3 = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Step Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3.5 py-1 text-xs font-mono font-bold text-neon-violet mb-4"
      >
        SCENE 03 // SETTLEMENT
      </motion.div>

      {/* Headline (Max 6 words) */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-black text-center text-white mb-2 tracking-tight"
      >
        Split The Bill.
      </motion.h2>

      {/* Caption (Max 15 words) */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl text-center text-white/60 mb-12"
      >
        Split costs. No awkward math.
      </motion.p>

      {/* Center Animated Receipt Card */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Glowing Backlight */}
        <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 via-electric-500/15 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-[#05070c]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
        >
          {/* Receipt Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-neon-purple/20 border border-neon-purple/40 text-neon-violet">
                <Receipt className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Haveli Murthal & Fuel Oasis</p>
                <p className="text-[11px] font-mono text-white/40">Pack of 8 Riders</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-400">
              SETTLED
            </span>
          </div>

          {/* Bill Breakdown Line Items */}
          <div className="my-5 space-y-2 text-xs font-mono text-white/70">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-white/60">
                <Coffee className="h-3.5 w-3.5 text-electric-400" />
                Dhaba Breakfast & Chai (8x)
              </span>
              <span className="text-white font-semibold">₹2,400</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-white/60">
                <Fuel className="h-3.5 w-3.5 text-neon-purple" />
                95-Octane Refuel Split
              </span>
              <span className="text-white font-semibold">₹2,400</span>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-sm">
              <span className="font-bold text-white uppercase tracking-wider">Total Bill:</span>
              <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-neon-purple font-mono">
                ₹4,800
              </span>
            </div>
          </div>

          {/* Equal Split Indicator */}
          <div className="rounded-2xl border border-electric-500/30 bg-electric-500/5 p-3 flex items-center justify-between text-xs font-mono mb-6">
            <div className="flex items-center gap-2">
              <Split className="h-4 w-4 text-electric-400" />
              <span className="text-white/80">Equal Share per Rider:</span>
            </div>
            <span className="font-bold text-base text-electric-400">₹600</span>
          </div>

          {/* 8 Rider Avatars with "Paid ✓" Tick Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SHARES.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: r.delay, duration: 0.3 }}
                className="rounded-xl border border-white/5 bg-white/[0.03] p-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-black font-mono shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.name[0]}
                  </span>
                  <span className="text-[11px] font-semibold text-white truncate">{r.name}</span>
                </div>
                <span className="flex items-center text-[10px] font-mono font-bold text-emerald-400 shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
