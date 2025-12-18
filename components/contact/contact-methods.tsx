"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare } from "lucide-react"

export function ContactMethods() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      description: "Have a question? Our team is ready to help, contact us at contact@nevoxai.com",
      action: "Send Email",
      href: "mailto:contact@nevoxai.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Contact team",
      description: "Prefer to talk instead? You can now easily reach our team at +966 53 123 5255",
      action: "Call Now",
      href: "tel:+966531235255",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: MessageSquare,
      title: "Fill out the form",
      description: "After you submit the form, our team will reach out to you as quickly as possible.",
      action: "Go to Form",
      href: "#contact-form",
      color: "from-purple-500 to-cyan-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 h-full text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {method.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {method.description}
                </p>

                {/* Action Button */}
                <a
                  href={method.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
                >
                  {method.action}
                </a>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}