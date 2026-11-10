import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  MessageCircle,
  Radar,
  Route as RouteIcon,
  Wallet,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { PillButton } from '@/components/ui/PillButton'
import { ChapterTag } from '@/components/ui/ChapterTag'
import { SceneBackdrop } from '@/components/ui/SceneBackdrop'
import { IMAGES, RIDERS } from '@/lib/content'
import { site } from '@/lib/site'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const FEATURES = [
  { icon: RouteIcon, label: 'Route' },
  { icon: Radar, label: 'Live radar' },
  { icon: Wallet, label: 'UPI splits' },
  { icon: MessageCircle, label: 'Pack chat' },
] as const

export function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 sm:items-center sm:pb-24 sm:pt-28"
    >
      <SceneBackdrop
        src={IMAGES.hero}
        priority
        range={120}
        position="center 48%"
        imageClassName="opacity-25 saturate-[0.85]"
        overlayClassName="bg-[linear-gradient(180deg,rgba(253,251,247,0.92)_0%,rgba(253,251,247,0.45)_35%,rgba(253,251,247,0.75)_70%,#fdfbf7_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#fdfbf7_0%,rgba(253,251,247,0.85)_42%,rgba(253,251,247,0.25)_76%,transparent_100%)]"
      />
      <div aria-hidden className="aurora pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
          className="max-w-[56rem]"
        >
          <ChapterTag index="01" label="The Call" />
          <h1 className="mt-7 text-balance font-display text-[clamp(3rem,9.4vw,8.6rem)] font-bold uppercase leading-[0.84] tracking-[-0.055em] text-ink">
            <span className="block">Ride together.</span>
            <span className="block bg-gradient-to-r from-ink via-radar to-ember bg-clip-text text-transparent">
              Sync your pack.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-mist sm:text-lg sm:leading-8">
            Plan the route. Track the pack. Split the bill. One app for the entire journey.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PillButton
              href={site.riderUrl}
              size="lg"
              icon={<Download className="h-4.5 w-4.5" />}
              trailingIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              Download MotoSync
            </PillButton>
            <PillButton
              href="#invite"
              variant="ghost"
              size="lg"
              trailingIcon={<ArrowDown className="h-4 w-4" />}
            >
              See the ride
            </PillButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {FEATURES.map((feature) => (
              <span
                key={feature.label}
                className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-mist"
              >
                <feature.icon className="h-3.5 w-3.5 text-radar" />
                {feature.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-24 right-12 hidden w-64 2xl:block">
          <div className="float-slow">
            <GlassCard className="p-4" glow="cyan">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-settle">
                  <span className="h-1 w-1 rounded-full bg-settle" /> Pack online
                </span>
                <span className="font-mono text-[8px] text-dim">06:12</span>
              </div>
              <div className="mt-3 flex -space-x-2">
                {RIDERS.map((rider) => (
                  <img
                    key={rider.id}
                    src={rider.avatar}
                    alt={rider.name}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <p className="mt-3 text-xs font-semibold text-ink">4 riders linked</p>
              <p className="mt-1 flex items-center gap-1.5 text-[10px] text-mist">
                <MapPin className="h-3 w-3 text-radar" /> NH44 · Murthal
              </p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/[0.06]">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-radar to-ember" />
              </div>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-dim">
                3/4 within 2km
              </p>
            </GlassCard>
          </div>
        </div>
      </div>

      <a
        href="#invite"
        aria-label="Scroll to The Invite"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-dim">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-black/10">
          <span className="scroll-cue absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-radar to-transparent" />
        </span>
      </a>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void to-transparent"
      />
    </section>
  )
}
