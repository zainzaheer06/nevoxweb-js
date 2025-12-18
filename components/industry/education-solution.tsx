"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen, Users, FileText, ArrowRight } from "lucide-react"

export function EducationSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: BookOpen,
      title: "Academic Support",
      description: "Provide 24/7 academic assistance and information access.",
      items: [
        "Course registration assistance",
        "Assignment submission support",
        "Study resource navigation",
        "Academic calendar management",
        "Grade inquiries and updates"
      ]
    },
    {
      icon: Users,
      title: "Student Services",
      description: "Streamline student support services with intelligent voice assistance.",
      items: [
        "Financial aid guidance",
        "Housing assistance",
        "Campus navigation help",
        "Event information",
        "Student ID services"
      ]
    },
    {
      icon: FileText,
      title: "Administrative Operations",
      description: "Automate administrative tasks and improve operational efficiency.",
      items: [
        "Attendance tracking",
        "Faculty support services",
        "Facility scheduling",
        "Document processing",
        "Parent communication"
      ]
    }
  ]

  const stats = [
    { value: "65%", label: "Query Resolution Time Improvement" },
    { value: "45%", label: "Administrative Cost Reduction" },
    { value: "85%", label: "Student Satisfaction Rate" },
    { value: "50%", label: "Staff Productivity Increase" }
  ]

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-600 mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform educational experiences with AI voice agents that enhance student support, streamline administrative tasks, and create more efficient learning environments for institutions of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group relative">
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.8 }} className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
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