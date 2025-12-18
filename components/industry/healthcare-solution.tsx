"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, FileText, Stethoscope, ArrowRight } from "lucide-react"

export function HealthcareSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: "Patient Engagement",
      description: "Enhance patient communication and care coordination with intelligent voice assistants.",
      items: [
        "24/7 symptom assessment",
        "Medication reminders",
        "Appointment scheduling",
        "Post-care instructions",
        "Health information access"
      ]
    },
    {
      icon: FileText,
      title: "Administrative Automation",
      description: "Streamline administrative tasks and reduce operational costs.",
      items: [
        "Insurance verification",
        "Claims processing",
        "Document management",
        "Billing inquiries",
        "Appointment reminders"
      ]
    },
    {
      icon: Stethoscope,
      title: "Clinical Support",
      description: "Assist healthcare providers with voice-enabled clinical workflows.",
      items: [
        "Voice documentation",
        "Clinical protocols",
        "Lab result reporting",
        "Care coordination",
        "Medical reference"
      ]
    }
  ]

  const stats = [
    { value: "60%", label: "Reduction in Administrative Costs" },
    { value: "85%", label: "Patient Satisfaction Rate" },
    { value: "40%", label: "Faster Response Times" },
    { value: "24/7", label: "Patient Support Coverage" }
  ]

  return (
    <section id="healthcare" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform patient care with AI-powered voice agents that streamline operations, 
            improve accessibility, and enhance the healthcare experience for both patients and providers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Items */}
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Impact & Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}