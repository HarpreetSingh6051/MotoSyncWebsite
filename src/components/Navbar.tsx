import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { ChapterTag } from '@/components/ui/ChapterTag'
import { PillButton } from '@/components/ui/PillButton'
import { BrandMark } from '@/components/ui/BrandMark'
import { CHAPTERS } from '@/lib/content'
import { site } from '@/lib/site'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const navChapters = CHAPTERS.slice(1, 6)

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = usePrefersReducedMotion()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled
          ? 'border-b border-black/5 bg-white/85 backdrop-blur-xl shadow-xs'
          : 'border-b border-transparent bg-gradient-to-b from-[#fdfbf7]/90 via-[#fdfbf7]/40 to-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#hero" className="group flex items-center gap-3" aria-label="MotoSync home">
          <BrandMark className="h-8 w-8 transition-transform duration-500 ease-cinema group-hover:rotate-[-6deg]" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-[0.16em] text-ink">
              MOTOSYNC
            </span>
            <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.32em] text-dim">
              Sync your pack
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navChapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="group relative text-[13px] font-medium text-mist transition-colors duration-300 hover:text-ink"
            >
              {chapter.nav}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-radar transition-all duration-300 ease-cinema group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton
              href={site.riderUrl}
              size="sm"
              icon={<Download className="h-3.5 w-3.5" />}
            >
              Get the app
            </PillButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-2xs transition hover:border-black/20 hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={reduce ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-4 top-[calc(100%+0.35rem)] rounded-3xl p-5 lg:hidden"
          >
            <div className="glass-card panel-glow rounded-3xl p-5 bg-white/95 border border-black/5 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <ChapterTag index="MENU" label="The ride" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-dim">
                  NH44
                </span>
              </div>
              <nav aria-label="Mobile" className="grid gap-1">
                {navChapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm text-mist transition hover:bg-raised hover:text-ink"
                  >
                    <span>
                      <span className="mr-3 font-mono text-[10px] text-radar font-semibold">{chapter.index}</span>
                      {chapter.label}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-dim">
                      {chapter.nav}
                    </span>
                  </a>
                ))}
              </nav>
              <div className="mt-4 border-t border-black/5 pt-4">
                <PillButton
                  href={site.riderUrl}
                  size="md"
                  fullWidth
                  icon={<Download className="h-4 w-4" />}
                >
                  Download MotoSync
                </PillButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
