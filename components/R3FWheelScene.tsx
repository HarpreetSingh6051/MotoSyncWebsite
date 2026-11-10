'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Creates procedural high-frequency normal/bump map for tire tread blocks
 */
function createTreadTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#808080'
  ctx.fillRect(0, 0, 512, 512)

  // Draw tire sipes and directional tread blocks
  ctx.strokeStyle = '#202020'
  ctx.lineWidth = 14
  ctx.lineCap = 'round'

  for (let i = 0; i < 512; i += 48) {
    ctx.beginPath()
    ctx.moveTo(120, i)
    ctx.lineTo(256, i + 24)
    ctx.lineTo(392, i)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 16)
  return texture
}

/**
 * Creates procedural drilled rotor alpha & bump map
 */
function createRotorTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#CCCCCC'
  ctx.fillRect(0, 0, 512, 512)

  // Radial brushed metal lines
  for (let r = 80; r < 240; r += 2) {
    ctx.beginPath()
    ctx.arc(256, 256, r, 0, Math.PI * 2)
    ctx.strokeStyle = Math.random() > 0.5 ? '#BBBBBB' : '#DDDDDD'
    ctx.lineWidth = 1
    ctx.stroke()
  }

  // Drilled ventilation holes
  ctx.fillStyle = '#111111'
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 16) {
    const r1 = 160
    const r2 = 190
    const r3 = 220
    ctx.beginPath()
    ctx.arc(256 + Math.cos(a) * r1, 256 + Math.sin(a) * r1, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(256 + Math.cos(a + 0.1) * r2, 256 + Math.sin(a + 0.1) * r2, 7, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(256 + Math.cos(a) * r3, 256 + Math.sin(a) * r3, 6, 0, Math.PI * 2)
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

const WheelModel = () => {
  const groupRef = useRef<THREE.Group>(null)
  const caliperRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  // Generate procedural textures once in memory
  const treadMap = useMemo(() => (typeof window !== 'undefined' ? createTreadTexture() : null), [])
  const rotorMap = useMemo(() => (typeof window !== 'undefined' ? createRotorTexture() : null), [])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Scroll and continuous spin
    groupRef.current.rotation.z -= delta * 0.9

    // Smooth mouse parallax lerping (limits within subtle angles)
    const targetX = -pointer.y * 0.35 + 0.1
    const targetY = pointer.x * 0.35 - 0.2

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08)

    // Gentle hover float
    const floatY = Math.sin(state.clock.elapsedTime * 1.4) * 0.06
    groupRef.current.position.y = floatY

    if (caliperRef.current) {
      caliperRef.current.rotation.x = groupRef.current.rotation.x
      caliperRef.current.rotation.y = groupRef.current.rotation.y
      caliperRef.current.position.y = floatY
    }
  })

  // 10 Radial Turbine Spokes
  const spokes = useMemo(() => Array.from({ length: 10 }), [])

  return (
    <>
      <group ref={groupRef}>
        {/* 1. Heavy Rubber Tire Outer Ring with PBR Tread Bump */}
        <mesh>
          <torusGeometry args={[2.32, 0.52, 32, 72]} />
          <meshStandardMaterial
            color="#080B10"
            roughness={0.92}
            metalness={0.06}
            bumpMap={treadMap || undefined}
            bumpScale={0.04}
          />
        </mesh>

        {/* 2. Electric Blue Anodized Rim Bead Stripe */}
        <mesh position={[0, 0, 0.2]}>
          <torusGeometry args={[1.84, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#10B1FB"
            emissive="#0284C7"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        <mesh position={[0, 0, -0.2]}>
          <torusGeometry args={[1.84, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#10B1FB"
            emissive="#0284C7"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* 3. Deep Machined Alloy Rim Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.82, 1.82, 0.44, 48, 1, true]} />
          <meshStandardMaterial
            color="#111622"
            metalness={0.92}
            roughness={0.24}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* 4. Center Machined Hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.46, 36]} />
          <meshStandardMaterial
            color="#18202E"
            metalness={0.94}
            roughness={0.2}
          />
        </mesh>

        {/* 5. Titanium Hollow Axle Spindle */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.5, 6]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#0284C7"
            emissiveIntensity={0.5}
            metalness={0.98}
            roughness={0.12}
          />
        </mesh>

        {/* 6. 10 Sculpted Alloy Spokes */}
        {spokes.map((_, i) => {
          const angle = (i * Math.PI * 2) / 10
          return (
            <group
              key={i}
              position={[Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0]}
              rotation={[0, 0, angle + Math.PI / 2]}
            >
              <mesh>
                <boxGeometry args={[0.1, 1.35, 0.09]} />
                <meshStandardMaterial
                  color="#1A2333"
                  metalness={0.88}
                  roughness={0.28}
                />
              </mesh>
            </group>
          )
        })}

        {/* 7. Drilled Ventilated Disc Rotor */}
        <mesh position={[0, 0, 0.24]}>
          <ringGeometry args={[0.76, 1.52, 64]} />
          <meshStandardMaterial
            color="#8A98AB"
            metalness={0.96}
            roughness={0.18}
            bumpMap={rotorMap || undefined}
            bumpScale={0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 8. Stationary Dark Anodized Racing Caliper (Clean MotoSync Hardware) */}
      <group ref={caliperRef}>
        <mesh position={[1.22, 0.76, 0.32]} rotation={[0, 0, -Math.PI / 5.2]}>
          <boxGeometry args={[0.46, 0.94, 0.36]} />
          <meshStandardMaterial
            color="#121722"
            emissive="#0C101A"
            emissiveIntensity={0.2}
            metalness={0.82}
            roughness={0.32}
          />
        </mesh>
        {/* Subtle Anodized Accent Trim */}
        <mesh position={[1.22, 0.76, 0.44]} rotation={[0, 0, -Math.PI / 5.2]}>
          <boxGeometry args={[0.4, 0.12, 0.04]} />
          <meshStandardMaterial
            color="#10B1FB"
            emissive="#10B1FB"
            emissiveIntensity={0.7}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </>
  )
}

export function R3FWheelScene() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.6], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Deep Midnight Ambient Base */}
        <ambientLight intensity={0.65} color="#0E1530" />

        {/* Top-Left Electric Blue Key Rim Light */}
        <pointLight position={[-4, 3, 4.5]} color="#10B1FB" intensity={12} distance={16} />

        {/* Bottom-Right Warm Ember Pavement Reflection Light */}
        <pointLight position={[3.5, -2.8, 3.8]} color="#FF6A3D" intensity={9} distance={14} />

        {/* Backlight / Violet Specular Halo */}
        <pointLight position={[0, -3.5, -2]} color="#8B5CF6" intensity={5} distance={10} />

        <WheelModel />
      </Canvas>
    </div>
  )
}
