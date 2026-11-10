'use client'

import { motion } from 'framer-motion'
import {
  Download,
  Smartphone,
  QrCode,
  Globe,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Zap,
  Radio,
  Users,
  Compass,
} from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const WEB_URL = 'https://moto-sync-ochre.vercel.app'

export function GrandFinaleScene() {
  const comparisonItems = [
    {
      feature: 'Mesh Voice Intercom',
      motosync: 'Built-in 14ms peer-to-peer mesh with highway wind squelch',
      others: 'WhatsApp/Discord cellular drops at 90 km/h',
    },
    {
      feature: 'Live Radar & Convergence',
      motosync: '360° tactical HUD showing relative distance & heading',
      others: 'Static WhatsApp location pin drains phone in 2 hrs',
    },
    {
      feature: 'Dhaba & Fuel Splits',
      motosync: '1-tap auto splits with direct UPI zero-fee settlement',
      others: 'Awkward manual Splitwise calculators on napkins',
    },
    {
      feature: 'Offline Operation',
      motosync: '100% works without cellular network via direct mesh',
      others: 'Completely useless in remote ghats and mountains',
    },
  ]

  const installSteps = [
    {
      step: '01',
      title: 'Download APK',
      desc: 'Grab the lightweight 18 MB package directly to your Android device.',
    },
    {
      step: '02',
      title: 'Allow Sideload',
      desc: 'Tap "Install Unknown Apps" in Chrome settings when prompted.',
    },
    {
      step: '03',
      title: 'Ride in Sync',
      desc: 'Create or join a pack ride in 30 seconds. No phone signup required.',
    },
  ]

  return (
    <section
      id="download"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-void overflow-hidden select-none"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-cyan-500/15 via-orange-500/5 to-transparent blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-radial from-orange-500/10 via-transparent to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* SCENE 7 HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-orange-400 mb-6 tracking-wider shadow-[0_0_20px_rgba(255,107,0,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            <span>07 // THE GRAND FINALE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-textHeading font-display tracking-tight leading-[1.05] mb-6">
            Stop juggling apps.{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent glow-orange">
              Start riding together.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-textSupport font-sans max-w-2xl mx-auto leading-relaxed">
            No more switching between WhatsApp, Google Maps, and Splitwise. MotoSync unifies your entire pack into one seamless operating system.
          </p>
        </div>

        {/* COMPARISON MATRIX: MotoSync vs The 3 Disconnected Apps */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-surface/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Why Packs Switch to MotoSync
              </h3>
              <p className="text-xs text-textSupport font-sans mt-1">
                Comparing the dedicated motorcycle pack platform against juggling consumer apps.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                MOTOSYNC
              </span>
              <span className="text-textMuted text-xs font-mono">VS</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-textSupport text-xs font-mono">
                WHATSAPP + MAPS + SPLITWISE
              </span>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-4">
                  <span className="text-sm font-bold text-white font-display">
                    {item.feature}
                  </span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-cyan-300 text-xs font-sans">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.motosync}</span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-textMuted text-xs font-sans">
                  <XCircle className="w-4 h-4 text-red-400/80 shrink-0" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN DOWNLOAD SHOWCASE CARD */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#16181f] to-[#0c0d12] p-8 sm:p-12 shadow-2xl overflow-hidden mb-16">
          {/* Subtle Orange Glow Edge */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: App Package Details & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(0,243,255,0.4)] shrink-0">
                  <Compass className="w-8 h-8 text-void stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      MotoSync Android
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                      v2.0
                    </span>
                  </div>
                  <p className="text-xs text-textSupport font-mono mt-0.5">
                    Production Release • Android 9.0+ • 18 MB Package
                  </p>
                </div>
              </div>

              <p className="text-sm text-textSupport font-sans leading-relaxed">
                Direct APK download with zero Google Play bloat. Install directly on any Android phone or tablet. Works seamlessly with motorcycle handlebar mounts.
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-textMuted uppercase">Package</div>
                  <div className="text-xs font-bold text-white font-display mt-0.5">Standalone APK</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-textMuted uppercase">Security</div>
                  <div className="text-xs font-bold text-emerald-400 font-display mt-0.5">SHA-256 Clean</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-textMuted uppercase">Cost</div>
                  <div className="text-xs font-bold text-orange-400 font-display mt-0.5">100% Free</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={APK_URL}
                  download="motosync.apk"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-void font-bold text-base font-display shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition duration-300"
                >
                  <Download className="w-5 h-5 text-void stroke-[2.5]" />
                  <span>Download MotoSync APK (18 MB)</span>
                  <ChevronRight className="w-5 h-5 text-void" />
                </motion.a>

                {/* Instant Web PWA link for iOS & quick riders */}
                <div className="text-center">
                  <a
                    href={WEB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-textMuted hover:text-cyan-400 transition-colors font-mono py-1"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Or launch instant Web PWA directly in mobile browser</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Scan to Download QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-void/80 border border-white/10 text-center">
              <div className="w-40 h-40 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center mb-4">
                {/* Clean Vector QR Code */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-black"
                  fill="currentColor"
                >
                  <rect x="5" y="5" width="28" height="28" rx="4" />
                  <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="13" width="12" height="12" rx="1" />
                  <rect x="67" y="5" width="28" height="28" rx="4" />
                  <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                  <rect x="75" y="13" width="12" height="12" rx="1" />
                  <rect x="5" y="67" width="28" height="28" rx="4" />
                  <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                  <rect x="13" y="75" width="12" height="12" rx="1" />
                  <rect x="38" y="10" width="6" height="6" />
                  <rect x="48" y="10" width="6" height="6" />
                  <rect x="40" y="22" width="6" height="12" />
                  <rect x="52" y="24" width="8" height="6" />
                  <rect x="10" y="38" width="8" height="8" />
                  <rect x="24" y="40" width="12" height="6" />
                  <rect x="40" y="40" width="20" height="20" />
                  <rect x="44" y="44" width="12" height="12" fill="white" />
                  <rect x="48" y="48" width="4" height="4" />
                  <rect x="68" y="38" width="10" height="8" />
                  <rect x="84" y="42" width="6" height="12" />
                  <rect x="40" y="66" width="8" height="8" />
                  <rect x="52" y="68" width="6" height="18" />
                  <rect x="68" y="68" width="14" height="6" />
                  <rect x="84" y="72" width="6" height="14" />
                  <rect x="68" y="82" width="8" height="8" />
                </svg>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-white font-display">
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span>Scan with Phone Camera</span>
              </div>
              <p className="text-[11px] text-textMuted font-mono mt-1">
                Directly opens APK download link on your phone
              </p>
            </div>
          </div>
        </div>

        {/* 3 INSTALLATION STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {installSteps.map((st) => (
            <div
              key={st.step}
              className="p-6 rounded-2xl bg-surface/60 border border-white/10 backdrop-blur-xl flex items-start gap-4 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 font-mono font-bold text-sm">
                {st.step}
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-textSupport leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
