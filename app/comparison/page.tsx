import { Navbar } from "@/components/navbar"
import { ComparisonHero } from "@/components/comparison/comparison-hero"
import { ComparisonChart } from "@/components/comparison/comparison-chart"
import { ComparisonFeatures } from "@/components/comparison/comparison-features"
import { ComparisonCTA } from "@/components/comparison/comparison-cta"
import { Footer } from "@/components/footer"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ComparisonHero />
      <ComparisonChart />
      <ComparisonFeatures />
      <ComparisonCTA />
      <Footer />
    </div>
  )
}