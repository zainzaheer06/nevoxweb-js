"use client"

import { motion } from "framer-motion"
import { Phone, Bot, Calendar, Check, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Arabic Call or Chat Request",
    description: "Customer initiates contact in their preferred Arabic dialect",
    features: ["Instant Arabic connection", "15+ Arabic dialect support", "24/7 MENA availability"],
  },
  {
    number: "2",
    icon: Bot,
    title: "Arabic AI Agent Responds",
    description: "Advanced Arabic AI processes cultural context and customer intent",
    features: ["Natural Arabic conversation", "Cultural intent recognition", "MENA business context"],
  },
  {
    number: "3",
    icon: Calendar,
    title: "Query Resolution & Meeting Booking",
    description: "Resolves queries and automatically books meetings with Arabic-speaking sales teams",
    features: ["Quick Arabic resolution", "Smart Arabic escalation", "Automatic meeting booking"],
  },
]

const stats = [
  { value: "92%", label: "Arabic Queries Resolved Automatically" },
  { value: "<1s", label: "Arabic Response Time" },
  { value: "5x", label: "Meeting Booking Increase" },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How NEVOX AI Works</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our Arabic AI Voice Agents provide seamless MENA customer support through an intelligent, culturally-aware
            automated process
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 h-full hover:border-purple-500/30 transition-all duration-300">
                {/* Number Badge */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-purple-500" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white text-center mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm mb-6">{step.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-4 py-2">
                      <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-purple-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-purple-500 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}