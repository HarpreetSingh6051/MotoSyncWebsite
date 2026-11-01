import { ArrowRight, Cpu, Database, LayoutDashboard, Smartphone } from 'lucide-react'
import { SpotlightCard } from '@/components/SpotlightCard'
import { KineticText } from '@/components/KineticText'

const ECOSYSTEM_LAYERS = [
  {
    icon: Smartphone,
    title: 'Rider Mobile App',
    badge: 'Capacitor Android & PWA',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    description: 'Rider-native interface featuring live formation radar, reel cut sharing, club invites, pack chat, and exhaust sound synthesis.',
    features: ['Real-Time GPS Pack Radar', 'Interactive Pack Chat & Audio', 'Reel Vault & Offline Audio', 'Direct Android APK Download'],
    linkText: 'Open Rider App',
    href: 'https://moto-sync-ochre.vercel.app',
  },
  {
    icon: LayoutDashboard,
    title: 'Super Admin ERP',
    badge: 'Enterprise Operations',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    description: 'High-contrast command center for motorcycle club captains, road marshals, and platform operators managing community telemetry.',
    features: ['Registered Riders CRM', 'Club KYC Verification', 'Subscription Purchase Audit', 'Global Feature Flag Toggles'],
    linkText: 'Open Admin Portal',
    href: 'https://moto-sync-admin.vercel.app',
  },
  {
    icon: Database,
    title: 'Backend API Gateway',
    badge: 'NestJS + Supabase RLS',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    description: 'Modular serverless backend microservices delivering high-concurrency GPS telemetry caching and Row-Level Security data access.',
    features: ['REST API & Webhook Dispatch', 'PostgreSQL 16 with RLS', 'Persistent In-Memory Fallbacks', 'Vercel Edge Global CDN'],
    linkText: 'API Documentation',
    href: 'https://moto-sync-be.vercel.app/api/v1/health',
  },
]

export const EcosystemComparison = () => {
  return (
    <section id="ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 mb-4">
          <Cpu className="h-3.5 w-3.5" />
          FULL-STACK ARCHITECTURE
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          <KineticText
            text="A Unified Motorcycle Digital Ecosystem"
            highlightWords={['Unified', 'Motorcycle', 'Ecosystem']}
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed">
          Engineered as a synchronized triad connecting riders on the highway, road captains in the paddock, and platform telemetry in the cloud.
        </p>
      </div>

      {/* Layer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ECOSYSTEM_LAYERS.map((layer, index) => {
          const Icon = layer.icon
          return (
            <SpotlightCard key={index} className="flex flex-col justify-between h-full p-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                    <Icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-semibold ${layer.badgeColor}`}>
                    {layer.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{layer.description}</p>

                <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
                  {layer.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={layer.href}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs font-semibold text-white transition hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                <span>{layer.linkText}</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </a>
            </SpotlightCard>
          )
        })}
      </div>
    </section>
  )
}
