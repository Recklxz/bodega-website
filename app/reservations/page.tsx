import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Phone, Clock, MapPin, Users, Calendar, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Reserve Table at Bodega Kanpur | Cocktail Bar & Kitchen',
  description: 'Secure your table at Bodega – Kanpur\'s premier cocktail bar. Call or book online for an evening of drinks, dining & sophisticated ambiance.',
}

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 relative">
        <Image
          src="/elegant-table-setting.png"
          alt="Beautifully set table ready for guests at Bodega"
          fill
          className="object-cover absolute inset-0 -z-10 opacity-60"
        />
        <div className="container mx-auto text-center relative">
          <Badge className="bg-[#D79A3A] text-white mb-4">Reservations</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#161616] mb-6">
            Reserve Your Table
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your spot at Kanpur's premier cocktail lounge for an unforgettable evening 
            of exceptional drinks and Euro-Asian cuisine
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="shadow-xl">
            <CardHeader className="bg-[#7A4F32] text-white">
              <CardTitle className="font-serif text-2xl">Make a Reservation</CardTitle>
              <p className="opacity-90">Fill out the form below or call us directly</p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#161616] font-medium">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name" 
                      className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#161616] font-medium">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#161616] font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-[#161616] font-medium">Date *</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-[#161616] font-medium">Time *</Label>
                    <Select>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2:00">2:00 PM</SelectItem>
                        <SelectItem value="3:00">3:00 PM</SelectItem>
                        <SelectItem value="4:00">4:00 PM</SelectItem>
                        <SelectItem value="5:00">5:00 PM</SelectItem>
                        <SelectItem value="6:00">6:00 PM</SelectItem>
                        <SelectItem value="7:00">7:00 PM</SelectItem>
                        <SelectItem value="8:00">8:00 PM</SelectItem>
                        <SelectItem value="9:00">9:00 PM</SelectItem>
                        <SelectItem value="10:00">10:00 PM</SelectItem>
                        <SelectItem value="11:00">11:00 PM</SelectItem>
                        <SelectItem value="12:00">12:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-[#161616] font-medium">Guests *</Label>
                    <Select>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                        <SelectValue placeholder="Party size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7 Guests</SelectItem>
                        <SelectItem value="8">8 Guests</SelectItem>
                        <SelectItem value="more">8+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="occasion" className="text-[#161616] font-medium">Special Occasion</Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                      <SelectValue placeholder="Select occasion (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="date">Date Night</SelectItem>
                      <SelectItem value="business">Business Meeting</SelectItem>
                      <SelectItem value="celebration">Celebration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requests" className="text-[#161616] font-medium">Special Requests</Label>
                  <Textarea 
                    id="requests" 
                    placeholder="Any dietary restrictions, seating preferences, or special arrangements..."
                    className="mt-2 border-gray-300 focus:border-[#D79A3A] min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white py-3 text-lg"
                >
                  Submit Reservation Request
                </Button>
              </form>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium mb-1">Please Note:</p>
                    <p>Reservations are subject to availability. We'll confirm your booking via phone within 2 hours. For immediate confirmation, please call us directly.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#D79A3A] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Prefer to Call?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    For immediate reservations and special requests, call us directly
                  </p>
                  <a 
                    href="tel:+918081727780"
                    className="inline-flex items-center gap-3 bg-[#7A4F32] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A4F32]/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91 80817 27780
                  </a>
                  <p className="text-sm text-gray-500 mt-4">
                    Available during business hours: 1:30 PM - 1:00 AM
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#6A7B4A] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Sunday</span>
                    <span className="text-[#D79A3A] font-bold">1:30 PM - 1:00 AM</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Open Daily:</strong> We're open every day of the week to serve you the finest cocktails and cuisine.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-xl">
              <CardHeader className="bg-[#7A4F32] text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Location & Parking
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#161616] mb-2">Address</h4>
                    <p className="text-gray-600">
                      Ground Floor, The Millionaire Suites<br />
                      7/110 C, Near Arya Nagar Circle<br />
                      Swaroop Nagar, Kanpur, UP 208002
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#161616] mb-2">Parking</h4>
                    <div className="flex items-center gap-2 text-green-600">
                      <Badge className="bg-green-100 text-green-800">Free Parking</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Valet Available</Badge>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#D79A3A] text-[#D79A3A] hover:bg-[#D79A3A] hover:text-white"
                    asChild
                  >
                    <a 
                      href="https://maps.google.com/?q=26.483768,80.320467" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gray-700 text-white">
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Reservation Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-[#161616] mb-1">Booking Policy</h4>
                    <p>Reservations are recommended, especially on weekends. Walk-ins are welcome subject to availability.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#161616] mb-1">Cancellation</h4>
                    <p>Please notify us at least 2 hours in advance for cancellations or changes.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#161616] mb-1">Large Groups</h4>
                    <p>For parties of 8 or more, please call directly to discuss special arrangements and menu options.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#161616] mb-1">Age Policy</h4>
                    <p>We welcome guests of all ages. Valid ID required for alcohol service (21+ years).</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
