"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, Heart, Briefcase, GraduationCap, Gift, Phone, Mail } from "lucide-react"

export default function EventsPageClient() {
  const eventPackages = [
    {
      icon: Heart,
      title: "Birthday Celebrations",
      description: "Make your special day unforgettable with our intimate birthday packages",
      features: [
        "Customized decorations",
        "Special birthday menu",
        "Complimentary cake",
        "Dedicated service staff",
        "Photo opportunities",
      ],
      capacity: "8-25 guests",
      price: "Starting from ₹15,000",
      image: "birthday-party-intimate-setting.png",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional settings for business meetings and team celebrations",
      features: [
        "Private dining area",
        "AV equipment support",
        "Business lunch/dinner menus",
        "Flexible timing",
        "Professional ambiance",
      ],
      capacity: "10-40 guests",
      price: "Starting from ₹25,000",
      image: "business-dinner-professional.png",
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description: "Perfect for anniversaries, reunions, and special celebrations",
      features: [
        "Flexible seating arrangements",
        "Customized menu options",
        "Special occasion setup",
        "Photography assistance",
        "Extended hours available",
      ],
      capacity: "15-50 guests",
      price: "Starting from ₹20,000",
      image: "friends-gathering-cocktails.png",
    },
    {
      icon: GraduationCap,
      title: "College Meetups",
      description: "Casual and fun atmosphere for student groups and college reunions",
      features: [
        "Student-friendly pricing",
        "Casual dining setup",
        "Group sharing menus",
        "Music and entertainment",
        "Late night availability",
      ],
      capacity: "12-30 guests",
      price: "Starting from ₹12,000",
      image: "student-group-celebration.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp"
            alt="Elegant celebration setup at Bodega with warm lighting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="bg-[#D79A3A] text-white mb-4">Private Events</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Celebrate in Style</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Create unforgettable memories at Bodega with our customizable event packages and exceptional service
          </p>
        </div>
      </section>

      {/* Event Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#6A7B4A] text-white mb-4">Event Packages</Badge>
            <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Tailored for Every Occasion</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate birthday celebrations to corporate gatherings, we have the perfect package for your special
              event
            </p>
          </div>

          {/* Removed teaser video for layout cohesion */}

          <div className="grid md:grid-cols-2 gap-8">
            {eventPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={
                      pkg.title === "Birthday Celebrations"
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%289%29.jpg-tptFQ459EeHfcCDajHpRBH44EGRJic.webp"
                        : pkg.title === "Corporate Events"
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%286%29.jpg-NiriY3MF1Cv5bf8WtLWjbMx9pevVFF.webp"
                          : `/${pkg.image}`
                    }
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="bg-[#7A4F32] text-white">
                  <CardTitle className="font-serif text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D79A3A] rounded-full flex items-center justify-center">
                      <pkg.icon className="w-5 h-5" />
                    </div>
                    {pkg.title}
                  </CardTitle>
                  <p className="opacity-90">{pkg.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-[#161616]">Capacity:</span>
                        <p className="text-gray-600">{pkg.capacity}</p>
                      </div>
                      <div>
                        <span className="font-medium text-[#161616]">Price:</span>
                        <p className="text-[#D79A3A] font-bold">{pkg.price}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#161616] mb-2">Package Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#D79A3A] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white"
                      onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Inquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#7A4F32] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#D79A3A] text-white mb-4">Why Choose Bodega</Badge>
            <h2 className="font-serif text-4xl font-bold mb-6">Perfect Venue for Every Celebration</h2>
          </div>

          {/* Removed ambience video for layout cohesion */}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Flexible Capacity</h3>
              <p className="opacity-90 text-sm">
                Accommodate intimate gatherings of 8 guests to larger celebrations of up to 50 people with flexible
                seating arrangements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Customizable Packages</h3>
              <p className="opacity-90 text-sm">
                Tailor every aspect of your event from menu selection to decorations, ensuring your celebration is
                uniquely yours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Dedicated Service</h3>
              <p className="opacity-90 text-sm">
                Our experienced event team ensures seamless execution, allowing you to focus on enjoying your special
                moment with loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section id="inquiry-form" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[#D79A3A] text-white mb-4">Plan Your Event</Badge>
              <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Let's Create Something Special</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our events team will contact you within 24 hours to discuss your
                requirements
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="bg-[#7A4F32] text-white">
                <CardTitle className="font-serif text-2xl">Event Inquiry Form</CardTitle>
                <p className="opacity-90">Tell us about your vision and we'll make it happen</p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-[#161616] font-medium">
                        Contact Name *
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your full name"
                        className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="text-[#161616] font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-[#161616] font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="event-type" className="text-[#161616] font-medium">
                        Event Type *
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">Birthday Celebration</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="reunion">College Reunion</SelectItem>
                          <SelectItem value="social">Social Gathering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="event-date" className="text-[#161616] font-medium">
                        Preferred Date *
                      </Label>
                      <Input
                        id="event-date"
                        type="date"
                        className="mt-2 border-gray-300 focus:border-[#D79A3A]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guest-count" className="text-[#161616] font-medium">
                        Guest Count *
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8-15">8-15 guests</SelectItem>
                          <SelectItem value="16-25">16-25 guests</SelectItem>
                          <SelectItem value="26-35">26-35 guests</SelectItem>
                          <SelectItem value="36-50">36-50 guests</SelectItem>
                          <SelectItem value="50+">50+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-[#161616] font-medium">
                        Budget Range
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-20k">₹10,000 - ₹20,000</SelectItem>
                          <SelectItem value="20-35k">₹20,000 - ₹35,000</SelectItem>
                          <SelectItem value="35-50k">₹35,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k+">₹50,000+</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timing" className="text-[#161616] font-medium">
                        Preferred Timing
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-[#D79A3A]">
                          <SelectValue placeholder="Select timing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lunch">Lunch (2:00 PM - 5:00 PM)</SelectItem>
                          <SelectItem value="evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                          <SelectItem value="dinner">Dinner (8:00 PM - 11:00 PM)</SelectItem>
                          <SelectItem value="late">Late Night (10:00 PM - 1:00 AM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements" className="text-[#161616] font-medium">
                      Special Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about any special requirements, dietary restrictions, decorations, entertainment, or other preferences..."
                      className="mt-2 border-gray-300 focus:border-[#D79A3A] min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white py-3 text-lg">
                    Submit Event Inquiry
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Planning Timeline:</p>
                      <p>
                        We recommend booking at least 2 weeks in advance for optimal planning. Our events team will
                        contact you within 24 hours to discuss details and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-16 bg-[#7A4F32] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#D79A3A] text-white mb-4">Direct Contact</Badge>
            <h2 className="font-serif text-4xl font-bold mb-6">Prefer to Discuss Directly?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our events team is available to discuss your requirements and provide personalized recommendations for
              your special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Call Our Events Team</h3>
                <a
                  href="tel:+918081727780"
                  className="text-2xl font-bold text-[#D79A3A] hover:text-[#D79A3A]/80 transition-colors block mb-2"
                >
                  +91 80817 27780
                </a>
                <p className="text-sm opacity-90">
                  Available daily 2:00 PM - 11:00 PM
                  <br />
                  Speak directly with our events coordinator
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#6A7B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">Email for Details</h3>
                <a
                  href="mailto:bodegaknp@gmail.com?subject=Event Inquiry"
                  className="text-lg text-[#6A7B4A] hover:text-[#6A7B4A]/80 transition-colors block mb-2"
                >
                  bodegaknp@gmail.com
                </a>
                <p className="text-sm opacity-90">
                  Send detailed requirements
                  <br />
                  We'll respond within 24 hours with a custom proposal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Gallery Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#6A7B4A] text-white mb-4">Event Memories</Badge>
            <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Celebrations We've Hosted</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of the memorable events we've had the pleasure of hosting
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "birthday-celebration-friends-laughing.png",
              "corporate-event-team-toasting.png",
              "anniversary-couple-romantic-dinner.png",
              "college-reunion-students-cheering.png",
              "family-gathering-multi-generation.png",
              "business-meeting-executives-discussing.png",
              "graduation-party-cake-balloons.png",
              "wedding-anniversary-flowers-candles.png",
            ].map((query, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={`/${query}`}
                  alt={`Event photo ${index + 1}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white px-8" asChild>
              <a href="/gallery">View Full Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
