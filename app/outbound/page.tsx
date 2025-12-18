import { Navbar } from "@/components/navbar"
import { OutboundHero } from "@/components/outbound/outbound-hero"
import { OutboundStats } from "@/components/outbound/outbound-stats"
import { OutboundPipeline } from "@/components/outbound/outbound-pipeline"
import { OutboundFeatures } from "@/components/outbound/outbound-features"
import { OutboundResults } from "@/components/outbound/outbound-results"
import { OutboundTestimonials } from "@/components/outbound/outbound-testimonials"
import { OutboundCTA } from "@/components/outbound/outbound-cta"
import { Footer } from "@/components/footer"

export default function OutboundPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <OutboundHero />
      <OutboundStats />
      <OutboundPipeline />
      <OutboundFeatures />
      <OutboundResults />
      <OutboundTestimonials />
      <OutboundCTA />
      <Footer />
    </div>
  )
}