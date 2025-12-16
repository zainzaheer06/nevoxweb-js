"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

const features = [
  {
    badgeEn: "Native Speaker",
    badgeAr: "متحدث أصلي",
    badgeEn2: "Market access",
    badgeAr2: "وصول للسوق",
    titleKey: "feature1Title",
    descKey: "feature1Desc",
    image: "/images/crm-integrations.avif",
    
  },
  {
    badgeEn: "Smart insights",
    badgeAr: "رؤى ذكية",
    badgeEn2: "Actionable data",
    badgeAr2: "بيانات قابلة للتنفيذ",
    titleKey: "feature2Title",
    descKey: "feature2Desc",
    image: "/images/speed-gauge-meter.avif",
  },
  {
    badgeEn: "Smooth Process",
    badgeAr: "عملية سلسة",
    badgeEn2: "Instant access",
    badgeAr2: "وصول فوري",
    titleKey: "feature3Title",
    descKey: "feature3Desc",
    image: "/images/saudi-person-ai-microphone.avif",
    
  },
]

export function Features() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Redefining the future of AI Call solutions
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Nevox AI is a Saudi-Arabic AI voice agent that automates customer calls with natural speech, instant
            responses, and smart call handling. Perfect for Saudi companies needing 24/7 voice automation.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-4 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm">
                    {language === "ar" ? feature.badgeAr : feature.badgeEn}
                  </span>
                  <span className="inline-block px-4 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm">
                    {language === "ar" ? feature.badgeAr2 : feature.badgeEn2}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">{t(feature.descKey)}</p>
                <Button className="bg-gray-100 hover:bg-white text-black font-medium px-6 py-6 rounded-full transition-all duration-300 group">
                  {language === "ar" ? "ابدأ الآن" : "Get started"}
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? "md:order-1" : ""}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/10 to-transparent rounded-3xl blur-2xl opacity-50" />

                  {/* Image container with reduced size */}
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-2 rounded-2xl border border-gray-800/50 backdrop-blur-sm overflow-hidden">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={t(feature.titleKey)}
                      className="w-full h-auto rounded-xl object-cover"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
