'use client'

import { motion } from 'framer-motion'
import {
  Download,
  Sparkles,
  MapPin,
  Radio,
  Zap,
  Shield,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const WEB_URL = 'https://moto-sync-ochre.vercel.app'

export const HeroScene = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Radial Studio Highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-radial from-neutral-200/40 via-neutral-100/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-neutral-300/30 via-neutral-100/10 to-transparent blur-[110px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Value Proposition, Actions & Social Proof */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-3.5 py-1 text-xs font-display font-semibold text-neutral-800 mb-6 shadow-studio-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wider uppercase">PACK CONNECTED // LIVE MESH</span>
          </div>

          {/* Headline: Clean, Punchy, High-Contrast */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-bold tracking-[-0.03em] text-neutral-950 leading-[1.05] mb-6 font-display">
            Ride Together.{' '}
            <span className="text-neutral-400">
              Sync Your Pack.
            </span>
          </h1>

          {/* Support Line */}
          <p className="text-base sm:text-lg lg:text-xl text-slateText-body font-sans leading-[1.6] mb-8 max-w-xl mx-auto lg:mx-0">
            The all-in-one platform for motorcycle riding packs. Real-time radar tracking, group fuel splits, and hands-free mesh intercom on the highway.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={APK_URL}
              download="motosync.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-button bg-neutral-950 px-8 py-4 text-sm font-bold text-white font-display shadow-studio-md hover:bg-neutral-800 transition duration-200"
            >
              <Download className="h-4 w-4 text-neutral-300" />
              <span>Download Android APK</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-button border border-neutral-300 bg-white px-7 py-4 text-sm font-semibold text-neutral-950 backdrop-blur-xl hover:border-neutral-400 hover:bg-studio-50 transition duration-200 font-display shadow-studio-sm"
            >
              <Sparkles className="h-4 w-4 text-neutral-600" />
              <span>Explore Features</span>
            </motion.a>
          </div>

          {/* Live Trust Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200/80 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">12k+</div>
              <div className="text-xs text-slateText-muted font-display mt-0.5">Pack Rides</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">14ms</div>
              <div className="text-xs text-slateText-muted font-display mt-0.5">Mesh Latency</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">100%</div>
              <div className="text-xs text-slateText-muted font-display mt-0.5">Offline Ready</div>
            </div>
          </div>
        </div>

        {/* Right Column: Flagship MotoSync Mobile App Showcase with Orbiting Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Floating Feature Pill: Top Right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-4 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 border border-neutral-200 shadow-studio-md backdrop-blur-xl text-xs font-display font-medium text-neutral-800"
          >
            <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-slateText-muted uppercase">Split Settled</div>
              <div className="font-bold text-neutral-950">₹1,200 Fuel Share</div>
            </div>
          </motion.div>

          {/* Floating Feature Pill: Bottom Left */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-2 sm:left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 border border-neutral-200 shadow-studio-md backdrop-blur-xl text-xs font-display font-medium text-neutral-800"
          >
            <div className="w-6 h-6 rounded-lg bg-studio-100 border border-neutral-200 flex items-center justify-center text-neutral-800">
              <Radio className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] text-slateText-muted uppercase">Mesh Intercom</div>
              <div className="font-bold text-neutral-950">6 Riders Connected</div>
            </div>
          </motion.div>

          {/* Main Flagship Phone Mockup */}
          <div className="relative w-[300px] sm:w-[330px] aspect-[9/18.5] select-none">
            {/* Phone Outer Chassis: Ceramic / Titanium studio border with elevation drop shadow */}
            <div className="relative w-full h-full rounded-[44px] border-[6px] border-neutral-300 bg-white p-3.5 shadow-studio-float overflow-hidden flex flex-col justify-between">
              {/* Dynamic Island Speaker Header */}
              <div className="relative z-30 mx-auto w-24 h-4 rounded-full bg-neutral-950 flex items-center justify-between px-3 mb-2 shadow-xs">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Inside Screen Container: MotoSync Live App Screen */}
              <div className="relative flex-1 w-full rounded-[30px] bg-studio-50 border border-neutral-200/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Screen Header */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-200 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-display font-bold text-neutral-900 tracking-wider">
                        RIDE IN PROGRESS
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-slateText-muted">06:22 AM</span>
                  </div>

                  {/* Tour Banner */}
                  <div className="rounded-xl bg-white border border-neutral-200 p-2.5 shadow-studio-sm mb-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-bold text-xs text-neutral-950">
                        NH-44 Ridge Tour
                      </div>
                      <span className="px-1.5 py-0.5 rounded-full bg-studio-150 text-[9px] font-display font-semibold text-neutral-800">
                        8 Riders
                      </span>
                    </div>
                    <div className="text-[10px] text-slateText-muted mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>Waypoint: Haveli Paddock (12 km)</span>
                    </div>
                  </div>
                </div>

                {/* Tactical Radar Map Instrument */}
                <div className="relative my-auto w-full aspect-square rounded-2xl border border-neutral-300 bg-white overflow-hidden flex items-center justify-center shadow-studio-sm">
                  {/* Concentric distance rings */}
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

                  {/* Center rider (You) */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-md">
                      <Compass className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="mt-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-display font-bold text-neutral-900 border border-neutral-200 shadow-xs">
                      You (86 km/h)
                    </span>
                  </div>

                  {/* Lead Rider Ahead */}
                  <div className="absolute top-7 z-10 flex items-center gap-1">
                    <span className="h-3.5 w-3.5 rounded-full bg-neutral-900 shadow-sm flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-[8px] font-display font-bold text-neutral-900 bg-white/95 px-1 py-0.5 rounded shadow-xs border border-neutral-200">
                      Arjun (+120m)
                    </span>
                  </div>

                  {/* Sweep Rider Behind */}
                  <div className="absolute bottom-8 right-6 z-10 flex items-center gap-1">
                    <span className="h-3.5 w-3.5 rounded-full bg-neutral-700 shadow-sm flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-[8px] font-display font-bold text-neutral-900 bg-white/95 px-1 py-0.5 rounded shadow-xs border border-neutral-200">
                      Kabir (-45m)
                    </span>
                  </div>
                </div>

                {/* Bottom App Telemetry & Push To Talk Bar */}
                <div className="space-y-2 pt-2 border-t border-neutral-200">
                  <div className="flex items-center justify-between text-[10px] font-display text-slateText-muted">
                    <span>Pack Spread: 165m</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> All Connected
                    </span>
                  </div>

                  <div className="w-full py-2 rounded-xl bg-neutral-950 text-white text-[11px] font-bold text-center font-display shadow-sm flex items-center justify-center gap-1.5">
                    <Radio className="w-3 h-3 text-neutral-300" />
                    <span>Push to Talk Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
