import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TelemetryTicker } from '@/components/TelemetryTicker'
import { BentoGrid } from '@/components/BentoGrid'
import { EcosystemComparison } from '@/components/EcosystemComparison'
import { DownloadPortal } from '@/components/DownloadPortal'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-electric-500/30 selection:text-electric-300">
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
