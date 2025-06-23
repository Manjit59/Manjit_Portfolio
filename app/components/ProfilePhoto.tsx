"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative mb-8 mx-auto w-48 h-48 md:w-56 md:h-56"
    >
      {/* Animated border rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1"
      >
        <div className="w-full h-full rounded-full bg-black" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 p-1"
      >
        <div className="w-full h-full rounded-full bg-black" />
      </motion.div>

      {/* Profile image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="absolute inset-4 rounded-full overflow-hidden border-2 border-cyan-400/50"
      >
        <Image src="/profile-photo.jpg" alt="Manjit Patra" fill className="object-cover" priority />
      </motion.div>

      {/* Floating particles around photo */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            top: `${20 + Math.sin(i * 0.785) * 40}%`,
            left: `${20 + Math.cos(i * 0.785) * 40}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  )
}
