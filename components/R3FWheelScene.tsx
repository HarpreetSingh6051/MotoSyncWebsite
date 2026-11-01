'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const WheelModel = () => {
  const groupRef = useRef<THREE.Group>(null)
  const caliperRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Continuous spin
    groupRef.current.rotation.z -= delta * 1.2

    // Mouse tilt lerping
    const targetX = -pointer.y * 0.45 + 0.15
    const targetY = pointer.x * 0.45 - 0.25

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08)

    if (caliperRef.current) {
      caliperRef.current.rotation.x = groupRef.current.rotation.x
      caliperRef.current.rotation.y = groupRef.current.rotation.y
      caliperRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08
    }

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08
  })

  // Spokes Array (10 radial turbine spokes)
  const spokeIndices = Array.from({ length: 10 })

  return (
    <>
      <group ref={groupRef}>
        {/* Rubber Tire Outer Ring */}
        <mesh>
          <torusGeometry args={[2.3, 0.52, 28, 64]} />
          <meshStandardMaterial color="#0c0e12" roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Outer Electric Blue Neon Rim Stripe */}
        <mesh position={[0, 0, 0.18]}>
          <torusGeometry args={[1.82, 0.035, 16, 64]} />
          <meshBasicMaterial color="#10b1fb" />
        </mesh>
        <mesh position={[0, 0, -0.18]}>
          <torusGeometry args={[1.82, 0.035, 16, 64]} />
          <meshBasicMaterial color="#10b1fb" />
        </mesh>

        {/* Inner Neon Purple Rim Stripe */}
        <mesh position={[0, 0, 0.14]}>
          <torusGeometry args={[1.74, 0.03, 16, 64]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        {/* Alloy Rim Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.82, 1.82, 0.38, 48, 1, true]} />
          <meshStandardMaterial color="#161c26" metalness={0.9} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>

        {/* Center Hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.42, 32]} />
          <meshStandardMaterial color="#1f293b" metalness={0.92} roughness={0.2} />
        </mesh>

        {/* Titanium Axle Nut */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.46, 6]} />
          <meshStandardMaterial color="#10b1fb" emissive="#0284c7" emissiveIntensity={0.6} metalness={0.95} roughness={0.1} />
        </mesh>

        {/* 10 Alloy Spokes */}
        {spokeIndices.map((_, i) => {
          const angle = (i * Math.PI * 2) / 10
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, 0]}
              rotation={[0, 0, angle + Math.PI / 2]}
            >
              <boxGeometry args={[0.09, 1.35, 0.08]} />
              <meshStandardMaterial color="#263345" metalness={0.85} roughness={0.25} />
            </mesh>
          )
        })}

        {/* Ventilated Brake Disc Rotor */}
        <mesh position={[0, 0, 0.22]}>
          <ringGeometry args={[0.8, 1.48, 48]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.96} roughness={0.15} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Stationary Racing Red Caliper (Stationary while rotor rotates) */}
      <group ref={caliperRef}>
        <mesh position={[1.18, 0.72, 0.28]} rotation={[0, 0, -Math.PI / 5.5]}>
          <boxGeometry args={[0.42, 0.9, 0.38]} />
          <meshStandardMaterial color="#ef4444" emissive="#991b1b" emissiveIntensity={0.4} metalness={0.6} roughness={0.25} />
        </mesh>
      </group>
    </>
  )
}

export const R3FWheelScene = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        {/* Electric Blue Key Light */}
        <pointLight position={[-3, 2, 4]} color="#10b1fb" intensity={8} distance={15} />
        {/* Neon Purple Rim Light */}
        <pointLight position={[3, -2, 4]} color="#8b5cf6" intensity={7} distance={15} />
        {/* Caliper Red Accent Light */}
        <pointLight position={[1.2, 1, 2.5]} color="#ef4444" intensity={4} distance={6} />

        <WheelModel />
      </Canvas>
    </div>
  )
}
