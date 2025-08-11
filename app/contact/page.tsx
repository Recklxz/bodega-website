import { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Bodega – Cocktail Bar & Kitchen, Kanpur',
  description: 'Get in touch with Bodega Kanpur. Find our address, phone, email, and business hours. We\'re happy to answer your queries and reservations.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-[#D79A3A] text-white mb-4">Get in Touch</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#161616] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, 
            or just to say hello
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary Contact */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#D79A3A] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#161616] mb-2">Reservations & Inquiries</h4>
                    <a 
                      href="tel:+918081727780"
                      className="text-2xl font-bold text-[#D79A3A] hover:text-[#D79A3A]/80 transition-colors"
                    >
                      +91 80817 27780
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Available during business hours for immediate assistance
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Best times to call:</strong> 2:00 PM - 11:00 PM for reservations and general inquiries
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#6A7B4A] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#161616] mb-2">General Inquiries</h4>
                    <a 
                      href="mailto:bodegaknp@gmail.com"
                      className="text-lg text-[#6A7B4A] hover:text-[#6A7B4A]/80 transition-colors"
                    >
                      bodegaknp@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Email us for:</strong> Event planning, catering inquiries, feedback, or detailed questions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#7A4F32] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Monday - Sunday</span>
                    <span className="text-[#D79A3A] font-bold">1:30 PM - 1:00 AM</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Open Every Day:</strong> We're here to serve you exceptional cocktails and cuisine 365 days a year.
                    </p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Kitchen closes:</strong> 12:30 AM</p>
                    <p><strong>Last orders:</strong> 12:45 AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gray-700 text-white">
                <CardTitle className="font-serif text-2xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Stay connected with us on social media for the latest updates, 
                    special offers, and behind-the-scenes content.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/bodega_knp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@bodega_knp</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500">
                    2.2K+ followers on Instagram • Join our community!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location & Map */}
          <div className="space-y-8">
            {/* Address */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#7A4F32] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-[#161616] mb-3">Address</h4>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      Ground Floor, The Millionaire Suites<br />
                      7/110 C, Near Arya Nagar Circle<br />
                      Swaroop Nagar, Kanpur<br />
                      Uttar Pradesh 208002, India
                    </address>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#161616] mb-3">Parking & Accessibility</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Free parking available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Valet service provided</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Air-conditioned indoor seating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Outdoor alfresco area</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white"
                    asChild
                  >
                    <a 
                      href="https://maps.google.com/?q=26.483768,80.320467" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/bodega-location-exterior.png"
                  alt="Bodega location at The Millionaire Suites, Swaroop Nagar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <MapPin className="w-8 h-8 text-[#D79A3A] mx-auto mb-2" />
                    <p className="font-medium text-[#161616]">Bodega Kanpur</p>
                    <p className="text-sm text-gray-600">Swaroop Nagar</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Nearby Landmarks */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#6A7B4A] text-white">
                <CardTitle className="font-serif text-2xl">Nearby Landmarks</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Arya Nagar Circle</span>
                    <span className="text-[#D79A3A] font-medium">2 min walk</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Khalasi Line</span>
                    <span className="text-[#D79A3A] font-medium">5 min walk</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Mall Road</span>
                    <span className="text-[#D79A3A] font-medium">10 min drive</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">IIT Kanpur</span>
                    <span className="text-[#D79A3A] font-medium">15 min drive</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#D79A3A] text-white">
                <CardTitle className="font-serif text-2xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-[#7A4F32] hover:bg-[#7A4F32]/90 text-white"
                    asChild
                  >
                    <a href="/reservations">
                      <Phone className="w-4 h-4 mr-2" />
                      Make a Reservation
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#6A7B4A] text-[#6A7B4A] hover:bg-[#6A7B4A] hover:text-white"
                    asChild
                  >
                    <a href="/menu">
                      View Our Menu
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#D79A3A] text-[#D79A3A] hover:bg-[#D79A3A] hover:text-white"
                    asChild
                  >
                    <a href="/events">
                      Plan an Event
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
