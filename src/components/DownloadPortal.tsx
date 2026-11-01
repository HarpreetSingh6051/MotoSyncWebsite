import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  QrCode,
  Shield,
  Smartphone,
} from 'lucide-react'
import { SpotlightCard } from '@/components/SpotlightCard'
import { KineticText } from '@/components/KineticText'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const RIDER_APP_URL = 'https://moto-sync-ochre.vercel.app'
const ADMIN_APP_URL = 'https://moto-sync-admin.vercel.app'

export const DownloadPortal = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(APK_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="download" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-electric-500/15 via-neon-purple/10 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-electric-500/10 px-4 py-1.5 text-xs font-mono font-bold text-electric-300 mb-4"
        >
          <Smartphone className="h-3.5 w-3.5" />
          <span>[DISTRIBUTION // NATIVE_AND_PWA]</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          <KineticText
            text="Install MotoSync On Your Phone or Ride on the Web"
            highlightWords={['Install', 'Phone', 'Ride']}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-neon-purple to-neon-fuchsia glow-electric"
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans max-w-2xl mx-auto">
          Zero app store delays. Direct sideloading APK package built for high-performance telemetry, or instant progressive web app access across any modern mobile browser.
        </p>
      </div>

      {/* Portal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main APK Installation Card (7 Columns) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            variant="blue"
            className="border-electric-500/40 p-8 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl font-black text-white tracking-tight">MotoSync Android APK</h3>
                  <span className="rounded-md border border-electric-500/40 bg-electric-500/20 px-2 py-0.5 text-[11px] font-mono font-bold text-electric-300">
                    v1.0.0 STABLE
                  </span>
                </div>
                <p className="text-sm text-white/50 mt-1 font-sans">
                  Compiled natively with Capacitor 7, Android SDK 36, & OpenJDK 21.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                <Shield className="h-4 w-4" />
                <span>SHA-256 SIGNED</span>
              </div>
            </div>

            {/* Spec Highlights Grid */}
            <div className="my-6 grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-white/10 bg-[#020306] p-3 text-center shadow-inner">
                <p className="text-white/40 text-[10px] uppercase">PACKAGE SIZE</p>
                <p className="text-base font-black text-white mt-0.5">4.46 MB</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#020306] p-3 text-center shadow-inner">
                <p className="text-white/40 text-[10px] uppercase">ANDROID REQ.</p>
                <p className="text-base font-black text-neon-purple mt-0.5">Android 9–15+</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#020306] p-3 text-center shadow-inner">
                <p className="text-white/40 text-[10px] uppercase">COMPILER</p>
                <p className="text-base font-black text-electric-400 mt-0.5">SDK 36</p>
              </div>
            </div>

            {/* High-Impact CTA Button */}
            <div className="space-y-3">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-electric-500 via-neon-purple to-neon-fuchsia px-7 py-4 text-base font-black text-white shadow-xl shadow-electric-500/25 hover:opacity-95 active:scale-[0.99] transition duration-200"
              >
                <Download className="h-5 w-5 text-white" />
                <span>DOWNLOAD ANDROID APK (DIRECT)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-white/50 pt-1 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Free · Direct Sideloading
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="text-electric-400 hover:text-electric-300 transition"
                >
                  {copied ? '✓ Copied Direct Link!' : 'Copy APK Link'}
                </button>
              </div>
            </div>

            {/* 3 Step Installation Guide */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-3 text-xs">
              <p className="font-bold text-white/90 uppercase tracking-wider text-[11px] font-mono">
                INSTALLATION IN 3 STEPS:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                  <span className="font-mono text-electric-400 font-bold mr-1.5">01.</span>
                  <span className="text-white/70">Tap download above to save the .apk file.</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                  <span className="font-mono text-neon-purple font-bold mr-1.5">02.</span>
                  <span className="text-white/70">Allow "Install Unknown Apps" in Settings.</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/60 p-3">
                  <span className="font-mono text-emerald-400 font-bold mr-1.5">03.</span>
                  <span className="text-white/70">Launch MotoSync and connect your pack!</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* QR Scan & PWA Cards (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          {/* QR Code Scan Card */}
          <SpotlightCard variant="purple" className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <QrCode className="h-4 w-4 text-neon-purple" />
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                MOBILE CAMERA QUICK SCAN
              </h4>
            </div>
            <p className="text-xs text-white/50 mb-4 font-sans">
              Scan with your phone to start download immediately on your device.
            </p>

            {/* High-Contrast SVG QR Container */}
            <div className="relative mx-auto w-44 h-44 rounded-2xl border-2 border-neon-purple/40 bg-black p-3.5 flex items-center justify-center shadow-xl shadow-neon-purple/20">
              <div className="absolute inset-2 border border-neon-purple/20 rounded-xl pointer-events-none" />
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                {/* 3 Corner Markers */}
                <rect x="5" y="5" width="25" height="25" rx="4" fill="#10b1fb" />
                <rect x="9" y="9" width="17" height="17" rx="2" fill="#000000" />
                <rect x="13" y="13" width="9" height="9" fill="#8b5cf6" />

                <rect x="70" y="5" width="25" height="25" rx="4" fill="#10b1fb" />
                <rect x="74" y="9" width="17" height="17" rx="2" fill="#000000" />
                <rect x="78" y="13" width="9" height="9" fill="#8b5cf6" />

                <rect x="5" y="70" width="25" height="25" rx="4" fill="#10b1fb" />
                <rect x="9" y="74" width="17" height="17" rx="2" fill="#000000" />
                <rect x="13" y="78" width="9" height="9" fill="#8b5cf6" />

                {/* Data Matrix */}
                <rect x="36" y="12" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="48" y="12" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="42" y="24" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="54" y="24" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="12" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="24" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="36" y="36" width="28" height="28" rx="3" fill="#8b5cf6" opacity="0.9" />
                <rect x="72" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="84" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="42" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="54" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="72" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="84" y="84" width="6" height="6" rx="1" fill="#ffffff" />
              </svg>
            </div>
          </SpotlightCard>

          {/* Web App & Admin ERP Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={RIDER_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-surface-900/80 p-4 transition hover:border-electric-500/50 hover:bg-surface-850"
            >
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Rider Web App</span>
                  <ExternalLink className="h-3 w-3 text-electric-400" />
                </p>
                <p className="text-[11px] text-white/50 mt-1 font-sans">Instant in-browser PWA for iOS & Desktop.</p>
              </div>
              <span className="mt-3 text-[11px] font-mono text-electric-400 font-bold flex items-center gap-1">
                Launch App <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-surface-900/80 p-4 transition hover:border-neon-purple/50 hover:bg-surface-850"
            >
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Super Admin ERP</span>
                  <ExternalLink className="h-3 w-3 text-neon-purple" />
                </p>
                <p className="text-[11px] text-white/50 mt-1 font-sans">Fleet intelligence, CRM & analytics.</p>
              </div>
              <span className="mt-3 text-[11px] font-mono text-neon-purple font-bold flex items-center gap-1">
                Open Portal <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
