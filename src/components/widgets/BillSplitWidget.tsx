import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Check,
  IndianRupee,
  Receipt,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { PillButton } from '@/components/ui/PillButton'
import { BILL_ITEMS, BILL_TOTAL, RIDERS } from '@/lib/content'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const formatINR = (value: number) => `₹${value.toLocaleString('en-IN')}`

export function BillSplitWidget() {
  const [settled, setSettled] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    if (!showSuccess) return
    const timer = window.setTimeout(() => setShowSuccess(false), 2800)
    return () => window.clearTimeout(timer)
  }, [showSuccess])

  const handleSettle = () => {
    setSettled(true)
    setShowSuccess(true)
  }

  return (
    <GlassCard
      glow={settled ? 'settle' : 'none'}
      className="relative mx-auto w-full max-w-md p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-ember">
            <Receipt className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-ember font-semibold">
              Bill split
            </p>
            <h3 className="mt-1 text-sm font-semibold text-ink">
              Breakfast at Murthal Haveli
            </h3>
          </div>
        </div>
        <span className="rounded-full border border-black/5 bg-raised px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
          Sun · 06:42
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 rounded-2xl border border-black/5 bg-raised/80 p-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-dim">
            Total
          </p>
          <p className="mt-1 font-display text-4xl font-bold tracking-tight text-ink">
            {formatINR(BILL_TOTAL)}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
            4 riders · equal
          </p>
          <p className="mt-1 text-lg font-semibold text-radar">₹300 each</p>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {BILL_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3 text-[11px] text-mist"
          >
            <span>{item.label}</span>
            <span className="font-mono font-medium text-ink">{formatINR(item.amount)}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-settle/20 bg-settle/[0.08] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-settle font-medium">
        <Sparkles className="h-3 w-3" />
        Split calculated automatically
      </div>

      <div className="mt-5 border-t border-black/5 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
            The pack
          </p>
          <span className="flex items-center gap-1 text-[9px] text-dim">
            <Users className="h-3 w-3" /> 4 riders
          </span>
        </div>
        <div className="grid gap-2.5">
          {RIDERS.map((rider, index) => {
            const isYou = index === 2
            const isPaid = index < 2 || (isYou && settled)
            return (
              <div key={rider.id} className="flex items-center gap-3">
                <img
                  src={rider.avatar}
                  alt={rider.name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 rounded-full border border-white shadow-xs object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-ink">
                    {rider.name}
                    {isYou ? (
                      <span className="ml-1.5 rounded-full border border-ember/25 bg-ember/10 px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-[0.12em] text-ember">
                        You
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-dim">₹300 share</p>
                </div>
                <span
                  className={cn(
                    'rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]',
                    isPaid
                      ? 'border-settle/25 bg-settle/10 text-settle font-semibold'
                      : 'border-black/5 bg-raised text-dim',
                  )}
                >
                  {isPaid ? 'Paid' : 'Pending'}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        {settled ? (
          <div className="flex items-center justify-between gap-3 rounded-full border border-settle/30 bg-settle/10 px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-settle">
              <Check className="h-4 w-4" strokeWidth={3} /> You are settled
            </span>
            <span className="font-mono text-[10px] text-settle font-medium">₹300 · UPI</span>
          </div>
        ) : (
          <PillButton
            variant="settle"
            fullWidth
            onClick={handleSettle}
            icon={<IndianRupee className="h-4 w-4" />}
          >
            Settle ₹300 via UPI
          </PillButton>
        )}
        <div className="mt-3 flex items-center justify-center gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-dim">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-settle" /> UPI secured
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-black/20" />
          <span>Instant · no reminders</span>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {settled ? 'Payment of 300 rupees settled via UPI.' : ''}
      </p>

      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 z-30 grid place-items-center bg-white/95 p-6 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={reduce ? false : { scale: 0.45, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                className="relative grid h-24 w-24 place-items-center"
              >
                <span className="absolute inset-0 rounded-full border border-settle/45 check-ring" />
                <span
                  className="absolute inset-2 rounded-full border border-settle/25 check-ring"
                  style={{ animationDelay: '0.4s' }}
                />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-settle text-white shadow-lg">
                  <Check className="h-9 w-9" strokeWidth={3} />
                </span>
              </motion.div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.45 }}
              >
                <p className="mt-5 font-display text-2xl font-bold text-ink">Settled.</p>
                <p className="mt-1 text-xs text-mist">₹300 sent via UPI. The pack is square.</p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </GlassCard>
  )
}
