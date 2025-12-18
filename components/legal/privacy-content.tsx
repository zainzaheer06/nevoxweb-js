"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users, Mail, Calendar } from "lucide-react"

export function PrivacyContent() {
  const sections = [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      icon: Eye,
      subsections: [
        {
          title: "1.1 Personal Information",
          content: "We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us. For example, when you register for an account, subscribe to newsletters, or contact us through the website."
        },
        {
          title: "1.2 Usage Information", 
          content: "We may collect information about your use of the website, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, administer the site, and improve user experience."
        }
      ]
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      icon: Users,
      content: [
        "Providing and maintaining the website",
        "Communicating with you about your account and our services",
        "Sending newsletters, promotional materials, and other information you request",
        "Analyzing website usage and improving our services"
      ]
    },
    {
      id: "sharing-information",
      title: "3. Sharing Your Information",
      icon: Lock,
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business."
    },
    {
      id: "cookies",
      title: "4. Cookies and Similar Technologies",
      icon: Shield,
      content: "We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of the site."
    },
    {
      id: "your-choices",
      title: "5. Your Choices",
      icon: Users,
      content: "You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information."
    },
    {
      id: "security",
      title: "6. Security",
      icon: Lock,
      content: "We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security."
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy",
      icon: Shield,
      content: "Our website is not directed to individuals under the age of 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information."
    },
    {
      id: "changes",
      title: "8. Changes to This Privacy Policy",
      icon: Calendar,
      content: "We may update this Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Privacy Policy."
    },
    {
      id: "contact",
      title: "9. Contact Us",
      icon: Mail,
      content: "If you have questions, contact us at contact@nevoxai.com"
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
            <Shield className="w-4 h-4" />
            Last updated: August 13, 2025
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to Nevox AI. This Privacy policy explains how we collect, use, and protect your personal information when you use our website.
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
                  {section.subsections ? (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-lg font-semibold text-purple-300 mb-3">
                            {subsection.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : Array.isArray(section.content) ? (
                    <div>
                      <p className="text-gray-300 mb-4">We use the collected information for various purposes, including:</p>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            <h3 className="text-2xl font-bold text-white">Questions About Privacy?</h3>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">
            If you have any questions about this Privacy Policy or how we handle your data, we're here to help.
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