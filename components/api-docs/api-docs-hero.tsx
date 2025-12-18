"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, BookOpen, ArrowRight, Terminal } from "lucide-react"

export function ApiDocsHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden pt-32">
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4" />
            RESTful API Documentation
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-white">Integrate our powerful</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent">
              AI voice technology
            </span>
            <br />
            <span className="text-white">into your applications</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive API documentation and examples to help you build powerful voice-enabled applications with Nevox AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group"
            >
              <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get API Key
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 group"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Quick Start Guide
            </Button>
          </motion.div>

          {/* Base URL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <div className="inline-block p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-2">Base URL</div>
              <code className="text-purple-300 font-mono text-lg">https://api.nevoxai.com/v1</code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}