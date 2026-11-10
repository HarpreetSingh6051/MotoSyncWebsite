import { ArrowUp, Download } from 'lucide-react'
import { BrandMark } from '@/components/ui/BrandMark'
import { CHAPTERS } from '@/lib/content'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f5f2ea]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-radar/30 to-transparent"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3" aria-label="Back to top">
              <BrandMark className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-[0.15em] text-ink">
                MOTOSYNC
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-mist">
              One app for the entire ride. Plan the route, track the pack, split the bill,
              and stay in the conversation long after the engine cools.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
              The story
            </h3>
            <ul className="mt-5 grid gap-3">
              {CHAPTERS.slice(1).map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={`#${chapter.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-mist transition hover:text-ink"
                  >
                    <span className="h-px w-3 bg-black/15 transition-all duration-300 group-hover:w-5 group-hover:bg-radar" />
                    {chapter.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
              Get riding
            </h3>
            <div className="mt-5 grid gap-3">
              <a
                href={site.riderUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mist transition hover:text-ink font-medium"
              >
                <Download className="h-4 w-4 text-ember" />
                Download MotoSync
              </a>
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-sm text-mist transition hover:text-ink"
              >
                {site.contactEmail}
              </a>
              <a
                href="#hero"
                className="group mt-2 inline-flex items-center gap-2 text-sm text-mist transition hover:text-ink"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 text-radar" />
                Back to the start
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
            © {new Date().getFullYear()} MotoSync. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
            Built for the pack. Made in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
