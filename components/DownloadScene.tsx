'use client'

import { motion } from 'framer-motion'
import { Download, ShieldCheck, QrCode, Globe, ChevronRight, Zap } from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const WEB_URL = 'https://moto-sync-ochre.vercel.app'

export function DownloadScene() {
  const steps = [
    {
      num: '01',
      title: 'Download APK',
      desc: 'Grab the lightweight Android package.',
      icon: Download,
    },
    {
      num: '02',
      title: 'Allow Install',
      desc: 'Confirm install when prompted in browser.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Ride in Sync',
      desc: 'Launch MotoSync and start tracking your pack.',
      icon: Zap,
    },
  ]

  return (
    <section
      id="download"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-radial from-neutral-300/15 via-neutral-200/5 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Step Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-300 bg-white/80 text-neutral-600 text-xs font-display font-semibold uppercase tracking-wider shadow-studio-sm backdrop-blur-sm">
            <Download className="w-3.5 h-3.5 text-neutral-500 animate-bounce" />
            <span>06 // GET THE APP</span>
          </div>
        </div>

        {/* Headlines */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950 mb-4 font-display">
            Ready To Roll?
          </h2>
          <p className="text-base sm:text-xl text-slateText-body max-w-md mx-auto font-sans">
            Download MotoSync Android APK now.
          </p>
        </div>

        {/* Main APK Showcase Card */}
        <div className="relative group max-w-4xl mx-auto mb-14">
          {/* Subtle Elevation Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neutral-300/40 via-neutral-200/20 to-neutral-300/40 rounded-card blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />

          <div className="relative rounded-card bg-white border border-neutral-200 backdrop-blur-2xl p-6 sm:p-10 shadow-studio-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* App Info & Action Button */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-950 p-0.5 shadow-xl shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-neutral-950 flex items-center justify-center">
                      <span className="text-2xl font-black italic tracking-tighter text-white font-display">
                        M
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-neutral-950 font-display">
                        MotoSync Android
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-display font-semibold">
                        v2.0
                      </span>
                    </div>
                    <p className="text-xs text-slateText-muted font-display mt-0.5">
                      Production Build • MotoSync Pack System
                    </p>
                  </div>
                </div>

                {/* Spec Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-studio-100 border border-neutral-200 text-center">
                    <div className="text-[10px] uppercase font-display text-slateText-muted">Target</div>
                    <div className="text-xs font-semibold text-neutral-950 mt-0.5 font-display">
                      Android 9+
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-studio-100 border border-neutral-200 text-center">
                    <div className="text-[10px] uppercase font-display text-slateText-muted">Package</div>
                    <div className="text-xs font-semibold text-neutral-950 mt-0.5 font-display">
                      Standalone APK
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-studio-100 border border-neutral-200 text-center">
                    <div className="text-[10px] uppercase font-display text-slateText-muted">Install</div>
                    <div className="text-xs font-semibold text-emerald-600 mt-0.5 font-display">
                      Direct Sideload
                    </div>
                  </div>
                </div>

                {/* Primary Download Button */}
                <div className="space-y-3 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={APK_URL}
                    download="motosync.apk"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-button bg-neutral-950 text-white font-bold text-base font-display shadow-studio-md hover:bg-neutral-800 transition duration-200"
                  >
                    <Download className="w-5 h-5 text-neutral-300" />
                    <span>Download MotoSync APK</span>
                    <ChevronRight className="w-5 h-5 text-neutral-500" />
                  </motion.a>

                  {/* Web PWA fallback */}
                  <div className="text-center">
                    <a
                      href={WEB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-slateText-muted hover:text-neutral-950 transition-colors py-1 font-display"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Or launch instant Web PWA in mobile browser</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-studio-100 border border-neutral-200 text-center">
                <div className="w-36 h-36 bg-white p-2.5 rounded-2xl shadow-studio-sm border border-neutral-100 flex items-center justify-center mb-3">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-neutral-950"
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

                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-950 font-display">
                  <QrCode className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Scan to Download on Phone</span>
                </div>
                <p className="text-[11px] text-slateText-muted font-display mt-1">
                  Point phone camera at screen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Simple Install Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-5 rounded-2xl bg-white border border-neutral-200 backdrop-blur-sm flex items-start gap-4 hover:border-neutral-300 hover:shadow-studio-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-studio-100 border border-neutral-200 flex items-center justify-center shrink-0">
                <st.icon className="w-5 h-5 text-neutral-600" />
              </div>
              <div>
                <div className="text-[10px] font-display font-bold text-neutral-500 mb-0.5">
                  {st.num}
                </div>
                <div className="text-sm font-bold text-neutral-950 mb-1 font-display">
                  {st.title}
                </div>
                <div className="text-xs text-slateText-body leading-relaxed font-sans">
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
