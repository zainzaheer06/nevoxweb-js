"use client"

import { motion } from "framer-motion"
import { Database, Phone, Calendar, BarChart3, Zap, Shield } from "lucide-react"

export function IntegrationsOverview() {
  const categories = [
    {
      icon: Database,
      title: "CRM Systems",
      description: "Sync customer data, update records, and trigger workflows automatically",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Telephony",
      description: "Connect with any phone system or contact center platform",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description: "Book meetings and manage appointments across calendar systems",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Track performance and gain insights with business intelligence tools",
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Build complex workflows and automate business processes",
      color: "from-purple-600 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security with SOC2 and GDPR compliance",
      color: "from-cyan-600 to-purple-600"
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
            Connect with the tools you already use
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nevox integrates seamlessly with your existing tech stack, ensuring your AI voice agents work harmoniously with your business systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {category.description}
                </p>

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