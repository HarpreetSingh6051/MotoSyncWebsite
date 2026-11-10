'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Bell,
  Clock,
  MapPin,
  Radio,
  Check,
  Fuel,
  Mic,
  Calendar,
  Users,
  Navigation,
  ShieldCheck,
  ArrowRight,
  Zap,
  Volume2,
  Send,
  Sparkles,
  Camera,
  CheckCircle2,
  DollarSign,
  Smartphone,
} from 'lucide-react'

interface StoryScene {
  id: string
  chapter: string
  navTitle: string
  headline: string
  support: string
  badge: string
  metrics: { label: string; value: string }[]
}

const STORY_SCENES: StoryScene[] = [
  {
    id: 'notification',
    chapter: '01 // THE KICKOFF',
    navTitle: '01 Invite',
    headline: 'It starts with an invite.',
    support:
      'No messy WhatsApp debate threads or 40-message polls. One rider drops the route, departure time, and meetup pin. The entire pack gets notified in one unified tap.',
    badge: 'PUSH NOTIFICATION ENGINE',
    metrics: [
      { label: 'Dispatch', value: '1-Tap Sync' },
      { label: 'Encryption', value: 'E2EE' },
      { label: 'Cal Sync', value: 'Instant' },
    ],
  },
  {
    id: 'radar',
    chapter: '02 // RENDEZVOUS RADAR',
    navTitle: '02 Live Radar',
    headline: 'Never lose a rider at the meetup.',
    support:
      'Watch your pack converge in real time. A 360° tactical radar displays live distances, bearings, and speeds towards the meetup point without draining phone battery.',
    badge: 'REAL-TIME RADAR TELEMETRY',
    metrics: [
      { label: 'Sweep Rate', value: '60 Hz' },
      { label: 'Pack Radius', value: '12 km' },
      { label: 'Sync Ping', value: '18 ms' },
    ],
  },
  {
    id: 'ride',
    chapter: '03 // HIGHWAY PACK MODE',
    navTitle: '03 Highway & Audio',
    headline: 'In-sync on the highway.',
    support:
      'Turn-by-turn pack HUD paired with hands-free mesh voice intercom. Know who is speaking, who lagged behind, and what turn is coming without taking your eyes off the asphalt.',
    badge: 'MESH INTERCOM & HUD',
    metrics: [
      { label: 'Audio Latency', value: '14 ms' },
      { label: 'Cruising Speed', value: '88 km/h' },
      { label: 'Active Voice', value: '4 Riders' },
    ],
  },
  {
    id: 'settlement',
    chapter: '04 // DHABA SETTLEMENT',
    navTitle: '04 Dhaba Splits',
    headline: 'No awkward bill math at the Dhaba.',
    support:
      'The ride wraps with steaming parathas and hot chai. Enter the total dhaba bill or fuel cost—MotoSync calculates equal splits and triggers 1-tap UPI deep links to everyone’s phone.',
    badge: 'ZERO-FEE UPI LEDGER',
    metrics: [
      { label: 'Split Math', value: 'Equal 4-Way' },
      { label: 'Settlement', value: '1-Tap UPI' },
      { label: 'Commission', value: '0.0%' },
    ],
  },
  {
    id: 'chat',
    chapter: '05 // PACK MEMORIES',
    navTitle: '05 Group Chat',
    headline: 'Relive the ride.',
    support:
      'High-res GoPro clips, ride telemetry, and route GPX tracks stay stored in your private club vault. Schedule next weekend’s breakfast run before the bike engines even cool down.',
    badge: 'PRIVATE PACK VAULT',
    metrics: [
      { label: 'Distance', value: '184 km' },
      { label: 'Elevation', value: '+840m' },
      { label: 'Next Ride', value: 'Confirmed' },
    ],
  },
]

