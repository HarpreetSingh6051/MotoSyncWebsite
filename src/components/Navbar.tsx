import { useState, useEffect } from 'react'
import {
  Compass,
  ExternalLink,
  Menu,
  Shield,
  Smartphone,
  X,
} from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'
const RIDER_APP_URL = 'https://moto-sync-ochre.vercel.app'
const ADMIN_APP_URL = 'https://moto-sync-admin.vercel.app'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-ink-950">
                <Compass className="h-5 w-5 text-amber-400 group-hover:rotate-45 transition duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-wider text-white font-mono">
                  MOTO<span className="text-amber-400">SYNC</span>
                </span>
                <span className="rounded-full bg-amber-400/10 px-1.5 py-0.2 text-[9px] font-mono font-semibold text-amber-400 border border-amber-400/20">
                  v1.0
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-white/70">
            <a href="#features" className="hover:text-amber-400 transition">
              Features
            </a>
            <a href="#ecosystem" className="hover:text-amber-400 transition">
              Ecosystem
            </a>
            <a href="#download" className="hover:text-amber-400 transition">
              Install APK
            </a>
            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition flex items-center gap-1"
            >
              <Shield className="h-3.5 w-3.5 text-cyan-400" />
              <span>Admin ERP</span>
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APK_URL}
              download="motosync.apk"
              className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-500/20 hover:border-emerald-500/50"
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Get APK</span>
            </a>

            <a
              href={RIDER_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/[0.08] border border-white/15 px-4 py-1.5 text-xs font-semibold text-white transition hover:border-amber-400/50 hover:bg-white/15"
            >
              <span>Launch App</span>
              <ExternalLink className="h-3 w-3 text-amber-400" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/[0.08] space-y-3 pb-4">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-amber-400 py-1"
            >
              Features & Bento Grid
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-amber-400 py-1"
            >
              Ecosystem Architecture
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-amber-400 py-1"
            >
              Install APK
            </a>
            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-semibold text-cyan-400 py-1"
            >
              Super Admin ERP Dashboard ↗
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full text-center rounded-xl bg-emerald-500 py-2.5 text-xs font-bold text-black shadow"
              >
                Download Android APK (4.46 MB)
              </a>
              <a
                href={RIDER_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-white"
              >
                Launch Rider Web App ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
