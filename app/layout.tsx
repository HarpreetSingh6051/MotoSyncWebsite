import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SoundProvider } from '@/components/SoundContext'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'

export const viewport: Viewport = {
  themeColor: '#04060C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'MotoSync – Pack Connected. Ride in Sync.',
  description: 'One app for your motorcycle pack. Live GPS radar, synchronized route stops, automatic bill splitting, and pack voice comms.',
  keywords: ['motorcycle app', 'riding group', 'pack ride', 'live motorcycle radar', 'bike rides', 'moto sync'],
  openGraph: {
    title: 'MotoSync – Pack Connected. Ride in Sync.',
    description: 'One app for your motorcycle pack. Live GPS radar, synchronized route stops, automatic bill splitting, and pack voice comms.',
    url: 'https://motosync-landing.vercel.app',
    siteName: 'MotoSync',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2310b1fb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-midnight-950 text-text-support antialiased selection:bg-electric-500/30 selection:text-electric-300">
        <SmoothScrollProvider>
          <SoundProvider>
            <ScrollProgressBar />
            {children}
          </SoundProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
