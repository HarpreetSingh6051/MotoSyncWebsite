'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
} from 'lucide-react'

interface FeatureStage {
  id: string
  chapter: string
  tabTitle: string
  headline: string
  support: string
  bullets: { icon: any; title: string; desc: string }[]
}

const STAGES: FeatureStage[] = [
  {
    id: 'planning',
    chapter: '01 // PLANNING',
    tabTitle: '01 Planning',
    headline: 'The Ride Is Planned. Pack Notified.',
    support: 'Create a route in 30 seconds. Your entire riding pack receives instant push notification with meeting time and waypoint.',
    bullets: [
      {
        icon: Bell,
        title: 'Instant Dispatch',
        desc: 'Pack members get auto-notified with GPS coordinates and weather forecast.',
      },
      {
        icon: Users,
        title: 'Live RSVP Roster',
        desc: 'See who is confirmed, who is running late, and who is meeting en route.',
      },
      {
        icon: Calendar,
        title: 'Automated Calendar Sync',
        desc: 'Direct sync to Google Calendar and iOS Reminders for every rider.',
      },
    ],
  },
  {
    id: 'rendezvous',
    chapter: '02 // RENDEZVOUS',
    tabTitle: '02 Live Radar',
    headline: 'Meet At The Spot. See Everyone Live.',
    support: 'No more frantic calls at highway exits. Track every rider’s live position, speed, and distance from the pack lead.',
    bullets: [
      {
        icon: Navigation,
        title: 'Zero Stragglers',
        desc: 'Pulsing rider dots reveal exact distance from lead, mid, and sweep.',
      },
      {
        icon: Zap,
        title: 'Real-Time Speed Telemetry',
        desc: 'Monitor pack cruising speeds (km/h) to maintain optimal formation.',
      },
      {
        icon: ShieldCheck,
        title: 'Hazard Pings',
        desc: 'Lead rider drops instant visual alerts for potholes, barriers, or police checks.',
      },
    ],
  },
  {
    id: 'settlement',
    chapter: '03 // SETTLEMENT',
    tabTitle: '03 Tank Splits',
    headline: 'Split The Tank. Settle in Seconds.',
    support: 'Never calculate fuel or dhaba food on napkins again. Split group expenses automatically in Indian Rupees (₹) with 1-tap UPI.',
    bullets: [
      {
        icon: Fuel,
        title: 'Automated Equal Splits',
        desc: 'Log the total fuel refuel or breakfast bill; MotoSync splits it per rider instantly.',
      },
      {
        icon: Check,
        title: '1-Tap UPI Settlement',
        desc: 'Direct UPI deep-link for instant zero-fee transfers between riders.',
      },
      {
        icon: Zap,
        title: 'Zero Owed Confusion',
        desc: 'Clean ledger keeps running tab across multi-day touring expeditions.',
      },
    ],
  },
  {
    id: 'community',
    chapter: '04 // COMMUNITY',
    tabTitle: '04 Pack Discovery',
    headline: 'Discover Nearby Packs & Clubs.',
    support: 'Connect with local motorcycling chapters, weekend highway tourers, and brand clubs across your city and route.',
    bullets: [
      {
        icon: Users,
        title: 'Verified Riding Clubs',
        desc: 'Join verified chapters with organized weekend rides and safety marshals.',
      },
      {
        icon: MapPin,
        title: 'Route-Based Discovery',
        desc: 'See which clubs are riding your destination highway this weekend.',
      },
      {
        icon: ArrowRight,
        title: '1-Tap Pack Join',
        desc: 'Request to join with rider profile and garage bike details in one tap.',
      },
    ],
  },
  {
    id: 'comms',
    chapter: '05 // COMMS',
    tabTitle: '05 Mesh Comms',
    headline: 'Talk While You Ride. Zero Hands Needed.',
    support: 'Hands-free mesh audio designed for motorcycle speeds. Auto-squelch cuts out wind noise while keeping rider voices crystal clear.',
    bullets: [
      {
        icon: Radio,
        title: 'Low-Latency Mesh Network',
        desc: 'Peer-to-peer 14ms latency keeps audio flowing without cellular dead zones.',
      },
      {
        icon: Mic,
        title: 'Highway Noise Squelch',
        desc: 'Intelligent noise suppression filters exhaust rumble and 100 km/h wind shear.',
      },
      {
        icon: ShieldCheck,
        title: 'PTT & Open Mic Modes',
        desc: 'Switch between Push-to-Talk handlebar button or hands-free voice trigger.',
      },
    ],
  },
]

