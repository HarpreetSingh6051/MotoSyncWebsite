// Web Audio API Motorcycle Exhaust Synthesizer

export type BikeSoundProfile = 'harley' | 'ninja' | 'bullet' | 'ducati'

export interface BikeSoundMeta {
  id: BikeSoundProfile
  name: string
  engine: string
  displacement: string
  redline: string
  description: string
  color: string
}

export const BIKE_PROFILES: BikeSoundMeta[] = [
  {
    id: 'harley',
    name: 'Harley-Davidson Milwaukee-Eight',
    engine: '45° V-Twin Pushrod',
    displacement: '1,868 cc (114 ci)',
    redline: '5,500 RPM',
    description: 'Iconic uneven firing cadence ("potato-potato") with deep low-end rumble and chest-thumping bass resonance.',
    color: '#f59e0b',
  },
  {
    id: 'ninja',
    name: 'Kawasaki Ninja ZX-10R',
    engine: 'Inline-4 DOHC 16-Valve',
    displacement: '998 cc',
    redline: '14,200 RPM',
    description: 'High-velocity screaming superbike acoustics with ferocious induction roar and razor-sharp rev sweeps.',
    color: '#10b981',
  },
  {
    id: 'bullet',
    name: 'Royal Enfield Bullet 350',
    engine: 'J-Series Long-Stroke Single',
    displacement: '349 cc',
    redline: '6,800 RPM',
    description: 'Rhythmic mechanical single-cylinder thumping heartbeat with signature cast-iron cadence and burble on decel.',
    color: '#06b6d4',
  },
  {
    id: 'ducati',
    name: 'Ducati Panigale V4 Desmosedici',
    engine: '90° V4 TwinPulse Desmo',
    displacement: '1,103 cc',
    redline: '15,000 RPM',
    description: 'MotoGP-derived firing order with metallic raspy roar, rapid throttle spool, and exhaust crackles.',
    color: '#f43f5e',
  },
]

class ExhaustAudioEngine {
  private ctx: AudioContext | null = null
  private activeProfile: BikeSoundProfile | null = null
  private oscNodes: OscillatorNode[] = []
  private gainNode: GainNode | null = null
  private filterNode: BiquadFilterNode | null = null
  private isPlaying = false
  private isRevving = false

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public play(profile: BikeSoundProfile) {
    this.stop()
    this.initContext()
    if (!this.ctx) return

    this.activeProfile = profile
    this.isPlaying = true
    const now = this.ctx.currentTime

    // Master Gain
    this.gainNode = this.ctx.createGain()
    this.gainNode.gain.setValueAtTime(0.001, now)
    this.gainNode.gain.exponentialRampToValueAtTime(0.25, now + 0.1)

    // Master Filter
    this.filterNode = this.ctx.createBiquadFilter()
    this.filterNode.type = 'lowpass'

    switch (profile) {
      case 'harley': {
        this.filterNode.frequency.setValueAtTime(450, now)
        // Two oscillators for uneven V-Twin pulse
        const osc1 = this.ctx.createOscillator()
        osc1.type = 'sawtooth'
        osc1.frequency.setValueAtTime(32, now) // Low fundamental

        const osc2 = this.ctx.createOscillator()
        osc2.type = 'triangle'
        osc2.frequency.setValueAtTime(64, now)

        osc1.connect(this.filterNode)
        osc2.connect(this.filterNode)
        this.oscNodes = [osc1, osc2]
        break
      }

      case 'ninja': {
        this.filterNode.frequency.setValueAtTime(1400, now)
        // High rev inline 4 whine
        const osc1 = this.ctx.createOscillator()
        osc1.type = 'sawtooth'
        osc1.frequency.setValueAtTime(95, now)

        const osc2 = this.ctx.createOscillator()
        osc2.type = 'sine'
        osc2.frequency.setValueAtTime(190, now)

        osc1.connect(this.filterNode)
        osc2.connect(this.filterNode)
        this.oscNodes = [osc1, osc2]
        break
      }

      case 'bullet': {
        this.filterNode.frequency.setValueAtTime(320, now)
        // Single cylinder heavy thump
        const osc1 = this.ctx.createOscillator()
        osc1.type = 'square'
        osc1.frequency.setValueAtTime(24, now)

        const osc2 = this.ctx.createOscillator()
        osc2.type = 'sine'
        osc2.frequency.setValueAtTime(48, now)

        osc1.connect(this.filterNode)
        osc2.connect(this.filterNode)
        this.oscNodes = [osc1, osc2]
        break
      }

      case 'ducati': {
        this.filterNode.frequency.setValueAtTime(1100, now)
        // TwinPulse V4 rasp
        const osc1 = this.ctx.createOscillator()
        osc1.type = 'sawtooth'
        osc1.frequency.setValueAtTime(78, now)

        const osc2 = this.ctx.createOscillator()
        osc2.type = 'sawtooth'
        osc2.frequency.setValueAtTime(156, now)

        osc1.connect(this.filterNode)
        osc2.connect(this.filterNode)
        this.oscNodes = [osc1, osc2]
        break
      }
    }

    this.filterNode.connect(this.gainNode)
    this.gainNode.connect(this.ctx.destination)

    this.oscNodes.forEach((osc) => osc.start(now))
  }

  public rev() {
    if (!this.ctx || !this.isPlaying || this.isRevving || !this.filterNode) return
    this.isRevving = true
    const now = this.ctx.currentTime

    const baseOsc1 = this.oscNodes[0]
    const baseOsc2 = this.oscNodes[1]

    if (baseOsc1 && baseOsc2) {
      const f1 = baseOsc1.frequency.value
      const f2 = baseOsc2.frequency.value
      const filterFreq = this.filterNode.frequency.value

      // Throttle open (spool up)
      baseOsc1.frequency.exponentialRampToValueAtTime(f1 * 3.2, now + 0.35)
      baseOsc2.frequency.exponentialRampToValueAtTime(f2 * 3.2, now + 0.35)
      this.filterNode.frequency.exponentialRampToValueAtTime(Math.min(filterFreq * 3.5, 4000), now + 0.35)

      // Throttle close (burble down)
      baseOsc1.frequency.exponentialRampToValueAtTime(f1, now + 0.9)
      baseOsc2.frequency.exponentialRampToValueAtTime(f2, now + 0.9)
      this.filterNode.frequency.exponentialRampToValueAtTime(filterFreq, now + 0.9)
    }

    setTimeout(() => {
      this.isRevving = false
    }, 950)
  }

  public stop() {
    if (this.ctx && this.gainNode) {
      const now = this.ctx.currentTime
      this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 0.1)
    }
    setTimeout(() => {
      this.oscNodes.forEach((osc) => {
        try {
          osc.stop()
          osc.disconnect()
        } catch {}
      })
      this.oscNodes = []
      this.isPlaying = false
      this.isRevving = false
      this.activeProfile = null
    }, 120)
  }

  public getActive() {
    return this.activeProfile
  }
}

export const audioEngine = new ExhaustAudioEngine()
