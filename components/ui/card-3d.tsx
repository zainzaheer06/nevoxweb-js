"use client"

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"

interface Card3DProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function Card3D({ 
  children, 
  className = "",
  glowColor = "purple"
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 50
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-600/20 blur-xl`}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card Content */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>
      
      {/* Reflection Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}