export function CinematicStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSceneIndex, setActiveSceneIndex] = useState(0)

  // Interactive phone states
  const [isInviteAccepted, setIsInviteAccepted] = useState(false)
  const [isBillPaid, setIsBillPaid] = useState(false)
  const [pollVoted, setPollVoted] = useState(false)

  // Track scroll progress along the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress cleanly to the 5 scenes
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 5 scenes: 0.0 - 0.2, 0.2 - 0.4, 0.4 - 0.6, 0.6 - 0.8, 0.8 - 1.0
    const rawIndex = Math.floor(latest * STORY_SCENES.length)
    const clampedIndex = Math.min(Math.max(0, rawIndex), STORY_SCENES.length - 1)
    setActiveSceneIndex(clampedIndex)
  })

  const scene = STORY_SCENES[activeSceneIndex]

  // Jump to specific scene smoothly
  const jumpToScene = (index: number) => {
    setActiveSceneIndex(index)
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const targetScroll = containerTop + (index / (STORY_SCENES.length - 1)) * (containerHeight - window.innerHeight)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative min-h-[500vh] w-full bg-void selection:bg-cyan-500 selection:text-void"
    >
      {/* Invisible anchor references for direct navigation */}
      <div id="invite" className="absolute top-[0%] h-px w-px pointer-events-none" />
      <div id="radar" className="absolute top-[25%] h-px w-px pointer-events-none" />
      <div id="highway" className="absolute top-[50%] h-px w-px pointer-events-none" />
      <div id="splits" className="absolute top-[75%] h-px w-px pointer-events-none" />
      <div id="memories" className="absolute top-[100%] h-px w-px pointer-events-none" />

      {/* STICKY PHONE MECHANIC CONTAINER: Sticks in viewport while user scrolls */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        
        {/* Dynamic Background Atmosphere (Shifts color tone per scene) */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-700">
          {activeSceneIndex === 0 && (
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-[120px]" />
          )}
          {activeSceneIndex === 1 && (
            <div className="absolute inset-0 bg-gradient-radial from-cyan-400/15 via-blue-900/10 to-transparent blur-[130px]" />
          )}
          {activeSceneIndex === 2 && (
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-cyan-500/5 to-transparent blur-[140px]" />
          )}
          {activeSceneIndex === 3 && (
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/15 via-orange-500/10 to-transparent blur-[130px]" />
          )}
          {activeSceneIndex === 4 && (
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-[130px]" />
          )}
        </div>

        {/* Top Interactive Stepper Scrubber */}
        <div className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full border border-white/10 bg-surface-glass backdrop-blur-2xl shadow-xl overflow-x-auto no-scrollbar">
            {STORY_SCENES.map((st, idx) => {
              const isActive = activeSceneIndex === idx
              return (
                <button
                  key={st.id}
                  onClick={() => jumpToScene(idx)}
                  className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs font-display font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'text-void bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                      : 'text-textSupport hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePillDot"
                      className="w-1.5 h-1.5 rounded-full bg-void animate-pulse"
                    />
                  )}
                  <span>{st.navTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Center Main Stage: 2-Column Responsive Layout (Narrative Left, Sticky 3D Phone Right) */}
        <div className="relative z-20 w-full max-w-6xl mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative story card that morphs per scene */}
          <div className="md:col-span-6 text-center md:text-left flex flex-col items-center md:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={`narrative-${scene.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Scene Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold mb-4 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{scene.chapter}</span>
                </div>

                {/* Aggressive Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-textHeading font-display tracking-tight leading-[1.1] mb-4">
                  {scene.headline}
                </h2>

                {/* Descriptive Copy */}
                <p className="text-base sm:text-lg text-textSupport font-sans leading-relaxed mb-6 max-w-xl">
                  {scene.support}
                </p>

                {/* Telemetry Metric Badges */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4 p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl mb-6 max-w-md w-full">
                  {scene.metrics.map((m, i) => (
                    <div key={i} className="text-center md:text-left">
                      <div className="text-[10px] uppercase font-mono text-textMuted tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-textHeading font-display mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Scene Scrubber Controls */}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <button
                    disabled={activeSceneIndex === 0}
                    onClick={() => jumpToScene(activeSceneIndex - 1)}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-xs font-display font-medium text-textSupport hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition"
                  >
                    ← Previous
                  </button>
                  <button
                    disabled={activeSceneIndex === STORY_SCENES.length - 1}
                    onClick={() => jumpToScene(activeSceneIndex + 1)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-void text-xs font-display font-bold shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1.5"
                  >
                    <span>Next Scene</span>
                    <ArrowRight className="w-3.5 h-3.5 text-void" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Realistic 3D-styled Smartphone Mockup */}
          <div className="md:col-span-6 flex items-center justify-center select-none">
            <div className="relative w-[285px] sm:w-[320px] md:w-[340px] aspect-[9/18.5] perspective-[1000px]">
              
              {/* Outer Titanium Chassis Frame */}
              <div className="relative w-full h-full rounded-[48px] border-[8px] border-[#202126] bg-[#0c0d10] p-3 shadow-phone-float overflow-hidden flex flex-col justify-between ring-1 ring-white/15">
                
                {/* Metallic Frame Highlights (Simulated reflection gleams) */}
                <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-40" />
                <div className="absolute -left-[10px] top-28 w-[3px] h-10 bg-neutral-700 rounded-l pointer-events-none" />
                <div className="absolute -left-[10px] top-42 w-[3px] h-10 bg-neutral-700 rounded-l pointer-events-none" />
                <div className="absolute -right-[10px] top-32 w-[3px] h-16 bg-neutral-700 rounded-r pointer-events-none" />

                {/* Top Dynamic Island with Camera Lens & Status Telemetry */}
                <div className="relative z-40 mx-auto w-28 h-5 rounded-full bg-black flex items-center justify-between px-3 text-[9px] text-white/70 shadow-sm mb-1.5">
                  <span className="font-mono text-[8px] text-cyan-400">06:14</span>
                  <div className="w-2 h-2 rounded-full bg-neutral-800 border border-neutral-700" />
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[7px] text-white/50">5G</span>
                  </span>
                </div>

                {/* INSIDE THE PHONE: Screen Content Area with Smooth Morphing Transitions */}
                <div className="relative flex-1 w-full rounded-[34px] bg-[#0d0f14] border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden shadow-inner">
                  
                  <AnimatePresence mode="wait">
                    {/* SCENE 2: THE NOTIFICATION (LOCK SCREEN) */}
                    {activeSceneIndex === 0 && (
                      <motion.div
                        key="screen-invite"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Lock Screen Clock */}
                        <div className="text-center pt-2">
                          <div className="text-[10px] font-mono text-textMuted uppercase tracking-wider">
                            Sunday, October 24
                          </div>
                          <div className="text-4xl font-extrabold text-white font-display tracking-tight mt-1">
                            05:42
                          </div>
                        </div>

                        {/* Incoming Push Notification Card */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="rounded-2xl border border-cyan-500/30 bg-surface/90 backdrop-blur-xl p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,243,255,0.15)]"
                        >
                          {/* Card Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                            <div className="flex items-center gap-1.5">
                              <div className="w-4 h-4 rounded-md bg-cyan-500 flex items-center justify-center text-void">
                                <Zap className="w-2.5 h-2.5" />
                              </div>
                              <span className="text-[10px] font-display font-bold text-white tracking-wider">
                                MOTOSYNC DISPATCH
                              </span>
                            </div>
                            <span className="text-[9px] font-mono text-cyan-400">NOW</span>
                          </div>

                          {/* Ride Announcement */}
                          <div className="text-xs font-bold text-white font-display">
                            Arjun started a ride: Sunday Breakfast Run
                          </div>
                          <p className="text-[10px] text-textSupport mt-1 leading-snug">
                            Route: NH-44 Highway • Meetup at 06:00 AM at The Haveli. 4 riders in pack.
                          </p>

                          {/* Interactive Action Button */}
                          <div className="mt-3 pt-2 border-t border-white/10">
                            <button
                              onClick={() => setIsInviteAccepted(!isInviteAccepted)}
                              className={`w-full py-2 rounded-xl text-xs font-display font-bold transition duration-200 flex items-center justify-center gap-1.5 ${
                                isInviteAccepted
                                  ? 'bg-emerald-500 text-void shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-void shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:brightness-110'
                              }`}
                            >
                              {isInviteAccepted ? (
                                <>
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                  <span>Accepted! Pack Locked</span>
                                </>
                              ) : (
                                <span>Accept &amp; Sync Route</span>
                              )}
                            </button>
                          </div>
                        </motion.div>

                        {/* Bottom Swipe Bar */}
                        <div className="text-center text-[9px] font-mono text-textMuted pb-1">
                          Touch ID or swipe up to unlock
                        </div>
                      </motion.div>
                    )}

                    {/* SCENE 3: THE KICKSTART POINT (LIVE RADAR) */}
                    {activeSceneIndex === 1 && (
                      <motion.div
                        key="screen-radar"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Radar Header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                            <span className="text-[10px] font-display font-bold text-white tracking-wider">
                              LIVE RADAR LOCK
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-cyan-400">4 IN RANGE</span>
                        </div>

                        {/* Tactical Concentric Radar Instrument */}
                        <div className="relative my-auto w-full aspect-square rounded-full border border-cyan-500/30 bg-[#06080d] overflow-hidden flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,243,255,0.1)]">
                          {/* Concentric distance circles */}
                          <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed" />
                          <div className="absolute inset-10 rounded-full border border-cyan-500/30" />
                          <div className="absolute inset-16 rounded-full border border-cyan-500/20" />
                          <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-500/20 -translate-y-1/2" />
                          <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-500/20 -translate-x-1/2" />

                          {/* 360-Degree Sweeping Electric Cyan Radar Beam */}
                          <div
                            className="absolute inset-0 origin-center pointer-events-none animate-radar-sweep"
                            style={{
                              background:
                                'conic-gradient(from 0deg at 50% 50%, rgba(0, 243, 255, 0.35) 0deg, rgba(0, 243, 255, 0.08) 45deg, transparent 90deg, transparent 360deg)',
                            }}
                          />

                          {/* Target Pin in Center: The Haveli Meetup */}
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-void flex items-center justify-center shadow-[0_0_12px_rgba(255,107,0,0.8)]">
                              <MapPin className="h-3 w-3 text-void stroke-[3]" />
                            </div>
                            <span className="mt-0.5 rounded bg-void/90 px-1 py-0.5 text-[7px] font-mono font-bold text-orange-400 border border-orange-500/40">
                              The Haveli, NH44
                            </span>
                          </div>

                          {/* 4 Rider Avatars Converging on Center */}
                          {/* Arjun (Lead) */}
                          <motion.div
                            animate={{ x: [-32, -10], y: [-28, -8] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,243,255,0.8)] flex items-center justify-center text-[7px] font-bold text-void">
                              A
                            </span>
                            <span className="text-[7px] font-mono text-cyan-300 bg-void/80 px-1 rounded border border-cyan-500/30">
                              Arjun (0.4km)
                            </span>
                          </motion.div>

                          {/* Neha (Mid) */}
                          <motion.div
                            animate={{ x: [36, 12], y: [26, 8] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 0.4, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] flex items-center justify-center text-[7px] font-bold text-void">
                              N
                            </span>
                            <span className="text-[7px] font-mono text-sky-300 bg-void/80 px-1 rounded border border-sky-500/30">
                              Neha (1.1km)
                            </span>
                          </motion.div>

                          {/* Vikram (Wing) */}
                          <motion.div
                            animate={{ x: [30, 8], y: [-32, -10] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 0.8, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3.5 w-3.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)] flex items-center justify-center text-[7px] font-bold text-void">
                              V
                            </span>
                            <span className="text-[7px] font-mono text-indigo-300 bg-void/80 px-1 rounded border border-indigo-500/30">
                              Vikram (2.2km)
                            </span>
                          </motion.div>

                          {/* Kabir (Sweep) */}
                          <motion.div
                            animate={{ x: [-30, -6], y: [34, 10] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 1.2, ease: 'easeInOut' }}
                            className="absolute z-10 flex items-center gap-1"
                          >
                            <span className="h-3.5 w-3.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] flex items-center justify-center text-[7px] font-bold text-void">
                              K
                            </span>
                            <span className="text-[7px] font-mono text-amber-300 bg-void/80 px-1 rounded border border-amber-500/30">
                              Kabir (2.8km)
                            </span>
                          </motion.div>
                        </div>

                        {/* Telemetry Status Strip */}
                        <div className="flex items-center justify-between text-[9px] font-mono text-textMuted pt-1.5 border-t border-white/10">
                          <span>Convergence: 98%</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            All 4 In Perimeter
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* SCENE 4: THE RIDE (LIVE LOCATION & INTERCOM) */}
                    {activeSceneIndex === 2 && (
                      <motion.div
                        key="screen-ride"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Top Audio Intercom Floating Pill */}
                        <div className="p-2 rounded-2xl border border-cyan-500/30 bg-surface/90 backdrop-blur-md shadow-lg">
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                            <span className="text-[10px] font-display font-bold text-white flex items-center gap-1.5">
                              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                              <span>Intercom Connected: 4 Riders</span>
                            </span>
                            <span className="text-[8px] font-mono text-emerald-400">14ms</span>
                          </div>

                          {/* 4 Animated Waveform Avatars */}
                          <div className="grid grid-cols-4 gap-1.5 text-center">
                            <div className="p-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                              <div className="flex justify-center items-end h-3 gap-0.5 mb-0.5">
                                <span className="w-1 rounded-full bg-cyan-400 animate-waveform" style={{ animationDelay: '0ms' }} />
                                <span className="w-1 rounded-full bg-cyan-400 animate-waveform" style={{ animationDelay: '200ms' }} />
                                <span className="w-1 rounded-full bg-cyan-400 animate-waveform" style={{ animationDelay: '400ms' }} />
                              </div>
                              <span className="text-[8px] font-mono font-bold text-cyan-300">Arjun</span>
                            </div>

                            <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex justify-center items-end h-3 gap-0.5 mb-0.5">
                                <span className="w-1 h-1 rounded-full bg-white/40" />
                                <span className="w-1 h-2 rounded-full bg-white/40" />
                                <span className="w-1 h-1 rounded-full bg-white/40" />
                              </div>
                              <span className="text-[8px] font-mono text-textSupport">Neha</span>
                            </div>

                            <div className="p-1 rounded-lg bg-orange-500/10 border border-orange-500/30">
                              <div className="flex justify-center items-end h-3 gap-0.5 mb-0.5">
                                <span className="w-1 rounded-full bg-orange-400 animate-waveform" style={{ animationDelay: '150ms' }} />
                                <span className="w-1 rounded-full bg-orange-400 animate-waveform" style={{ animationDelay: '350ms' }} />
                              </div>
                              <span className="text-[8px] font-mono font-bold text-orange-300">Vikram</span>
                            </div>

                            <div className="p-1 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex justify-center items-end h-3 gap-0.5 mb-0.5">
                                <span className="w-1 h-1 rounded-full bg-white/40" />
                                <span className="w-1 h-1.5 rounded-full bg-white/40" />
                              </div>
                              <span className="text-[8px] font-mono text-textSupport">Kabir</span>
                            </div>
                          </div>
                        </div>

                        {/* Highway Night Route HUD */}
                        <div className="relative my-auto w-full h-36 rounded-2xl border border-white/10 bg-[#07090e] overflow-hidden flex flex-col justify-between p-3">
                          {/* Stylized Glowing Cyan Highway Curve */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120">
                            {/* Road background */}
                            <path
                              d="M 100 130 Q 110 70 80 40 T 140 0"
                              stroke="rgba(255,255,255,0.08)"
                              strokeWidth="28"
                              fill="none"
                            />
                            {/* Glowing route line */}
                            <path
                              d="M 100 130 Q 110 70 80 40 T 140 0"
                              stroke="#00f3ff"
                              strokeWidth="3.5"
                              fill="none"
                              strokeDasharray="4 2"
                            />
                          </svg>

                          {/* Speed Telemetry Badge */}
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="bg-void/90 px-2.5 py-1 rounded-xl border border-cyan-500/30">
                              <div className="text-xl font-extrabold text-white font-display tabular-nums">
                                88 <span className="text-[9px] font-mono text-cyan-400">KM/H</span>
                              </div>
                              <div className="text-[8px] font-mono text-textMuted">Gear 5 • Cruising</div>
                            </div>

                            <div className="text-right">
                              <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                FORMATION TIGHT
                              </span>
                            </div>
                          </div>

                          {/* Next Maneuver */}
                          <div className="relative z-10 bg-void/90 p-2 rounded-xl border border-white/10 flex items-center gap-2">
                            <Navigation className="w-4 h-4 text-cyan-400 -rotate-45" />
                            <div className="text-[9px] font-sans text-textSupport">
                              In <span className="text-white font-bold">1.2 km</span>: Turn Right onto NH-44
                            </div>
                          </div>
                        </div>

                        {/* Road Hazard Alert */}
                        <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[9px] font-mono text-orange-300 flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-orange-400" />
                          <span>Pothole alert 6 km ahead by Arjun</span>
                        </div>
                      </motion.div>
                    )}

                    {/* SCENE 5: THE DESTINATION (MEAL & DHABA SPLITS) */}
                    {activeSceneIndex === 3 && (
                      <motion.div
                        key="screen-splits"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <span className="text-[10px] font-display font-bold text-white">
                            DHABA SETTLEMENT
                          </span>
                          <span className="text-[9px] font-mono text-amber-400">MURTHAL HAVELI</span>
                        </div>

                        {/* Auto-Generated Bill Card */}
                        <div className="my-auto rounded-2xl border border-amber-500/30 bg-surface/90 backdrop-blur-md p-3.5 shadow-lg">
                          <div className="text-center pb-3 border-b border-white/10">
                            <div className="text-[10px] font-mono text-textMuted uppercase">
                              Total Dhaba Bill
                            </div>
                            <div className="text-3xl font-extrabold text-white font-display tabular-nums mt-0.5">
                              ₹1,200
                            </div>
                            <div className="text-[9px] text-amber-400 font-sans mt-0.5">
                              Tandoori Parathas &amp; Chai • Split 4 Ways
                            </div>
                          </div>

                          {/* 4-Way Rider Breakdown */}
                          <div className="space-y-1.5 py-2.5 text-[9px] font-mono">
                            <div className="flex items-center justify-between text-textSupport">
                              <span>Arjun (Paid Bill)</span>
                              <span className="text-white font-bold">₹300 share</span>
                            </div>
                            <div className="flex items-center justify-between text-textSupport">
                              <span>Neha</span>
                              <span className="text-emerald-400 flex items-center gap-1">
                                <Check className="w-2.5 h-2.5" /> Paid via UPI
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-textSupport">
                              <span>Vikram</span>
                              <span className="text-emerald-400 flex items-center gap-1">
                                <Check className="w-2.5 h-2.5" /> Paid via UPI
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-orange-300 font-bold">
                              <span>You (Kabir)</span>
                              <span>₹300 Due</span>
                            </div>
                          </div>

                          {/* 1-Tap UPI Action Button with Bouncing Green Checkmark */}
                          <div className="pt-1">
                            <button
                              onClick={() => setIsBillPaid(!isBillPaid)}
                              className={`w-full py-2.5 rounded-xl text-xs font-display font-bold transition duration-300 flex items-center justify-center gap-1.5 ${
                                isBillPaid
                                  ? 'bg-emerald-500 text-void shadow-[0_0_20px_rgba(16,185,129,0.6)]'
                                  : 'bg-gradient-to-r from-orange-500 to-amber-500 text-void shadow-[0_0_18px_rgba(255,107,0,0.4)] hover:brightness-110'
                              }`}
                            >
                              {isBillPaid ? (
                                <motion.div
                                  initial={{ scale: 0.8 }}
                                  animate={{ scale: [1, 1.15, 1] }}
                                  className="flex items-center gap-1.5"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-void stroke-[3]" />
                                  <span>₹300 Paid to Arjun • UTR 4892</span>
                                </motion.div>
                              ) : (
                                <span>Pay ₹300 via UPI (1-Tap)</span>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Bottom Summary */}
                        <div className="text-center text-[9px] font-mono text-textMuted">
                          Zero commission • Settled directly via UPI
                        </div>
                      </motion.div>
                    )}

                    {/* SCENE 6: THE AFTERMATH (GROUP CHAT & MEMORIES) */}
                    {activeSceneIndex === 4 && (
                      <motion.div
                        key="screen-chat"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Chat Channel Header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div>
                            <div className="text-[10px] font-display font-bold text-white">
                              NH44 Sunday Squad
                            </div>
                            <div className="text-[8px] font-mono text-cyan-400">
                              4 RIDERS • 184 KM LOGGED
                            </div>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>

                        {/* Chat Messages Stream */}
                        <div className="my-auto space-y-2 py-1">
                          {/* Message 1: Arjun */}
                          <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-left">
                            <div className="text-[8px] font-mono text-cyan-400 font-bold">Arjun</div>
                            <div className="text-[10px] text-white font-sans mt-0.5">
                              Chai and parathas were legendary today! 🔥
                            </div>
                          </div>

                          {/* Message 2: Neha */}
                          <div className="rounded-xl bg-white/5 border border-white/10 p-2 text-left">
                            <div className="text-[8px] font-mono text-sky-400 font-bold">Neha</div>
                            <div className="text-[10px] text-white font-sans mt-0.5">
                              That curve at Km 32 was butter. Uploaded 4K GoPro clip to vault! 📹
                            </div>
                          </div>

                          {/* Interactive Poll: Next Sunday */}
                          <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/30 p-2 text-left">
                            <div className="flex items-center justify-between text-[8px] font-mono text-cyan-400 font-bold mb-1">
                              <span>PACK POLL</span>
                              <span>4/4 ACCEPTED</span>
                            </div>
                            <div className="text-[10px] text-white font-display font-bold">
                              Next Sunday: Nandi Hills at 5:30 AM?
                            </div>
                            <button
                              onClick={() => setPollVoted(!pollVoted)}
                              className={`w-full mt-1.5 py-1 rounded-lg text-[9px] font-display font-bold transition ${
                                pollVoted
                                  ? 'bg-emerald-500 text-void'
                                  : 'bg-cyan-500 text-void hover:brightness-110'
                              }`}
                            >
                              {pollVoted ? 'You Voted: I’m In! 🏍️' : 'Vote: I’m In! (4 Confirmed)'}
                            </button>
                          </div>
                        </div>

                        {/* Input Box Bar */}
                        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-[9px] text-textMuted flex-1 pl-1">
                            Message the pack...
                          </span>
                          <div className="w-5 h-5 rounded-lg bg-cyan-500 text-void flex items-center justify-center">
                            <Send className="w-2.5 h-2.5" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-28 h-1 rounded-full bg-white/20 mx-auto mt-2 mb-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Progress Telemetry */}
        <div className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-between text-xs font-mono text-textMuted">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>SCENE {activeSceneIndex + 1} OF {STORY_SCENES.length}</span>
          </span>
          <span className="hidden sm:inline text-textMuted">
            SCROLL TO PROGRESS THROUGH THE JOURNEY
          </span>
          <span className="text-cyan-400 font-bold">
            {Math.round(((activeSceneIndex + 1) / STORY_SCENES.length) * 100)}% EXPLORED
          </span>
        </div>
      </div>
    </section>
  )
}
