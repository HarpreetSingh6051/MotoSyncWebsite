'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mic, MicOff, Radio, Volume2, ShieldAlert, CheckCircle2, Wifi } from 'lucide-react'

export function JourneyScene5() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPttPressed, setIsPttPressed] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0, 1, 1, 0.2])
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0])

  const riders = [
    { name: 'Leo R.', role: 'Lead', active: true, color: 'border-emerald-400', tag: 'Speaking' },
    { name: 'Jax K.', role: 'Sweep', active: false, color: 'border-sky-400', tag: 'Listening' },
    { name: 'Elena V.', role: 'Mid', active: false, color: 'border-violet-400', tag: 'Listening' },
  ]

  const waveforms = [24, 52, 80, 40, 95, 65, 30, 85, 100, 70, 45, 90, 60, 35, 75, 45]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-electric-blue/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-neon-purple/10 rounded-full blur-[110px]" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Step pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse text-sky-400" />
            <span>05 / MESH COMMS</span>
          </div>
        </div>

        {/* Headlines - strictly matching 4 & 5 words */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Talk While You Ride.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-md mx-auto">
            Stay connected with your crew.
          </p>
        </div>

        {/* Comms Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Active Voice Mesh Node */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative rounded-3xl bg-black/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Sunrise Run #04</h3>
                    <p className="text-xs text-white/40 font-mono">Ultra-Low Latency Mesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  <Wifi className="w-3 h-3" />
                  <span>14ms</span>
                </div>
              </div>

              {/* Connected Riders */}
              <div className="py-5 space-y-3">
                <div className="text-[11px] font-mono uppercase text-white/40 tracking-wider">
                  Active in Pack Channel (3)
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {riders.map((r) => (
                    <div
                      key={r.name}
                      className={`relative p-3 rounded-2xl bg-white/[0.03] border ${
                        r.active ? 'border-emerald-500/50 bg-emerald-500/[0.05]' : 'border-white/5'
                      } flex flex-col items-center text-center`}
                    >
                      <div className={`w-10 h-10 rounded-full bg-white/10 border-2 ${r.color} flex items-center justify-center font-bold text-xs text-white mb-2 relative`}>
                        {r.name.slice(0, 2)}
                        {r.active && (
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-white truncate max-w-full">{r.name}</span>
                      <span className="text-[10px] text-white/40 font-mono">{r.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Waveform */}
              <div className="pt-2 pb-4">
                <div className="flex items-center justify-between text-xs text-white/50 mb-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-sky-400" />
                    Leo R. is talking...
                  </span>
                  <span className="text-sky-400">96kbps HD</span>
                </div>

                <div className="h-14 bg-black/50 border border-white/5 rounded-2xl p-2.5 flex items-center justify-between gap-1 overflow-hidden">
                  {waveforms.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-sky-500 to-indigo-400 rounded-full"
                      animate={{
                        height: isPttPressed
                          ? [`${Math.max(15, h * 0.9)}%`, `${Math.min(100, h * 1.3)}%`, `${h * 0.5}%`]
                          : [`${h * 0.4}%`, `${h}%`, `${h * 0.6}%`],
                      }}
                      transition={{
                        duration: 0.6 + (i % 5) * 0.15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Interactive Push-to-Talk Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onMouseDown={() => setIsPttPressed(true)}
                  onMouseUp={() => setIsPttPressed(false)}
                  onTouchStart={() => setIsPttPressed(true)}
                  onTouchEnd={() => setIsPttPressed(false)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-semibold text-xs tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                    isPttPressed
                      ? 'bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)] scale-[0.98]'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                  }`}
                >
                  {isPttPressed ? (
                    <>
                      <Mic className="w-4 h-4 animate-bounce text-white" />
                      <span>Transmitting to Pack...</span>
                    </>
                  ) : (
                    <>
                      <MicOff className="w-4 h-4 text-white/50" />
                      <span>Hold to Push-to-Talk (Demo)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Live Dynamic Speech & Hazard Bubbles */}
          <div className="lg:col-span-7 space-y-4">
            {/* Bubble 1: Sweep Rider Hazard Alert */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-black/60 to-black/80 border border-red-500/30 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                      <span>Jax K. (Sweep)</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-500/20 border border-red-500/40 text-red-300 font-mono">
                        HAZARD
                      </span>
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">Just now</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    “Road hazard ahead at 400m — loose gravel on bend!”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bubble 2: Lead Rider Response */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-sky-500/30 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0 font-bold text-sky-400 text-xs">
                  LR
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                      <span>Leo R. (Lead)</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono">
                        LEAD
                      </span>
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">5s ago</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    “Copy that Jax! Slowing pack to 40 mph, single file.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bubble 3: Pack Acknowledgement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-violet-400 flex items-center gap-1.5">
                      <span>Elena V. (Mid)</span>
                    </span>
                    <span className="text-[10px] text-white/40 font-mono">2s ago</span>
                  </div>
                  <p className="text-sm font-medium text-white/90">
                    “Understood. Keeping 3-second gap behind.”
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hardware-style bottom badge */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/60">
                Bluetooth Headset Compatible (Sena & Cardo)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/60">
                Zero Audio Lag
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
