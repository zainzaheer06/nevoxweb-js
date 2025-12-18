import { Navbar } from "@/components/navbar"
import { TermsContent } from "@/components/legal/terms-content"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <TermsContent />
      <Footer />
    </div>
  )
}