"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Zap, Shield, DollarSign, Users } from "lucide-react"

export function ComparisonFeatures() {
  const advantages = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call with round-the-clock AI assistance",
      benefit: "100% uptime vs 40-60% traditional coverage"
    },
    {
      icon: Globe,
      title: "Native Arabic Support",
      description: "Perfect understanding of Saudi dialects and cultural nuances",
      benefit: "Native-level comprehension vs basic translation"
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Get started in minutes, not weeks or months",
      benefit: "5 minutes vs 2-4 weeks setup time"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Fraction of the cost of traditional call centers",
      benefit: "$0.10 per call vs $5-15 per call"
    },
    {
      icon: Users,
      title: "Unlimited Scalability",
      description: "Handle thousands of calls simultaneously",
      benefit: "Infinite capacity vs limited agents"
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Same high-quality service every time",
      benefit: "100% consistency vs variable human performance"
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
            Why Nevox AI Wins
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the key advantages that make Nevox AI the superior choice for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {advantage.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-4">
                  {advantage.description}
                </p>

                {/* Benefit */}
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30">
                  <p className="text-purple-300 text-sm font-medium">
                    {advantage.benefit}
                  </p>
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