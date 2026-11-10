import { Compass } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-950 py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center font-bold text-neutral-950 text-sm shadow-sm">
              M
            </div>
            <span className="font-bold text-white tracking-tight text-base font-display">
              Moto<span className="text-neutral-400">Sync</span>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-neutral-700" />

          {/* Live System Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-display">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Active</span>
          </div>
        </div>

        {/* Quick Rider Links */}
        <div className="flex items-center gap-6 text-xs text-neutral-400 font-display">
          <a
            href="#journey"
            className="hover:text-white transition-colors"
          >
            Journey
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app/motosync.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Download APK
          </a>
          <a
            href="https://moto-sync-ochre.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Web App
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-neutral-500 font-display text-center md:text-right">
          <span>&copy; {currentYear} MotoSync. Pack Connected. Ride in Sync.</span>
        </div>
      </div>
    </footer>
  )
}
