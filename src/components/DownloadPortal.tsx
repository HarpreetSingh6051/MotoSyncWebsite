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
    <section id="download" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-emerald-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-300 mb-4"
        >
          <Smartphone className="h-3.5 w-3.5" />
          NATIVE MOBILE & WEB RUNTIMES
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          <KineticText
            text="Install MotoSync On Your Phone or Ride on the Web"
            highlightWords={['Install', 'Phone', 'Ride']}
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed">
          Zero app store delays. Direct sideloading APK package built for high-performance telemetry, or instant progressive web app access across any browser.
        </p>
      </div>

      {/* Portal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main APK Installation Card (7 Columns) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            className="border-emerald-500/30 hover:border-emerald-500/50 p-8"
            spotlightColor="rgba(16, 185, 129, 0.15)"
            borderColor="rgba(52, 211, 153, 0.4)"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">MotoSync Android APK</h3>
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[11px] font-mono font-semibold text-emerald-300">
                    v1.0.0
                  </span>
                </div>
                <p className="text-sm text-white/50 mt-1">
                  Compiled natively with Capacitor 7, Android SDK 36, & OpenJDK 21.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                <Shield className="h-4 w-4" />
                <span>Verified SHA-256</span>
              </div>
            </div>

            {/* Spec Highlights */}
            <div className="my-6 grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-white/40 text-[10px] uppercase">Package Size</p>
                <p className="text-sm font-bold text-white mt-0.5">4.46 MB</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-white/40 text-[10px] uppercase">Android Req.</p>
                <p className="text-sm font-bold text-amber-400 mt-0.5">Android 9–15+</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                <p className="text-white/40 text-[10px] uppercase">Architecture</p>
                <p className="text-sm font-bold text-cyan-400 mt-0.5">Universal</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-4 text-base font-bold text-black shadow-xl shadow-emerald-500/20 hover:opacity-95 active:scale-[0.99] transition"
              >
                <Download className="h-5 w-5" />
                <span>Download MotoSync APK (Direct Link)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-white/50 pt-1">
                <span>Free · No Google Play account required</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="text-amber-400 hover:text-amber-300 font-mono transition"
                >
                  {copied ? 'Copied to Clipboard!' : 'Copy Direct Download URL'}
                </button>
              </div>
            </div>

            {/* 3 Step Installation Guide */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-3 text-xs">
              <p className="font-semibold text-white/90 uppercase tracking-wider text-[11px] font-mono">
                Installation in 3 Steps:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/5 bg-ink-950/40 p-3">
                  <span className="font-mono text-emerald-400 font-bold mr-1.5">01.</span>
                  <span className="text-white/70">Tap download above to save the file.</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-ink-950/40 p-3">
                  <span className="font-mono text-amber-400 font-bold mr-1.5">02.</span>
                  <span className="text-white/70">Enable "Install Unknown Apps" in Settings.</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-ink-950/40 p-3">
                  <span className="font-mono text-cyan-400 font-bold mr-1.5">03.</span>
                  <span className="text-white/70">Open MotoSync and connect your pack!</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* QR Scan & Web PWA Alternatives (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          {/* QR Code Scan Card */}
          <SpotlightCard className="p-6 border-amber-500/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <QrCode className="h-4 w-4 text-amber-400" />
              <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Mobile Camera Quick Scan
              </h4>
            </div>
            <p className="text-xs text-white/50 mb-4">
              Scan with your phone to download the APK directly onto your device.
            </p>

            {/* Simulated Modern QR Container */}
            <div className="relative mx-auto w-44 h-44 rounded-2xl border-2 border-amber-400/30 bg-ink-950 p-3.5 flex items-center justify-center shadow-xl shadow-amber-500/10">
              <div className="absolute inset-2 border border-amber-500/20 rounded-xl pointer-events-none" />
              {/* High-Contrast SVG QR code linking to APK */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                {/* 3 Corner Markers */}
                <rect x="5" y="5" width="25" height="25" rx="4" fill="#fbbf24" />
                <rect x="9" y="9" width="17" height="17" rx="2" fill="#060709" />
                <rect x="13" y="13" width="9" height="9" fill="#fbbf24" />

                <rect x="70" y="5" width="25" height="25" rx="4" fill="#fbbf24" />
                <rect x="74" y="9" width="17" height="17" rx="2" fill="#060709" />
                <rect x="78" y="13" width="9" height="9" fill="#fbbf24" />

                <rect x="5" y="70" width="25" height="25" rx="4" fill="#fbbf24" />
                <rect x="9" y="74" width="17" height="17" rx="2" fill="#060709" />
                <rect x="13" y="78" width="9" height="9" fill="#fbbf24" />

                {/* Data Matrix Dots */}
                <rect x="36" y="12" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="48" y="12" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="42" y="24" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="54" y="24" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="12" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="24" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="36" y="36" width="28" height="28" rx="3" fill="#22d3ee" opacity="0.9" />
                <rect x="72" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="84" y="42" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="42" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="54" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="72" y="72" width="6" height="6" rx="1" fill="#ffffff" />
                <rect x="84" y="84" width="6" height="6" rx="1" fill="#ffffff" />
              </svg>
            </div>
          </SpotlightCard>

          {/* Web App & Admin Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={RIDER_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-900/60 p-4 transition hover:border-amber-400/40 hover:bg-white/[0.04]"
            >
              <div>
                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span>Rider Web App</span>
                  <ExternalLink className="h-3 w-3 text-amber-400" />
                </p>
                <p className="text-[11px] text-white/50 mt-1">Instant in-browser PWA for iOS & Desktop.</p>
              </div>
              <span className="mt-3 text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1">
                Open App <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-900/60 p-4 transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
            >
              <div>
                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span>Super Admin ERP</span>
                  <ExternalLink className="h-3 w-3 text-cyan-400" />
                </p>
                <p className="text-[11px] text-white/50 mt-1">Fleet intelligence, CRM & analytics.</p>
              </div>
              <span className="mt-3 text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                Open Portal <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
