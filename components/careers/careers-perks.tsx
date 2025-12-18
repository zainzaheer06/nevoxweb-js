"use client"

import { motion } from "framer-motion"
import { Heart, Calendar, BookOpen, Home } from "lucide-react"

export function CareersPerks() {
  const perks = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage for you and your family.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Time Off",
      description: "Flexible vacation policy, paid holidays, and personal time to recharge.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Professional development budget, workshops, and learning resources.",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Flexible work arrangements and well-equipped home office setup.",
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer competitive benefits to keep you happy, healthy, and productive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 h-full text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${perk.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {perk.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {perk.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
            <h4 className="text-lg font-semibold text-white mb-3">Competitive Compensation</h4>
            <p className="text-gray-300 text-sm">
              We offer competitive salaries, equity packages, and performance bonuses to reward your contributions.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <h4 className="text-lg font-semibold text-white mb-3">Team Events & Culture</h4>
            <p className="text-gray-300 text-sm">
              Regular team building activities, company retreats, and social events to build lasting connections.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}