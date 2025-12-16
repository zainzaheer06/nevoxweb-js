"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-3xl blur-3xl opacity-30" />
          <div className="relative bg-gradient-to-br from-purple-900/50 to-black/50 border border-purple-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Start Automating Your Calls Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8"
            >
              Let Nevox AI handle your customer calls — naturally, intelligently, instantly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6">
                Get started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
