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
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Electric Glow */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 via-neon-purple to-neon-fuchsia p-0.5 shadow-lg shadow-electric-500/25 group-hover:scale-105 transition duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
                <Compass className="h-5 w-5 text-electric-400 group-hover:rotate-45 transition duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-white font-mono">
                  MOTO<span className="text-electric-400">SYNC</span>
                </span>
                <span className="rounded-full bg-electric-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-electric-400 border border-electric-500/30">
                  v1.0
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links (Smooth Floating Pill) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#05070a]/80 px-4 py-1.5 backdrop-blur-xl text-xs font-mono font-semibold text-white/70 shadow-lg">
            <a href="#features" className="px-3 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              FEATURES
            </a>
            <a href="#ecosystem" className="px-3 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              ECOSYSTEM
            </a>
            <a href="#download" className="px-3 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              INSTALL APK
            </a>
            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full text-neon-purple hover:text-neon-violet hover:bg-neon-purple/10 transition flex items-center gap-1"
            >
              <Shield className="h-3.5 w-3.5" />
              <span>ADMIN ERP</span>
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APK_URL}
              download="motosync.apk"
              className="flex items-center gap-1.5 rounded-full border border-electric-500/40 bg-electric-500/10 px-3.5 py-1.5 text-xs font-mono font-bold text-electric-300 transition hover:bg-electric-500/20 hover:border-electric-500/60 shadow-lg shadow-electric-500/10"
            >
              <Smartphone className="h-3.5 w-3.5 text-electric-400" />
              <span>GET APK</span>
            </a>

            <a
              href={RIDER_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/[0.08] border border-white/20 px-4 py-1.5 text-xs font-mono font-bold text-white transition hover:border-neon-purple/50 hover:bg-neon-purple/10"
            >
              <span>LAUNCH APP</span>
              <ExternalLink className="h-3 w-3 text-neon-purple" />
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
          <div className="md:hidden mt-4 pt-4 border-t border-white/[0.08] space-y-3 pb-4 font-mono">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-electric-400 py-1"
            >
              Features & Bento Grid
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-electric-400 py-1"
            >
              Ecosystem Architecture
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white/80 hover:text-electric-400 py-1"
            >
              Install Android APK
            </a>
            <a
              href={ADMIN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-semibold text-neon-purple py-1"
            >
              Super Admin ERP Dashboard ↗
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full text-center rounded-xl bg-gradient-to-r from-electric-500 to-neon-purple py-2.5 text-xs font-bold text-white shadow-lg shadow-electric-500/20"
              >
                DOWNLOAD ANDROID APK (4.46 MB)
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
