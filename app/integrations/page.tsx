import { Navbar } from "@/components/navbar"
import { IntegrationsHero } from "@/components/integrations/integrations-hero"
import { IntegrationsOverview } from "@/components/integrations/integrations-overview"
import { FeaturedIntegrations } from "@/components/integrations/featured-integrations"
import { IntegrationsGrid } from "@/components/integrations/integrations-grid"
import { IntegrationsCTA } from "@/components/integrations/integrations-cta"
import { Footer } from "@/components/footer"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <IntegrationsHero />
      <IntegrationsOverview />
      <FeaturedIntegrations />
      <IntegrationsGrid />
      <IntegrationsCTA />
      <Footer />
    </div>
  )
}