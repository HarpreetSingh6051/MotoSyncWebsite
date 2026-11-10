import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  CheckCheck,
  MoreHorizontal,
  Paperclip,
  Search,
  Send,
  Smile,
  Users,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { CHAT_MESSAGES, RIDERS, type ChatEntry } from '@/lib/content'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

type Vote = 'yes' | 'maybe' | null

function Bubble({
  entry,
  index,
  reduce,
}: {
  entry: ChatEntry
  index: number
  reduce: boolean | null
}) {
  const right = entry.side === 'right'

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex items-end gap-2', right && 'flex-row-reverse')}
    >
      <img
        src={entry.avatar}
        alt={entry.author}
        loading="lazy"
        decoding="async"
        className="h-7 w-7 shrink-0 rounded-full border border-white shadow-xs object-cover"
      />
      <div className={cn('max-w-[82%]', right && 'flex flex-col items-end')}>
        <div className="mb-1 flex items-center gap-2 px-1 font-mono text-[8px] uppercase tracking-[0.12em] text-dim">
          <span>{entry.author}</span>
          <span>{entry.time}</span>
        </div>
        <div
          className={cn(
            'rounded-2xl border px-3.5 py-2.5 text-[11px] leading-5 sm:text-[12px] shadow-xs',
            right
              ? 'rounded-br-md border-ember/25 bg-ember/[0.12] text-ink font-medium'
              : 'rounded-bl-md border-black/5 bg-white text-ink',
          )}
        >
          {entry.text}
          {right ? (
            <CheckCheck className="ml-2 inline h-3 w-3 align-[-1px] text-radar" />
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}

function PollCard({
  vote,
  onVote,
  reduce,
}: {
  vote: Vote
  onVote: (vote: Vote) => void
  reduce: boolean | null
}) {
  const yes = 6 + (vote === 'yes' ? 1 : 0)
  const maybe = 3 + (vote === 'maybe' ? 1 : 0)
  const total = yes + maybe

  const options: { key: Exclude<Vote, null>; label: string; count: number }[] = [
    { key: 'yes', label: 'Yes', count: yes },
    { key: 'maybe', label: 'Maybe', count: maybe },
  ]

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="ml-9 max-w-[86%]"
    >
      <div className="rounded-2xl border border-radar/20 bg-radar/[0.06] p-3.5 shadow-xs">
        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-radar font-medium">
          <BarChart3 className="h-3 w-3" />
          Poll · Arjun
        </div>
        <p className="mt-2 text-xs font-semibold text-ink">Next ride: Nandi Hills?</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {options.map((option) => {
            const selected = vote === option.key
            const pct = Math.round((option.count / total) * 100)
            return (
              <button
                key={option.key}
                type="button"
                aria-pressed={selected}
                onClick={() => onVote(selected ? null : option.key)}
                className={cn(
                  'rounded-xl border px-2.5 py-2 text-left transition duration-300 shadow-2xs',
                  selected
                    ? 'border-radar/40 bg-radar/15 text-ink font-medium'
                    : 'border-black/5 bg-white text-ink hover:border-radar/25 hover:bg-raised',
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-medium">{option.label}</span>
                  <span className="font-mono text-[9px] text-radar font-semibold">{option.count}</span>
                </span>
                <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-black/10">
                  <span
                    className={cn(
                      'block h-full rounded-full transition-all duration-500',
                      selected ? 'bg-radar' : 'bg-radar/50',
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </span>
              </button>
            )
          })}
        </div>
        <p className="mt-2.5 font-mono text-[8px] uppercase tracking-[0.12em] text-dim">
          {vote
            ? `You voted ${vote === 'yes' ? 'yes' : 'maybe'} · ${total} votes`
            : 'Tap to vote · 9 votes'}
        </p>
      </div>
    </motion.div>
  )
}

export function ChatWidget() {
  const [draft, setDraft] = useState('')
  const [sent, setSent] = useState<ChatEntry[]>([])
  const [vote, setVote] = useState<Vote>(null)
  const reduce = usePrefersReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sent.length) return
    const node = scrollRef.current
    if (!node) return
    node.scrollTo({
      top: node.scrollHeight,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [sent.length, reduce])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setSent((current) => [
      ...current,
      {
        id: `sent-${Date.now()}`,
        author: 'You',
        avatar: RIDERS[2].avatar,
        side: 'right',
        text,
        time: new Date().toLocaleTimeString('en-IN', {
          hour: 'numeric',
          minute: '2-digit',
        }),
        accent: '#ea580c',
      },
    ])
    setDraft('')
  }

  return (
    <GlassCard glow="none" className="relative mx-auto w-full max-w-md p-0">
      <div className="flex items-center justify-between gap-3 border-b border-black/5 bg-white/90 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-radar/25 bg-radar/10 text-radar">
            <Users className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-ink">NH44 Sunday Squad</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[9px] text-dim">
              <span className="h-1 w-1 rounded-full bg-settle" /> 12 members · 4 online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-dim">
          <Search className="h-3.5 w-3.5" />
          <MoreHorizontal className="h-4 w-4" />
        </div>
      </div>

      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Ride chat messages"
        className="h-[360px] overflow-y-auto px-3 py-4 sm:h-[410px]"
      >
        <div className="mb-4 flex justify-center">
          <span className="rounded-full border border-black/5 bg-raised px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-dim">
            Today
          </span>
        </div>

        <div className="grid gap-3">
          {CHAT_MESSAGES.slice(0, 2).map((entry, index) => (
            <Bubble key={entry.id} entry={entry} index={index} reduce={reduce} />
          ))}

          <PollCard vote={vote} onVote={setVote} reduce={reduce} />

          {CHAT_MESSAGES.slice(2).map((entry, index) => (
            <Bubble key={entry.id} entry={entry} index={index + 2} reduce={reduce} />
          ))}

          {sent.map((entry, index) => (
            <Bubble
              key={entry.id}
              entry={entry}
              index={index + 4}
              reduce={reduce}
            />
          ))}

          <div className="ml-9 flex items-end gap-2">
            <img
              src={RIDERS[1].avatar}
              alt="Neha"
              loading="lazy"
              decoding="async"
              className="h-7 w-7 rounded-full border border-white shadow-xs object-cover"
            />
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-black/5 bg-white px-3.5 py-3 shadow-xs">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="typing-dot h-1 w-1 rounded-full bg-mist"
                  style={{ animationDelay: `${dot * 0.15}s` }}
                />
              ))}
            </div>
            <span className="mb-1 font-mono text-[8px] uppercase tracking-[0.12em] text-dim">
              Neha is typing
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-black/5 bg-white/70 px-3 py-3"
      >
        <button
          type="button"
          aria-label="Attach a file"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/5 bg-raised text-dim transition hover:text-ink"
        >
          <Paperclip className="h-3.5 w-3.5" />
        </button>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Message the pack..."
          aria-label="Message the pack"
          className="min-w-0 flex-1 bg-transparent text-[11px] text-ink outline-none placeholder:text-dim sm:text-xs"
        />
        <button
          type="button"
          aria-label="Add an emoji"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-dim transition hover:text-ink"
        >
          <Smile className="h-4 w-4" />
        </button>
        <button
          type="submit"
          aria-label="Send message"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ember text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </GlassCard>
  )
}
