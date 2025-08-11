"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Flame, Star, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("cocktails")
  const heroRef = useScrollReveal({ threshold: 0.1 })
  const menuRef = useScrollReveal({ threshold: 0.1 })
  const barRef = useScrollReveal({ threshold: 0.1 })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])

  // Updated to use your renamed files in /public/menu
  const allMenuPages: string[] = [
    "/menu/starters.jpg",
    "/menu/veg-starter.jpg",
    "/menu/nonveg-starter.jpg",
    "/menu/main-course.jpg",
    "/menu/main-course1.jpg",
    "/menu/main-course2.jpg",
    "/menu/pizza1.jpg",
    "/menu/sushi.jpg",
    "/menu/cocktail1.jpg",
    "/menu/cocktail2.jpg",
    "/menu/cocktail3.jpg",
    "/menu/cocktail4.jpg",
    "/menu/cocktail5.jpg",
    "/menu/cocktail6.jpg",
    "/menu/cocktail7.jpg",
    "/menu/cocktail8.jpg",
    "/menu/mocktails.jpg",
  ]

  // Map scanned pages to the most relevant categories
  const menuPagesByCategory: Record<string, string[]> = {
    starters: [
      "/menu/starters.jpg",
      "/menu/veg-starter.jpg",
      "/menu/nonveg-starter.jpg",
    ],
    mains: [
      "/menu/main-course.jpg",
      "/menu/main-course1.jpg",
      "/menu/main-course2.jpg",
    ],
    pizzas: [
      "/menu/pizza1.jpg",
    ],
    sushi: [
      "/menu/sushi.jpg",
    ],
    cocktails: [
      "/menu/cocktail1.jpg",
      "/menu/cocktail2.jpg",
      "/menu/cocktail3.jpg",
      "/menu/cocktail4.jpg",
      "/menu/cocktail5.jpg",
      "/menu/cocktail6.jpg",
      "/menu/cocktail7.jpg",
      "/menu/cocktail8.jpg",
    ],
    mocktails: [
      "/menu/mocktails.jpg",
    ],
  }

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const menuCategories = {
    starters: [
      {
        name: "Cheese Cigar Rolls",
        description: "Crispy rolls filled with melted cheese and herbs",
        price: "₹320",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      },
      {
        name: "Asian Mezze Platter",
        description: "Selection of Asian appetizers with dipping sauces",
        price: "₹480",
        tags: ["popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      },
      {
        name: "Loaded Nachos",
        description: "Tortilla chips with cheese, jalapeños, and salsa",
        price: "₹380",
        tags: ["veg", "spicy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      },
      {
        name: "Chicken Wings Buffalo",
        description: "Spicy buffalo wings with blue cheese dip",
        price: "₹420",
        tags: ["spicy", "popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%282%29.jpg-2RF7kbtSPIvmjAHDbqVP4Layez9AgC.webp",
      },
      {
        name: "Mushroom Bruschetta",
        description: "Toasted bread with garlic mushrooms and herbs",
        price: "₹350",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      },
      {
        name: "Prawn Tempura",
        description: "Crispy tempura prawns with wasabi mayo",
        price: "₹520",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%282%29.jpg-2RF7kbtSPIvmjAHDbqVP4Layez9AgC.webp",
      },
    ],
    mains: [
      {
        name: "Grilled Chicken Teriyaki",
        description: "Tender chicken glazed with teriyaki sauce, served with rice",
        price: "₹520",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%287%29.jpg-BXWLtnWpu1lZyEIrXmFQbO0RaeiCaZ.webp",
      },
      {
        name: "Paneer Tikka Masala",
        description: "Cottage cheese in rich tomato-based curry",
        price: "₹420",
        tags: ["veg", "popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%289%29.jpg-tptFQ459EeHfcCDajHpRBH44EGRJic.webp",
      },
      {
        name: "Asian Fusion Biryani",
        description: "Fragrant basmati rice with Asian spices and choice of protein",
        price: "₹480",
        tags: ["spicy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%287%29.jpg-BXWLtnWpu1lZyEIrXmFQbO0RaeiCaZ.webp",
      },
      {
        name: "Thai Green Curry",
        description: "Coconut curry with vegetables or chicken, jasmine rice",
        price: "₹450",
        tags: ["spicy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%287%29.jpg-BXWLtnWpu1lZyEIrXmFQbO0RaeiCaZ.webp",
      },
      {
        name: "Lamb Rogan Josh",
        description: "Slow-cooked lamb in aromatic spices with naan",
        price: "₹620",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%289%29.jpg-tptFQ459EeHfcCDajHpRBH44EGRJic.webp",
      },
      {
        name: "Vegetable Pad Thai",
        description: "Stir-fried rice noodles with vegetables and peanuts",
        price: "₹380",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%287%29.jpg-BXWLtnWpu1lZyEIrXmFQbO0RaeiCaZ.webp",
      },
    ],
    pizzas: [
      {
        name: "Margherita Supreme",
        description: "Wood-fired pizza with fresh mozzarella, basil, and tomato sauce",
        price: "₹380",
        tags: ["veg", "chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
      {
        name: "BBQ Chicken Pizza",
        description: "Smoky BBQ chicken with caramelized onions and cheese",
        price: "₹520",
        tags: ["popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
      {
        name: "Veggie Deluxe",
        description: "Loaded with bell peppers, mushrooms, olives, and cheese",
        price: "₹450",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
      {
        name: "Pepperoni Classic",
        description: "Traditional pepperoni with mozzarella and oregano",
        price: "₹480",
        tags: ["popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
      {
        name: "Mediterranean Delight",
        description: "Olives, sun-dried tomatoes, feta cheese, and herbs",
        price: "₹520",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
      {
        name: "Meat Lovers",
        description: "Chicken, pepperoni, sausage with extra cheese",
        price: "₹580",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      },
    ],
    sushi: [
      {
        name: "California Roll",
        description: "Crab, avocado, and cucumber with sesame seeds",
        price: "₹480",
        tags: ["popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      },
      {
        name: "Vegetable Bao",
        description: "Steamed buns filled with seasoned vegetables",
        price: "₹320",
        tags: ["veg"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      },
      {
        name: "Spicy Tuna Roll",
        description: "Fresh tuna with spicy mayo and cucumber",
        price: "₹580",
        tags: ["spicy", "chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      },
      {
        name: "Dragon Roll",
        description: "Eel and cucumber topped with avocado and eel sauce",
        price: "₹620",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      },
      {
        name: "Chicken Bao",
        description: "Steamed buns with teriyaki chicken and vegetables",
        price: "₹380",
        tags: ["popular"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-02-18.jpg-7Sv9WxRuyC7hHPETW6WlRtWUvMzoeq.webp",
      },
      {
        name: "Rainbow Roll",
        description: "California roll topped with assorted fresh fish",
        price: "₹680",
        tags: ["chef-pick"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      },
    ],
    cocktails: [
      {
        name: "Yellow Jacket",
        description: "Our signature cocktail with premium spirits and exotic garnish",
        price: "₹450",
        tags: ["signature"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      },
      {
        name: "Watermelon Tiny",
        description: "Refreshing watermelon-based cocktail with mint",
        price: "₹380",
        tags: ["refreshing"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
      {
        name: "Basil Cucu",
        description: "Cucumber and basil infused gin cocktail",
        price: "₹420",
        tags: ["herbal"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      },
      {
        name: "Smoky Old Fashioned",
        description: "Classic whiskey cocktail with a smoky twist",
        price: "₹520",
        tags: ["classic"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      },
      {
        name: "Mango Tango",
        description: "Tropical mango cocktail with chili rim",
        price: "₹400",
        tags: ["fruity", "spicy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
      {
        name: "Lavender Gin Fizz",
        description: "Gin with lavender syrup and fresh lime",
        price: "₹450",
        tags: ["herbal"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      },
      {
        name: "Espresso Martini",
        description: "Vodka, coffee liqueur, and fresh espresso",
        price: "₹480",
        tags: ["classic"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      },
      {
        name: "Passion Fruit Caipirinha",
        description: "Brazilian cocktail with passion fruit and cachaça",
        price: "₹420",
        tags: ["fruity"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
    ],
    mocktails: [
      {
        name: "Virgin Mojito",
        description: "Fresh mint, lime, and soda water",
        price: "₹220",
        tags: ["refreshing"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      },
      {
        name: "Tropical Sunset",
        description: "Pineapple, orange, and grenadine layered drink",
        price: "₹250",
        tags: ["fruity"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
      {
        name: "Cucumber Cooler",
        description: "Refreshing cucumber and mint cooler",
        price: "₹200",
        tags: ["healthy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      },
      {
        name: "Berry Blast",
        description: "Mixed berries with lemon and sparkling water",
        price: "₹240",
        tags: ["fruity", "healthy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
      {
        name: "Ginger Lime Fizz",
        description: "Fresh ginger, lime juice, and soda",
        price: "₹220",
        tags: ["refreshing"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      },
      {
        name: "Mango Lassi",
        description: "Traditional yogurt drink with fresh mango",
        price: "₹180",
        tags: ["healthy"],
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      },
    ],
  }

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "veg":
        return <Leaf className="w-4 h-4 text-green-600" />
      case "spicy":
        return <Flame className="w-4 h-4 text-red-500" />
      case "chef-pick":
      case "signature":
      case "popular":
        return <Star className="w-4 h-4 text-[#D79A3A]" />
      default:
        return null
    }
  }

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "veg":
        return "bg-green-100 text-green-800"
      case "spicy":
        return "bg-red-100 text-red-800"
      case "chef-pick":
      case "signature":
        return "bg-[#D79A3A] text-white"
      case "popular":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section ref={heroRef.ref} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%286%29.jpg-NiriY3MF1Cv5bf8WtLWjbMx9pevVFF.webp"
            alt="Overhead view of Bodega's authentic pasta dishes and elegant table setting"
            fill
            className="object-cover transition-transform duration-[10s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        <div
          className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="bg-[#D79A3A] text-white mb-4 animate-bounce-in">Our Menu</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 gradient-text-animated">Culinary Excellence</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            Discover our carefully crafted Euro-Asian fusion menu featuring wood-fired pizzas, fresh sushi, innovative
            cocktails, and more
          </p>
          <Sparkles className="w-8 h-8 mx-auto mt-6 text-[#D79A3A] animate-float" />
        </div>
      </section>

      {/* Menu Content */}
      <section ref={menuRef.ref} className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              className={`grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-[#7A4F32] text-white transition-all duration-700 ${
                menuRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {["starters", "mains", "pizzas", "sushi", "cocktails", "mocktails"].map((tab, index) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-[#D79A3A] transition-all duration-300 hover:bg-[#D79A3A]/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tab === "sushi" ? "Sushi & Bao" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([category]) => {
              const images = menuPagesByCategory[category] || []
              return (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((imageSrc, index) => (
                      <Card
                        key={imageSrc}
                        className={`overflow-hidden shadow-lg hover-lift image-overlay group transition-all duration-700 ${
                          activeTab === category ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                        onClick={() => openLightbox(images, index)}
                      >
                        <div className="relative aspect-[3/4] overflow-hidden cursor-pointer">
                          <Image
                            src={imageSrc || "/placeholder.svg"}
                            alt={`${category} menu page ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute top-4 left-4 bg-[#D79A3A] text-white px-3 py-1 rounded-full text-xs font-medium">
                            Page {index + 1}
                          </div>
                          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-5 h-5 text-white drop-shadow" />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>
      {/* Lightbox for menu pages */}
      <ImageLightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((i) => (i + 1) % lightboxImages.length)}
        onPrevious={() => setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length)}
      />

      {/* Bar Menu Highlight */}
      <section ref={barRef.ref} className="py-16 bg-[#7A4F32] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#D79A3A] rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-[#D79A3A] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                barRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Badge className="bg-[#D79A3A] text-white mb-4 animate-bounce-in">Signature Bar</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text-animated">Crafted with Passion</h2>
              <p className="text-lg mb-6 opacity-90">
                Our expert mixologists create innovative cocktails using premium spirits, fresh ingredients, and
                creative garnishes. Each drink is a work of art designed to complement our Euro-Asian cuisine.
              </p>
              <div className="space-y-4">
                {["Premium Spirits", "Fresh Ingredients", "Creative Garnishes", "Expert Mixology"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`flex justify-between items-center border-b border-white/20 pb-2 hover-lift transition-all duration-700 ${
                        barRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      <span className="font-medium">{item}</span>
                      <span className="text-[#D79A3A] animate-pulse">✓</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div
              className={`relative h-96 transition-all duration-1000 ${
                barRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%285%29.jpg-EPQEGwcEYNC6DP9HwKwqTP9A2ujot0.webp"
                alt="Skilled bartender creating dramatic cocktails with smoke effects and professional flair"
                fill
                className="object-cover rounded-lg hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Removed duplicate "Browse Our Physical Menu" section as per request */}
    </div>
  )
}
