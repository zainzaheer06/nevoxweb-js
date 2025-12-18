"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Floating3DProps {
  children: ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  delay?: number
}

export function Floating3D({ 
  children, 
  className = "", 
  intensity = "medium",
  delay = 0 
}: Floating3DProps) {
  const intensityConfig = {
    low: {
      y: [-5, 5, -5],
      x: [-2, 2, -2],
      rotate: [-1, 1, -1],
      scale: [1, 1.02, 1],
      duration: 6
    },
    medium: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
      scale: [1, 1.05, 1],
      duration: 8
    },
    high: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5],
      scale: [1, 1.1, 1],
      duration: 10
    }
  }

  const config = intensityConfig[intensity]

  return (
    <motion.div
      className={className}
      animate={{
        y: config.y,
        x: config.x,
        rotate: config.rotate,
        scale: config.scale,
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}