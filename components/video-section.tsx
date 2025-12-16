"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react"

const videos = [
  {
    title: "Meet Your Arabic AI",
    subtitle: "Voice Agent",
    description:
      "Experience natural Arabic conversations that understand context, culture, and intent in real-time.",
    videoUrl: "/videos/nevox-ai-2.mp4",
    thumbnail: "",
    features: ["Natural Saudi dialect", "Cultural understanding", "Real-time responses"],
    ctaText: "Book a Demo",
  },
  {
    title: "Seamless Customer",
    subtitle: "Interactions",
    description:
      "See how Nevox handles complex queries, schedules appointments, and provides support in perfect Arabic.",
    videoUrl: "/videos/nevox-video.mp4",
    thumbnail: "",
    features: ["Smart escalation", "Instant booking", "24/7 availability"],
    ctaText: "Get Started",
  },
]

export function VideoShowcase() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Arabic AI Voice Agents
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Watch how Nevox AI transforms customer conversations
          </p>
        </motion.div>

        {videos.map((video, index) => (
          <div key={index} className="mb-24 last:mb-0">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{video.title}</h3>
                <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
                  {video.subtitle}
                </h4>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{video.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {video.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-500 hover:to-purple-600 transition-all duration-300">
                  {video.ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Video Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
                  {/* Compact Phone Frame */}
                  <div className="relative aspect-[9/14] rounded-3xl overflow-hidden bg-zinc-900 border-4 border-zinc-800 shadow-2xl">
                    {/* Video */}
                    <video
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                      controls
                      playsInline
                      loop
                      muted
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-purple-900/20 blur-3xl rounded-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}