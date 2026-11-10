'use client'

import { Compass, Radio, ShieldCheck, Smartphone, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-void py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Telemetry */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-void text-sm shadow-[0_0_15px_rgba(0,243,255,0.4)]">
              <Compass className="w-4 h-4 text-void" />
            </div>
            <span className="font-bold text-textHeading tracking-tight text-base font-display">
              MOTO<span className="text-cyan-400">SYNC</span>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-white/10" />

          {/* Telemetry Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>MESH ENGINE ONLINE • P2P READY</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-textSupport font-display">
          <a
            href="#story"
            className="hover:text-cyan-400 transition-colors"
          >
            The Journey
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app/motosync.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <Smartphone className="w-3.5 h-3.5 text-orange-500" />
            <span>Download APK</span>
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Live Web App</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-white/20">|</span>
          <span className="text-textMuted flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Tracking • No Ads</span>
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-textMuted font-mono text-center md:text-right">
          <span>&copy; {currentYear} MOTOSYNC PLATFORM. RIDE AS ONE.</span>
        </div>
      </div>
    </footer>
  )
}
