import { motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Radio,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react'
import { HeroWheel3D } from '@/components/HeroWheel3D'
import { KineticText } from '@/components/KineticText'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const RIDER_APP_URL = 'https://moto-sync-ochre.vercel.app'

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      {/* Dynamic Background Cyber Grids & Neon Glows */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-amber-500/15 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/15 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 Cols on desktop) */}
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-mono font-medium text-amber-300 backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>MotoSync v1.0 Production · Pack Connected</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline text-white/60">Android APK & Web PWA</span>
            </motion.div>

            {/* Kinetic Tagline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
              <KineticText
                text="Ride Together. Sync Your Pack."
                highlightWords={['Ride', 'Together', 'Sync', 'Pack']}
              />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8"
            >
              Immersive digital experiences for riders—from real-time GPS radar telemetry and kinetic interaction design to live route syncing, AI exhaust sound synthesis, and enterprise pack management.
            </motion.p>

            {/* Dual Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-7 py-4 text-sm font-bold text-black shadow-xl shadow-amber-500/25 hover:opacity-95 active:scale-95 transition"
              >
                <Smartphone className="h-4 w-4" />
                <span>Download Android App (APK)</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white transition"
              >
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4 text-cyan-400" />
              </a>

              <a
                href={RIDER_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono text-white/50 hover:text-amber-400 py-3 sm:py-0 transition"
              >
                <span>Launch Web App</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* Micro Feature Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center lg:justify-start gap-6 font-mono text-xs text-white/50"
            >
              <div className="flex items-center gap-2">
                <Radio className="h-3.5 w-3.5 text-cyan-400" />
                <span>Real-Time Formation Radar</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Synthesized Exhaust Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero Latency Supabase Mesh</span>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Interactive Motorcycle Wheel Ring (5 Cols on desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroWheel3D />
          </div>
        </div>
      </div>
    </section>
  )
}
