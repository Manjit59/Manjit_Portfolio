"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box, Sphere, Environment } from "@react-three/drei"
import type * as THREE from "three"

interface Skill {
  title: string
  skills: string[]
  color: string
}

interface SkillsSceneProps {
  skills: Skill[]
}

export function SkillsScene({ skills }: SkillsSceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const getColorFromGradient = (gradientString: string) => {
    if (gradientString.includes("cyan")) return "#00d4ff"
    if (gradientString.includes("blue")) return "#0099ff"
    if (gradientString.includes("teal")) return "#00ccaa"
    return "#00d4ff"
  }

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0099ff" />

      <group ref={groupRef}>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2
          const radius = 4
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const color = getColorFromGradient(skill.color)

          return (
            <Float key={index} speed={1 + index * 0.3} rotationIntensity={1} floatIntensity={2}>
              <group position={[x, 0, z]}>
                {/* Main skill sphere */}
                <Sphere args={[0.8, 32, 32]}>
                  <meshStandardMaterial color={color} transparent opacity={0.8} roughness={0.2} metalness={0.8} />
                </Sphere>

                {/* Skill sub-items as smaller floating cubes with enhanced visuals */}
                {skill.skills.map((subSkill, subIndex) => {
                  const subAngle = (subIndex / skill.skills.length) * Math.PI * 2
                  const subRadius = 1.8
                  const subX = Math.cos(subAngle) * subRadius
                  const subZ = Math.sin(subAngle) * subRadius
                  const subY = Math.sin(subIndex) * 0.5 // simple static offset; no runtime state

                  return (
                    <Float key={subIndex} speed={2 + subIndex * 0.2} rotationIntensity={2} floatIntensity={1}>
                      <Box args={[0.4, 0.4, 0.4]} position={[subX, subY, subZ]}>
                        <meshStandardMaterial
                          color={color}
                          transparent
                          opacity={0.7}
                          roughness={0.2}
                          metalness={0.8}
                          emissive={color}
                          emissiveIntensity={0.1}
                        />
                      </Box>
                    </Float>
                  )
                })}
              </group>
            </Float>
          )
        })}

        {/* Central connecting element */}
        <Float speed={0.5} rotationIntensity={0.5} floatIntensity={1}>
          <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#ffffff" transparent opacity={0.9} roughness={0.1} metalness={1} />
          </Sphere>
        </Float>
      </group>
    </>
  )
}
