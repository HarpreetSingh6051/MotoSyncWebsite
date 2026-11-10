'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Compass, Download, Menu, Smartphone, X } from 'lucide-react'
import { useSound, MiniEqualizer } from './SoundContext'

const APK_URL = 'https://moto-sync-ochre.vercel.app/motosync.apk'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isPlaying, toggleSound } = useSound()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-neutral-200/80 py-3 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Clean Monochrome Studio Style */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm group-hover:scale-105 transition duration-200">
              <Compass className="h-4 w-4 text-white group-hover:rotate-45 transition duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-950 font-display">
              MOTO<span className="text-neutral-500 font-normal">SYNC</span>
            </span>
          </a>

          {/* Floating Pill Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-neutral-200/90 bg-white/80 px-4 py-1.5 backdrop-blur-xl text-xs font-display font-medium text-neutral-600 shadow-sm">
            <a
              href="#hero"
              className="px-3.5 py-1 rounded-full hover:text-neutral-950 hover:bg-neutral-100 transition"
            >
              Overview
            </a>
            <a
              href="#journey"
              className="px-3.5 py-1 rounded-full hover:text-neutral-950 hover:bg-neutral-100 transition"
            >
              The Journey
            </a>
            <a
              href="#download"
              className="px-3.5 py-1 rounded-full hover:text-neutral-950 hover:bg-neutral-100 transition"
            >
              Download
            </a>
          </nav>

          {/* Right Action Stack: Sound Toggle + APK CTA */}
          <div className="flex items-center gap-2.5">
            {/* Ambient Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-display font-medium transition-all duration-200 focus:outline-none shadow-studio-sm ${
                isPlaying
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:text-neutral-950 hover:border-neutral-400'
              }`}
              title={isPlaying ? 'Mute ambient sound' : 'Play ambient engine loop'}
              aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient engine loop'}
            >
              <MiniEqualizer isPlaying={isPlaying} />
              <span className="hidden sm:inline">
                {isPlaying ? 'AUDIO ON' : 'AUDIO'}
              </span>
            </button>

            {/* Desktop CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={APK_URL}
              download="motosync.apk"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-1.5 text-xs font-display font-bold text-white shadow-sm hover:bg-neutral-800 transition"
            >
              <Smartphone className="h-3.5 w-3.5 text-neutral-300" />
              <span>GET APK</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 pt-3 border-t border-neutral-200 space-y-2 pb-3 font-display text-sm bg-white/95 rounded-2xl p-4 shadow-studio-md"
          >
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-neutral-700 hover:text-neutral-950 font-medium"
            >
              Overview
            </a>
            <a
              href="#journey"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-neutral-700 hover:text-neutral-950 font-medium"
            >
              The Journey
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-neutral-700 hover:text-neutral-950 font-medium"
            >
              Download APK
            </a>
            <div className="pt-2">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full inline-flex items-center justify-center gap-2 rounded-button bg-neutral-950 px-4 py-3 text-sm font-bold text-white font-display shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Android APK</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
