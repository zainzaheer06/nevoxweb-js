"use client"

import { motion } from "framer-motion"
import { Play, Calculator, Settings, MessageCircle } from "lucide-react"

export function DemoExpectations() {
  const expectations = [
    {
      icon: Play,
      title: "Live AI Demo",
      description: "Experience Nevox handling real scenarios in real-time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calculator,
      title: "ROI Analysis",
      description: "Custom savings calculation based on your business's needs",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Settings,
      title: "Setup Overview",
      description: "Learn how easy it is to implement Nevox in your business",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Q&A Session",
      description: "Get all your questions answered by our experts",
      color: "from-cyan-500 to-purple-500"
    }
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What to Expect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive demo will show you exactly how Nevox AI can transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expectations.map((expectation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 h-full text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${expectation.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <expectation.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {expectation.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {expectation.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to see Nevox in action?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Book your personalized demo today and discover how AI can transform your business communications.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
              Schedule Demo Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}