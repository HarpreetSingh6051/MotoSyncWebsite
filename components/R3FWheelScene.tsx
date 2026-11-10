'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function createTreadTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#808080'
  ctx.fillRect(0, 0, 512, 512)

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

function createRotorTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#CCCCCC'
  ctx.fillRect(0, 0, 512, 512)

  for (let r = 80; r < 240; r += 2) {
    ctx.beginPath()
    ctx.arc(256, 256, r, 0, Math.PI * 2)
    ctx.strokeStyle = Math.random() > 0.5 ? '#BBBBBB' : '#DDDDDD'
    ctx.lineWidth = 1
    ctx.stroke()
  }

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

  const treadMap = useMemo(() => (typeof window !== 'undefined' ? createTreadTexture() : null), [])
  const rotorMap = useMemo(() => (typeof window !== 'undefined' ? createRotorTexture() : null), [])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.z -= delta * 0.9

    const targetX = -pointer.y * 0.35 + 0.1
    const targetY = pointer.x * 0.35 - 0.2

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08)

    const floatY = Math.sin(state.clock.elapsedTime * 1.4) * 0.05
    groupRef.current.position.y = floatY

    if (caliperRef.current) {
      caliperRef.current.rotation.x = groupRef.current.rotation.x
      caliperRef.current.rotation.y = groupRef.current.rotation.y
      caliperRef.current.position.y = floatY
    }
  })

  const spokes = useMemo(() => Array.from({ length: 10 }), [])

  return (
    <>
      <group ref={groupRef}>
        {/* 1. Heavy Rubber Tire Outer Ring */}
        <mesh>
          <torusGeometry args={[2.32, 0.52, 32, 72]} />
          <meshStandardMaterial
            color="#1C2028"
            roughness={0.94}
            metalness={0.04}
            bumpMap={treadMap || undefined}
            bumpScale={0.04}
          />
        </mesh>

        {/* 2. Brushed Titanium Rim Stripe */}
        <mesh position={[0, 0, 0.2]}>
          <torusGeometry args={[1.84, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#CBD5E1"
            roughness={0.18}
            metalness={0.94}
          />
        </mesh>
        <mesh position={[0, 0, -0.2]}>
          <torusGeometry args={[1.84, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#CBD5E1"
            roughness={0.18}
            metalness={0.94}
          />
        </mesh>

        {/* 3. Deep Machined Alloy Rim Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.82, 1.82, 0.44, 48, 1, true]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.92}
            roughness={0.22}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* 4. Center Machined Hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.46, 36]} />
          <meshStandardMaterial
            color="#334155"
            metalness={0.94}
            roughness={0.2}
          />
        </mesh>

        {/* 5. Titanium Axle Spindle */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.26, 0.26, 0.5, 6]} />
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.98}
            roughness={0.1}
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
                  color="#64748B"
                  metalness={0.88}
                  roughness={0.24}
                />
              </mesh>
            </group>
          )
        })}

        {/* 7. Drilled Ventilated Stainless Disc Rotor */}
        <mesh position={[0, 0, 0.24]}>
          <ringGeometry args={[0.76, 1.52, 64]} />
          <meshStandardMaterial
            color="#CBD5E1"
            metalness={0.96}
            roughness={0.16}
            bumpMap={rotorMap || undefined}
            bumpScale={0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 8. Stationary Satin Black Racing Caliper */}
      <group ref={caliperRef}>
        <mesh position={[1.22, 0.76, 0.32]} rotation={[0, 0, -Math.PI / 5.2]}>
          <boxGeometry args={[0.46, 0.94, 0.36]} />
          <meshStandardMaterial
            color="#181C24"
            metalness={0.82}
            roughness={0.28}
          />
        </mesh>
        <mesh position={[1.22, 0.76, 0.44]} rotation={[0, 0, -Math.PI / 5.2]}>
          <boxGeometry args={[0.4, 0.12, 0.04]} />
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.95}
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
        <ambientLight intensity={1.3} color="#FFFFFF" />

        {/* Top-Left Crisp Studio Softbox Key Light */}
        <pointLight position={[-4, 3, 4.5]} color="#FFFFFF" intensity={12} distance={16} />

        {/* Bottom-Right Neutral Studio Fill Light */}
        <pointLight position={[3.5, -2.8, 3.8]} color="#E2E8F0" intensity={8} distance={14} />

        {/* Studio Rim Backlight */}
        <pointLight position={[0, 3.5, -2]} color="#FFFFFF" intensity={6} distance={10} />

        <WheelModel />
      </Canvas>
    </div>
  )
}
