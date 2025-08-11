import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-[#161616] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-[#D79A3A]">Bodega</h3>
            <p className="text-gray-300 mb-6">
              Kanpur's premier cocktail lounge offering Euro-Asian cuisine and innovative mixology in an elegant atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/bodega_knp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D79A3A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-[#D79A3A] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-gray-300 hover:text-[#D79A3A] transition-colors">Menu</Link></li>
              <li><Link href="/reservations" className="text-gray-300 hover:text-[#D79A3A] transition-colors">Reservations</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-[#D79A3A] transition-colors">Private Events</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-[#D79A3A] transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#D79A3A] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D79A3A] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Ground Floor, The Millionaire Suites,<br />
                  7/110 C, Near Arya Nagar Circle,<br />
                  Swaroop Nagar, Kanpur, UP 208002
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D79A3A]" />
                <a href="tel:+918081727780" className="text-gray-300 hover:text-[#D79A3A] transition-colors">
                  +91 80817 27780
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D79A3A]" />
                <a href="mailto:bodegaknp@gmail.com" className="text-gray-300 hover:text-[#D79A3A] transition-colors">
                  bodegaknp@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D79A3A]" />
                <span className="text-gray-300">Daily: 1:30 PM - 1:00 AM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on special events, new menu items, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bodega - Cocktail Bar & Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
