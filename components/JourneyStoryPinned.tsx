'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Clock,
  MapPin,
  Compass,
  Radio,
  Check,
  Fuel,
  Users,
  Mic,
  Wifi,
  ChevronRight,
  Shield,
  Sparkles,
} from 'lucide-react'

interface Stage {
  id: string
  chapter: string
  mood: 'blue' | 'teal' | 'violet' | 'ember' | 'blue-violet'
  accentColor: string
  headline: string
  support: string
  tilt: { x: number; y: number }
}

const STAGES: Stage[] = [
  {
    id: 'planning',
    chapter: '01 // PLANNING',
    mood: 'blue',
    accentColor: '#10B1FB',
    headline: 'The Ride Is Planned.',
    support: 'Your pack gets notified instantly.',
    tilt: { x: 4, y: -6 },
  },
  {
    id: 'rendezvous',
    chapter: '02 // RENDEZVOUS',
    mood: 'teal',
    accentColor: '#06B6D4',
    headline: 'Meet At The Spot.',
    support: 'See everyone live on radar.',
    tilt: { x: 2, y: 6 },
  },
  {
    id: 'settlement',
    chapter: '03 // SETTLEMENT',
    mood: 'violet',
    accentColor: '#8B5CF6',
    headline: 'Split The Tank.',
    support: 'Split fuel and food equally.',
    tilt: { x: -3, y: -5 },
  },
  {
    id: 'community',
    chapter: '04 // COMMUNITY',
    mood: 'ember',
    accentColor: '#FF6A3D',
    headline: 'Discover Nearby Packs.',
    support: 'Find other crews on your route.',
    tilt: { x: 3, y: 5 },
  },
  {
    id: 'comms',
    chapter: '05 // COMMS',
    mood: 'blue-violet',
    accentColor: '#8B5CF6',
    headline: 'Talk While You Ride.',
    support: 'Hands-free mesh audio on highway.',
    tilt: { x: 0, y: 0 },
  },
]

