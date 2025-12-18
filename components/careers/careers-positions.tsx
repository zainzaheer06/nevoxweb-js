"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Clock, DollarSign, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CareersPositions() {
  const [activeCategory, setActiveCategory] = useState("All Positions")

  const categories = [
    "All Positions",
    "Engineering", 
    "Product",
    "Design",
    "Marketing",
    "Sales"
  ]

  const positions = [
    {
      title: "Senior AI Engineer",
      location: "Remote / Riyadh",
      type: "Full-time",
      salary: "Competitive",
      category: "Engineering",
      skills: ["Python", "Machine Learning", "NLP"],
      description: "Lead the development of our AI voice technology platform."
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time", 
      salary: "Competitive",
      category: "Engineering",
      skills: ["React", "Node.js", "AWS"],
      description: "Build and maintain our web applications and APIs."
    },
    {
      title: "Product Manager",
      location: "Riyadh, KSA",
      type: "Full-time",
      salary: "Competitive",
      category: "Product",
      skills: ["Product Strategy", "AI/ML", "Agile"],
      description: "Drive product strategy and roadmap for our AI solutions."
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      salary: "Competitive", 
      category: "Design",
      skills: ["Figma", "User Research", "Design Systems"],
      description: "Design intuitive user experiences for our AI platform."
    },
    {
      title: "Content Marketing Manager",
      location: "Remote",
      type: "Full-time",
      salary: "Competitive",
      category: "Marketing", 
      skills: ["Content Strategy", "SEO", "Analytics"],
      description: "Create compelling content to drive brand awareness and growth."
    },
    {
      title: "Enterprise Sales Executive",
      location: "Riyadh, KSA",
      type: "Full-time",
      salary: "Competitive + Commission",
      category: "Sales",
      skills: ["B2B Sales", "SaaS", "Arabic/English"],
      description: "Drive enterprise sales and build relationships with key clients."
    }
  ]

  const filteredPositions = positions.filter(position => 
    activeCategory === "All Positions" || position.category === activeCategory
  )

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

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Open Positions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our team and help shape the future of AI technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPositions.map((position, index) => (
            <motion.div
              key={`${position.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {position.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                      {position.category}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <DollarSign className="w-4 h-4" />
                    {position.salary}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {position.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {position.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold">
                  Apply Now
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPositions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No positions found</div>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't see the right position?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl">
            Send Your Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}