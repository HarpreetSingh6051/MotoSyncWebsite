import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TelemetryTicker } from '@/components/TelemetryTicker'
import { BentoGrid } from '@/components/BentoGrid'
import { EcosystemComparison } from '@/components/EcosystemComparison'
import { DownloadPortal } from '@/components/DownloadPortal'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white selection:bg-amber-400/20 selection:text-amber-300">
      <Navbar />
      <main>
        <Hero />
        <TelemetryTicker />
        <BentoGrid />
        <EcosystemComparison />
        <DownloadPortal />
      </main>
      <Footer />
    </div>
  )
}

export default App
