'use client'

import { useState, useEffect } from 'react'
import { Compass, Download, Menu, Smartphone, X } from 'lucide-react'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 via-neon-purple to-neon-crimson p-0.5 shadow-lg shadow-electric-500/25 group-hover:scale-105 transition duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black">
                <Compass className="h-5 w-5 text-electric-400 group-hover:rotate-45 transition duration-300" />
              </div>
            </div>
            <span className="text-xl font-black tracking-wider text-white font-mono">
              MOTO<span className="text-electric-400">SYNC</span>
            </span>
          </a>

          {/* Smooth Floating Pill Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#05070a]/85 px-4 py-1.5 backdrop-blur-xl text-xs font-mono font-semibold text-white/70 shadow-lg">
            <a href="#hero" className="px-3.5 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              Overview
            </a>
            <a href="#journey" className="px-3.5 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              The Journey
            </a>
            <a href="#features" className="px-3.5 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              Features
            </a>
            <a href="#download" className="px-3.5 py-1 rounded-full hover:text-electric-400 hover:bg-white/5 transition">
              Download
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={APK_URL}
              download="motosync.apk"
              className="flex items-center gap-2 rounded-full border border-electric-500/40 bg-gradient-to-r from-electric-500/20 via-neon-purple/20 to-electric-500/20 px-4 py-1.5 text-xs font-mono font-bold text-white shadow-[0_0_20px_-5px_#10b1fb] transition hover:border-electric-400 hover:opacity-95"
            >
              <Smartphone className="h-3.5 w-3.5 text-electric-400" />
              <span>GET APK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-white"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 pb-3 font-mono text-sm">
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-white/80 hover:text-electric-400"
            >
              Overview
            </a>
            <a
              href="#journey"
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-white/80 hover:text-electric-400"
            >
              The Journey (Scroll Story)
            </a>
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-white/80 hover:text-electric-400"
            >
              Features
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-white/80 hover:text-electric-400"
            >
              Download Android APK
            </a>
            <a
              href={APK_URL}
              download="motosync.apk"
              className="block w-full text-center rounded-xl bg-electric-500 py-2.5 text-xs font-bold text-black font-mono shadow-lg"
            >
              DOWNLOAD APK (v1.0.0)
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
