import { Activity, Cpu, Radio, Server, ShieldCheck, Zap } from 'lucide-react'

const METRICS = [
  { icon: Radio, code: 'GPS_RADAR_SYNC', label: 'PACK MESH LATENCY', value: '< 11.4 ms', highlight: 'text-electric-400' },
  { icon: ShieldCheck, code: 'POSTGRES_RLS', label: 'SECURITY POLICIES', value: '100% ENFORCED', highlight: 'text-emerald-400' },
  { icon: Activity, code: 'COMMUNITY_FLEET', label: 'ACTIVE HIGHWAY KM', value: '48,120 km', highlight: 'text-neon-purple' },
  { icon: Zap, code: 'EXHAUST_SYNTH', label: 'ACOUSTIC ARCHITECTURES', value: '4 ENGINES', highlight: 'text-yellow-400' },
  { icon: Server, code: 'VERCEL_EDGE', label: 'GLOBAL AVAILABILITY', value: '99.99% UPTIME', highlight: 'text-electric-400' },
  { icon: Cpu, code: 'CAPACITOR_CORE', label: 'ANDROID COMPILER', value: 'SDK 36 NATIVE', highlight: 'text-neon-red' },
]

export const TelemetryTicker = () => {
  return (
    <div className="w-full border-y border-white/10 bg-[#020306] py-3.5 overflow-hidden">
      <div className="flex w-max animate-scroll gap-12 whitespace-nowrap">
        {[...METRICS, ...METRICS, ...METRICS].map((m, idx) => {
          const Icon = m.icon
          return (
            <div key={idx} className="flex items-center gap-3 font-mono text-xs text-white/80">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-electric-400">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-white/40 text-[10px] tracking-wider uppercase">
                [{m.code}]:
              </span>
              <span className="text-white/60 text-[11px] font-semibold">{m.label}</span>
              <span className={`font-bold ${m.highlight}`}>{m.value}</span>
              <span className="h-1 w-1 rounded-full bg-white/20 mx-3" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
