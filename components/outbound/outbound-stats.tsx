"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Calendar, Phone } from "lucide-react"

export function OutboundStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "New Leads Generated Daily",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      number: "10,000+",
      label: "Outbound Calls Made Daily",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Calendar,
      number: "200+",
      label: "Meetings Booked Weekly",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      number: "22%",
      label: "Meeting Booking Rate",
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Lead Generation to 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Meeting Pipeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From finding prospects to booking meetings - NEVOX AI handles your entire Arabic outbound sales process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}