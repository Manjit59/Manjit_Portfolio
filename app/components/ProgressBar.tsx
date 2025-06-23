"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  percentage: number
  color?: string
  delay?: number
}

export function ProgressBar({ percentage, color = "from-cyan-400 to-blue-400", delay = 0 }: ProgressBarProps) {
  return (
    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ delay, duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: delay + 1.2,
          }}
        />
      </motion.div>
    </div>
  )
}
