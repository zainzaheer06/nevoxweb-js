"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Heart, 
  Building, 
  ShoppingBag, 
  Hotel, 
  GraduationCap, 
  Shield, 
  Plane, 
  Home,
  UtensilsCrossed
} from "lucide-react"

export function IndustryGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Transform patient care with AI-powered voice agents",
      color: "from-purple-500 to-purple-600",
      href: "#healthcare"
    },
    {
      icon: Building,
      name: "Financial Services", 
      description: "Secure, efficient financial services support",
      color: "from-cyan-500 to-cyan-600",
      href: "#financial"
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Personalized shopping experiences and operations",
      color: "from-purple-500 to-cyan-500",
      href: "#retail"
    },
    {
      icon: Hotel,
      name: "Hospitality",
      description: "24/7 concierge services and guest support",
      color: "from-cyan-500 to-purple-500",
      href: "#hospitality"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Enhanced student support and administration",
      color: "from-purple-600 to-cyan-600",
      href: "#education"
    },
    {
      icon: Shield,
      name: "Insurance",
      description: "Streamlined claims and policy management",
      color: "from-cyan-600 to-purple-600",
      href: "#insurance"
    },
    {
      icon: Plane,
      name: "Travel & Tourism",
      description: "Comprehensive travel assistance and bookings",
      color: "from-purple-500 to-purple-600",
      href: "#travel"
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Property management and sales automation",
      color: "from-cyan-500 to-cyan-600",
      href: "#realestate"
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurants",
      description: "Streamlined ordering and operations",
      color: "from-purple-500 to-cyan-500",
      href: "#restaurants"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.href}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative block"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {industry.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
                
                {/* Simple Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}