export function JourneyStoryPinned({ forceStage }: { forceStage?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStage, setActiveStage] = useState(forceStage !== undefined ? forceStage : 0)
  const [isJoined, setIsJoined] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Track active stage based on scroll progress or forced prop
  useEffect(() => {
    if (forceStage !== undefined) {
      setActiveStage(forceStage)
      return
    }

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // 5 stages across [0, 1]
      let stageIndex = Math.min(4, Math.floor(latest * 5))
      setActiveStage(stageIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress, forceStage])

  const stage = STAGES[activeStage]

  // Dynamic glow color per stage
  const glowStyles = {
    blue: 'from-electric-500/20 via-electric-500/5 to-transparent',
    teal: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    violet: 'from-violet-500/20 via-violet-500/5 to-transparent',
    ember: 'from-ember-500/20 via-violet-500/5 to-transparent',
    'blue-violet': 'from-electric-500/15 via-violet-500/15 to-transparent',
  }

  const borderStyles = {
    blue: 'border-electric-500/40 shadow-[0_0_35px_-5px_rgba(16,177,251,0.3)]',
    teal: 'border-cyan-500/40 shadow-[0_0_35px_-5px_rgba(6,182,212,0.3)]',
    violet: 'border-violet-500/40 shadow-[0_0_35px_-5px_rgba(139,92,246,0.3)]',
    ember: 'border-ember-500/40 shadow-[0_0_35px_-5px_rgba(255,106,61,0.3)]',
    'blue-violet': 'border-violet-500/40 shadow-[0_0_35px_-5px_rgba(139,92,246,0.3)]',
  }

  return (
    <div
      id="journey"
      ref={containerRef}
      className={forceStage !== undefined ? "relative w-full py-8" : "relative h-[480vh] w-full"}
    >
      {/* Invisible anchor checkpoints for scroll jump */}
      <div id="planning" className="absolute top-[0%] h-px w-px pointer-events-none" />
      <div id="rendezvous" className="absolute top-[20%] h-px w-px pointer-events-none" />
      <div id="settlement" className="absolute top-[40%] h-px w-px pointer-events-none" />
      <div id="community" className="absolute top-[60%] h-px w-px pointer-events-none" />
      <div id="comms" className="absolute top-[80%] h-px w-px pointer-events-none" />

      {/* Pinned Sticky Viewport */}
      <div className={forceStage !== undefined ? "relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-12" : "sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-16"}>
        {/* Dynamic Atmosphere Radial Glow behind the pinned phone */}
        <div
          className={`absolute w-[580px] h-[580px] rounded-full bg-gradient-radial ${
            glowStyles[stage.mood]
          } blur-[120px] pointer-events-none transition-all duration-700`}
        />

        {/* Ambient Subtle Grid */}
        <div className="absolute inset-0 bg-speed-lines opacity-40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Stage Headline, Support, Chapter Badge */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Chapter Pill */}
            <div className="flex justify-center lg:justify-start mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.chapter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-midnight-900/80 px-3.5 py-1 text-xs font-display font-semibold tracking-wider text-text-support"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: stage.accentColor }}
                  />
                  <span>{stage.chapter}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Headline: Word-by-word reveal, max 5 words */}
            <div className="min-h-[72px] sm:min-h-[96px] flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={stage.headline}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-heading font-display"
                >
                  {stage.headline}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Support Line: Max 10 words */}
            <div className="min-h-[44px] flex items-center justify-center lg:justify-start mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stage.support}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="text-base sm:text-xl text-text-support font-sans"
                >
                  {stage.support}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Interactive Chapter Indicator Dots */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              {STAGES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    const el = document.getElementById(s.id)
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeStage
                      ? 'w-8 bg-electric-400 shadow-[0_0_12px_#10B1FB]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to stage ${s.headline}`}
                />
              ))}
            </div>
          </div>

          {/* Center Column: Pinned 3D Phone Mockup with Perspective Shift */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              animate={{
                rotateX: stage.tilt.x,
                rotateY: stage.tilt.y,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 150 }}
              style={{ perspective: 1200 }}
              className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] select-none"
            >
              {/* Outer Phone Bezel: Dark titanium with luminous border */}
              <div
                className={`relative w-full h-full rounded-[44px] border-[5px] ${
                  borderStyles[stage.mood]
                } bg-midnight-950 p-3.5 shadow-2xl overflow-hidden flex flex-col justify-between transition-colors duration-500`}
              >
                {/* Top Dynamic Island / Speaker */}
                <div className="relative z-30 mx-auto w-24 h-4 rounded-full bg-midnight-900 border border-white/10 flex items-center justify-between px-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#0E1528]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-500/60" />
                </div>

                {/* Inside Phone Screen Content (Transitions smoothly per stage) */}
                <div className="relative flex-1 w-full rounded-[32px] bg-midnight-900/90 border border-surface-border p-3.5 flex flex-col justify-between overflow-hidden">
                  <AnimatePresence mode="wait">
                    {/* STAGE 1: PLANNING */}
                    {activeStage === 0 && (
                      <motion.div
                        key="screen-planning"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Dispatch Header */}
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-surface-border mb-3">
                            <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-electric-400">
                              <Bell className="h-3 w-3 animate-bounce" />
                              DISPATCH
                            </span>
                            <span className="text-[9px] font-mono text-text-muted">6:00 AM</span>
                          </div>

                          {/* Ride Card */}
                          <div className="rounded-2xl border border-electric-500/30 bg-electric-500/[0.06] p-3.5 shadow-lg mb-4">
                            <p className="text-sm font-bold text-text-heading font-display">
                              Sunrise Ridge Run
                            </p>
                            <p className="text-[11px] text-text-support mt-0.5">
                              NH-44 Paddock • 120 km
                            </p>

                            <div className="mt-3 flex items-center justify-between text-[10px] font-display text-text-support pt-2 border-t border-white/5">
                              <span className="flex items-center gap-1 text-electric-300">
                                <Clock className="h-3 w-3" /> 06:00 AM
                              </span>
                              <span className="flex items-center gap-1 text-cyan-400">
                                <MapPin className="h-3 w-3" /> Haveli
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Roster: 4 avatars with "+4" pill */}
                        <div>
                          <p className="text-[10px] font-display font-medium text-text-muted uppercase tracking-wider mb-2">
                            Confirmed Pack (8)
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {['Arjun', 'Simran', 'Kabir', 'Zoya'].map((name, i) => (
                                <div
                                  key={name}
                                  className="w-8 h-8 rounded-full border-2 border-midnight-950 bg-midnight-800 flex items-center justify-center text-xs font-bold text-text-heading font-display shadow-md"
                                >
                                  {name[0]}
                                </div>
                              ))}
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-electric-500/20 border border-electric-500/40 text-[10px] font-display font-bold text-electric-300">
                              +4 more
                            </span>
                          </div>
                        </div>

                        {/* One Big Primary Action */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button bg-electric-500 text-midnight-950 text-xs font-bold text-center font-display shadow-lg shadow-electric-500/30">
                            Confirm Attendance
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: RENDEZVOUS */}
                    {activeStage === 1 && (
                      <motion.div
                        key="screen-rendezvous"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Live Radar Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-cyan-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                            LIVE RADAR
                          </span>
                          <span className="text-[9px] font-display text-cyan-300 tabular-nums">
                            78 km/h
                          </span>
                        </div>

                        {/* Concentric Radar Surface */}
                        <div className="relative my-auto w-full aspect-square rounded-full border border-cyan-500/30 bg-midnight-950 overflow-hidden flex items-center justify-center">
                          {/* Range rings */}
                          <div className="absolute inset-4 rounded-full border border-cyan-500/15 border-dashed" />
                          <div className="absolute inset-10 rounded-full border border-cyan-500/20" />
                          <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-500/20 -translate-y-1/2" />
                          <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-500/20 -translate-x-1/2" />

                          {/* Radar sweep */}
                          <div
                            className="absolute inset-0 origin-center pointer-events-none"
                            style={{
                              animation: 'radar-sweep 3s linear infinite',
                              background:
                                'conic-gradient(from 0deg at 50% 50%, rgba(6, 182, 212, 0.4) 0deg, transparent 60deg, transparent 360deg)',
                            }}
                          />

                          {/* Waypoint Pin */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-alert-500/20 border border-alert-500 flex items-center justify-center shadow-[0_0_12px_#EF4444]">
                              <MapPin className="h-3 w-3 text-alert-500" />
                            </div>
                            <span className="mt-1 rounded bg-midnight-950/90 px-1.5 py-0.5 text-[8px] font-display text-text-heading border border-white/20">
                              NH-44 Paddock
                            </span>
                          </div>

                          {/* Converging Rider Dot 1 */}
                          <motion.div
                            animate={{ x: [-35, -8], y: [-30, -5] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#06B6D4] flex items-center justify-center">
                              <span className="h-1 w-1 rounded-full bg-midnight-950" />
                            </span>
                            <span className="text-[7px] font-display text-text-support">Arjun</span>
                          </motion.div>

                          {/* Converging Rider Dot 2 */}
                          <motion.div
                            animate={{ x: [35, 8], y: [30, 6] }}
                            transition={{
                              repeat: Infinity,
                              duration: 3.5,
                              delay: 0.5,
                              ease: 'easeInOut',
                            }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3 w-3 rounded-full bg-electric-400 shadow-[0_0_10px_#10B1FB] flex items-center justify-center">
                              <span className="h-1 w-1 rounded-full bg-midnight-950" />
                            </span>
                            <span className="text-[7px] font-display text-text-support">Simran</span>
                          </motion.div>
                        </div>

                        {/* Telemetry pill */}
                        <div className="flex items-center justify-between text-[10px] font-display text-text-support pt-2 border-t border-surface-border">
                          <span>Pack Distance: 140m</span>
                          <span className="text-cyan-400">All In Range</span>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: SETTLEMENT */}
                    {activeStage === 2 && (
                      <motion.div
                        key="screen-settlement"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Splits Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                          <span className="text-[10px] font-display font-bold text-violet-400">
                            TRIP EXPENSE
                          </span>
                          <span className="flex items-center gap-1 text-[9px] font-display font-bold text-success-500 bg-success-500/10 px-2 py-0.5 rounded-full border border-success-500/30">
                            <Check className="h-2.5 w-2.5" /> SETTLED
                          </span>
                        </div>

                        {/* Big Counter Value */}
                        <div className="my-auto text-center py-4">
                          <p className="text-[10px] font-display text-text-muted uppercase tracking-wider mb-1">
                            Your Share
                          </p>
                          <p className="text-3xl sm:text-4xl font-bold text-text-heading font-display tabular-nums">
                            ₹1,200
                          </p>
                          <p className="text-[11px] text-violet-300 mt-1 font-display">
                            Fuel Refuel & Haveli Breakfast
                          </p>
                        </div>

                        {/* Clean Settlement Pill Card */}
                        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/[0.08] p-3">
                          <div className="flex items-center justify-between text-[11px] font-display text-text-support">
                            <span className="flex items-center gap-1.5 text-text-heading">
                              <Fuel className="h-3.5 w-3.5 text-violet-400" />
                              Pack of 8
                            </span>
                            <span className="font-bold text-text-heading tabular-nums">₹9,600 Total</span>
                          </div>
                        </div>

                        {/* Action: Settled */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button bg-violet-500 text-midnight-950 text-xs font-bold text-center font-display shadow-lg shadow-violet-500/30">
                            1-Tap UPI Settled
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 4: COMMUNITY */}
                    {activeStage === 3 && (
                      <motion.div
                        key="screen-community"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Discover Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                          <span className="text-[10px] font-display font-bold text-ember-400">
                            NEARBY PACKS
                          </span>
                          <span className="text-[9px] font-display text-text-muted">4.2 km</span>
                        </div>

                        {/* Featured Club Card */}
                        <div className="my-auto rounded-2xl border border-ember-500/40 bg-ember-500/[0.07] p-3.5 shadow-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xl">🦁</span>
                            <span className="px-2 py-0.5 rounded-full bg-ember-500/20 text-ember-300 text-[9px] font-display font-bold">
                              412 RIDERS
                            </span>
                          </div>
                          <p className="text-sm font-bold text-text-heading font-display">
                            Punjab Royal Brotherhood
                          </p>
                          <p className="text-[10px] text-text-support mt-0.5">
                            Weekend NH-44 Highway Tourers
                          </p>
                        </div>

                        {/* One-tap Join Pack Button */}
                        <div className="mt-3">
                          <button
                            onClick={() => setIsJoined(!isJoined)}
                            className={`w-full py-2.5 rounded-button text-xs font-bold text-center font-display transition duration-200 ${
                              isJoined
                                ? 'bg-success-500 text-midnight-950'
                                : 'bg-ember-500 text-midnight-950 shadow-lg shadow-ember-500/30'
                            }`}
                          >
                            {isJoined ? 'Joined Pack ✓' : 'Join Pack'}
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 5: COMMS */}
                    {activeStage === 4 && (
                      <motion.div
                        key="screen-comms"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.4 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Comms Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-violet-400">
                            <Radio className="h-3 w-3 animate-pulse text-violet-400" />
                            MESH COMMS
                          </span>
                          <span className="text-[9px] font-display text-success-500 tabular-nums">
                            14ms Latency
                          </span>
                        </div>

                        {/* Audio Waveforms & Connected Status */}
                        <div className="my-auto py-2 text-center">
                          <div className="flex items-center justify-center gap-1.5 h-12 mb-3">
                            {[16, 28, 44, 20, 48, 32, 18, 40, 24].map((h, i) => (
                              <span
                                key={i}
                                className="w-1.5 rounded-full bg-gradient-to-t from-violet-500 to-electric-400 animate-waveform"
                                style={{
                                  height: `${h}px`,
                                  animationDelay: `${i * 120}ms`,
                                }}
                              />
                            ))}
                          </div>

                          <p className="text-xs font-bold text-text-heading font-display">
                            Pack Connected
                          </p>
                          <p className="text-[10px] text-text-support mt-0.5">
                            Hands-free auto-squelch active
                          </p>
                        </div>

                        {/* Push To Talk Action */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button border border-violet-500/40 bg-violet-500/20 text-violet-300 text-xs font-bold text-center font-display flex items-center justify-center gap-1.5">
                            <Mic className="h-3.5 w-3.5" />
                            <span>PTT Highway Mode</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
