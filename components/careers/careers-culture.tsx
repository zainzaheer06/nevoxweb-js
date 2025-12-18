"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, TrendingUp } from "lucide-react"

export function CareersCulture() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new ideas to push the boundaries of what's possible.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Work alongside talented individuals who share your passion for technology and customer service.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We invest in our team's development and provide opportunities for continuous learning.",
      color: "from-purple-500 to-cyan-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Culture
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a team that values innovation, collaboration, and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
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

        {/* Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Building the Future Together
          </h3>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At Nevox AI, we believe that great technology comes from great people. Our culture is built on trust, 
            creativity, and the shared mission to transform customer service through AI innovation. Every team member 
            contributes to our success and shapes the future of our industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}