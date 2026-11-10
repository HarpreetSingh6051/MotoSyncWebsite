'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Clock,
  MapPin,
  Radio,
  Check,
  Fuel,
  Mic,
} from 'lucide-react'

interface Stage {
  id: string
  chapter: string
  headline: string
  support: string
  tilt: { x: number; y: number }
}

const STAGES: Stage[] = [
  {
    id: 'planning',
    chapter: '01 // PLANNING',
    headline: 'The Ride Is Planned.',
    support: 'Your pack gets notified instantly.',
    tilt: { x: 3, y: -5 },
  },
  {
    id: 'rendezvous',
    chapter: '02 // RENDEZVOUS',
    headline: 'Meet At The Spot.',
    support: 'See everyone live on radar.',
    tilt: { x: 2, y: 5 },
  },
  {
    id: 'settlement',
    chapter: '03 // SETTLEMENT',
    headline: 'Split The Tank.',
    support: 'Split fuel and food equally.',
    tilt: { x: -3, y: -4 },
  },
  {
    id: 'community',
    chapter: '04 // COMMUNITY',
    headline: 'Discover Nearby Packs.',
    support: 'Find other crews on your route.',
    tilt: { x: 3, y: 4 },
  },
  {
    id: 'comms',
    chapter: '05 // COMMS',
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
      const stageIndex = Math.min(4, Math.floor(latest * 5))
      setActiveStage(stageIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress, forceStage])

  const stage = STAGES[activeStage]

  return (
    <div
      id="journey"
      ref={containerRef}
      className={forceStage !== undefined ? 'relative w-full py-8' : 'relative h-[480vh] w-full'}
    >
      {/* Invisible anchor checkpoints for scroll jump */}
      <div id="planning" className="absolute top-[0%] h-px w-px pointer-events-none" />
      <div id="rendezvous" className="absolute top-[20%] h-px w-px pointer-events-none" />
      <div id="settlement" className="absolute top-[40%] h-px w-px pointer-events-none" />
      <div id="community" className="absolute top-[60%] h-px w-px pointer-events-none" />
      <div id="comms" className="absolute top-[80%] h-px w-px pointer-events-none" />

      {/* Pinned Sticky Viewport */}
      <div
        className={
          forceStage !== undefined
            ? 'relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-12'
            : 'sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-16'
        }
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[620px] h-[620px] rounded-full bg-gradient-radial from-neutral-300/20 via-neutral-200/5 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Stage Headline, Support, Chapter Badge */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Chapter Pill */}
            <div className="flex justify-center lg:justify-start mb-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stage.chapter}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1 text-xs font-display font-semibold tracking-wider text-neutral-700 shadow-studio-sm backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 animate-pulse" />
                  <span>{stage.chapter}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Headline */}
            <div className="min-h-[72px] sm:min-h-[96px] flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h2
                  key={stage.headline}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 font-display"
                >
                  {stage.headline}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Support Line */}
            <div className="min-h-[44px] flex items-center justify-center lg:justify-start mb-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={stage.support}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="text-base sm:text-xl text-slateText-body font-sans"
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
                      ? 'w-8 bg-neutral-950 shadow-sm'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-500'
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
              {/* Outer Phone Bezel: Matte Ceramic / Studio Titanium with clean drop shadow */}
              <div className="relative w-full h-full rounded-[44px] border-[5px] border-neutral-300 bg-white p-3.5 shadow-studio-float overflow-hidden flex flex-col justify-between transition-colors duration-500">
                {/* Top Dynamic Island / Speaker */}
                <div className="relative z-30 mx-auto w-24 h-4 rounded-full bg-neutral-900 flex items-center justify-between px-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                </div>

                {/* Inside Phone Screen Content */}
                <div className="relative flex-1 w-full rounded-[32px] bg-studio-50 border border-neutral-200/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-inner">
                  <AnimatePresence mode="wait" initial={false}>
                    {/* STAGE 1: PLANNING */}
                    {activeStage === 0 && (
                      <motion.div
                        key="screen-planning"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Dispatch Header */}
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-neutral-200 mb-3">
                            <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                              <Bell className="h-3 w-3 text-neutral-900 animate-bounce" />
                              DISPATCH
                            </span>
                            <span className="text-[9px] font-mono text-slateText-muted">6:00 AM</span>
                          </div>

                          {/* Ride Card */}
                          <div className="rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-studio-sm mb-4">
                            <p className="text-sm font-bold text-neutral-950 font-display">
                              Sunrise Ridge Run
                            </p>
                            <p className="text-[11px] text-slateText-body mt-0.5">
                              NH-44 Paddock • 120 km
                            </p>

                            <div className="mt-3 flex items-center justify-between text-[10px] font-display text-slateText-muted pt-2 border-t border-neutral-100">
                              <span className="flex items-center gap-1 text-neutral-800">
                                <Clock className="h-3 w-3 text-neutral-500" /> 06:00 AM
                              </span>
                              <span className="flex items-center gap-1 text-neutral-800">
                                <MapPin className="h-3 w-3 text-neutral-500" /> Haveli
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Roster: 4 avatars with "+4" pill */}
                        <div>
                          <p className="text-[10px] font-display font-medium text-slateText-muted uppercase tracking-wider mb-2">
                            Confirmed Pack (8)
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {['Arjun', 'Simran', 'Kabir', 'Zoya'].map((name) => (
                                <div
                                  key={name}
                                  className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 flex items-center justify-center text-xs font-bold text-white font-display shadow-sm"
                                >
                                  {name[0]}
                                </div>
                              ))}
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-studio-200 border border-neutral-300 text-[10px] font-display font-bold text-neutral-800">
                              +4 more
                            </span>
                          </div>
                        </div>

                        {/* One Big Primary Action */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button bg-neutral-950 text-white text-xs font-bold text-center font-display shadow-sm">
                            Confirm Attendance
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: RENDEZVOUS */}
                    {activeStage === 1 && (
                      <motion.div
                        key="screen-rendezvous"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Live Radar Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                            LIVE RADAR
                          </span>
                          <span className="text-[9px] font-display text-neutral-600 tabular-nums font-semibold">
                            78 km/h
                          </span>
                        </div>

                        {/* Concentric Radar Surface */}
                        <div className="relative my-auto w-full aspect-square rounded-full border border-neutral-300 bg-white overflow-hidden flex items-center justify-center shadow-studio-sm">
                          {/* Range rings */}
                          <div className="absolute inset-4 rounded-full border border-neutral-200 border-dashed" />
                          <div className="absolute inset-10 rounded-full border border-neutral-200" />
                          <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-200 -translate-y-1/2" />
                          <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-200 -translate-x-1/2" />

                          {/* Radar sweep */}
                          <div
                            className="absolute inset-0 origin-center pointer-events-none"
                            style={{
                              animation: 'radar-sweep 3s linear infinite',
                              background:
                                'conic-gradient(from 0deg at 50% 50%, rgba(0, 0, 0, 0.12) 0deg, transparent 60deg, transparent 360deg)',
                            }}
                          />

                          {/* Waypoint Pin */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md">
                              <MapPin className="h-3 w-3 text-white" />
                            </div>
                            <span className="mt-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-display font-bold text-neutral-900 border border-neutral-200 shadow-sm">
                              NH-44 Paddock
                            </span>
                          </div>

                          {/* Converging Rider Dot 1 */}
                          <motion.div
                            animate={{ x: [-35, -8], y: [-30, -5] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3 w-3 rounded-full bg-neutral-950 shadow-sm flex items-center justify-center">
                              <span className="h-1 w-1 rounded-full bg-white" />
                            </span>
                            <span className="text-[7px] font-display font-semibold text-neutral-800 bg-white/90 px-1 rounded shadow-xs">
                              Arjun
                            </span>
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
                            <span className="h-3 w-3 rounded-full bg-neutral-800 shadow-sm flex items-center justify-center">
                              <span className="h-1 w-1 rounded-full bg-white" />
                            </span>
                            <span className="text-[7px] font-display font-semibold text-neutral-800 bg-white/90 px-1 rounded shadow-xs">
                              Simran
                            </span>
                          </motion.div>
                        </div>

                        {/* Telemetry pill */}
                        <div className="flex items-center justify-between text-[10px] font-display text-slateText-muted pt-2 border-t border-neutral-200">
                          <span>Pack Distance: 140m</span>
                          <span className="text-emerald-600 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> All In Range
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: SETTLEMENT */}
                    {activeStage === 2 && (
                      <motion.div
                        key="screen-settlement"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Splits Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-[10px] font-display font-bold text-neutral-900">
                            TRIP EXPENSE
                          </span>
                          <span className="flex items-center gap-1 text-[9px] font-display font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <Check className="h-2.5 w-2.5" /> SETTLED
                          </span>
                        </div>

                        {/* Big Counter Value */}
                        <div className="my-auto text-center py-4">
                          <p className="text-[10px] font-display text-slateText-muted uppercase tracking-wider mb-1">
                            Your Share
                          </p>
                          <p className="text-3xl sm:text-4xl font-bold text-neutral-950 font-display tabular-nums">
                            ₹1,200
                          </p>
                          <p className="text-[11px] text-slateText-body mt-1 font-display">
                            Fuel Refuel & Haveli Breakfast
                          </p>
                        </div>

                        {/* Clean Settlement Pill Card */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-studio-sm">
                          <div className="flex items-center justify-between text-[11px] font-display text-slateText-body">
                            <span className="flex items-center gap-1.5 text-neutral-950 font-medium">
                              <Fuel className="h-3.5 w-3.5 text-neutral-700" />
                              Pack of 8
                            </span>
                            <span className="font-bold text-neutral-950 tabular-nums">₹9,600 Total</span>
                          </div>
                        </div>

                        {/* Action: Settled */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button bg-neutral-950 text-white text-xs font-bold text-center font-display shadow-sm">
                            1-Tap UPI Settled
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 4: COMMUNITY */}
                    {activeStage === 3 && (
                      <motion.div
                        key="screen-community"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Discover Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-[10px] font-display font-bold text-neutral-900">
                            NEARBY PACKS
                          </span>
                          <span className="text-[9px] font-display text-slateText-muted">4.2 km</span>
                        </div>

                        {/* Featured Club Card */}
                        <div className="my-auto rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-studio-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xl">🦁</span>
                            <span className="px-2 py-0.5 rounded-full bg-studio-200 text-neutral-900 text-[9px] font-display font-bold border border-neutral-300">
                              412 RIDERS
                            </span>
                          </div>
                          <p className="text-sm font-bold text-neutral-950 font-display">
                            Punjab Royal Brotherhood
                          </p>
                          <p className="text-[10px] text-slateText-body mt-0.5">
                            Weekend NH-44 Highway Tourers
                          </p>
                        </div>

                        {/* One-tap Join Pack Button */}
                        <div className="mt-3">
                          <button
                            onClick={() => setIsJoined(!isJoined)}
                            className={`w-full py-2.5 rounded-button text-xs font-bold text-center font-display transition duration-200 ${
                              isJoined
                                ? 'bg-neutral-800 text-white'
                                : 'bg-neutral-950 text-white shadow-sm hover:bg-neutral-800'
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
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Comms Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                            <Radio className="h-3 w-3 text-neutral-900 animate-pulse" />
                            MESH COMMS
                          </span>
                          <span className="text-[9px] font-display text-emerald-600 font-semibold tabular-nums">
                            14ms Latency
                          </span>
                        </div>

                        {/* Audio Waveforms & Connected Status */}
                        <div className="my-auto py-2 text-center">
                          <div className="flex items-center justify-center gap-1.5 h-12 mb-3">
                            {[16, 28, 44, 20, 48, 32, 18, 40, 24].map((h, i) => (
                              <span
                                key={i}
                                className="w-1.5 rounded-full bg-neutral-900 animate-waveform"
                                style={{
                                  height: `${h}px`,
                                  animationDelay: `${i * 120}ms`,
                                }}
                              />
                            ))}
                          </div>

                          <p className="text-xs font-bold text-neutral-950 font-display">
                            Pack Connected
                          </p>
                          <p className="text-[10px] text-slateText-body mt-0.5">
                            Hands-free auto-squelch active
                          </p>
                        </div>

                        {/* Push To Talk Action */}
                        <div className="mt-3">
                          <div className="w-full py-2.5 rounded-button border border-neutral-300 bg-white text-neutral-950 text-xs font-bold text-center font-display flex items-center justify-center gap-1.5 shadow-studio-sm hover:bg-studio-100 transition">
                            <Mic className="h-3.5 w-3.5 text-neutral-700" />
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
