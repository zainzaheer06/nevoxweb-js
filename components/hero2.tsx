"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { Phone, CheckCircle2 } from "lucide-react"

export function Hero() {
  const { t, language } = useLanguage()
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jztmdaq6x2js2ydqdpp9o3l3xua.avif"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Subtle Glow Effects - Less Purple, More Neutral */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-purple-900/10 via-zinc-900/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[100px]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Trusted by 100+ Saudi Businesses</span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4"
          >
            <span className="text-white">{t("heroTitle1")}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("heroTitle2")}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed"
          >
            {t("heroDesc")}
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4 max-w-md mx-auto px-4"
          >
            <div className="relative w-full">
              <Input
                type="tel"
                placeholder={language === "ar" ? "ادخل رقمك (0501234567)" : "Enter your number (0501234567)"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-14 bg-white/95 backdrop-blur-sm border border-white/20 text-gray-900 text-center placeholder:text-gray-500 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-500/50"
                dir={language === "ar" ? "rtl" : "ltr"}
              />
            </div>
            
            <Button
              size="lg"
              className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {t("callMeNow")}
            </Button>

            <p className="text-sm text-gray-500 mt-2">
              Get a callback in under 30 seconds
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">92%</div>
              <div className="text-sm text-gray-400">Call Resolution</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">&lt;1s</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Availability</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}