import { Activity, Cpu, Radio, ShieldCheck, Zap } from 'lucide-react'

const METRICS = [
  { icon: Radio, label: 'PACK RADAR SYNC', value: '< 12 ms Latency' },
  { icon: ShieldCheck, label: 'POSTGRES RLS POLICIES', value: '100% Enforced' },
  { icon: Activity, label: 'COMMUNITY ACTIVE KM', value: '48,120 km Logged' },
  { icon: Zap, label: 'AI EXHAUST SYNTH', value: '4 Engine Architectures' },
  { icon: Cpu, label: 'PLATFORM ENGINE', value: 'React 19 + Vercel Edge' },
]

export const TelemetryTicker = () => {
  return (
    <div className="w-full border-y border-white/[0.08] bg-ink-950/80 backdrop-blur-xl py-3.5 overflow-hidden">
      <div className="flex w-max animate-scroll gap-12 whitespace-nowrap">
        {[...METRICS, ...METRICS, ...METRICS].map((m, idx) => {
          const Icon = m.icon
          return (
            <div key={idx} className="flex items-center gap-3 font-mono text-xs text-white/70">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-amber-400">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-white/40 tracking-wider text-[11px]">{m.label}:</span>
              <span className="font-semibold text-white">{m.value}</span>
              <span className="h-1 w-1 rounded-full bg-white/20 mx-2" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
