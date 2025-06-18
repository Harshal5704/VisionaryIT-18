"use client"
import { Instagram, Linkedin, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Message */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/vft-logo-new.png" alt="Vision Flow Technologies" className="w-8 h-8 mr-3" />
              <span className="text-lg font-semibold">Vision Flow Technologies</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Drop a line and let's connect!</h4>
            <p className="text-gray-300 mb-4">
              Ready to transform your digital presence? We're here to help you achieve your goals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@visionflowtech.com" className="hover:text-gray-300 transition-colors">
                  contact@visionflowtech.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919731070591" className="hover:text-gray-300 transition-colors">
                  +91 9731070591
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">Moodbidri, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/vision_flow_technologies_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/vision-flow-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/vision_flow_technologies_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </a>
            </div>
          </div>

          {/* Start Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Start Links</h5>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Vision Flow Technologies. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
