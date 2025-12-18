"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingBag, Package, CreditCard, Headphones, ArrowRight } from "lucide-react"

export function RetailSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: ShoppingBag,
      title: "Customer Support",
      description: "Provide instant assistance for product inquiries and shopping guidance.",
      items: [
        "Product information",
        "Size and availability checks",
        "Price comparisons",
        "Recommendation engine",
        "Store location assistance"
      ]
    },
    {
      icon: Package,
      title: "Order Management",
      description: "Streamline order processing and tracking with voice automation.",
      items: [
        "Order status updates",
        "Shipping information",
        "Return processing",
        "Exchange requests",
        "Delivery scheduling"
      ]
    },
    {
      icon: CreditCard,
      title: "Sales Support",
      description: "Boost sales with intelligent upselling and cross-selling assistance.",
      items: [
        "Payment processing",
        "Promotional offers",
        "Loyalty program enrollment",
        "Gift card services",
        "Seasonal campaigns"
      ]
    }
  ]

  const stats = [
    { value: "35%", label: "Increase in Sales Conversion" },
    { value: "50%", label: "Reduction in Support Tickets" },
    { value: "90%", label: "Customer Query Resolution" },
    { value: "2min", label: "Average Response Time" }
  ]

  return (
    <section id="retail" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Retail & E-commerce Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your retail operations with AI-powered voice agents that enhance customer 
            experience, streamline orders, and boost sales performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Impact & Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}