import { Navbar } from "@/components/navbar"
import { IndustryHero } from "@/components/industry/industry-hero"
import { IndustryGrid } from "@/components/industry/industry-grid"
import { HealthcareSolution } from "@/components/industry/healthcare-solution"
import { FinancialSolution } from "@/components/industry/financial-solution"
import { RetailSolution } from "@/components/industry/retail-solution"
import { HotelSolution } from "@/components/industry/hotel-solution"
import { EducationSolution } from "@/components/industry/education-solution"
import { InsuranceSolution } from "@/components/industry/insurance-solution"
import { TravelSolution } from "@/components/industry/travel-solution"
import { RealEstateSolution } from "@/components/industry/real-estate-solution"
import { RestaurantSolution } from "@/components/industry/restaurant-solution"
import { IndustryCTA } from "@/components/industry/industry-cta"
import { Footer } from "@/components/footer"

export default function IndustryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <IndustryHero />
      <IndustryGrid />
      <HealthcareSolution />
      <FinancialSolution />
      <RetailSolution />
      <HotelSolution />
      <EducationSolution />
      <InsuranceSolution />
      <TravelSolution />
      <RealEstateSolution />
      <RestaurantSolution />
      <IndustryCTA />
      <Footer />
    </div>
  )
}