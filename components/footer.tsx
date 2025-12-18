import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MessageCircle, Shield, Lock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Side - Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/images/nevox-logo.avif" alt="Nevox AI Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-white text-xl font-bold">Nevox AI</span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              24/7 intelligent voice agent that handles calls, answers questions, and performs actions — all automatically
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+966531235255" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call: +966 53 123 5255</span>
              </a>
              <a href="https://wa.me/966567270719" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +966 56 727 0719</span>
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/industry" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Industry
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  API access
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/outbound" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Outbound Agents
                </Link>
              </li>
              <li>
                <Link href="/inbound" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Inbound Agents
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Security Badges */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Data Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🇸🇦</span>
              <span>Saudi Data Residency</span>
            </div>
          </div>
          
          {/* Right Side - Copyright */}
          <p className="text-sm text-gray-400">
            © Copyright 2025 Nevox AI - All rights reserved. Made In Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  )
}
