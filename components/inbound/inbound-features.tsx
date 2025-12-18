"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Clock, 
  Database, 
  Route,
  BarChart3,
  Shield,
  Phone,
  Users,
  Target,
  CheckCircle
} from "lucide-react"

export function InboundFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Globe,
      title: "Multi-Dialect Arabic Support",
      description: "Perfect understanding and response in 15+ Arabic dialects with cultural context",
      features: [
        "Gulf, Levantine, Egyptian dialects",
        "Cultural communication styles",
        "Automatic dialect adaptation"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call with round-the-clock AI support across all time zones",
      features: [
        "24/7/365 coverage",
        "Holiday & weekend support",
        "Multiple time zone handling"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Database,
      title: "Knowledge Base Integration",
      description: "Instant access to company knowledge base for accurate and consistent responses",
      features: [
        "Real-time knowledge lookup",
        "Custom knowledge training",
        "Dynamic content updates"
      ],
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: Route,
      title: "Intelligent Call Routing",
      description: "Smart routing based on intent, priority, and agent expertise for optimal resolution",
      features: [
        "Intent-based routing",
        "Priority queue management",
        "Agent skill matching"
      ],
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive insights into call performance, customer satisfaction, and agent efficiency",
      features: [
        "Live call monitoring",
        "Performance dashboards",
        "Customer satisfaction tracking"
      ],
      color: "from-purple-600 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance for GDPR, SAMA, and MENA data protection",
      features: [
        "End-to-end encryption",
        "GDPR & SAMA compliance",
        "Data residency options"
      ],
      color: "from-cyan-600 to-purple-600"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Inbound Call 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Management Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to deliver exceptional Arabic customer support at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature List */}
                <div className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (itemIndex * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} group-hover:scale-125 transition-transform`} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
                
                {/* Simple Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Customer Support Automation
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              NEVOX AI transforms your Arabic customer support with intelligent call handling, instant problem resolution, 
              and seamless human escalation. Deliver exceptional service 24/7 without expanding your team.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">15K+</div>
                <div className="text-sm text-gray-400">Daily Calls Handled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2s</div>
                <div className="text-sm text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">80%</div>
                <div className="text-sm text-gray-400">AI Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">94%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <span className="bg-purple-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Call Received</span>
              <span className="text-purple-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-cyan-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Intent Analysis</span>
              <span className="text-cyan-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-lg whitespace-nowrap">AI Resolution</span>
              <span className="text-purple-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-cyan-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Satisfied Customer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}