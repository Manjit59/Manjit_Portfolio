"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface InteractiveButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "default" | "outline"
  className?: string
}

export function InteractiveButton({ children, onClick, variant = "default", className = "" }: InteractiveButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
      <Button onClick={onClick} variant={variant} className={`relative overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}
