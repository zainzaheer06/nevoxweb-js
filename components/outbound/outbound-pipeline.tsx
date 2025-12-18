"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Phone, Target, Calendar, ArrowRight, Database, Globe, Brain, Clock } from "lucide-react"

export function OutboundPipeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "1",
      title: "Automatic Lead Generation",
      description: "AI finds Arabic-speaking prospects from databases, social media, and business directories",
      icon: Search,
      features: [
        "MENA prospect discovery",
        "Contact data enrichment", 
        "Lead scoring & prioritization"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "2", 
      title: "Smart Arabic Outbound Calls",
      description: "AI makes thousands of calls in perfect Arabic dialects with cultural understanding",
      icon: Phone,
      features: [
        "15+ Arabic dialects",
        "Cultural conversation flow",
        "Intelligent call timing"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "3",
      title: "AI Lead Qualification", 
      description: "Advanced qualification using Arabic NLP to identify high-intent prospects",
      icon: Target,
      features: [
        "BANT qualification",
        "Interest level detection",
        "Custom scoring criteria"
      ],
      color: "from-purple-500 to-cyan-500"
    },
    {
      number: "4",
      title: "Automatic Meeting Booking",
      description: "Books qualified meetings directly into your calendar with Arabic confirmation",
      icon: Calendar,
      features: [
        "Real-time calendar sync",
        "Arabic meeting confirmations", 
        "Follow-up reminders"
      ],
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-10 w-2 h-2 bg-purple-500 rounded-full opacity-30"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-10 w-3 h-3 bg-cyan-500 rounded-full opacity-20"
      />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Lead Generation to 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Meeting Pipeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From finding prospects to booking meetings - NEVOX AI handles your entire Arabic outbound sales process
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={`step-container-${index}`}>
              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${step.color} p-1`}>
                    <div className="w-full h-full bg-black/90 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      {/* Icon */}
                      <step.icon className="w-24 h-24 text-white/80 relative z-10" />
                      
                      {/* Animated Background */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl`}
                      />
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          x: [-5, 5, -5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full"
                      />
                      
                      <motion.div
                        animate={{
                          y: [10, -10, 10],
                          x: [5, -5, 5]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                        className="absolute bottom-8 left-8 w-3 h-3 bg-white/15 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>


              </motion.div>


            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-400">New Leads Generated Daily</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
            <div className="text-gray-400">Outbound Calls Made Daily</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-gray-400">Meetings Booked Weekly</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
            <div className="text-gray-400">Meeting Show-up Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}