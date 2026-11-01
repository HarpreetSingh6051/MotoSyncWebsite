'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)
  const oscRef = useRef<OscillatorNode | null>(null)
  const padOscRef = useRef<OscillatorNode | null>(null)

  useEffect(() => {
    // Check saved state
    const saved = localStorage.getItem('motosync_sound')
    if (saved === 'true') {
      // Audio cannot autoplay until user interacts
      const onFirstTouch = () => {
        startSynthAudio()
        window.removeEventListener('click', onFirstTouch)
        window.removeEventListener('touchstart', onFirstTouch)
      }
      window.addEventListener('click', onFirstTouch, { once: true })
      window.addEventListener('touchstart', onFirstTouch, { once: true })
    }
  }, [])

  const startSynthAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        audioCtxRef.current = new AudioCtx()
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume()
      }

      const ctx = audioCtxRef.current
      const now = ctx.currentTime

      // Master Gain
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0.001, now)
      masterGain.gain.exponentialRampToValueAtTime(0.12, now + 1.5)
      masterGain.connect(ctx.destination)
      masterGainRef.current = masterGain

      // Sub-bass ambient engine rumble (40Hz)
      const osc = ctx.createOscillator()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(42, now)

      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(140, now)

      osc.connect(filter)
      filter.connect(masterGain)
      osc.start(now)
      oscRef.current = osc

      // Atmospheric futuristic harmonic pad (168Hz)
      const padOsc = ctx.createOscillator()
      padOsc.type = 'sine'
      padOsc.frequency.setValueAtTime(168, now)

      const padFilter = ctx.createBiquadFilter()
      padFilter.type = 'lowpass'
      padFilter.frequency.setValueAtTime(480, now)

      padOsc.connect(padFilter)
      padFilter.connect(masterGain)
      padOsc.start(now)
      padOscRef.current = padOsc

      setIsPlaying(true)
      localStorage.setItem('motosync_sound', 'true')
    } catch {
      // Audio context fallback
    }
  }

  const stopSynthAudio = () => {
    if (audioCtxRef.current && masterGainRef.current) {
      const now = audioCtxRef.current.currentTime
      masterGainRef.current.gain.linearRampToValueAtTime(0.001, now + 0.3)
      setTimeout(() => {
        try {
          oscRef.current?.stop()
          padOscRef.current?.stop()
          oscRef.current?.disconnect()
          padOscRef.current?.disconnect()
        } catch {}
        oscRef.current = null
        padOscRef.current = null
        setIsPlaying(false)
        localStorage.setItem('motosync_sound', 'false')
      }, 350)
    } else {
      setIsPlaying(false)
      localStorage.setItem('motosync_sound', 'false')
    }
  }

  const toggleSound = () => {
    if (isPlaying) {
      stopSynthAudio()
    } else {
      startSynthAudio()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={toggleSound}
        className="flex items-center gap-2.5 rounded-full border border-electric-500/30 bg-[#05070b]/90 px-3.5 py-2 text-xs font-mono font-semibold text-white/90 shadow-2xl backdrop-blur-xl transition hover:border-electric-400 hover:bg-electric-500/10 active:scale-95"
        aria-label={isPlaying ? 'Mute ambient track' : 'Play ambient track'}
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-electric-400" />
        ) : (
          <VolumeX className="h-4 w-4 text-white/40" />
        )}

        <div className="flex items-center gap-0.5 h-3">
          <span
            className={`w-0.5 rounded-full bg-electric-400 transition-all ${
              isPlaying ? 'animate-[waveform_0.8s_ease-in-out_infinite] h-3' : 'h-1 bg-white/20'
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-neon-purple transition-all ${
              isPlaying ? 'animate-[waveform_1.1s_ease-in-out_infinite_0.2s] h-3.5' : 'h-1.5 bg-white/20'
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-electric-400 transition-all ${
              isPlaying ? 'animate-[waveform_0.9s_ease-in-out_infinite_0.4s] h-2.5' : 'h-1 bg-white/20'
            }`}
          />
          <span
            className={`w-0.5 rounded-full bg-neon-purple transition-all ${
              isPlaying ? 'animate-[waveform_1.2s_ease-in-out_infinite_0.1s] h-4' : 'h-2 bg-white/20'
            }`}
          />
        </div>

        <span className="hidden sm:inline text-[11px] text-white/70">
          {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
        </span>
      </button>
    </div>
  )
}
