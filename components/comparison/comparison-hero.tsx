"use client"

import { motion } from "framer-motion"
import { BarChart3, CheckCircle, XCircle } from "lucide-react"

export function ComparisonHero() {
  return (
    <section className="relative py-24 px-4 pt-32 overflow-hidden">
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
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm"
          >
            <BarChart3 className="w-4 h-4" />
            Feature Comparison
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-white">Why choose</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Nevox AI?
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            See how Nevox AI compares to traditional call centers and other AI solutions. 
            Discover why businesses choose us for their voice automation needs.
          </motion.p>

          {/* Quick Comparison Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto"
          >
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">24/7 Availability</div>
              <div className="text-gray-400 text-sm">Never miss a call</div>
            </div>
            
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Arabic Native</div>
              <div className="text-gray-400 text-sm">Perfect dialect understanding</div>
            </div>
            
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold">Instant Setup</div>
              <div className="text-gray-400 text-sm">Ready in minutes</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}