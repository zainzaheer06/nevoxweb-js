"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

export function ComparisonChart() {
  const features = [
    { name: "24/7 Availability", nevox: true, traditional: false, other: true },
    { name: "Arabic Dialect Support", nevox: true, traditional: "partial", other: "partial" },
    { name: "Instant Setup", nevox: true, traditional: false, other: "partial" },
    { name: "Unlimited Calls", nevox: true, traditional: false, other: false },
    { name: "No Training Required", nevox: true, traditional: false, other: "partial" },
    { name: "Cost per Call", nevox: "$0.10", traditional: "$5-15", other: "$1-3" },
    { name: "Setup Time", nevox: "5 minutes", traditional: "2-4 weeks", other: "1-2 days" },
    { name: "Scalability", nevox: "Instant", traditional: "Slow", other: "Moderate" },
    { name: "Quality Consistency", nevox: true, traditional: "partial", other: true },
    { name: "Integration Support", nevox: true, traditional: "partial", other: true },
    { name: "Real-time Analytics", nevox: true, traditional: false, other: true },
    { name: "Custom Voice Training", nevox: true, traditional: false, other: "partial" },
  ]

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-400 mx-auto" />
    } else if (value === false) {
      return <X className="w-6 h-6 text-red-400 mx-auto" />
    } else if (value === "partial") {
      return <Minus className="w-6 h-6 text-yellow-400 mx-auto" />
    } else {
      return <span className="text-white font-medium">{value}</span>
    }
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Feature Comparison
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Nevox AI stacks up against traditional call centers and other AI solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold text-center">Feature</h3>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl">
                <h3 className="text-white font-semibold text-center">Nevox AI</h3>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold text-center">Traditional Call Center</h3>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold text-center">Other AI Solutions</h3>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 gap-4 mb-3"
              >
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center">
                  <span className="text-gray-300">{feature.name}</span>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl flex items-center justify-center">
                  {renderValue(feature.nevox)}
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center">
                  {renderValue(feature.traditional)}
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center">
                  {renderValue(feature.other)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 mt-12 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-gray-300 text-sm">Fully Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 text-sm">Partially Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 text-red-400" />
            <span className="text-gray-300 text-sm">Not Supported</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}