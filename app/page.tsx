import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AgentCards } from "@/components/agent-cards"
import { UseCases } from "@/components/use-cases"
import { HowItWorks } from "@/components/how-it-works"
import { IntegrationsTicker } from "@/components/integrations-ticker"
import { Management } from "@/components/management"
import { FAQ } from "@/components/faq"
import { VideoShowcase } from "@/components/video-section" 
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <AgentCards />
      <UseCases />
      <HowItWorks />
      <IntegrationsTicker />
      <Management />
      <VideoShowcase />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
