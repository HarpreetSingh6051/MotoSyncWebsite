import { useState } from 'react'
import { Disc3, Flame, Volume2, VolumeX, Zap } from 'lucide-react'
import { audioEngine, BIKE_PROFILES, type BikeSoundProfile } from '@/lib/audioEngine'

export const ExhaustVaultWidget = () => {
  const [selectedProfile, setSelectedProfile] = useState<BikeSoundProfile>('harley')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRevving, setIsRevving] = useState(false)

  const activeMeta = BIKE_PROFILES.find((p) => p.id === selectedProfile) || BIKE_PROFILES[0]

  const handleTogglePlay = (profileId: BikeSoundProfile) => {
    if (isPlaying && selectedProfile === profileId) {
      audioEngine.stop()
      setIsPlaying(false)
    } else {
      setSelectedProfile(profileId)
      audioEngine.play(profileId)
      setIsPlaying(true)
    }
  }

  const handleRev = () => {
    if (!isPlaying) {
      handleTogglePlay(selectedProfile)
      setTimeout(() => {
        audioEngine.rev()
        setIsRevving(true)
        setTimeout(() => setIsRevving(false), 900)
      }, 120)
    } else {
      audioEngine.rev()
      setIsRevving(true)
      setTimeout(() => setIsRevving(false), 900)
    }
  }

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Disc3 className="h-4 w-4 text-neon-purple animate-spin-slow" />
          <span className="font-mono text-xs font-bold tracking-wider text-neon-purple uppercase">
            [ACOUSTIC_SYNTH // DUAL_CORE]
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono rounded-md border border-neon-purple/30 bg-neon-purple/10 px-2 py-0.5 text-neon-violet font-semibold">
          <Zap className="h-3 w-3" />
          <span>Real-Time Synthesizer</span>
        </div>
      </div>

      {/* 4 Engine Profile Selector Cards */}
      <div className="my-3 grid grid-cols-2 gap-2">
        {BIKE_PROFILES.map((p) => {
          const isActive = selectedProfile === p.id && isPlaying
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => handleTogglePlay(p.id)}
              className={`flex items-center justify-between rounded-xl border p-2.5 text-left text-xs transition duration-200 ${
                selectedProfile === p.id
                  ? 'border-neon-purple/50 bg-neon-purple/10 text-white shadow-lg shadow-neon-purple/10'
                  : 'border-white/10 bg-surface-900/60 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="truncate pr-1">
                <p className="font-bold truncate text-white">{p.name.split(' ')[0]}</p>
                <p className="text-[10px] text-white/40 font-mono truncate">{p.displacement}</p>
              </div>
              <div className="shrink-0">
                {isActive ? (
                  <Volume2 className="h-4 w-4 text-neon-purple animate-pulse" />
                ) : (
                  <VolumeX className="h-4 w-4 text-white/25" />
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Profile Info & RPM Gauge */}
      <div className="rounded-2xl border border-white/10 bg-surface-900/80 p-3 text-xs space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-bold text-white">{activeMeta.name}</p>
          <span className="font-mono text-[10px] text-electric-400 font-semibold">{activeMeta.engine}</span>
        </div>
        <p className="text-[11px] text-white/60 line-clamp-2 leading-relaxed font-sans">
          {activeMeta.description}
        </p>

        {/* Tachometer RPM Bar */}
        <div className="pt-2">
          <div className="flex justify-between font-mono text-[10px] text-white/40 mb-1">
            <span>IDLE: 1,150 RPM</span>
            <span className={isRevving ? 'text-neon-red font-bold' : 'text-neon-purple font-semibold'}>
              {isRevving ? 'REDLINE: 14,200 RPM ⚡' : 'CRUISING: 3,800 RPM'}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isRevving
                  ? 'w-[96%] bg-gradient-to-r from-electric-500 via-neon-purple to-neon-red shadow-lg shadow-neon-red/50'
                  : isPlaying
                  ? 'w-[38%] bg-gradient-to-r from-electric-500 to-neon-purple'
                  : 'w-[12%] bg-white/20'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Interactive Sound Controls */}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => handleTogglePlay(selectedProfile)}
          className={`flex-1 rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
            isPlaying
              ? 'border border-neon-purple/40 bg-neon-purple/15 text-neon-violet'
              : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
          }`}
        >
          {isPlaying ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          {isPlaying ? 'Mute Idle' : 'Start Engine Idle'}
        </button>

        <button
          type="button"
          onClick={handleRev}
          className="rounded-xl px-4 py-2.5 text-xs font-bold bg-gradient-to-r from-neon-purple via-fuchsia-600 to-neon-red text-white shadow-lg shadow-neon-purple/25 hover:opacity-95 active:scale-95 flex items-center gap-1.5 transition"
        >
          <Flame className="h-3.5 w-3.5 text-yellow-300" />
          <span>REV THROTTLE</span>
        </button>
      </div>
    </div>
  )
}
