"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function DemoTestimonial() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
              "Implementing Nevox was the best decision we made. It's like having a perfect employee who never takes a day off."
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-white">Michael Chen</div>
                <div className="text-gray-400">Owner, Bistro Elegante</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl opacity-50 blur-xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Additional Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Join hundreds of satisfied customers who transformed their business with Nevox AI</p>
          <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
            <span>500+ Businesses Served</span>
            <span>•</span>
            <span>98% Customer Satisfaction</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}