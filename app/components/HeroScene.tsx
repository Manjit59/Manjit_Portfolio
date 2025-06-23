"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, Sphere, Box, Torus, Environment, Stars } from "@react-three/drei"
import type * as THREE from "three"

export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />

      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0099ff" />

      <group ref={groupRef}>
        {/* Main floating sphere */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[3, 2, -2]}>
            <meshStandardMaterial color="#00d4ff" transparent opacity={0.8} roughness={0.1} metalness={0.9} />
          </Sphere>
        </Float>

        {/* Floating torus */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
          <Torus ref={torusRef} args={[0.8, 0.3, 16, 100]} position={[-3, -1, -1]}>
            <meshStandardMaterial color="#0099ff" transparent opacity={0.7} roughness={0.2} metalness={0.8} />
          </Torus>
        </Float>

        {/* Floating boxes with enhanced animations */}
        {Array.from({ length: 12 }).map((_, i) => (
          <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={1}>
            <Box
              args={[0.3 + Math.random() * 0.4, 0.3 + Math.random() * 0.4, 0.3 + Math.random() * 0.4]}
              position={[(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8]}
            >
              <meshStandardMaterial
                color={i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#0099ff" : "#00ccaa"}
                transparent
                opacity={0.6 + Math.random() * 0.3}
                roughness={0.2}
                metalness={0.8}
              />
            </Box>
          </Float>
        ))}

        {/* Additional floating spheres */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Float key={`sphere-${i}`} speed={0.8 + i * 0.3} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere
              args={[0.2 + Math.random() * 0.3, 16, 16]}
              position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10]}
            >
              <meshStandardMaterial
                color={["#00d4ff", "#0099ff", "#00ccaa", "#0066cc", "#004499", "#0088cc"][i]}
                transparent
                opacity={0.7}
                roughness={0.1}
                metalness={0.9}
              />
            </Sphere>
          </Float>
        ))}

        {/* 3D Text */}
        <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            font="/fonts/Geist_Bold.json"
            fontSize={0.8}
            position={[0, -3, 0]}
            color="#00d4ff"
            anchorX="center"
            anchorY="middle"
          >
            Welcome to the Future
          </Text>
        </Float>
      </group>
    </>
  )
}
