import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const HeroWheel3D = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0, 7)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    container.appendChild(renderer.domElement)

    // Wheel Master Group
    const wheelGroup = new THREE.Group()
    scene.add(wheelGroup)

    // 1. Rubber Tire (Outer Torus with dark rubber sheen)
    const tireGeo = new THREE.TorusGeometry(2.3, 0.55, 32, 64)
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      roughness: 0.85,
      metalness: 0.1,
    })
    const tire = new THREE.Mesh(tireGeo, tireMat)
    wheelGroup.add(tire)

    // 2. Alloy Rim Ring (Outer rim edge)
    const rimGeo = new THREE.TorusGeometry(1.82, 0.14, 24, 64)
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x222630,
      metalness: 0.85,
      roughness: 0.25,
    })
    const rim = new THREE.Mesh(rimGeo, rimMat)
    wheelGroup.add(rim)

    // 3. Neon Cyber Rim Stripe (Glowing rim edge)
    const neonStripeGeo = new THREE.TorusGeometry(1.85, 0.03, 16, 64)
    const neonStripeMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b, // Amber glow
    })
    const neonStripe = new THREE.Mesh(neonStripeGeo, neonStripeMat)
    wheelGroup.add(neonStripe)

    // 4. Center Hub
    const hubGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.35, 32)
    hubGeo.rotateX(Math.PI / 2)
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0x1a1e27,
      metalness: 0.9,
      roughness: 0.2,
    })
    const hub = new THREE.Mesh(hubGeo, hubMat)
    wheelGroup.add(hub)

    // 5. Wheel Spokes (10 Sport Y-spokes)
    const spokeCount = 10
    const spokeGroup = new THREE.Group()
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i * Math.PI * 2) / spokeCount
      const spokeGeo = new THREE.BoxGeometry(0.09, 1.35, 0.08)
      const spokeMat = new THREE.MeshStandardMaterial({
        color: 0x333b4d,
        metalness: 0.8,
        roughness: 0.3,
      })
      const spoke = new THREE.Mesh(spokeGeo, spokeMat)
      spoke.position.set(
        Math.cos(angle) * 1.05,
        Math.sin(angle) * 1.05,
        0,
      )
      spoke.rotation.z = angle + Math.PI / 2
      spokeGroup.add(spoke)
    }
    wheelGroup.add(spokeGroup)

    // 6. Brake Disc Rotor (Perforated ring)
    const discGeo = new THREE.RingGeometry(0.75, 1.45, 48)
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x8a92a3,
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.DoubleSide,
    })
    const brakeDisc = new THREE.Mesh(discGeo, discMat)
    brakeDisc.position.z = 0.12
    wheelGroup.add(brakeDisc)

    // 7. Brake Caliper (Brembo style neon amber/crimson)
    const caliperGeo = new THREE.BoxGeometry(0.4, 0.85, 0.38)
    const caliperMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      metalness: 0.5,
      roughness: 0.3,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.4,
    })
    const caliper = new THREE.Mesh(caliperGeo, caliperMat)
    caliper.position.set(1.15, 0.75, 0.22)
    caliper.rotation.z = -Math.PI / 6
    // Add caliper to scene (stationary while wheel rotates)
    const brakeMount = new THREE.Group()
    brakeMount.add(caliper)
    scene.add(brakeMount)

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
    keyLight.position.set(5, 5, 8)
    scene.add(keyLight)

    // Cyan Neon Accent Light
    const cyanLight = new THREE.PointLight(0x06b6d4, 6, 12)
    cyanLight.position.set(-3, -2, 3)
    scene.add(cyanLight)

    // Amber Neon Accent Light
    const amberLight = new THREE.PointLight(0xf59e0b, 7, 12)
    amberLight.position.set(3, 3, 3)
    scene.add(amberLight)

    // Mouse Interaction
    let targetRotationX = 0
    let targetRotationY = 0
    let currentRotationX = 0
    let currentRotationY = 0
    let spinSpeed = 0.015

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      targetRotationY = x * 0.45
      targetRotationX = -y * 0.45
    }

    const onMouseEnter = () => {
      spinSpeed = 0.035
    }

    const onMouseLeave = () => {
      spinSpeed = 0.015
      targetRotationX = 0
      targetRotationY = 0
    }

    window.addEventListener('mousemove', onPointerMove)
    container.addEventListener('mouseenter', onMouseEnter)
    container.addEventListener('mouseleave', onMouseLeave)

    // Resize Handler
    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Continuous Wheel Spin
      wheelGroup.rotation.z -= spinSpeed

      // Smooth Mouse Tilt
      currentRotationX += (targetRotationX - currentRotationX) * 0.05
      currentRotationY += (targetRotationY - currentRotationY) * 0.05

      wheelGroup.rotation.x = currentRotationX + 0.15
      wheelGroup.rotation.y = currentRotationY - 0.25
      brakeMount.rotation.x = currentRotationX + 0.15
      brakeMount.rotation.y = currentRotationY - 0.25

      // Gentle floating oscillation
      wheelGroup.position.y = Math.sin(elapsed * 1.5) * 0.08
      brakeMount.position.y = wheelGroup.position.y

      // Pulsing Neon Stripe & Lights
      neonStripeMat.color.setHex(Math.sin(elapsed * 3) > 0 ? 0xf59e0b : 0x06b6d4)
      amberLight.intensity = 5 + Math.sin(elapsed * 4) * 2.5

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('resize', onResize)
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mouseleave', onMouseLeave)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[540px] flex items-center justify-center pointer-events-auto">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Interactive Micro-badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1 text-[11px] font-mono tracking-wider text-white/50 backdrop-blur-md pointer-events-none">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 mr-2 animate-ping" />
        WebGL 3D Sport Rim · Interactive Physics
      </div>
    </div>
  )
}
