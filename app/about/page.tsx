import { Navbar } from "@/components/navbar"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutJourney } from "@/components/about/about-journey"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutValues />
      <AboutJourney />
      <Footer />
    </div>
  )
}