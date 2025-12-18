"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Star } from "lucide-react"

export function FeaturedIntegrations() {
  const featuredIntegrations = [
    {
      name: "Salesforce",
      description: "CRM software solutions and enterprise cloud computing",
      logo: "/images/integrations/salesforce.svg",
      category: "CRM",
      rating: 5,
      popular: true
    },
    {
      name: "HubSpot",
      description: "Import and manage your contacts directly",
      logo: "/images/integrations/hubspot.svg",
      category: "CRM",
      rating: 5,
      popular: true
    },
    {
      name: "Zapier",
      description: "Automate tasks and workflows across multiple apps",
      logo: "/images/integrations/zapier.svg",
      category: "Automation",
      rating: 4.8,
      popular: false
    },
    {
      name: "RingCentral",
      description: "Omnichannel contact center solutions",
      logo: "/images/integrations/ringcentral.svg",
      category: "Telephony",
      rating: 4.9,
      popular: true
    },
    {
      name: "Freshworks",
      description: "Modern customer engagement software",
      logo: "/images/integrations/freshworks.svg",
      category: "CRM",
      rating: 4.7,
      popular: false
    },
    {
      name: "Make",
      description: "Powerful visual platform for building workflows",
      logo: "/images/integrations/make.svg",
      category: "Automation",
      rating: 4.8,
      popular: false
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
            Featured Integrations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with the tools you already use
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredIntegrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 cursor-pointer">
                {/* Popular Badge */}
                {integration.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {integration.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full mb-3">
                      {integration.category}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  {integration.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(integration.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{integration.rating}</span>
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