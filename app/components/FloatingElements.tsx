"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

interface FloatingElementsProps {
  count: number
}

export function FloatingElements({ count }: FloatingElementsProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  const elements = Array.from({ length: count }, (_, i) => {
    const shapes = ["sphere", "box", "torus"]
    const shape = shapes[i % shapes.length]
    const colors = ["#00d4ff", "#0099ff", "#00ccaa", "#0066cc"]
    const color = colors[i % colors.length]

    return {
      shape,
      color,
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10] as [
        number,
        number,
        number,
      ],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5,
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />

      <group ref={groupRef}>
        {elements.map((element, index) => (
          <Float key={index} speed={element.speed} rotationIntensity={1} floatIntensity={2}>
            <group position={element.position} scale={element.scale}>
              {element.shape === "sphere" && (
                <Sphere args={[1, 16, 16]}>
                  <meshStandardMaterial
                    color={element.color}
                    transparent
                    opacity={0.4}
                    roughness={0.3}
                    metalness={0.7}
                  />
                </Sphere>
              )}
              {element.shape === "box" && (
                <Box args={[1, 1, 1]}>
                  <meshStandardMaterial
                    color={element.color}
                    transparent
                    opacity={0.4}
                    roughness={0.3}
                    metalness={0.7}
                  />
                </Box>
              )}
              {element.shape === "torus" && (
                <Torus args={[1, 0.4, 8, 16]}>
                  <meshStandardMaterial
                    color={element.color}
                    transparent
                    opacity={0.4}
                    roughness={0.3}
                    metalness={0.7}
                  />
                </Torus>
              )}
            </group>
          </Float>
        ))}
      </group>
    </>
  )
}
