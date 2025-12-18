"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/nevox-logo.avif" alt="Nevox AI Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-white text-xl font-bold">Nevox AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
              Overview
            </Link>
            <Link href="/outbound" className="text-sm text-gray-300 hover:text-white transition-colors">
              Outbound
            </Link>
            <Link href="/inbound" className="text-sm text-gray-300 hover:text-white transition-colors">
              Inbound
            </Link>
            <Link href="/industry" className="text-sm text-gray-300 hover:text-white transition-colors">
              Industry
            </Link>
            <Link href="/integrations" className="text-sm text-gray-300 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/demo">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Book Demo</Button>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Overview
              </Link>
              <Link href="/outbound" className="text-sm text-gray-300 hover:text-white transition-colors">
                Outbound
              </Link>
              <Link href="/inbound" className="text-sm text-gray-300 hover:text-white transition-colors">
                Inbound
              </Link>
              <Link href="/industry" className="text-sm text-gray-300 hover:text-white transition-colors">
                Industry
              </Link>
              <Link href="/integrations" className="text-sm text-gray-300 hover:text-white transition-colors">
                Integrations
              </Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/demo" className="w-full">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Book Demo</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
