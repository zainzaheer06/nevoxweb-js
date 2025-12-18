"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Search, 
  Phone, 
  Brain, 
  Zap, 
  Calendar, 
  Database,
  Globe,
  Target,
  Clock,
  Users,
  BarChart3,
  Settings
} from "lucide-react"

export function OutboundFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Search,
      title: "Automatic Lead Discovery",
      description: "AI-powered lead generation finds Arabic-speaking prospects across MENA markets automatically",
      features: [
        "LinkedIn & social prospecting",
        "Business directory mining", 
        "Company database access"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Multi-Dialect Arabic Calling",
      description: "Natural conversations in 15+ Arabic dialects with cultural context and business etiquette",
      features: [
        "Gulf, Levantine, Egyptian dialects",
        "Cultural business protocols",
        "Automatic dialect detection"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "AI Lead Scoring",
      description: "Advanced Arabic NLP analyzes conversations to score and prioritize leads automatically",
      features: [
        "Intent recognition",
        "Buying signal detection",
        "Custom scoring models"
      ],
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "High-Volume Calling",
      description: "Make thousands of concurrent Arabic calls with intelligent routing and optimal timing",
      features: [
        "10,000+ daily calls",
        "Smart call scheduling",
        "Time zone optimization"
      ],
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Meeting Booking Automation",
      description: "Automatically schedules qualified meetings with Arabic confirmation and follow-ups",
      features: [
        "Calendar integration",
        "Arabic confirmations",
        "Automated reminders"
      ],
      color: "from-purple-600 to-cyan-600"
    },
    {
      icon: Database,
      title: "CRM & Pipeline Integration",
      description: "Seamlessly integrates with your CRM to manage leads, calls, and meetings in one place",
      features: [
        "Salesforce, HubSpot sync",
        "Lead lifecycle tracking",
        "Automated data entry"
      ],
      color: "from-cyan-600 to-purple-600"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      
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
            Advanced Outbound & 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Lead Generation Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to scale your Arabic outbound sales and generate qualified leads automatically
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
              Complete Lead-to-Meeting Automation
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              NEVOX AI handles your entire Arabic sales pipeline - from finding prospects to booking qualified meetings. 
              Scale your MENA outbound operations without hiring additional staff.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Leads Generated Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">87%</div>
                <div className="text-sm text-gray-400">Connect Rate in Arabic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">22%</div>
                <div className="text-sm text-gray-400">Meeting Booking Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">90%</div>
                <div className="text-sm text-gray-400">Meeting Show-up Rate</div>
              </div>
            </div>

            {/* Process Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300">
              <span className="bg-purple-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Find Leads</span>
              <span className="text-purple-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-cyan-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Make Calls</span>
              <span className="text-cyan-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Qualify</span>
              <span className="text-purple-400 rotate-90 md:rotate-0">→</span>
              <span className="bg-cyan-600/30 px-4 py-2 rounded-lg whitespace-nowrap">Book Meeting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}