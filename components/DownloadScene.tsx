'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Smartphone, ShieldCheck, QrCode, Globe, CheckCircle2, ChevronRight, Zap } from 'lucide-react'

export function DownloadScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.5])
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0])

  const steps = [
    {
      num: '01',
      title: 'Download APK',
      desc: 'Grab the lightweight Android package (4.46 MB).',
      icon: Download,
    },
    {
      num: '02',
      title: 'Allow Install',
      desc: 'Tap open and approve installation from your browser.',
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
      className="relative min-h-screen py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Background neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-neon-purple/15 rounded-full blur-[120px]" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Step pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Download className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
            <span>06 / GET THE APP</span>
          </div>
        </div>

        {/* Headlines - strictly matching 3 & 3 words */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Ready To Roll?
          </h2>
          <p className="text-base sm:text-xl text-white/60 max-w-md mx-auto">
            Download MotoSync now.
          </p>
        </div>

        {/* Main APK Showcase Card */}
        <div className="relative group max-w-4xl mx-auto mb-16">
          {/* Neon border glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />

          <div className="relative rounded-3xl bg-black/90 border border-sky-500/40 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(16,177,251,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* App Info & CTA */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-600 to-black p-0.5 shadow-xl shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-black flex items-center justify-center">
                      <span className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-white via-sky-300 to-sky-500 bg-clip-text text-transparent">
                        M
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white">MotoSync Android</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                        v1.0.0
                      </span>
                    </div>
                    <p className="text-xs text-white/50 font-mono mt-0.5">
                      Production Release • 4.46 MB • Signed APK
                    </p>
                  </div>
                </div>

                {/* Spec Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] uppercase font-mono text-white/40">Target</div>
                    <div className="text-xs font-semibold text-white mt-0.5">Android 8.0+</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] uppercase font-mono text-white/40">Size</div>
                    <div className="text-xs font-semibold text-sky-400 mt-0.5">4.46 MB</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] uppercase font-mono text-white/40">Security</div>
                    <div className="text-xs font-semibold text-emerald-400 mt-0.5">SHA-256 Clean</div>
                  </div>
                </div>

                {/* Primary Download Button */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://moto-sync-ochre.vercel.app/motosync.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-500 text-black font-bold text-base shadow-[0_0_35px_rgba(16,177,251,0.5)] hover:shadow-[0_0_50px_rgba(16,177,251,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <Download className="w-5 h-5 text-black" />
                    <span>Download MotoSync APK</span>
                    <ChevronRight className="w-5 h-5 text-black/70" />
                  </a>

                  {/* Web PWA fallback option */}
                  <div className="text-center">
                    <a
                      href="https://moto-sync-ochre.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-sky-400 transition-colors py-1"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Or launch instant Web PWA in mobile browser</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Code Scan on Desktop */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <div className="w-36 h-36 bg-white p-2.5 rounded-2xl shadow-xl flex items-center justify-center mb-3">
                  {/* High visual fidelity QR representation linking to APK */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-black"
                    fill="currentColor"
                  >
                    {/* Top-left position marker */}
                    <rect x="5" y="5" width="28" height="28" rx="4" />
                    <rect x="9" y="9" width="20" height="20" fill="white" rx="2" />
                    <rect x="13" y="13" width="12" height="12" rx="1" />

                    {/* Top-right position marker */}
                    <rect x="67" y="5" width="28" height="28" rx="4" />
                    <rect x="71" y="9" width="20" height="20" fill="white" rx="2" />
                    <rect x="75" y="13" width="12" height="12" rx="1" />

                    {/* Bottom-left position marker */}
                    <rect x="5" y="67" width="28" height="28" rx="4" />
                    <rect x="9" y="71" width="20" height="20" fill="white" rx="2" />
                    <rect x="13" y="75" width="12" height="12" rx="1" />

                    {/* Data modules pattern */}
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

                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <QrCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>Scan to Download on Phone</span>
                </div>
                <p className="text-[11px] text-white/40 font-mono mt-1">
                  Point camera at screen
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
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm flex items-start gap-4 hover:border-sky-500/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <st.icon className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-sky-400 mb-0.5">{st.num}</div>
                <div className="text-sm font-bold text-white mb-1">{st.title}</div>
                <div className="text-xs text-white/50 leading-relaxed">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
