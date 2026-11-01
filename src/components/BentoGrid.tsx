import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/SpotlightCard'
import { LiveRadarWidget } from '@/components/LiveRadarWidget'
import { ExhaustVaultWidget } from '@/components/ExhaustVaultWidget'
import { RoutePlannerWidget } from '@/components/RoutePlannerWidget'
import { AdminTelemetryWidget } from '@/components/AdminTelemetryWidget'
import { KineticText } from '@/components/KineticText'

export const BentoGrid = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-medium text-amber-300 mb-4"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
          SYSTEM DISCIPLINES & ARCHITECTURE
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          <KineticText
            text="Engineered for the Open Highway and Synchronized Packs"
            highlightWords={['Engineered', 'Synchronized', 'Packs']}
          />
        </h2>

        <p className="text-base sm:text-lg text-white/60 leading-relaxed">
          Four interconnected pillars bridging real-time rider GPS telemetry, mechanical acoustics, collaborative route scheduling, and enterprise ERP fleet intelligence.
        </p>
      </div>

      {/* Bento Grid Layout (2x2 / 4-card asymmetric) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Live Radar (7 columns on desktop) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            className="h-full border-cyan-500/20 hover:border-cyan-500/40"
            spotlightColor="rgba(6, 182, 212, 0.15)"
            borderColor="rgba(34, 211, 238, 0.4)"
          >
            <LiveRadarWidget />
          </SpotlightCard>
        </div>

        {/* Card 2: AI Exhaust Vault (5 columns on desktop) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            className="h-full border-amber-500/20 hover:border-amber-500/40"
            spotlightColor="rgba(245, 158, 11, 0.15)"
            borderColor="rgba(251, 191, 36, 0.4)"
          >
            <ExhaustVaultWidget />
          </SpotlightCard>
        </div>

        {/* Card 3: Route Planner & Checkpoints (5 columns on desktop) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            className="h-full border-cyan-500/20 hover:border-cyan-500/40"
            spotlightColor="rgba(6, 182, 212, 0.12)"
            borderColor="rgba(34, 211, 238, 0.35)"
          >
            <RoutePlannerWidget />
          </SpotlightCard>
        </div>

        {/* Card 4: Super Admin & ERP Telemetry (7 columns on desktop) */}
        <div className="lg:col-span-7">
          <SpotlightCard
            className="h-full border-emerald-500/20 hover:border-emerald-500/40"
            spotlightColor="rgba(16, 185, 129, 0.12)"
            borderColor="rgba(52, 211, 153, 0.35)"
          >
            <AdminTelemetryWidget />
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
