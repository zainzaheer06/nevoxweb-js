import { Navbar } from "@/components/navbar"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactMethods } from "@/components/contact/contact-methods"
import { ContactForm } from "@/components/contact/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <Footer />
    </div>
  )
}