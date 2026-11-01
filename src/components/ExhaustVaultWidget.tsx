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
      }, 100)
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
          <Disc3 className="h-4 w-4 text-amber-400 animate-spin-slow" />
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
            AI Exhaust Sound Vault
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-amber-300">
          <Zap className="h-3 w-3" />
          <span>Web Audio API Synth</span>
        </div>
      </div>

      {/* Bike Selector Pills */}
      <div className="my-3 grid grid-cols-2 gap-2">
        {BIKE_PROFILES.map((p) => {
          const isActive = selectedProfile === p.id && isPlaying
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => handleTogglePlay(p.id)}
              className={`flex items-center justify-between rounded-xl border p-2.5 text-left text-xs transition ${
                selectedProfile === p.id
                  ? 'border-amber-400/40 bg-white/[0.07] text-white shadow-lg'
                  : 'border-white/5 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="truncate pr-1">
                <p className="font-semibold truncate">{p.name.split(' ')[0]}</p>
                <p className="text-[10px] text-white/40 font-mono truncate">{p.displacement}</p>
              </div>
              <div className="shrink-0">
                {isActive ? (
                  <Volume2 className="h-4 w-4 text-amber-400 animate-pulse" />
                ) : (
                  <VolumeX className="h-4 w-4 text-white/30" />
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Profile Info & RPM Gauge */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-white">{activeMeta.name}</p>
          <span className="font-mono text-[10px] text-white/50">{activeMeta.engine}</span>
        </div>
        <p className="text-[11px] text-white/60 line-clamp-2 leading-relaxed">
          {activeMeta.description}
        </p>

        {/* Tachometer RPM Bar */}
        <div className="pt-2">
          <div className="flex justify-between font-mono text-[10px] text-white/40 mb-1">
            <span>IDLE: 1,100 RPM</span>
            <span className="text-amber-400 font-semibold">{isRevving ? 'REDLINE: 10,500' : '3,400 RPM'}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                isRevving
                  ? 'w-[95%] bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500'
                  : isPlaying
                  ? 'w-[35%] bg-amber-400'
                  : 'w-[10%] bg-white/20'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Throttle Rev Button */}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => handleTogglePlay(selectedProfile)}
          className={`flex-1 rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
            isPlaying
              ? 'border border-amber-400/30 bg-amber-500/10 text-amber-300'
              : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
          }`}
        >
          {isPlaying ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          {isPlaying ? 'Mute Engine' : 'Start Idle Engine'}
        </button>

        <button
          type="button"
          onClick={handleRev}
          className="rounded-xl px-4 py-2.5 text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/20 hover:opacity-90 active:scale-95 flex items-center gap-1.5 transition"
        >
          <Flame className="h-3.5 w-3.5" />
          <span>REV Throttle</span>
        </button>
      </div>
    </div>
  )
}
