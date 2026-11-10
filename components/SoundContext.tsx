'use client'

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

interface SoundContextType {
  isPlaying: boolean
  toggleSound: () => void
}

const SoundContext = createContext<SoundContextType>({
  isPlaying: false,
  toggleSound: () => {},
})

export const useSound = () => useContext(SoundContext)

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const wasPlayingBeforeHidden = useRef(false)

  useEffect(() => {
    const audio = new Audio('/audio/ambient_loop.wav')
    audio.loop = true
    audio.volume = 0.22
    audioRef.current = audio

    // Check saved state
    const saved = localStorage.getItem('motosync_sound')
    if (saved === 'true') {
      // Browsers block autoplay without gesture, listen for first interaction
      const handleFirstInteraction = () => {
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // Autoplay policy prevented
        })
        window.removeEventListener('click', handleFirstInteraction)
        window.removeEventListener('keydown', handleFirstInteraction)
        window.removeEventListener('touchstart', handleFirstInteraction)
      }

      window.addEventListener('click', handleFirstInteraction, { once: true })
      window.addEventListener('keydown', handleFirstInteraction, { once: true })
      window.addEventListener('touchstart', handleFirstInteraction, { once: true })
    }

    // Visibility change handler (pause on tab switch / lock)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          wasPlayingBeforeHidden.current = true
          audioRef.current.pause()
          setIsPlaying(false)
        }
      } else {
        if (wasPlayingBeforeHidden.current && audioRef.current) {
          wasPlayingBeforeHidden.current = false
          audioRef.current.play().then(() => {
            setIsPlaying(true)
          }).catch(() => {})
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleSound = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      // Fade out smoothly
      const currentVol = audioRef.current.volume
      const fadeInterval = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.03) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.05)
        } else {
          clearInterval(fadeInterval)
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.volume = 0.22
          }
          setIsPlaying(false)
          localStorage.setItem('motosync_sound', 'false')
        }
      }, 30)
    } else {
      audioRef.current.volume = 0.02
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        localStorage.setItem('motosync_sound', 'true')
        // Fade in
        const fadeInterval = setInterval(() => {
          if (audioRef.current && audioRef.current.volume < 0.22) {
            audioRef.current.volume = Math.min(0.22, audioRef.current.volume + 0.04)
          } else {
            clearInterval(fadeInterval)
          }
        }, 30)
      }).catch((err) => {
        console.warn('Playback prevented:', err)
      })
    }
  }

  return (
    <SoundContext.Provider value={{ isPlaying, toggleSound }}>
      {children}
    </SoundContext.Provider>
  )
}

/**
 * Animated Mini Equalizer for Navbar and Floating Pills
 */
export function MiniEqualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-[2.5px] h-3.5 w-3.5 px-0.5" aria-hidden="true">
      <span
        className={`w-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
          isPlaying ? 'animate-waveform shadow-[0_0_6px_rgba(0,243,255,0.8)]' : 'h-[3px] opacity-40'
        }`}
        style={{ animationDelay: '0ms' }}
      />
      <span
        className={`w-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
          isPlaying ? 'animate-waveform shadow-[0_0_6px_rgba(0,243,255,0.8)]' : 'h-[8px] opacity-40'
        }`}
        style={{ animationDelay: '200ms' }}
      />
      <span
        className={`w-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
          isPlaying ? 'animate-waveform shadow-[0_0_6px_rgba(0,243,255,0.8)]' : 'h-[4px] opacity-40'
        }`}
        style={{ animationDelay: '400ms' }}
      />
    </div>
  )
}
