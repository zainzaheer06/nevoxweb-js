"use client"

import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Handle inquiries about orders, services, bookings, technical support, and follow-ups.",
    metrics: ["3x Faster Resolutions", "24/7 Availability"],
  },
  {
    title: "Real Estate Lead Qualification",
    description: "Perfect for Saudi real estate developers, property managers, and agencies.",
    metrics: ["99% Accuracy", "5x More Leads"],
  },
  {
    title: "Hospitality & Hotels",
    description: "Automate reservations, inquiries, and room information requests.",
    metrics: ["7x More Booking", "24/7 Signals"],
  },
  {
    title: "E-commerce & Delivery",
    description: "Track orders, confirm deliveries, and manage customer questions automatically.",
    metrics: ["30% Increase Revenue", "5x Happy Customers"],
  },
  {
    title: "Government & Municipal Services",
    description: "Provide instant assistance and reduce workload on citizen service lines.",
    metrics: ["Enterprise Voice Agent", "99% Resolution Solved"],
  },
  {
    title: "Healthcare",
    description: "Appointment booking, reminders, patient information, and hotline automation.",
    metrics: ["24/7 Monitoring", "More Bookings"],
  },
]

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="bg-gradient-to-br from-purple-900/20 to-black/50 border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 h-full relative overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
        
        {/* Metrics - Only visible on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2 flex-wrap"
            >
              {useCase.metrics.map((metric, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
                >
                  {metric}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export function UseCases() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Use Cases</h2>
          <p className="text-gray-400 text-lg">
            Streamline your experience with tools designed to keep you secure, informed, and in control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}