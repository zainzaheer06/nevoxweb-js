"use client"

import { motion } from "framer-motion"
import { Phone, Clock } from "lucide-react"

export function DemoStats() {
  const stats = [
    {
      icon: Phone,
      value: "100%",
      label: "Calls Answered",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Availability",
      color: "from-cyan-500 to-cyan-600"
    }
  ]

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-400 font-medium text-lg">
                  {stat.label}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}