"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroScene } from "../HeroScene"
import { ProfilePhoto } from "../ProfilePhoto"
import ClientCanvas from "@/app/lib/ClientCanvas"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="h-screen relative">
      <ClientCanvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </ClientCanvas>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center px-6"
        >
          <ProfilePhoto />

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-4"
          >
            Manjit Patra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl text-cyan-300 mb-8"
          >
            Software Engineer & Test Automation Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
          >
            <Button
              onClick={() => onNavigate("projects")}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => onNavigate("contact")}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full text-lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
