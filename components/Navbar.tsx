'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Compass, Download, Menu, Smartphone, Volume2, VolumeX, X } from 'lucide-react'
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
          ? 'bg-midnight-950/85 backdrop-blur-2xl border-b border-surface-border py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 via-violet-500 to-ember-500 p-0.5 shadow-lg shadow-electric-500/20 group-hover:scale-105 transition duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-midnight-950">
                <Compass className="h-5 w-5 text-electric-400 group-hover:rotate-45 transition duration-300" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-heading font-display">
              MOTO<span className="text-electric-400">SYNC</span>
            </span>
          </a>

          {/* Floating Pill Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-surface-border bg-midnight-900/80 px-4 py-1.5 backdrop-blur-xl text-xs font-display font-medium text-text-support shadow-lg">
            <a
              href="#hero"
              className="px-3.5 py-1 rounded-full hover:text-text-heading hover:bg-white/5 transition"
            >
              Overview
            </a>
            <a
              href="#journey"
              className="px-3.5 py-1 rounded-full hover:text-text-heading hover:bg-white/5 transition"
            >
              The Journey
            </a>
            <a
              href="#download"
              className="px-3.5 py-1 rounded-full hover:text-text-heading hover:bg-white/5 transition"
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
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-display font-medium transition-all duration-200 focus:outline-none ${
                isPlaying
                  ? 'border-violet-500/50 bg-violet-500/15 text-violet-300 shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]'
                  : 'border-surface-border bg-midnight-900/70 text-text-muted hover:text-text-support hover:border-white/20'
              }`}
              title={isPlaying ? 'Mute ambient sound' : 'Play ambient engine loop'}
              aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient engine loop'}
            >
              <MiniEqualizer isPlaying={isPlaying} />
              <span className="hidden sm:inline">
                {isPlaying ? 'SOUND ON' : 'SOUND'}
              </span>
            </button>

            {/* Desktop CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={APK_URL}
              download="motosync.apk"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-gradient-to-r from-electric-500/20 via-violet-500/20 to-electric-500/20 px-4 py-1.5 text-xs font-display font-bold text-text-heading shadow-[0_0_20px_-5px_#10B1FB] transition hover:border-electric-400"
            >
              <Smartphone className="h-3.5 w-3.5 text-electric-400" />
              <span>GET APK</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl border border-surface-border bg-midnight-900/80 text-text-heading"
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
            className="md:hidden mt-3 pt-3 border-t border-surface-border space-y-2 pb-3 font-display text-sm"
          >
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-text-support hover:text-text-heading"
            >
              Overview
            </a>
            <a
              href="#journey"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-text-support hover:text-text-heading"
            >
              The Journey
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-text-support hover:text-text-heading"
            >
              Download APK
            </a>
            <div className="pt-2">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full inline-flex items-center justify-center gap-2 rounded-button bg-electric-500 px-4 py-3 text-sm font-bold text-midnight-950 font-display"
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
