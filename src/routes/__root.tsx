import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '../styles/globals.css?url'
import { site } from '@/lib/site'
import { IMAGES } from '@/lib/content'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: site.name,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Android, iOS, Web',
  description: site.description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { title: 'MotoSync — Ride Together. Sync Your Pack.' },
      {
        name: 'description',
        content:
          'One app for the entire ride. Plan the route, track the pack live, split bills over UPI, and stay in the pack chat. Built for Indian riders.',
      },
      { name: 'theme-color', content: '#fdfbf7' },
      { name: 'color-scheme', content: 'light' },
      { name: 'application-name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: 'MotoSync — Ride Together. Sync Your Pack.' },
      {
        property: 'og:description',
        content:
          'Plan the route. Track the pack. Split the bill. One app for the entire journey.',
      },
      { property: 'og:url', content: site.siteUrl },
      { property: 'og:image', content: IMAGES.hero },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'MotoSync — Ride Together. Sync Your Pack.' },
      {
        name: 'twitter:description',
        content:
          'Plan the route. Track the pack. Split the bill. One app for the entire journey.',
      },
      { name: 'twitter:image', content: IMAGES.hero },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: site.siteUrl },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="bg-void">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-void text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-radar focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-void"
        >
          Skip to content
        </a>
        <div
          aria-hidden
          className="grain pointer-events-none fixed inset-0 z-[65] opacity-[0.035] mix-blend-soft-light"
        />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 aurora opacity-70" />
      <div className="relative text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-radar">
          404 · off route
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
          This road ends here.
        </h1>
        <p className="mt-4 text-sm text-mist">Let&apos;s get you back to the pack.</p>
        <a
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#ff8a2a] to-[#ff5c00] px-6 text-sm font-semibold text-[#1d0c00] glow-ember transition hover:brightness-110"
        >
          Back to the start
        </a>
      </div>
    </main>
  )
}
