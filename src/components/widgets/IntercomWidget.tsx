import { useState } from 'react'
import { Mic, MicOff, Radio, ShieldCheck, Signal } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { RIDERS } from '@/lib/content'
import { cn } from '@/lib/cn'

const BARS = [
  18, 34, 58, 42, 76, 54, 30, 62, 88, 48, 26, 70, 52, 84, 38, 60, 30, 74, 46,
  90, 56, 32, 66, 44, 80, 50, 24, 58, 72, 40, 86, 46, 64, 28, 54, 78,
]

export function IntercomWidget() {
  const [talking, setTalking] = useState(false)

  const stopTalking = () => setTalking(false)

  return (
    <GlassCard glow={talking ? 'settle' : 'none'} className="relative p-5 sm:p-6">
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-settle/25 bg-settle/10 text-settle">
              <Radio className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-settle font-semibold">
                Intercom connected
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">NH44 · Pack channel</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-black/5 bg-raised px-3 py-1.5">
            <span className="ping-dot h-1.5 w-1.5 rounded-full bg-settle text-settle" />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink font-medium">
              4 riders
            </span>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-2xl border border-black/5 bg-raised/70 px-4 py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_64%)]"
          />
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
              Live audio
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-settle font-medium">
              <span className="h-1 w-1 rounded-full bg-settle" />
              {talking ? 'You are live' : 'Clear'}
            </span>
          </div>

          <div
            aria-hidden
            className={cn(
              'mt-4 flex h-24 items-center justify-center gap-[2px] transition-opacity duration-500 sm:gap-[3px]',
              talking ? 'opacity-100' : 'opacity-80',
            )}
          >
            {BARS.map((height, index) => (
              <span
                key={index}
                className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-settle/50 via-radar to-radar sm:w-1"
                style={{
                  height: `${height}%`,
                  animationDelay: `${(index % 9) * 0.07}s`,
                  animationDuration: `${0.9 + ((index * 7) % 5) * 0.11}s`,
                }}
              />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
            <span>42 ms latency</span>
            <span className="h-0.5 w-0.5 rounded-full bg-black/20" />
            <span>Wind filter on</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {RIDERS.map((rider, index) => {
            const speaking = index === 0
            return (
              <div
                key={rider.id}
                className={cn(
                  'flex items-center gap-2.5 rounded-2xl border p-2.5 transition-colors duration-500',
                  speaking
                    ? 'border-settle/30 bg-settle/[0.08]'
                    : 'border-black/5 bg-white/80 shadow-2xs',
                )}
              >
                <img
                  src={rider.avatar}
                  alt={rider.name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 rounded-full border border-white shadow-xs object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-ink">
                    {rider.name}
                  </p>
                  <p
                    className={cn(
                      'mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em]',
                      speaking ? 'text-settle font-medium' : 'text-dim',
                    )}
                  >
                    {speaking ? 'Speaking' : 'Listening'}
                  </p>
                </div>
                {speaking ? (
                  <span aria-hidden className="flex items-end gap-[2px] text-settle">
                    <span className="eq-bar h-3 w-[2px] rounded-full bg-settle" />
                    <span
                      className="eq-bar h-4 w-[2px] rounded-full bg-settle"
                      style={{ animationDelay: '0.15s' }}
                    />
                    <span
                      className="eq-bar h-2 w-[2px] rounded-full bg-settle"
                      style={{ animationDelay: '0.3s' }}
                    />
                  </span>
                ) : (
                  <MicOff className="h-3.5 w-3.5 text-dim" />
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            aria-pressed={talking}
            aria-label={talking ? 'Release to stop talking' : 'Hold to talk'}
            onPointerDown={() => setTalking(true)}
            onPointerUp={stopTalking}
            onPointerLeave={stopTalking}
            onPointerCancel={stopTalking}
            onKeyDown={(event) => {
              if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()
                setTalking(true)
              }
            }}
            onKeyUp={(event) => {
              if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()
                stopTalking()
              }
            }}
            className={cn(
              'relative grid h-[4.5rem] w-[4.5rem] select-none place-items-center rounded-full border transition duration-300 ease-cinema active:scale-95 shadow-md',
              talking
                ? 'scale-105 border-settle/60 bg-settle text-white shadow-lg'
                : 'border-radar/30 bg-radar/10 text-radar hover:bg-radar/15',
            )}
          >
            {talking ? (
              <>
                <span className="absolute inset-0 rounded-full border border-settle/50 check-ring" />
                <span
                  className="absolute inset-0 rounded-full border border-settle/30 check-ring"
                  style={{ animationDelay: '0.35s' }}
                />
              </>
            ) : null}
            <Mic className="h-6 w-6" />
          </button>
          <p
            aria-live="polite"
            className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-dim"
          >
            {talking ? 'Transmitting to 4 riders' : 'Hold to talk'}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
          <span className="flex items-center gap-1.5">
            <Signal className="h-3 w-3 text-radar" /> 5G · strong
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3 w-3 text-settle" /> ENC on
          </span>
          <span>Ch 04</span>
        </div>
      </div>
    </GlassCard>
  )
}
