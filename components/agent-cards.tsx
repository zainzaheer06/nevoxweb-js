"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Phone,
  Calendar,
  UtensilsCrossed,
  Home,
  Package,
  Stethoscope,
  CreditCard,
  TrendingUp,
  Briefcase,
} from "lucide-react"

const agents = [
  { icon: Phone, title: "Customer Support Agent" },
  { icon: FileText, title: "Lead Qualification Agent" },
  { icon: Calendar, title: "Appointment Booking Agent" },
  { icon: UtensilsCrossed, title: "Restaurant Order Agent" },
  { icon: Home, title: "Real Estate Agent" },
  { icon: TrendingUp, title: "Sales Outreach Agent" },
  { icon: Package, title: "Order Tracking Agent" },
  { icon: Stethoscope, title: "Medical Receptionist Agent" },
  { icon: CreditCard, title: "Payment Collection Agent" },
  { icon: Briefcase, title: "Upselling Agent" },
]

// Split agents into two rows
const row1 = agents.slice(0, 5)
const row2 = agents.slice(5, 10)

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  return (
    <div className="relative group flex-shrink-0 w-[220px] mx-2">
      <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 h-full hover:border-purple-500/30 hover:bg-zinc-900 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[130px]">
        <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
          <agent.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-white font-medium text-center text-sm leading-tight">{agent.title}</h3>
      </div>
    </div>
  )
}

export function AgentCards() {
  // Card width (220) + margin (16) = 236px per card
  // 5 cards = 1180px
  const cardWidth = 236
  const row1Width = row1.length * cardWidth

  // Create enough duplicates to always fill the screen
  const duplicateCount = 8

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Agents for Every Business Need</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pre-built AI agents ready to handle calls in Arabic, tailored for Saudi businesses
          </p>
        </motion.div>
      </div>

      {/* Container with shadow edges */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left shadow gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        {/* Right shadow gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* First Row - Moving Right to Left */}
        <div className="relative mb-6 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -row1Width],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate many times to ensure screen is always filled */}
            {Array(duplicateCount)
              .fill(row1)
              .flat()
              .map((agent, index) => (
                <AgentCard key={`row1-${index}`} agent={agent} />
              ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [-row1Width, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate many times to ensure screen is always filled */}
            {Array(duplicateCount)
              .fill(row2)
              .flat()
              .map((agent, index) => (
                <AgentCard key={`row2-${index}`} agent={agent} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}