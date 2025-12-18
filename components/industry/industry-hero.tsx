"use client"

import { motion } from "framer-motion"
import { Building2, Zap } from "lucide-react"

export function IndustryHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-20 w-6 h-6 bg-cyan-500 rounded-full opacity-40"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 py-12">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm"
          >
            <Building2 className="w-4 h-4" />
            Industry Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Industry</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Explore how our AI voice agents are revolutionizing different industries 
            with tailored solutions
          </motion.p>
        </div>
      </div>
    </section>
  )
}