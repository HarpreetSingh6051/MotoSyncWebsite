import { useEffect, useState } from 'react'
import { CHAPTERS, type ChapterId } from '@/lib/content'
import { cn } from '@/lib/cn'

export function ChapterRail() {
  const [active, setActive] = useState<ChapterId>('hero')

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-chapter]'),
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (CHAPTERS.some((chapter) => chapter.id === id)) {
            setActive(id as ChapterId)
          }
        }
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Chapter navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {CHAPTERS.map((chapter) => {
        const isActive = active === chapter.id
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                'font-mono text-[9px] uppercase tracking-[0.22em] transition-all duration-300',
                isActive
                  ? 'text-radar font-semibold opacity-100'
                  : 'text-dim opacity-0 group-hover:opacity-100',
              )}
            >
              {chapter.index} {chapter.label}
            </span>
            <span
              className={cn(
                'block h-px transition-all duration-300 ease-cinema',
                isActive
                  ? 'w-7 bg-radar shadow-[0_0_8px_rgba(37,99,235,0.4)]'
                  : 'w-3 bg-black/15 group-hover:w-5 group-hover:bg-black/35',
              )}
            />
          </a>
        )
      })}
    </nav>
  )
}
