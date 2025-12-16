import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/nevox-logo.avif" alt="Nevox AI Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-white text-xl font-bold">Nevox AI</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              World's First Arabic AI Voice Agent. Automate your calls with intelligent AI agents tailored for Saudi
              businesses.
            </p>
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

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Outbound Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Inbound Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">info@nevoxai.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Riyadh, Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Nevox AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-purple-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
