"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Filter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IntegrationsGrid() {
  const [activeCategory, setActiveCategory] = useState("All Integrations")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All Integrations",
    "CRM", 
    "Telephony",
    "Calendars",
    "Automation",
    "Analytics"
  ]

  const integrations = [
    // CRM
    { name: "Salesforce", category: "CRM", description: "Enterprise CRM platform" },
    { name: "HubSpot", category: "CRM", description: "Inbound marketing & sales" },
    { name: "Zoho CRM", category: "CRM", description: "Customer relationship management" },
    { name: "Pipedrive", category: "CRM", description: "Sales CRM & pipeline" },
    { name: "Microsoft Dynamics", category: "CRM", description: "Business applications suite" },
    { name: "Oracle CRM", category: "CRM", description: "Cloud-based CRM solution" },
    
    // Telephony
    { name: "RingCentral", category: "Telephony", description: "Cloud phone system" },
    { name: "Twilio", category: "Telephony", description: "Communication APIs" },
    { name: "8x8", category: "Telephony", description: "VoIP phone service" },
    { name: "Vonage", category: "Telephony", description: "Business communications" },
    { name: "Microsoft Teams", category: "Telephony", description: "Unified communications" },
    { name: "Oracle Cloud Voice", category: "Telephony", description: "Enterprise telephony" },
    
    // Calendars
    { name: "Google Calendar", category: "Calendars", description: "Schedule & organize" },
    { name: "Calendly", category: "Calendars", description: "Appointment scheduling" },
    { name: "Microsoft Outlook", category: "Calendars", description: "Email & calendar" },
    { name: "Cal.com", category: "Calendars", description: "Open source scheduling" },
    { name: "Oracle Calendar", category: "Calendars", description: "Enterprise scheduling" },
    
    // Automation
    { name: "Zapier", category: "Automation", description: "Connect your apps" },
    { name: "Make", category: "Automation", description: "Visual automation" },
    { name: "n8n", category: "Automation", description: "Workflow automation" },
    { name: "Microsoft Power Automate", category: "Automation", description: "Business process automation" },
    { name: "Oracle Integration Cloud", category: "Automation", description: "Enterprise integration" },
    
    // Analytics
    { name: "Google Analytics", category: "Analytics", description: "Web analytics" },
    { name: "Mixpanel", category: "Analytics", description: "Product analytics" },
    { name: "Amplitude", category: "Analytics", description: "Digital analytics" },
    { name: "Segment", category: "Analytics", description: "Customer data platform" },
    { name: "Microsoft Power BI", category: "Analytics", description: "Business intelligence" },
    { name: "Oracle Analytics Cloud", category: "Analytics", description: "Enterprise analytics" }
  ]

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = activeCategory === "All Integrations" || integration.category === activeCategory
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            All Integrations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Browse our complete library of integrations and connect Nevox with your favorite tools
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={`${integration.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 cursor-pointer">
                {/* Logo Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {integration.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {integration.description}
                </p>

                <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                  {integration.category}
                </span>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredIntegrations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No integrations found</div>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Request Integration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't see your integration?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're constantly adding new integrations. Let us know what you need and we'll prioritize it for our roadmap.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl">
            Request Integration
          </Button>
        </motion.div>
      </div>
    </section>
  )
}