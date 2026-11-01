import { ShieldCheck, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-black py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-black italic text-black text-sm shadow-[0_0_15px_rgba(16,177,251,0.5)]">
              M
            </div>
            <span className="font-bold text-white tracking-tight text-base">
              Moto<span className="text-sky-400">Sync</span>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-white/20" />

          {/* Live System Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry & Mesh Comms Active</span>
          </div>
        </div>

        {/* Quick Rider Links */}
        <div className="flex items-center gap-6 text-xs text-white/50 font-medium">
          <a
            href="#journey"
            className="hover:text-sky-400 transition-colors"
          >
            Journey
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app/motosync.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            Download APK
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            Web App
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 font-mono text-center md:text-right">
          <span>&copy; {currentYear} MotoSync. Pack Connected. Ride in Sync.</span>
        </div>
      </div>
    </footer>
  )
}
