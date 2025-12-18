import { Navbar } from "@/components/navbar"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersCulture } from "@/components/careers/careers-culture"
import { CareersPerks } from "@/components/careers/careers-perks"
import { CareersPositions } from "@/components/careers/careers-positions"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <CareersHero />
      <CareersCulture />
      <CareersPerks />
      <CareersPositions />
      <Footer />
    </div>
  )
}