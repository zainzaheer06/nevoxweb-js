"use client"

import { motion } from "framer-motion"
import { FileText, Handshake, Settings, Users, Shield, AlertTriangle, Mail, Calendar } from "lucide-react"

export function TermsContent() {
  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      icon: Handshake,
      content: "By accessing or using our AI voice agent services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services."
    },
    {
      id: "service-description",
      title: "2. Service Description",
      icon: Settings,
      content: "Our AI voice agent platform provides automated voice communication services powered by artificial intelligence. The service includes:",
      list: [
        "AI-powered voice interactions",
        "Natural language processing capabilities", 
        "Automated customer service solutions",
        "Voice recognition and response systems",
        "Integration with existing business systems"
      ]
    },
    {
      id: "user-responsibilities",
      title: "3. User Responsibilities",
      icon: Users,
      content: "When using our AI voice agent services, you agree to:",
      list: [
        "Provide accurate and complete information for voice agent configuration",
        "Maintain the security of your account credentials",
        "Use the service in compliance with all applicable laws and regulations",
        "Not attempt to reverse engineer or manipulate the AI voice systems",
        "Not use the service for any illegal or unauthorized purpose"
      ]
    },
    {
      id: "ai-usage",
      title: "4. AI Voice Agent Usage",
      icon: Settings,
      content: "The AI voice agents are designed to:",
      list: [
        "Provide automated customer service responses",
        "Handle routine inquiries and tasks",
        "Escalate complex issues to human operators when necessary",
        "Maintain conversation logs for quality assurance"
      ]
    },
    {
      id: "data-privacy",
      title: "5. Data and Privacy",
      icon: Shield,
      content: "All voice interactions and related data are subject to our Privacy Policy. Users acknowledge that:",
      list: [
        "Voice recordings may be stored and processed for service improvement",
        "Conversation data may be analyzed to enhance AI capabilities",
        "Personal information is handled according to our Privacy Policy",
        "Users maintain ownership of their customer data"
      ]
    },
    {
      id: "limitations",
      title: "6. Service Limitations",
      icon: AlertTriangle,
      content: "Users acknowledge that:",
      list: [
        "AI voice agents may not understand all accents or dialects",
        "Service availability depends on internet connectivity",
        "Complex or emotional issues may require human intervention",
        "Response accuracy is not guaranteed for all scenarios"
      ]
    },
    {
      id: "contact-info",
      title: "7. Contact Information",
      icon: Mail,
      content: "For any questions about these Terms and Conditions, please contact us at: Email: contact@nevoxai.com"
    }
  ]

  return (
    <section className="py-24 px-4 pt-32 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Calendar className="w-4 h-4" />
            Last updated: August 13, 2025
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms & Conditions
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to Nevox AI. These Terms and Conditions govern your use of our AI voice agent services and platform.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>

                {/* Section Content */}
                <div className="ml-16">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Important Notice</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms and Conditions constitute a legally binding agreement between you and Nevox AI. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                If you do not agree to these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Questions About Terms?</h3>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">
            If you have any questions about these Terms and Conditions or need clarification on any provisions, please don't hesitate to contact us.
          </p>
          
          <a 
            href="mailto:contact@nevoxai.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            contact@nevoxai.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}