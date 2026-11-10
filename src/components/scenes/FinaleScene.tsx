import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Download,
  MessageCircle,
  Radar,
  Route as RouteIcon,
  Wallet,
} from 'lucide-react'
import { ChapterTag } from '@/components/ui/ChapterTag'
import { PillButton } from '@/components/ui/PillButton'
import { QrCode } from '@/components/widgets/QrCode'
import { site } from '@/lib/site'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const INSIDE = [
  { icon: RouteIcon, label: 'Route planner' },
  { icon: Radar, label: 'Live pack radar' },
  { icon: Wallet, label: 'UPI bill splits' },
  { icon: MessageCircle, label: 'Pack chat' },
] as const

export function FinaleScene() {
  const reduce = usePrefersReducedMotion()

  return (
    <section
      id="finale"
      data-chapter
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 aurora opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-radar/[0.04] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] bg-[radial-gradient(ellipse_at_50%_100%,rgba(234,88,12,0.06),transparent_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 overflow-hidden"
      >
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(4rem,16vw,14rem)] font-bold tracking-[-0.06em] text-transparent opacity-[0.25] [-webkit-text-stroke:1px_rgba(44,44,44,0.08)]">
          MOTOSYNC
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center">
            <ChapterTag index="07" label="The Finale" tone="ember" />
          </div>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-4xl text-balance font-display text-[clamp(2.7rem,7.4vw,6.6rem)] font-bold leading-[0.92] tracking-[-0.05em] text-ink"
          >
            Stop juggling apps.
            <br />
            <span className="bg-gradient-to-r from-radar via-[#3b82f6] to-ember bg-clip-text text-transparent">
              Start riding together.
            </span>
          </motion.h2>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-7 text-mist sm:text-base sm:leading-8">
            The route, the pack, the bill, the banter. One app for the entire ride — from the
            first invite to the last checkmark.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <PillButton
              href={site.apkUrl}
              size="lg"
              icon={<Download className="h-4.5 w-4.5" />}
              trailingIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              Download MotoSync
            </PillButton>
            <PillButton
              href={site.riderUrl}
              variant="ghost"
              size="lg"
              trailingIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              Open web app
            </PillButton>
          </div>

          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-dim">
            Android APK · Web app · iOS on the way
          </p>

          <div className="mt-14 w-full max-w-3xl">
            <div className="glass-card panel-glow relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8 bg-white/95 border border-black/5 shadow-soft">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
              />
              <div className="grid items-center gap-7 sm:grid-cols-[auto_1fr] sm:gap-9">
                <div className="mx-auto sm:mx-0">
                  <QrCode />
                </div>
                <div className="text-left">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-radar font-semibold">
                    Scan. Install. Ride.
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    One app. The whole ride.
                  </h3>
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                    {INSIDE.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-2 text-[12px] text-ink"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-radar/25 bg-radar/10 text-radar">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <item.icon className="hidden h-3.5 w-3.5 text-dim sm:block" />
                        <span className="font-medium">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-black/5 pt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-dim">
                    4 riders per pack · 1 shared ledger · 0 dropped pins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
