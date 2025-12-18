"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Calendar, Phone, Target, Zap } from "lucide-react"

export function OutboundResults() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const results = [
    {
      icon: TrendingUp,
      metric: "500+",
      label: "Daily Leads Generated",
      description: "Automatically discover and qualify Arabic-speaking prospects across MENA markets",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/5"
    },
    {
      icon: Phone,
      metric: "87%",
      label: "Connect Rate in Arabic",
      description: "High connection rates with culturally-aware Arabic conversations",
      color: "from-cyan-500 to-cyan-600", 
      bgColor: "from-cyan-500/10 to-cyan-600/5"
    },
    {
      icon: Calendar,
      metric: "22%",
      label: "Meeting Booking Rate",
      description: "Industry-leading conversion from calls to qualified meetings",
      color: "from-purple-500 to-cyan-500",
      bgColor: "from-purple-500/10 to-cyan-500/5"
    },
    {
      icon: Users,
      metric: "90%",
      label: "Meeting Show-up Rate",
      description: "High-quality leads with excellent meeting attendance",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-500/10 to-purple-500/5"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Outbound Success 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real performance metrics from businesses using NEVOX AI for Arabic outbound calling and lead generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${result.bgColor} backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${result.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <result.icon className="w-10 h-10 text-white" />
                </div>

                {/* Metric */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {result.metric}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-300 mb-4">
                  {result.label}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {result.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${result.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Simple Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${result.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 text-center max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Target className="w-12 h-12 text-purple-400" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              From Lead Discovery to Meeting Booked
            </h3>
            <Zap className="w-12 h-12 text-cyan-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Watch how NEVOX AI transforms your outbound sales process with intelligent Arabic conversations, 
            automated lead qualification, and seamless meeting booking - all in perfect Arabic dialects.
          </p>

          {/* Process Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Find Prospects</h4>
              <p className="text-sm text-gray-400">AI discovers Arabic leads across MENA</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Make Calls</h4>
              <p className="text-sm text-gray-400">Perfect Arabic dialects & cultural context</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Qualify Leads</h4>
              <p className="text-sm text-gray-400">Advanced Arabic NLP qualification</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="relative"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Book Meetings</h4>
              <p className="text-sm text-gray-400">Automatic calendar sync & confirmations</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}