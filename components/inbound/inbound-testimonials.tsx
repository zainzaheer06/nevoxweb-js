"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

export function InboundTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Ahmad Al-Mansouri",
      title: "Customer Service Director",
      company: "Emirates Telecom",
      quote: "NEVOX AI handles 15,000+ Arabic calls daily with 94% customer satisfaction. Our human agents now focus on complex issues while AI resolves 80% of inquiries instantly. Customer wait times dropped from 8 minutes to 2 seconds.",
      metrics: [
        { label: "AI resolution rate", value: "80%", color: "text-purple-400" },
        { label: "Customer satisfaction", value: "94%", color: "text-cyan-400" }
      ],
      gradient: "from-purple-500/20 to-purple-600/10"
    },
    {
      name: "Noura Al-Qahtani", 
      title: "Head of Customer Experience",
      company: "Al Rajhi Bank",
      quote: "Our Arabic banking support is now available 24/7 with perfect dialect understanding. NEVOX AI handles account inquiries, transaction disputes, and service requests while maintaining bank-grade security and compliance.",
      metrics: [
        { label: "Banking support", value: "24/7", color: "text-cyan-400" },
        { label: "Security compliance", value: "99.9%", color: "text-purple-400" }
      ],
      gradient: "from-cyan-500/20 to-cyan-600/10"
    },
    {
      name: "Mohammed Al-Thani",
      title: "Customer Service Manager", 
      company: "Qatar Airways",
      quote: "NEVOX AI transformed our Arabic customer support for flight bookings, changes, and inquiries. Passengers get instant help in their preferred dialect, and our human agents handle only complex escalations. Customer satisfaction increased 40%.",
      metrics: [
        { label: "Higher satisfaction", value: "40%", color: "text-purple-400" },
        { label: "Cost reduction", value: "60%", color: "text-cyan-400" }
      ],
      gradient: "from-purple-500/20 to-cyan-500/10"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/5 to-black" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-purple-500/30 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-20 w-6 h-6 bg-cyan-500/20 rounded-full"
      />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer Support 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from companies using NEVOX AI for Arabic inbound call handling and customer support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full`}>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                    <p className="text-sm text-purple-400">{testimonial.company}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metrics */}
                <div className="space-y-4">
                  {testimonial.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{metric.label}</span>
                      <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Simple Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}