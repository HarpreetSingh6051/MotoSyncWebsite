'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Chapter {
  id: string
  label: string
  num: string
}

const CHAPTERS: Chapter[] = [
  { id: 'hero', label: 'Overview', num: '00' },
  { id: 'planning', label: 'Planning', num: '01' },
  { id: 'rendezvous', label: 'Rendezvous', num: '02' },
  { id: 'settlement', label: 'Settlement', num: '03' },
  { id: 'community', label: 'Community', num: '04' },
  { id: 'comms', label: 'Comms', num: '05' },
  { id: 'download', label: 'Download', num: '06' },
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
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-auto"
    >
      {CHAPTERS.map((ch) => {
        const isActive = activeChapter === ch.id
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            className="group flex items-center gap-2.5 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 rounded-full"
            aria-label={`Jump to ${ch.label}`}
          >
            {/* Label reveal on hover or active */}
            <span
              className={`text-[10px] font-display font-medium tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'text-neutral-950 opacity-100 translate-x-0'
                  : 'text-neutral-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {ch.num} {ch.label}
            </span>

            {/* Indicator Dot */}
            <div className="relative flex items-center justify-center w-3 h-3">
              {isActive && (
                <motion.span
                  layoutId="activeDotGlow"
                  className="absolute inset-0 rounded-full bg-neutral-400/40 blur-[2px]"
                />
              )}
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-neutral-950 shadow-[0_0_8px_rgba(0,0,0,0.3)]'
                    : 'w-1.5 h-1.5 bg-neutral-300 group-hover:bg-neutral-500 group-hover:scale-125'
                }`}
              />
            </div>
          </button>
        )
      })}
    </nav>
  )
}
