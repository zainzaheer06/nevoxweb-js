"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star, TrendingUp, Users, Calendar } from "lucide-react"
import Image from "next/image"

export function OutboundTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Omar Al-Mahmoud",
      title: "Sales Director",
      company: "Dubai Software Solutions",
      image: "/images/testimonial-1.jpg",
      quote: "NEVOX AI transformed our outbound completely. We went from manually finding 50 leads per week to automatically generating 500+ qualified Arabic leads daily. Our meeting booking rate increased from 3% to 22%.",
      metrics: [
        { label: "Daily leads generated", value: "500+", color: "text-purple-400" },
        { label: "Meeting booking rate", value: "22%", color: "text-cyan-400" }
      ],
      gradient: "from-purple-500/20 to-purple-600/10"
    },
    {
      name: "Khalid Al-Rashid", 
      title: "Business Development Manager",
      company: "Riyadh Premium Properties",
      image: "/images/testimonial-2.jpg",
      quote: "The AI finds property prospects we never knew existed and books viewing appointments in perfect Saudi dialect. We're now booking 15x more property viewings with zero additional staff.",
      metrics: [
        { label: "More viewings booked", value: "15x", color: "text-cyan-400" },
        { label: "Show-up rate", value: "87%", color: "text-purple-400" }
      ],
      gradient: "from-cyan-500/20 to-cyan-600/10"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      title: "Marketing Director", 
      company: "Abu Dhabi Medical Center",
      image: "/images/testimonial-3.jpg",
      quote: "NEVOX AI finds Arabic-speaking patients who need our specialized services and books consultations automatically. Our patient acquisition cost dropped by 70% while consultation bookings increased 400%.",
      metrics: [
        { label: "Lower acquisition cost", value: "70%", color: "text-purple-400" },
        { label: "More consultations", value: "400%", color: "text-cyan-400" }
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
            Outbound Success 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real performance metrics from businesses using NEVOX AI for Arabic outbound calling and lead generation
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

        {/* Bottom Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Join 500+ MENA Businesses Scaling with NEVOX AI
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                  <span className="text-3xl font-bold text-purple-400">10x</span>
                </div>
                <p className="text-gray-300">Average Lead Generation Increase</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <span className="text-3xl font-bold text-cyan-400">87%</span>
                </div>
                <p className="text-gray-300">Average Connect Rate</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <span className="text-3xl font-bold text-purple-400">5x</span>
                </div>
                <p className="text-gray-300">More Meetings Booked</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg">
              Transform your Arabic outbound sales with AI that understands culture, speaks perfect dialects, 
              and books meetings automatically.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}