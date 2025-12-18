import { Navbar } from "@/components/navbar"
import { PrivacyContent } from "@/components/legal/privacy-content"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </div>
  )
}