export function JourneyStoryPinned({ forceStage }: { forceStage?: number }) {
  const [activeStage, setActiveStage] = useState(forceStage !== undefined ? forceStage : 0)
  const [isJoined, setIsJoined] = useState(false)
  const [isSettled, setIsSettled] = useState(false)
  const [isAttending, setIsAttending] = useState(false)
  const [isPttActive, setIsPttActive] = useState(false)

  const stage = STAGES[activeStage]

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Invisible anchor checkpoints for direct URL jumps */}
      <div id="planning" className="absolute top-[0%] h-px w-px pointer-events-none" />
      <div id="rendezvous" className="absolute top-[20%] h-px w-px pointer-events-none" />
      <div id="settlement" className="absolute top-[40%] h-px w-px pointer-events-none" />
      <div id="community" className="absolute top-[60%] h-px w-px pointer-events-none" />
      <div id="comms" className="absolute top-[80%] h-px w-px pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1 text-xs font-display font-semibold text-neutral-800 mb-4 shadow-studio-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 animate-pulse" />
          <span className="tracking-wider uppercase">THE MOTOSYNC PACK SYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 font-display mb-4">
          Everything Your Pack Needs. <br className="hidden sm:inline" />
          <span className="text-neutral-400">Zero Chaos.</span>
        </h2>
        <p className="text-base sm:text-lg text-slateText-body font-sans max-w-2xl mx-auto">
          Built specifically for motorcycle groups — from planning the weekend route to live telemetry, fuel splits, and highway intercom.
        </p>
      </div>

      {/* Interactive Tabs Header (Clickable & Fully Accessible) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        <div className="inline-flex p-1.5 rounded-full bg-white border border-neutral-200 shadow-studio-sm">
          {STAGES.map((s, index) => {
            const isActive = activeStage === index
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(index)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-neutral-950 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-studio-100'
                }`}
              >
                {s.tabTitle}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Stage Experience: 2-Column Responsive Card Showcase */}
      <div className="relative rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-10 lg:p-12 shadow-studio-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative, Bullets, and Interactive Controls */}
          <div className="lg:col-span-7">
            {/* Stage Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-100 border border-neutral-200 text-xs font-display font-semibold text-neutral-800 mb-4">
              <span>{stage.chapter}</span>
            </div>

            {/* Dynamic Headline */}
            <h3 className="text-2xl sm:text-4xl font-bold text-neutral-950 font-display mb-4 leading-tight">
              {stage.headline}
            </h3>

            {/* Support Paragraph */}
            <p className="text-base sm:text-lg text-slateText-body font-sans leading-relaxed mb-8">
              {stage.support}
            </p>

            {/* Feature Bullets Grid */}
            <div className="space-y-4 mb-8">
              {stage.bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-studio-50 border border-neutral-200/60"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-2xs text-neutral-900 mt-0.5">
                    <b.icon className="w-4 h-4 text-neutral-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950 font-display">{b.title}</h4>
                    <p className="text-xs text-slateText-body mt-0.5 font-sans leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next Stage Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-xs font-display font-semibold text-neutral-700 hover:bg-studio-50 disabled:opacity-30 disabled:pointer-events-none transition shadow-2xs"
              >
                ← Previous Feature
              </button>
              <button
                disabled={activeStage === STAGES.length - 1}
                onClick={() => setActiveStage((prev) => Math.min(STAGES.length - 1, prev + 1))}
                className="px-4 py-2 rounded-xl bg-neutral-950 text-white text-xs font-display font-semibold hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition shadow-2xs flex items-center gap-1.5"
              >
                <span>Next Feature</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Smartphone Screen Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[290px] sm:w-[320px] aspect-[9/18.5] select-none">
              {/* Outer Phone Chassis */}
              <div className="relative w-full h-full rounded-[44px] border-[5px] border-neutral-300 bg-white p-3.5 shadow-studio-float overflow-hidden flex flex-col justify-between">
                {/* Dynamic Speaker Island */}
                <div className="relative z-30 mx-auto w-24 h-4 rounded-full bg-neutral-950 flex items-center justify-between px-3 mb-2 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Inside Screen Content: Live Interactive Screen */}
                <div className="relative flex-1 w-full rounded-[30px] bg-studio-50 border border-neutral-200/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-inner">
                  <AnimatePresence mode="wait" initial={false}>
                    {/* STAGE 1: PLANNING */}
                    {activeStage === 0 && (
                      <motion.div
                        key="screen-planning"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-neutral-200 mb-3">
                            <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                              <Bell className="h-3 w-3 text-neutral-900 animate-bounce" />
                              DISPATCH NOTICE
                            </span>
                            <span className="text-[9px] font-mono text-slateText-muted">6:00 AM</span>
                          </div>

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

                        <div className="mt-3">
                          <button
                            onClick={() => setIsAttending(!isAttending)}
                            className={`w-full py-2.5 rounded-button text-xs font-bold text-center font-display transition duration-200 shadow-sm ${
                              isAttending
                                ? 'bg-emerald-600 text-white'
                                : 'bg-neutral-950 text-white hover:bg-neutral-800'
                            }`}
                          >
                            {isAttending ? 'Attendance Confirmed ✓' : 'Confirm Attendance'}
                          </button>
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
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                            LIVE RADAR
                          </span>
                          <span className="text-[9px] font-display text-neutral-700 tabular-nums font-semibold">
                            78 km/h
                          </span>
                        </div>

                        <div className="relative my-auto w-full aspect-square rounded-full border border-neutral-300 bg-white overflow-hidden flex items-center justify-center shadow-studio-sm">
                          <div className="absolute inset-4 rounded-full border border-neutral-200 border-dashed" />
                          <div className="absolute inset-10 rounded-full border border-neutral-200" />
                          <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-200 -translate-y-1/2" />
                          <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-200 -translate-x-1/2" />

                          <div
                            className="absolute inset-0 origin-center pointer-events-none"
                            style={{
                              animation: 'radar-sweep 3s linear infinite',
                              background:
                                'conic-gradient(from 0deg at 50% 50%, rgba(0, 0, 0, 0.12) 0deg, transparent 60deg, transparent 360deg)',
                            }}
                          />

                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md">
                              <MapPin className="h-3 w-3 text-white" />
                            </div>
                            <span className="mt-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-display font-bold text-neutral-900 border border-neutral-200 shadow-xs">
                              NH-44 Paddock
                            </span>
                          </div>

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
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-[10px] font-display font-bold text-neutral-900">
                            TRIP EXPENSE
                          </span>
                          <span className="flex items-center gap-1 text-[9px] font-display font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <Check className="h-2.5 w-2.5" /> SETTLED
                          </span>
                        </div>

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

                        <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-studio-sm">
                          <div className="flex items-center justify-between text-[11px] font-display text-slateText-body">
                            <span className="flex items-center gap-1.5 text-neutral-950 font-medium">
                              <Fuel className="h-3.5 w-3.5 text-neutral-700" />
                              Pack of 8
                            </span>
                            <span className="font-bold text-neutral-950 tabular-nums">₹9,600 Total</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <button
                            onClick={() => setIsSettled(!isSettled)}
                            className={`w-full py-2.5 rounded-button text-xs font-bold text-center font-display transition duration-200 shadow-sm ${
                              isSettled
                                ? 'bg-emerald-600 text-white'
                                : 'bg-neutral-950 text-white hover:bg-neutral-800'
                            }`}
                          >
                            {isSettled ? 'Settled via UPI ✓' : '1-Tap UPI Settle'}
                          </button>
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
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="text-[10px] font-display font-bold text-neutral-900">
                            NEARBY PACKS
                          </span>
                          <span className="text-[9px] font-display text-slateText-muted">4.2 km</span>
                        </div>

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
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                          <span className="flex items-center gap-1.5 text-[10px] font-display font-bold text-neutral-900">
                            <Radio className="h-3 w-3 text-neutral-900 animate-pulse" />
                            MESH COMMS
                          </span>
                          <span className="text-[9px] font-display text-emerald-600 font-semibold tabular-nums">
                            14ms Latency
                          </span>
                        </div>

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

                        <div className="mt-3">
                          <button
                            onClick={() => setIsPttActive(!isPttActive)}
                            className={`w-full py-2.5 rounded-button border border-neutral-300 text-xs font-bold text-center font-display flex items-center justify-center gap-1.5 shadow-studio-sm transition ${
                              isPttActive
                                ? 'bg-neutral-950 text-white border-neutral-950'
                                : 'bg-white text-neutral-950 hover:bg-studio-100'
                            }`}
                          >
                            <Mic className="h-3.5 w-3.5 text-neutral-700" />
                            <span>{isPttActive ? 'Transmitting Live...' : 'PTT Highway Mode'}</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
