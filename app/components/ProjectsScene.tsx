"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box, Sphere, Environment } from "@react-three/drei"
import type * as THREE from "three"

interface Project {
  title: string
  color: string
  status: string
}

interface ProjectsSceneProps {
  projects: Project[]
}

export function ProjectsScene({ projects }: ProjectsSceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} intensity={1} color="#00d4ff" />
      <pointLight position={[-8, -8, -8]} intensity={0.6} color="#0099ff" />

      <group ref={groupRef}>
        {projects.map((project, index) => {
          const angle = (index / projects.length) * Math.PI * 2
          const radius = 6
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const y = Math.sin(index * 0.5) * 1.5

          return (
            <Float key={index} speed={1.2 + index * 0.15} rotationIntensity={1.2} floatIntensity={1.8}>
              <group position={[x, y, z]}>
                {/* Enhanced project representation */}
                <Box args={[1.8, 2.2, 0.15]}>
                  <meshStandardMaterial
                    color={project.color}
                    transparent
                    opacity={0.85}
                    roughness={0.15}
                    metalness={0.85}
                    emissive={project.color}
                    emissiveIntensity={0.05}
                  />
                </Box>

                {/* Enhanced status indicator */}
                <Float speed={3.5} rotationIntensity={2.5} floatIntensity={1.2}>
                  <Sphere args={[0.25, 20, 20]} position={[1, 1.2, 0.3]}>
                    <meshStandardMaterial
                      color={project.status === "Completed" ? "#00ff88" : "#ffaa00"}
                      transparent
                      opacity={0.95}
                      roughness={0.05}
                      metalness={0.95}
                      emissive={project.status === "Completed" ? "#00ff88" : "#ffaa00"}
                      emissiveIntensity={0.2}
                    />
                  </Sphere>
                </Float>

                {/* Enhanced decorative elements */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <Float key={i} speed={2.5 + i * 0.4} rotationIntensity={1.5} floatIntensity={0.8}>
                    <Box
                      args={[0.12, 0.12, 0.12]}
                      position={[(Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.5, 0.4 + i * 0.15]}
                    >
                      <meshStandardMaterial
                        color={project.color}
                        transparent
                        opacity={0.8}
                        roughness={0.2}
                        metalness={0.8}
                        emissive={project.color}
                        emissiveIntensity={0.1}
                      />
                    </Box>
                  </Float>
                ))}
              </group>
            </Float>
          )
        })}
      </group>
    </>
  )
}
