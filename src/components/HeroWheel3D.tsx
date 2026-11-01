import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const HeroWheel3D = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0, 7.2)

    // Renderer with true black background & alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    container.appendChild(renderer.domElement)

    // Master Wheel Group (rotates with spin & tilt)
    const wheelGroup = new THREE.Group()
    scene.add(wheelGroup)

    // 1. Rubber Tire (Deep Carbon Tread)
    const tireGeo = new THREE.TorusGeometry(2.35, 0.58, 32, 72)
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x090b0e,
      roughness: 0.9,
      metalness: 0.1,
    })
    const tire = new THREE.Mesh(tireGeo, tireMat)
    wheelGroup.add(tire)

    // 2. Glowing Tire Tread Grooves (32 radial directional chevron cuts)
    const treadGroup = new THREE.Group()
    const treadCount = 36
    for (let i = 0; i < treadCount; i++) {
      const angle = (i * Math.PI * 2) / treadCount
      const treadGeo = new THREE.BoxGeometry(0.04, 0.35, 0.12)
      const treadMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x10b1fb : 0x8b5cf6, // Alternate electric blue and purple
      })
      const tread = new THREE.Mesh(treadGeo, treadMat)
      const radius = 2.86
      tread.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, (i % 2 === 0 ? 0.15 : -0.15))
      tread.rotation.z = angle + (i % 2 === 0 ? 0.35 : -0.35)
      treadGroup.add(tread)
    }
    wheelGroup.add(treadGroup)

    // 3. Outer Electric Blue Neon Rim Stripe
    const blueRimGeo = new THREE.TorusGeometry(1.86, 0.035, 16, 72)
    const blueRimMat = new THREE.MeshBasicMaterial({ color: 0x10b1fb })
    const blueRim = new THREE.Mesh(blueRimGeo, blueRimMat)
    blueRim.position.z = 0.22
    wheelGroup.add(blueRim)

    const blueRimBack = new THREE.Mesh(blueRimGeo, blueRimMat)
    blueRimBack.position.z = -0.22
    wheelGroup.add(blueRimBack)

    // 4. Inner Neon Purple Rim Ring
    const purpleRimGeo = new THREE.TorusGeometry(1.78, 0.03, 16, 72)
    const purpleRimMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 })
    const purpleRim = new THREE.Mesh(purpleRimGeo, purpleRimMat)
    purpleRim.position.z = 0.18
    wheelGroup.add(purpleRim)

    // 5. Machined Alloy Sport Rim Shell
    const rimShellGeo = new THREE.CylinderGeometry(1.85, 1.85, 0.44, 48, 1, true)
    rimShellGeo.rotateX(Math.PI / 2)
    const rimShellMat = new THREE.MeshStandardMaterial({
      color: 0x121722,
      metalness: 0.95,
      roughness: 0.18,
      side: THREE.DoubleSide,
    })
    const rimShell = new THREE.Mesh(rimShellGeo, rimShellMat)
    wheelGroup.add(rimShell)

    // 6. Center Hub & Titanium Axle Nut
    const hubGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.48, 32)
    hubGeo.rotateX(Math.PI / 2)
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0x1f293d,
      metalness: 0.9,
      roughness: 0.25,
    })
    const hub = new THREE.Mesh(hubGeo, hubMat)
    wheelGroup.add(hub)

    const nutGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.52, 6)
    nutGeo.rotateX(Math.PI / 2)
    const nutMat = new THREE.MeshStandardMaterial({
      color: 0x10b1fb,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
    })
    const axleNut = new THREE.Mesh(nutGeo, nutMat)
    wheelGroup.add(axleNut)

    // 7. Aerodynamic 10-Spoke Sport Array
    const spokeCount = 10
    const spokeGroup = new THREE.Group()
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i * Math.PI * 2) / spokeCount
      const spokeGeo = new THREE.BoxGeometry(0.1, 1.35, 0.1)
      const spokeMat = new THREE.MeshStandardMaterial({
        color: 0x222c3d,
        metalness: 0.85,
        roughness: 0.2,
      })
      const spoke = new THREE.Mesh(spokeGeo, spokeMat)
      spoke.position.set(Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, 0)
      spoke.rotation.z = angle + Math.PI / 2
      spokeGroup.add(spoke)
    }
    wheelGroup.add(spokeGroup)

    // 8. Cross-Drilled Ventilated Racing Brake Disc
    const rotorGeo = new THREE.RingGeometry(0.8, 1.5, 48)
    const rotorMat = new THREE.MeshStandardMaterial({
      color: 0x8a92a3,
      metalness: 0.96,
      roughness: 0.15,
      side: THREE.DoubleSide,
    })
    const rotor = new THREE.Mesh(rotorGeo, rotorMat)
    rotor.position.z = 0.26
    wheelGroup.add(rotor)

    // 9. Stationed High-Contrast Racing Red Caliper (Brembo Monobloc Style)
    const caliperMount = new THREE.Group()
    scene.add(caliperMount)

    const caliperGeo = new THREE.BoxGeometry(0.44, 0.95, 0.42)
    const caliperMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // Sharp Racing Red
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0x991b1b,
      emissiveIntensity: 0.4,
    })
    const caliper = new THREE.Mesh(caliperGeo, caliperMat)
    caliper.position.set(1.22, 0.78, 0.32)
    caliper.rotation.z = -Math.PI / 5.5
    caliperMount.add(caliper)

    // 10. Orbiting Cyber Photon Particle Ring
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const pAngle = (i / particleCount) * Math.PI * 2
      const pDist = 3.1 + (Math.random() - 0.5) * 0.4
      particlePositions[i * 3] = Math.cos(pAngle) * pDist
      particlePositions[i * 3 + 1] = Math.sin(pAngle) * pDist
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.8
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x10b1fb,
      size: 0.05,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const particleRing = new THREE.Points(particleGeo, particleMat)
    wheelGroup.add(particleRing)

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    // Electric Blue Key Light
    const blueKeyLight = new THREE.PointLight(0x10b1fb, 8, 16)
    blueKeyLight.position.set(-3.5, 2.5, 4.5)
    scene.add(blueKeyLight)

    // Neon Purple Rim Light
    const purpleRimLight = new THREE.PointLight(0x8b5cf6, 7, 16)
    purpleRimLight.position.set(3.5, -2.5, 4.5)
    scene.add(purpleRimLight)

    // Sharp Red Accent Light on Caliper
    const redAccentLight = new THREE.PointLight(0xef4444, 5, 8)
    redAccentLight.position.set(1.5, 1.2, 3)
    scene.add(redAccentLight)

    // Smooth Cursor Physics & Tilt
    let targetRotX = 0
    let targetRotY = 0
    let currentRotX = 0
    let currentRotY = 0
    let spinSpeed = 0.018

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      targetRotY = x * 0.48
      targetRotX = -y * 0.48
    }

    const handlePointerEnter = () => {
      spinSpeed = 0.04
    }

    const handlePointerLeave = () => {
      spinSpeed = 0.018
      targetRotX = 0
      targetRotY = 0
    }

    window.addEventListener('mousemove', handlePointerMove)
    container.addEventListener('mouseenter', handlePointerEnter)
    container.addEventListener('mouseleave', handlePointerLeave)

    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Continuous Wheel Spin
      wheelGroup.rotation.z -= spinSpeed

      // Particle aura counter-spin
      particleRing.rotation.z += spinSpeed * 0.5

      // Smooth Mouse Tilt Interpolation
      currentRotX += (targetRotX - currentRotX) * 0.06
      currentRotY += (targetRotY - currentRotY) * 0.06

      wheelGroup.rotation.x = currentRotX + 0.18
      wheelGroup.rotation.y = currentRotY - 0.28
      caliperMount.rotation.x = currentRotX + 0.18
      caliperMount.rotation.y = currentRotY - 0.28

      // Gentle floating oscillation
      const floatY = Math.sin(elapsed * 1.8) * 0.09
      wheelGroup.position.y = floatY
      caliperMount.position.y = floatY

      // Pulsing Lights & Shaders
      blueKeyLight.intensity = 7 + Math.sin(elapsed * 3) * 2
      purpleRimLight.intensity = 6 + Math.cos(elapsed * 3) * 2

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mouseenter', handlePointerEnter)
      container.removeEventListener('mouseleave', handlePointerLeave)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[580px] flex items-center justify-center">
      {/* Specular Radial Halos (Electric Blue + Purple) */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-500/18 via-neon-purple/10 to-transparent blur-3xl pointer-events-none" />

      {/* Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Technical HUD Overlays */}
      <div className="absolute top-4 right-4 rounded-lg border border-white/10 bg-black/80 px-3 py-1 font-mono text-[10px] text-white/50 backdrop-blur-md pointer-events-none flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-electric-400 animate-ping" />
        <span className="text-white/80 font-bold">WHEEL_TELEMETRY // 3D_WEBGL</span>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-electric-500/30 bg-black/80 px-4 py-1.5 text-[11px] font-mono tracking-wider text-electric-300 backdrop-blur-md pointer-events-none flex items-center gap-2 shadow-lg shadow-electric-500/10">
        <span className="h-2 w-2 rounded-full bg-electric-400 shadow-sm shadow-electric-400" />
        <span>NVIDIA ACES Tone Mapping · Interactive Inertia</span>
      </div>
    </div>
  )
}
