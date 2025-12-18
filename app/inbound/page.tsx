import { Navbar } from "@/components/navbar"
import { InboundHero } from "@/components/inbound/inbound-hero"
import { InboundStats } from "@/components/inbound/inbound-stats"
import { InboundPipeline } from "@/components/inbound/inbound-pipeline"
import { InboundFeatures } from "@/components/inbound/inbound-features"
import { InboundTestimonials } from "@/components/inbound/inbound-testimonials"
import { InboundCalculator } from "@/components/inbound/inbound-calculator"
import { InboundCTA } from "@/components/inbound/inbound-cta"
import { Footer } from "@/components/footer"

export default function InboundPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <InboundHero />
      <InboundStats />
      <InboundPipeline />
      <InboundFeatures />
      <InboundTestimonials />
      <InboundCalculator />
      <InboundCTA />
      <Footer />
    </div>
  )
}