import { motion } from 'framer-motion'
import {
  ArrowRight,
  Cpu,
  ExternalLink,
  Radio,
  Shield,
  Smartphone,
} from 'lucide-react'
import { HeroWheel3D } from '@/components/HeroWheel3D'
import { KineticText } from '@/components/KineticText'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const RIDER_APP_URL = 'https://moto-sync-ochre.vercel.app'

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-[#000000]">
      {/* Background Cyber Grid & NVIDIA-style Specular Flares */}
      <div className="absolute inset-0 bg-industrial-grid bg-[size:44px_44px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-electric-500/18 via-neon-purple/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[550px] h-[550px] bg-gradient-radial from-neon-purple/15 via-neon-red/6 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 Cols on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* NVIDIA Industrial Hardware Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-electric-500/40 bg-electric-500/10 px-4 py-1.5 text-xs font-mono font-bold text-electric-300 backdrop-blur-md mb-6 shadow-lg shadow-electric-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500" />
              </span>
              <span>[KERNEL // v1.0.0 PRODUCTION ONLINE]</span>
              <span className="hidden sm:inline text-white/30">/</span>
              <span className="hidden sm:inline text-neon-purple font-semibold">ANDROID APK & PWA</span>
            </motion.div>

            {/* Kinetic Tagline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
              <KineticText
                text="MotoSync: Ride Together. Sync Your Pack."
                highlightWords={['MotoSync', 'Ride', 'Together', 'Sync', 'Pack']}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-neon-violet to-neon-fuchsia glow-electric"
              />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans mb-8"
            >
              The ultimate multi-repository motorcycle community platform. Real-time live radar, AI exhaust vaults, and pack telemetry.
            </motion.p>

            {/* High-Impact Glowing Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-electric-500 via-neon-purple to-neon-fuchsia px-8 py-4 text-sm font-black text-white shadow-xl shadow-electric-500/30 hover:opacity-95 active:scale-95 transition duration-200"
              >
                <Smartphone className="h-4 w-4 text-white" />
                <span>DOWNLOAD ANDROID APK</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl hover:border-electric-400 hover:bg-white/[0.1] hover:text-white transition duration-200"
              >
                <span>EXPLORE PLATFORM</span>
                <ArrowRight className="h-4 w-4 text-electric-400" />
              </a>

              <a
                href={RIDER_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-mono text-white/60 hover:text-electric-400 py-3 sm:py-0 transition"
              >
                <span>Launch Web App</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* NVIDIA Industrial Telemetry Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-7 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-5 font-mono text-xs text-white/60"
            >
              <div className="flex items-center gap-2 bg-[#05070a] px-3 py-1.5 rounded-lg border border-white/10">
                <Radio className="h-3.5 w-3.5 text-electric-400" />
                <span>LATENCY: <strong className="text-white">&lt;11ms</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#05070a] px-3 py-1.5 rounded-lg border border-white/10">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>SECURITY: <strong className="text-white">POSTGRES RLS</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#05070a] px-3 py-1.5 rounded-lg border border-white/10">
                <Cpu className="h-3.5 w-3.5 text-neon-purple" />
                <span>COMPILER: <strong className="text-white">SDK 36 NATIVE</strong></span>
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
