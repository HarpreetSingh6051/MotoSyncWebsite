import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bell, Check, ChevronRight, MapPin, Navigation, Users } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { PillButton } from '@/components/ui/PillButton'
import { BrandMark } from '@/components/ui/BrandMark'
import { RIDERS } from '@/lib/content'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

export function InviteCard() {
  const [accepted, setAccepted] = useState(false)
  const reduce = usePrefersReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-x-5 -bottom-4 top-8 rounded-[1.75rem] border border-black/5 bg-white/70 shadow-xs blur-[1px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-8 top-16 rounded-[1.75rem] border border-black/5 bg-white/40 shadow-xs"
      />

      <GlassCard
        glow={accepted ? 'settle' : 'cyan'}
        className="relative z-10 p-5 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandMark className="h-10 w-10" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-ink">MotoSync</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-dim">
                <Bell className="h-3 w-3" /> now · ride invite
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-radar/20 bg-radar/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-radar">
            <span className="h-1 w-1 rounded-full bg-radar" />
            Live
          </span>
        </div>

        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ember">
            Sunday breakfast run
          </p>
          <h3 className="mt-2 font-display text-[1.7rem] font-bold leading-[1.05] text-ink sm:text-3xl">
            Arjun invited you.
          </h3>
          <p className="mt-2.5 text-sm leading-6 text-mist">
            Meet at The Haveli at 6:00 AM. The pack rolls at 6:15 sharp.
          </p>
        </div>

        <div className="mt-5 grid gap-2 rounded-2xl border border-black/5 bg-raised/80 p-3.5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-2 text-xs text-mist">
            <MapPin className="h-3.5 w-3.5 text-radar" />
            The Haveli, Murthal
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-radar">
            42 km · 1h 05m
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {RIDERS.map((rider) => (
                <img
                  key={rider.id}
                  src={rider.avatar}
                  alt={rider.name}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
              ))}
            </div>
            <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
              +1
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] text-mist">
            <Users className="h-3 w-3" /> 4 confirmed
          </span>
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait" initial={false}>
            {accepted ? (
              <motion.div
                key="accepted"
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="rounded-2xl border border-settle/25 bg-settle/[0.08] p-4"
                role="status"
              >
                <div className="flex items-center gap-3">
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-settle text-white">
                    <span className="absolute inset-0 rounded-full border border-settle/50 check-ring" />
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-settle">Accepted &amp; synced</p>
                    <p className="mt-0.5 text-[11px] text-mist">
                      Route is on your home screen. The pack knows you are in.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="accept"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -4 }}
              >
                <PillButton
                  fullWidth
                  onClick={() => setAccepted(true)}
                  icon={<Navigation className="h-4 w-4" />}
                  trailingIcon={<ChevronRight className="h-4 w-4" />}
                >
                  Accept &amp; Sync Route
                </PillButton>
              </motion.div>
            )}
          </AnimatePresence>
          <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
            {accepted ? '6:00 AM · The Haveli · 42 km' : 'One tap. Route, time, pack — all synced.'}
          </p>
        </div>
      </GlassCard>
    </div>
  )
}
