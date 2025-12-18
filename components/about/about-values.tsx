"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Trophy, Heart } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities in AI technology to deliver breakthrough solutions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of data security and privacy, ensuring our clients' trust is never compromised.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Trophy,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations.",
      color: "from-purple-500 to-cyan-500"
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
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we build the future of customer service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
            <Heart className="w-8 h-8 text-purple-400" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Built with Purpose</h4>
              <p className="text-gray-300 text-sm">Every line of code, every feature, every interaction is designed with our customers' success in mind.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}