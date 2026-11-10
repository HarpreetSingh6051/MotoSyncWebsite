'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, ShieldCheck, QrCode, Globe, ChevronRight, Zap } from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const WEB_URL = 'https://moto-sync-ochre.vercel.app'

export function DownloadScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0])

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
      ref={containerRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-radial from-electric-500/15 via-violet-500/8 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-gradient-radial from-violet-500/12 to-transparent rounded-full blur-[120px]" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Step Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-300 text-xs font-display font-semibold uppercase tracking-wider">
            <Download className="w-3.5 h-3.5 text-electric-400 animate-bounce" />
            <span>06 // GET THE APP</span>
          </div>
        </div>

        {/* Headlines - Strictly max 5 words & 10 words */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-heading mb-4 font-display">
            Ready To Roll?
          </h2>
          <p className="text-base sm:text-xl text-text-support max-w-md mx-auto font-sans">
            Download MotoSync Android APK now.
          </p>
        </div>

        {/* Main APK Showcase Card */}
        <div className="relative group max-w-4xl mx-auto mb-14">
          {/* Luminous Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-electric-500 via-violet-500 to-ember-500 rounded-card blur-xl opacity-35 group-hover:opacity-60 transition duration-500" />

          <div className="relative rounded-card bg-midnight-900/90 border border-electric-500/40 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(16,177,251,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* App Info & Action Button */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 via-violet-600 to-midnight-950 p-0.5 shadow-xl shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-midnight-950 flex items-center justify-center">
                      <span className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-text-heading via-electric-300 to-electric-500 bg-clip-text text-transparent font-display">
                        M
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-text-heading font-display">
                        MotoSync Android
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-success-500/20 border border-success-500/40 text-success-500 text-xs font-display font-semibold">
                        v2.0
                      </span>
                    </div>
                    <p className="text-xs text-text-support font-display mt-0.5">
                      Production Build • MotoSync Pack System
                    </p>
                  </div>
                </div>

                {/* Real Clean Spec Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-midnight-850/80 border border-surface-border text-center">
                    <div className="text-[10px] uppercase font-display text-text-muted">Target</div>
                    <div className="text-xs font-semibold text-text-heading mt-0.5 font-display">
                      Android 9+
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-midnight-850/80 border border-surface-border text-center">
                    <div className="text-[10px] uppercase font-display text-text-muted">Package</div>
                    <div className="text-xs font-semibold text-electric-400 mt-0.5 font-display">
                      Standalone APK
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-midnight-850/80 border border-surface-border text-center">
                    <div className="text-[10px] uppercase font-display text-text-muted">Install</div>
                    <div className="text-xs font-semibold text-success-500 mt-0.5 font-display">
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
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-button bg-gradient-to-r from-electric-500 via-violet-500 to-ember-500 text-midnight-950 font-bold text-base font-display shadow-[0_0_35px_rgba(16,177,251,0.5)] hover:shadow-[0_0_50px_rgba(16,177,251,0.8)] transition duration-200"
                  >
                    <Download className="w-5 h-5 text-midnight-950" />
                    <span>Download MotoSync APK</span>
                    <ChevronRight className="w-5 h-5 text-midnight-950/70" />
                  </motion.a>

                  {/* Web PWA fallback option */}
                  <div className="text-center">
                    <a
                      href={WEB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-text-support hover:text-electric-400 transition-colors py-1 font-display"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Or launch instant Web PWA in mobile browser</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Code Scan on Desktop */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-midnight-850/50 border border-surface-border text-center">
                <div className="w-36 h-36 bg-white p-2.5 rounded-2xl shadow-xl flex items-center justify-center mb-3">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-midnight-950"
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

                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-heading font-display">
                  <QrCode className="w-3.5 h-3.5 text-electric-400" />
                  <span>Scan to Download on Phone</span>
                </div>
                <p className="text-[11px] text-text-muted font-display mt-1">
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
              className="p-5 rounded-2xl bg-midnight-900/60 border border-surface-border backdrop-blur-sm flex items-start gap-4 hover:border-electric-500/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0">
                <st.icon className="w-5 h-5 text-electric-400" />
              </div>
              <div>
                <div className="text-[10px] font-display font-bold text-electric-400 mb-0.5">
                  {st.num}
                </div>
                <div className="text-sm font-bold text-text-heading mb-1 font-display">
                  {st.title}
                </div>
                <div className="text-xs text-text-support leading-relaxed font-sans">
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
