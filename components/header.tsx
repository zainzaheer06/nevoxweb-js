"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg" />
            <span className="text-xl font-bold text-white">Nevox AI</span>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Book Demo</Button>
        </div>
      </div>
    </header>
  )
}
