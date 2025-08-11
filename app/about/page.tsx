import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Bodega – Cocktail Bar & Kitchen, Kanpur",
  description:
    "Learn about Bodega's story, our Euro-Asian cuisine philosophy, and the passionate team behind Kanpur's premier cocktail lounge experience.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bodega-ambiance-wide-shot.png"
            alt="Bodega's warm and inviting interior atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="bg-[#D79A3A] text-white mb-4">Our Story</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Bodega</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Where Euro-Asian heritage meets modern mixology in the heart of Kanpur
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#6A7B4A] text-white mb-4">Our Journey</Badge>
              <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">
                A Culinary Adventure Born from Passion
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bodega was born from a simple vision: to create a space where the sophisticated flavors of European
                  cuisine harmoniously blend with the vibrant spices and techniques of Asian cooking. Located in the
                  heart of Kanpur's Swaroop Nagar, we've become a destination for those seeking an elevated dining and
                  cocktail experience.
                </p>
                <p>
                  Our journey began with a passion for bringing together diverse culinary traditions under one roof.
                  From our wood-fired pizzas that echo the rustic charm of Italian trattorias to our innovative sushi
                  rolls that celebrate the artistry of Japanese cuisine, every dish tells a story of cultural fusion and
                  culinary excellence.
                </p>
                <p>
                  What sets Bodega apart is our commitment to creating not just meals, but memorable experiences. Our
                  intimate lounge atmosphere, crafted with warm amber lighting and natural textures, provides the
                  perfect backdrop for everything from romantic date nights to celebratory gatherings with friends.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%285%29.jpg-EPQEGwcEYNC6DP9HwKwqTP9A2ujot0.webp"
                alt="Skilled bartender demonstrating cocktail craftsmanship with dramatic presentation"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#7A4F32] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#D79A3A] text-white mb-4">Our Values</Badge>
            <h2 className="font-serif text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Every aspect of Bodega is guided by our core principles of excellence, innovation, and genuine hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Excellence</h3>
                <p className="text-sm opacity-90">
                  We source the finest ingredients and employ skilled techniques to deliver exceptional quality in every
                  dish and drink.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Passion</h3>
                <p className="text-sm opacity-90">
                  Our love for culinary arts and mixology drives us to constantly innovate and create memorable
                  experiences for our guests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Community</h3>
                <p className="text-sm opacity-90">
                  We're proud to be part of Kanpur's vibrant dining scene and committed to creating a welcoming space
                  for all.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Tradition</h3>
                <p className="text-sm opacity-90">
                  We honor traditional cooking methods while embracing modern techniques to create our unique Euro-Asian
                  fusion cuisine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cuisine Philosophy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%285%29.jpg-hBEJDlLV8LzkX1WztN70bHdaCoDEw9.webp"
                alt="Artistic dessert presentation showcasing Bodega's attention to culinary detail"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-[#D79A3A] text-white mb-4">Our Philosophy</Badge>
              <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Euro-Asian Fusion Redefined</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our culinary philosophy centers on the belief that great food transcends borders. We carefully select
                  techniques and flavors from European and Asian traditions, creating dishes that are both familiar and
                  surprising.
                </p>
                <p>
                  From our wood-fired oven that produces authentic Italian-style pizzas to our sushi station where fresh
                  ingredients are transformed into artistic rolls, every corner of our kitchen represents a different
                  culinary tradition working in harmony.
                </p>
                <p>
                  Our cocktail program follows the same philosophy. We blend premium spirits with exotic ingredients,
                  creating signature drinks like our famous Yellow Jacket that perfectly complement our diverse menu
                  offerings.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D79A3A] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D79A3A] mb-2">25+</div>
                  <div className="text-sm text-gray-600">Signature Cocktails</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="py-16 bg-[#F6F1EB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#6A7B4A] text-white mb-4">Our Space</Badge>
            <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Designed for Connection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every element of our space is thoughtfully designed to create an atmosphere that encourages conversation,
              celebration, and connection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/cozy-indoor-seating.png" alt="Indoor seating area" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 text-[#161616]">Indoor Elegance</h3>
                <p className="text-gray-600 text-sm">
                  Our indoor space features warm amber lighting, comfortable seating, and an intimate atmosphere perfect
                  for date nights and small gatherings.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/outdoor-dining-greenery.png" alt="Alfresco dining area" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 text-[#161616]">Alfresco Charm</h3>
                <p className="text-gray-600 text-sm">
                  Our outdoor seating area offers a refreshing alfresco experience with lush greenery and twinkling
                  lights creating a magical ambiance.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/premium-bar-setup.png" alt="Bar area" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 text-[#161616]">Craft Bar</h3>
                <p className="text-gray-600 text-sm">
                  Our expertly designed bar showcases premium spirits and provides front-row seats to watch our skilled
                  mixologists craft your perfect cocktail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="py-16 bg-[#7A4F32] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#D79A3A] text-white mb-4">Location</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6">Perfectly Positioned in Kanpur</h2>
              <div className="space-y-4 opacity-90">
                <p>
                  Strategically located in Swaroop Nagar, one of Kanpur's most vibrant neighborhoods, Bodega is easily
                  accessible from all parts of the city. Our location within The Millionaire Suites provides both
                  convenience and elegance.
                </p>
                <p>
                  We're just minutes away from major landmarks and well-connected to the city's main thoroughfares.
                  Whether you're coming from the business district or the university area, Bodega is your perfect
                  destination for an exceptional dining experience.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D79A3A] rounded-full"></div>
                  <span>Free parking and valet service available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D79A3A] rounded-full"></div>
                  <span>Easy access from major city routes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D79A3A] rounded-full"></div>
                  <span>Close to business and entertainment districts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D79A3A] rounded-full"></div>
                  <span>Air-conditioned comfort year-round</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/bodega-exterior-entrance.png"
                alt="Bodega's welcoming entrance at The Millionaire Suites"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-[#6A7B4A] text-white mb-4">Our Promise</Badge>
          <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6">Committed to Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            At Bodega, we're more than just a restaurant and bar. We're a destination where culinary artistry meets warm
            hospitality, where every visit becomes a cherished memory, and where the vibrant spirit of Kanpur comes
            alive through exceptional food and drink.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D79A3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4.0</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#161616]">Google Rating</h3>
              <p className="text-gray-600 text-sm">Based on 184+ reviews from satisfied guests</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#6A7B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">365</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#161616]">Days Open</h3>
              <p className="text-gray-600 text-sm">We're here for you every day of the year</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#7A4F32] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2K+</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 text-[#161616]">Happy Guests</h3>
              <p className="text-gray-600 text-sm">Monthly visitors who choose Bodega for their special moments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
