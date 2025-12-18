"use client"

import { motion } from "framer-motion"
import { Calendar, Rocket, Globe, Award, Sparkles } from "lucide-react"

export function AboutJourney() {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to revolutionize customer service through AI",
      icon: Rocket,
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide",
      icon: Globe,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      year: "2022",
      title: "Next-Gen AI",
      description: "Launched advanced AI voice technology platform",
      icon: Sparkles,
      color: "from-purple-500 to-cyan-500"
    },
    {
      year: "2024",
      title: "Took First Mover Advantage",
      description: "Recognized as industry leader in AI customer service",
      icon: Award,
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a bold vision to industry leadership, here's how we've grown and evolved over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-cyan-500 to-purple-600 opacity-30 hidden lg:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30">
                    <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                      <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-purple-400">{milestone.year}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full border-4 border-black shadow-lg" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl"
        >
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Looking Ahead</h3>
          </div>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our journey is far from over. We continue to innovate, expand, and push the boundaries of what's 
            possible in AI-powered customer service. The future holds even greater possibilities as we work 
            towards making exceptional customer experiences the global standard.
          </p>
        </motion.div>
      </div>
    </section>
  )
}