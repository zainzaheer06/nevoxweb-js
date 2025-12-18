import { Navbar } from "@/components/navbar"
import { DemoHero } from "@/components/demo/demo-hero"
import { DemoStats } from "@/components/demo/demo-stats"
import { DemoExpectations } from "@/components/demo/demo-expectations"
import { DemoTestimonial } from "@/components/demo/demo-testimonial"
import { Footer } from "@/components/footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <DemoHero />
      <DemoStats />
      <DemoExpectations />
      <DemoTestimonial />
      <Footer />
    </div>
  )
}