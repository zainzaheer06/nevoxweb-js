import { Navbar } from "@/components/navbar"
import { ApiDocsHero } from "@/components/api-docs/api-docs-hero"
import { ApiDocsNavigation } from "@/components/api-docs/api-docs-navigation"
import { ApiDocsContent } from "@/components/api-docs/api-docs-content"
import { Footer } from "@/components/footer"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ApiDocsHero />
      <div className="flex">
        <ApiDocsNavigation />
        <ApiDocsContent />
      </div>
      <Footer />
    </div>
  )
}