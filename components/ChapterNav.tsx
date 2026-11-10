'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Chapter {
  id: string
  label: string
  num: string
}

const CHAPTERS: Chapter[] = [
  { id: 'hero', label: 'Overview', num: '01' },
  { id: 'story', label: 'The Journey', num: '02' },
  { id: 'download', label: 'Get MotoSync', num: '03' },
]

export function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= windowHeight * 0.45) {
            setActiveChapter(CHAPTERS[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Chapter Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-4 pointer-events-auto"
    >
      {CHAPTERS.map((ch) => {
        const isActive = activeChapter === ch.id
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            className="group flex items-center gap-3 py-1.5 focus:outline-none rounded-full"
            aria-label={`Jump to ${ch.label}`}
          >
            {/* Label reveal on hover or active */}
            <span
              className={`text-[10px] font-display font-medium tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-cyan-400 opacity-100 translate-x-0 font-bold'
                  : 'text-textMuted opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {ch.num} {ch.label}
            </span>

            {/* Indicator Dot */}
            <div className="relative flex items-center justify-center w-3 h-3">
              {isActive && (
                <motion.span
                  layoutId="activeDotGlow"
                  className="absolute inset-0 rounded-full bg-cyan-400/40 blur-[3px]"
                />
              )}
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,243,255,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/20 group-hover:bg-white/60 group-hover:scale-125'
                }`}
              />
            </div>
          </button>
        )
      })}
    </nav>
  )
}
