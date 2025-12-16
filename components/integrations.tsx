"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

const logos = [
  { name: "Zoom", url: "/generic-video-call-logo.png" },
  { name: "Slack", url: "/slack-logo.png" },
  { name: "Salesforce", url: "/salesforce-logo.png" },
  { name: "HubSpot", url: "/hubspot-logo.png" },
  { name: "WhatsApp", url: "/whatsapp-logo.png" },
  { name: "Twilio", url: "/twilio-logo.png" },
  { name: "Zapier", url: "/zapier-logo.png" },
  { name: "Microsoft", url: "/microsoft-logo.png" },
]

export function Integrations() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Seamless Integrations</h2>
          <p className="text-gray-400 text-lg mb-6">
            Nevox AI seamlessly integrates with leading tools and platforms, ensuring a smooth and efficient workflow.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Integrations</Button>
        </div>

        <div ref={scrollRef} className="overflow-hidden relative">
          <div className="flex gap-8 animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-110"
              >
                <img src={logo.url || "/placeholder.svg"} alt={logo.name} className="w-11 h-11" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
