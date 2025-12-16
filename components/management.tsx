"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

const features = [
  /*{
    titleKey: "callAutomation",
    descKey: "callAutomationDesc",
    image: "/images/call-automation-table.png",
  },
  {
    titleKey: "seamlessIntegrations",
    descKey: "seamlessIntegrationsDesc",
    image: "/images/phone-integrations-icon.png",
  },*/
  {
    titleKey: "performanceAnalytics",
    descKey: "performanceAnalyticsDesc",
    image: "/images/performance-analytics-chart.png",
  },
  {
    titleKey: "realTimeMonitoring",
    descKey: "realTimeMonitoringDesc",
    image: "/images/real-time-monitoring-chart.png",
  },
]

export function Management() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("manageCallsTitle")}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t("manageCallsDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-black/80 border-purple-600/40 p-8 hover:border-purple-500/70 transition-all duration-500 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{t(feature.descKey)}</p>
                </div>
                <motion.div className="relative mt-auto" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={t(feature.titleKey)}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
