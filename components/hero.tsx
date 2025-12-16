"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { Phone } from "lucide-react"

export function Hero() {
  const { t, language } = useLanguage()
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Image - More Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/jztmdaq6x2js2ydqdpp9o3l3xua.avif"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Lighter gradient overlay to let image show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Subtle Glow Effects - Modern Color Palette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-indigo-900/15 via-cyan-900/8 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-900/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-indigo-900/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-900/5 rounded-full blur-[80px]" />
      </div>

      {/* Animated Grid Pattern - More Subtle */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Smooth Bottom Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 py-12">
        <div className="text-center space-y-8">
          {/* Main Heading with Gradient - Modern Colors */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4 drop-shadow-2xl"
          >
            <span className="text-white drop-shadow-lg">{t("heroTitle1")}</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
              {t("heroTitle2")}
            </span>
          </motion.h1>

          {/* Description - Better contrast */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed drop-shadow-lg"
          >
            {t("heroDesc")}
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4 max-w-md mx-auto px-4 pt-4"
          >
            <div className="relative w-full">
              <Input
                type="tel"
                placeholder={language === "ar" ? "ادخل رقمك (0501234567)" : "Enter your number (0501234567)"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-14 bg-white/95 backdrop-blur-sm border-2 border-white/20 text-gray-900 text-center placeholder:text-gray-500 rounded-xl shadow-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all"
                dir={language === "ar" ? "rtl" : "ltr"}
              />
            </div>
            
            <Button
              size="lg"
              className="w-full h-14 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {t("callMeNow")}
            </Button>

            <p className="text-sm text-gray-300 mt-2 drop-shadow">
              Get a callback in under 30 seconds
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}