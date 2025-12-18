"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  ArrowRight, 
  Calendar, 
  Phone, 
  Zap, 
  Shield, 
  CheckCircle, 
  Clock,
  Users,
  Headphones
} from "lucide-react"

export function InboundCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "14-day free trial",
    "24/7 support from day 1", 
    "No setup fees",
    "Cancel anytime"
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-6 h-6 bg-purple-500/20 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [30, -30, 30],
          x: [15, -15, 15],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-20 w-8 h-8 bg-cyan-500/15 rounded-full"
      />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready for 
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 bg-clip-text text-transparent"> 24/7 </span>
            Arabic
            <br />
            Customer Support?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your customer service with AI that understands Arabic perfectly. 
            Join leading MENA companies delivering exceptional support at scale.
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto mb-16 group hover:border-purple-500/40 transition-all duration-500"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - CTA */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Start Your Free Trial Today
                  </h3>
                  <p className="text-lg text-gray-300">
                    Get instant access to 24/7 Arabic AI customer support. No credit card required.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 w-full">
                  <a href="/demo" className="w-full">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium px-3 py-3 rounded-xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group w-full"
                    >
                      <Zap className="w-4 h-4 mr-1.5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                      <span>Start 14-Day Free Trial</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Button>
                  </a>

                  <a href="/demo" className="w-full">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-medium px-3 py-3 rounded-xl text-xs sm:text-sm transition-all duration-300 hover:scale-105 group w-full"
                    >
                      <Calendar className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span>Book Support Demo</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-purple-600/20 to-purple-700/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
                  >
                    <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">15K+</div>
                    <div className="text-sm text-gray-400">Daily Calls</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="bg-gradient-to-br from-cyan-600/20 to-cyan-700/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center"
                  >
                    <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">2s</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-gradient-to-br from-purple-600/20 to-cyan-600/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
                  >
                    <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">80%</div>
                    <div className="text-sm text-gray-400">AI Resolution</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-gradient-to-br from-cyan-600/20 to-purple-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center"
                  >
                    <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">94%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="bg-gradient-to-r from-green-600/20 to-green-700/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center"
                >
                  <Headphones className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">24/7 Support Ready</div>
                  <div className="text-sm text-gray-400">Start today</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center space-y-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 support from day 1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Join leading MENA companies already using NEVOX AI for exceptional Arabic customer support
          </p>
        </motion.div>
      </div>
    </section>
  )
}