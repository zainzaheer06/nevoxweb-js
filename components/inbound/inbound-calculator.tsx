"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calculator, TrendingUp, Clock, Users, DollarSign } from "lucide-react"

export function InboundCalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer Support 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Cost Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much you can save with automated Arabic customer support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Support */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-red-600/20 to-red-700/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Traditional Support</h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Daily Calls</span>
                <span className="text-xl font-bold text-white">5,000</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Agents Needed</span>
                <span className="text-xl font-bold text-white">50</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Coverage</span>
                <span className="text-xl font-bold text-white">8 hours/day</span>
              </div>
              
              <div className="border-t border-red-500/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Cost</span>
                  <span className="text-3xl font-bold text-red-400">$45,000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NEVOX AI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/20 to-cyan-600/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">NEVOX AI</h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Daily Calls</span>
                <span className="text-xl font-bold text-white">15,000+</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Agents Needed</span>
                <span className="text-xl font-bold text-white">10 (escalations)</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Coverage</span>
                <span className="text-xl font-bold text-white">24/7/365</span>
              </div>
              
              <div className="border-t border-blue-500/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Cost</span>
                  <span className="text-3xl font-bold text-purple-400">$4,999</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Savings Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-600/20 to-green-700/10 backdrop-blur-sm border border-green-500/30 rounded-3xl p-12 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Your Savings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-6 h-6 text-green-400" />
                <span className="text-3xl font-bold text-green-400">$40,001</span>
              </div>
              <p className="text-gray-300">Monthly Savings</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <span className="text-3xl font-bold text-purple-400">3x</span>
              </div>
              <p className="text-gray-300">More Capacity</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                <span className="text-3xl font-bold text-cyan-400">24/7</span>
              </div>
              <p className="text-gray-300">Better Service</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calculator className="w-6 h-6 text-green-400" />
                <span className="text-3xl font-bold text-green-400">900%</span>
              </div>
              <p className="text-gray-300">Annual ROI</p>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your customer support economics while delivering superior service quality and availability.
          </p>
        </motion.div>
      </div>
    </section>
  )
}