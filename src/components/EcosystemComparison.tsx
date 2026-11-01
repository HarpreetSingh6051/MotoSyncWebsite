import { ArrowRight, Database, LayoutDashboard, Smartphone, Terminal } from 'lucide-react'
import { SpotlightCard } from '@/components/SpotlightCard'
import { KineticText } from '@/components/KineticText'

const ECOSYSTEM_LAYERS = [
  {
    icon: Smartphone,
    title: 'Rider Mobile App',
    badge: 'CAPACITOR 7 · ANDROID SDK 36',
    variant: 'blue' as const,
    badgeColor: 'border-electric-500/40 bg-electric-500/10 text-electric-300',
    description: 'Rider-native interface featuring live formation radar, reel cut sharing, club invites, pack chat, and exhaust sound synthesis.',
    features: ['Real-Time GPS Pack Radar', 'Interactive Pack Chat & Audio', 'Reel Vault & Offline Audio', 'Direct Android APK Download'],
    linkText: 'OPEN RIDER APP',
    href: 'https://moto-sync-ochre.vercel.app',
  },
  {
    icon: LayoutDashboard,
    title: 'Super Admin ERP',
    badge: 'REACT 19 · FLEET MANAGEMENT',
    variant: 'purple' as const,
    badgeColor: 'border-neon-purple/40 bg-neon-purple/10 text-neon-violet',
    description: 'High-contrast command center for motorcycle club captains, road marshals, and platform operators managing community telemetry.',
    features: ['Registered Riders CRM', 'Club KYC Verification', 'Subscription Purchase Audit', 'Global Feature Flag Toggles'],
    linkText: 'OPEN ADMIN PORTAL',
    href: 'https://moto-sync-admin.vercel.app',
  },
  {
    icon: Database,
    title: 'Backend API Gateway',
    badge: 'NESTJS · POSTGRES 16 RLS',
    variant: 'red' as const,
    badgeColor: 'border-neon-red/40 bg-neon-red/10 text-neon-red',
    description: 'Modular serverless backend microservices delivering high-concurrency GPS telemetry caching and Row-Level Security data access.',
    features: ['REST API & Webhook Dispatch', 'PostgreSQL 16 with RLS', 'Persistent In-Memory Fallbacks', 'Vercel Edge Global CDN'],
    linkText: 'API HEALTH STATUS',
    href: 'https://moto-sync-be.vercel.app/api/v1/health',
  },
]

export const EcosystemComparison = () => {
  return (
    <section id="ecosystem" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-electric-500/40 bg-electric-500/10 px-4 py-1.5 text-xs font-mono font-bold text-electric-300 mb-4">
          <Terminal className="h-3.5 w-3.5" />
          <span>[ARCHITECTURE // 3-TIER_TOPOLOGY]</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          <KineticText
            text="A Synchronized Motorcycle Paddock Ecosystem"
            highlightWords={['Synchronized', 'Motorcycle', 'Ecosystem']}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-neon-purple to-neon-fuchsia glow-electric"
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
          Engineered as a synchronized triad connecting riders on the highway, road captains in the paddock, and platform telemetry in the cloud.
        </p>
      </div>

      {/* Layer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ECOSYSTEM_LAYERS.map((layer, index) => {
          const Icon = layer.icon
          return (
            <SpotlightCard key={index} variant={layer.variant} className="flex flex-col justify-between h-full p-7">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 rounded-2xl bg-black/80 border border-white/10 text-white shadow-lg">
                    <Icon className="h-6 w-6 text-electric-400" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-mono font-bold ${layer.badgeColor}`}>
                    {layer.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-2">{layer.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-sans">{layer.description}</p>

                <div className="space-y-2 mb-8 border-t border-white/10 pt-4">
                  {layer.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                      <div className="h-1.5 w-1.5 rounded-full bg-electric-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={layer.href}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] p-3 text-xs font-mono font-bold text-white transition hover:border-electric-400 hover:bg-electric-500/10"
              >
                <span>{layer.linkText}</span>
                <ArrowRight className="h-4 w-4 text-electric-400" />
              </a>
            </SpotlightCard>
          )
        })}
      </div>
    </section>
  )
}
