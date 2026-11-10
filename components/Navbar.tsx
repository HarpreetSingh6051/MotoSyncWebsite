'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Compass, Download, Menu, Smartphone, X, Radio } from 'lucide-react'
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
          ? 'bg-void/85 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Cinematic Compass & Monospace Typography */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-void shadow-[0_0_18px_rgba(0,243,255,0.4)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,243,255,0.7)] transition duration-300">
              <Compass className="h-4 w-4 text-void font-black group-hover:rotate-45 transition duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-textHeading font-display">
              MOTO<span className="text-cyan-400 font-normal">SYNC</span>
            </span>
          </a>

          {/* Floating Pill Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-surface-glass px-4 py-1.5 backdrop-blur-xl text-xs font-display font-medium text-textSupport shadow-lg">
            <a
              href="#hero"
              className="px-3.5 py-1 rounded-full hover:text-white hover:bg-white/5 transition"
            >
              Overview
            </a>
            <a
              href="#story"
              className="px-3.5 py-1 rounded-full hover:text-white hover:bg-white/5 transition flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              The Journey
            </a>
            <a
              href="#download"
              className="px-3.5 py-1 rounded-full hover:text-white hover:bg-white/5 transition"
            >
              Download
            </a>
          </nav>

          {/* Right Action Stack: Sound Toggle + APK CTA */}
          <div className="flex items-center gap-2.5">
            {/* Ambient Engine Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-display font-medium transition-all duration-300 focus:outline-none ${
                isPlaying
                  ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                  : 'border-white/10 bg-white/5 text-textSupport hover:text-textHeading hover:border-white/20'
              }`}
              title={isPlaying ? 'Mute ambient sound' : 'Play ambient engine sound'}
              aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient engine sound'}
            >
              <MiniEqualizer isPlaying={isPlaying} />
              <span className="hidden sm:inline">
                {isPlaying ? 'AUDIO ON' : 'AUDIO'}
              </span>
            </button>

            {/* Desktop CTA: Glowing Sunset Orange */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={APK_URL}
              download="motosync.apk"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1.5 text-xs font-display font-bold text-void shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_28px_rgba(255,107,0,0.6)] transition"
            >
              <Smartphone className="h-3.5 w-3.5 text-void" />
              <span>GET APK</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-surface-glass text-textHeading shadow-md"
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
            className="md:hidden mt-3 pt-3 border border-white/10 space-y-2 pb-3 font-display text-sm bg-void/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl"
          >
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-textSupport hover:text-white font-medium"
            >
              Overview
            </a>
            <a
              href="#story"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-textSupport hover:text-white font-medium flex items-center justify-between"
            >
              <span>The Journey</span>
              <span className="text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                7 SCENES
              </span>
            </a>
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-textSupport hover:text-white font-medium"
            >
              Download APK
            </a>
            <div className="pt-2">
              <a
                href={APK_URL}
                download="motosync.apk"
                className="w-full inline-flex items-center justify-center gap-2 rounded-button bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-sm font-bold text-void font-display shadow-[0_0_20px_rgba(255,107,0,0.4)]"
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
