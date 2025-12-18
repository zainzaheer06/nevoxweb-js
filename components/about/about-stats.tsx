"use client"

import { motion } from "framer-motion"
import { Users, Star, Globe, Clock } from "lucide-react"

export function AboutStats() {
  const stats = [
    {
      icon: Users,
      value: "2M+",
      label: "Customer Interactions Daily",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      value: "98%",
      label: "Customer Satisfaction",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Countries Served",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Customer Support",
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-gray-400 font-medium">
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