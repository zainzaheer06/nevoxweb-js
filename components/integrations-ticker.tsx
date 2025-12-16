"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function IntegrationsTicker() {
  const { t } = useLanguage()

  const integrations = [
    { name: "Salesforce", image: "https://cdn.simpleicons.org/salesforce/00A1E0" },
    { name: "HubSpot", image: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Slack", image: "https://cdn.simpleicons.org/slack/4A154B" },
    { name: "Microsoft Teams", image: "https://cdn.simpleicons.org/microsoftteams/6264A7" },
    { name: "Zapier", image: "https://cdn.simpleicons.org/zapier/FF4A00" },
    { name: "Google Calendar", image: "https://cdn.simpleicons.org/googlecalendar/4285F4" },
    { name: "Zoom", image: "https://cdn.simpleicons.org/zoom/2D8CFF" },
    { name: "WhatsApp", image: "https://cdn.simpleicons.org/whatsapp/25D366" },
    { name: "Twilio", image: "https://cdn.simpleicons.org/twilio/F22F46" },
    { name: "Shopify", image: "https://cdn.simpleicons.org/shopify/7AB55C" },
    { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Stripe", image: "https://cdn.simpleicons.org/stripe/008CDD" },
    { name: "OpenAI", image: "https://cdn.simpleicons.org/openai/412991" },
    { name: "Google Sheets", image: "https://cdn.simpleicons.org/googlesheets/34A853" },
    { name: "Airtable", image: "https://cdn.simpleicons.org/airtable/18BFFF" },
  ]

  // Duplicate for seamless loop
  const allIntegrations = [...integrations, ...integrations, ...integrations]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("integrationsTitle")}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">{t("integrationsDesc")}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-300"
          >
            <ArrowUpRight className="w-4 h-4" />
            <span>{t("integrations")}</span>
          </motion.button>
        </motion.div>

        {/* Integration Ticker */}
        <div className="relative overflow-hidden">
          {/* Left shadow gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          
          {/* Right shadow gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 items-center py-4"
            animate={{
              x: [-2400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {allIntegrations.map((integration, index) => (
              <motion.div
                key={`${integration.name}-${index}`}
                whileHover={{ scale: 1.15, y: -5 }}
                className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group"
                title={integration.name}
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}