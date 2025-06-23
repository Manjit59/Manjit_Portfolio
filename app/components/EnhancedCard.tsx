"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function EnhancedCard({ children, className = "", delay = 0 }: EnhancedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="group"
    >
      <Card
        className={`bg-black/40 backdrop-blur-md border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden ${className}`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8 }}
        />
        <CardContent className="relative z-10">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
