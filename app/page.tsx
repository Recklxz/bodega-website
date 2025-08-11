"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Phone, Instagram, ArrowRight, Sparkles, Play } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { TiltCard } from "@/components/tilt-card"
import { MorphingText } from "@/components/morphing-text"
import dynamic from "next/dynamic"
import { VideoFrame } from "@/components/video-frame"
import { useEffect, useState } from "react"

// Lazy-load heavier interactive components without changing functionality
const ParticleSystem = dynamic(
  () => import("@/components/particle-system").then((m) => ({ default: m.ParticleSystem })),
  { ssr: false, loading: () => null },
)

const SoundEffects = dynamic(
  () => import("@/components/sound-effects").then((m) => ({ default: m.SoundEffects })),
  { ssr: false, loading: () => null },
)
const ImageLightbox = dynamic(
  () => import("@/components/image-lightbox").then((m) => ({ default: m.ImageLightbox })),
  { ssr: false, loading: () => null },
)

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const heroRef = useScrollReveal({ threshold: 0.1 })
  const menuRef = useScrollReveal({ threshold: 0.1 })
  const aboutRef = useScrollReveal({ threshold: 0.1 })
  const galleryRef = useScrollReveal({ threshold: 0.1 })
  const eventsRef = useScrollReveal({ threshold: 0.1 })
  const reviewsRef = useScrollReveal({ threshold: 0.1 })

  const galleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-qi7otplQyUJKMbvAeVd2CX2osqTxFI.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%286%29.jpg-4wNxhkChgq3NXMmWJqj0sD1yBHTygB.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29.jpg-V0wCdtDXo2APgrv1i3XrXIWCBuE9o6.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2832%29.jpg-b6oFqDoEoSjgnwtHenGgj6w81m4Z8I.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2833%29.jpg-2qXu0RD2hR8A0AdumKUy6fKpGmHCbV.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2831%29.jpg-6RH12dBMxAIbpNZedcpmG6DxQxa1XD.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2830%29.jpg-PDitNlFqcaKJkbF6yiiZDa3tb70xae.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-12-14.jpg-6HZRmvo7oFQPeWb1xmte5IXKTX4Kno.webp",
  ]

  const morphingTexts = [
    "Warm lights.",
    "Better drinks.",
    "Unforgettable nights.",
    "Euro-Asian fusion.",
    "Premium cocktails.",
    "Elegant ambiance.",
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-[#F6F1EB] overflow-x-hidden">

      <SoundEffects />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleSystem />

        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp"
            alt="Bodega's vibrant dining atmosphere with festive red ceiling decorations and warm lighting"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover transition-transform duration-[4000ms] ease-out hover:scale-105 will-change-transform"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Video Play Button */}
        <div className="absolute bottom-20 right-20 z-20">
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-[#D79A3A]/20 backdrop-blur-sm hover:bg-[#D79A3A]/40 border border-[#D79A3A] animate-pulse-glow shadow-lg"
            onClick={() => setVideoPlaying(true)}
            data-magnetic
          >
            <Play className="w-5 h-5 text-white ml-0.5" />
          </Button>
          <p className="text-white/80 text-sm mt-2 text-center">Watch Video</p>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-4xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-fade-in-down">
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#D79A3A] animate-pulse" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <MorphingText
              texts={morphingTexts}
              className="gradient-text-animated block"
              morphDuration={3000}
              pauseDuration={2000}
            />
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto animate-fade-in-up animate-stagger-4">
            Experience elegant Euro-Asian dining & cocktails in Kanpur's finest lounge
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-5 will-change-transform">
            <Button
              size="lg"
              className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white px-8 py-4 text-lg rounded-full shadow-lg btn-interactive hover-glow group"
              asChild
              data-magnetic
            >
              <Link href="/reservations">
                Reserve Table
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#161616] px-8 py-4 text-lg rounded-full bg-transparent btn-interactive magnetic"
              asChild
              data-magnetic
            >
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>

        {/* Floating elements with enhanced animations */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#D79A3A] rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-[#D79A3A] rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-30"
          style={{ animationDelay: "3s", animationDuration: "6s" }}
        ></div>
      </section>

      {/* Elegant video showcase */}
      {videoPlaying && (
        <section className="py-16 px-4 bg-gradient-to-b from-[#F6F1EB] to-white">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-[#D79A3A] text-white mb-4">Experience Bodega</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#161616] mb-4">
                Immerse Yourself in Our Ambiance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a virtual tour of our elegant space and discover the perfect setting for your next celebration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white p-4">
                  <VideoFrame src="/vid/Video-192.mp4" controls={false} autoPlay muted loop className="w-full" />
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white p-4">
                  <VideoFrame src="/vid/Video-702.mp4" controls={false} autoPlay muted loop className="w-full" />
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white p-4">
                  <VideoFrame src="/vid/Video-885.mp4" controls={false} autoPlay muted loop className="w-full" />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-[#D79A3A] text-[#D79A3A] hover:bg-[#D79A3A] hover:text-white"
                onClick={() => setVideoPlaying(false)}
              >
                Close Video
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Trust Strip with enhanced effects */}
      <section className="py-8 bg-[#7A4F32] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A4F32] via-[#8B5A3C] to-[#7A4F32] animate-shimmer"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <TiltCard className="flex items-center gap-2 hover-lift">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D79A3A] text-[#D79A3A] animate-bounce-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="text-sm">4.0/5 Google Rating</span>
            </TiltCard>
            <TiltCard className="flex items-center gap-2 hover-lift">
              <Clock className="w-5 h-5 text-[#D79A3A] animate-pulse" />
              <span className="text-sm">Open daily 1:30pm–1am</span>
            </TiltCard>
            <TiltCard className="flex items-center gap-2 hover-lift">
              <MapPin className="w-5 h-5 text-[#D79A3A] animate-pulse" />
              <span className="text-sm">Valet & Free parking</span>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Menu Highlights with 3D tilt cards */}
      <section ref={menuRef.ref} className="py-16 px-4">
        <div className="container mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              menuRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-[#6A7B4A] text-white mb-4 animate-bounce-in">Signature Selections</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#161616] mb-4 gradient-text">
              Taste the Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From wood-fired pizzas to innovative cocktails, every dish tells a story of Euro-Asian fusion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
                title: "Yellow Jacket",
                description: "Our signature cocktail with exotic garnishes and premium spirits",
                price: "₹450",
                badge: "Chef's Pick",
                delay: "0s",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
                title: "Wood-Fired Pizza",
                description: "Artisanal pizzas from our wood-fired oven with fresh ingredients",
                price: "₹380",
                badge: "Popular",
                delay: "0.2s",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
                title: "Sushi Selection",
                description: "Fresh sushi rolls and bao varieties with Asian fusion flavors",
                price: "₹520",
                badge: "Fresh",
                delay: "0.4s",
              },
            ].map((item, index) => (
              <TiltCard
                key={index}
                className={`transition-all duration-700 ${
                  menuRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
              >
                <Card className="overflow-hidden shadow-lg image-overlay group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 bg-[#7A4F32] text-white relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D79A3A] to-transparent"></div>
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#D79A3A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-3 opacity-90">{item.description}</p>
                    <div className="flex justify-between items-center">

                      <Badge variant="secondary" className="bg-[#D79A3A] text-white hover-rotate">
                        {item.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview with Lightbox */}
      <section ref={galleryRef.ref} className="py-16 px-4">
        <div className="container mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              galleryRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-[#6A7B4A] text-white mb-4 animate-bounce-in">Gallery</Badge>
            <h2 className="font-serif text-4xl font-bold text-[#161616] mb-4 gradient-text">Moments Worth Sharing</h2>
            <p className="text-lg text-gray-600">Step into our world of elegant ambiance and culinary artistry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <TiltCard
                key={index}
                className={`transition-all duration-700 ${
                  galleryRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
              >
                <div
                  className="relative h-48 overflow-hidden rounded-lg group cursor-pointer hover-lift"
                  onClick={() => openLightbox(index)}
                  data-magnetic
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 animate-bounce-in">
                      <Sparkles className="w-6 h-6 text-[#D79A3A]" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div
            className={`text-center mt-8 transition-all duration-1000 ${
              galleryRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white px-8 btn-interactive group"
              asChild
              data-magnetic
            >
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section with animated counters */}
      <section ref={reviewsRef.ref} className="py-16 bg-[#7A4F32] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#D79A3A] rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-[#D79A3A] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              reviewsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-[#D79A3A] text-white mb-4 animate-bounce-in">What Our Guests Say</Badge>
            <h2 className="font-serif text-4xl font-bold mb-4 gradient-text-animated">Experiences That Matter</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                text: "Fantastic vibe and super classy ambience. The cocktails are innovative and the food quality is top-tier. Worth every penny!",
                source: "Google Review",
                stars: 5,
                delay: "0s",
              },
              {
                text: "Very aesthetic place with both indoor and alfresco seating. The wood-fired pizzas are amazing and the staff is well-trained.",
                source: "Zomato Review",
                stars: 5,
                delay: "0.2s",
              },
              {
                text: "Great variety in the menu with excellent vegetarian options. The ambiance is perfect for date nights and the parking is convenient.",
                source: "Restaurant Guru",
                stars: 4,
                delay: "0.4s",
              },
            ].map((review, index) => (
              <TiltCard
                key={index}
                className={`transition-all duration-700 ${
                  reviewsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="bg-white/10 border-white/20 text-white hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#D79A3A] text-[#D79A3A] animate-bounce-in"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{review.text}"</p>
                    <p className="text-sm opacity-75">- {review.source}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div
            className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${
              reviewsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <TiltCard className="text-center">
              <div className="text-4xl font-bold text-[#D79A3A] mb-2">
                <AnimatedCounter end={184} suffix="+" />
              </div>
              <div className="text-sm opacity-75">Happy Reviews</div>
            </TiltCard>
            <TiltCard className="text-center">
              <div className="text-4xl font-bold text-[#D79A3A] mb-2">
                <AnimatedCounter end={2000} suffix="+" />
              </div>
              <div className="text-sm opacity-75">Monthly Visitors</div>
            </TiltCard>
            <TiltCard className="text-center">
              <div className="text-4xl font-bold text-[#D79A3A] mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm opacity-75">Menu Items</div>
            </TiltCard>
            <TiltCard className="text-center">
              <div className="text-4xl font-bold text-[#D79A3A] mb-2">
                <AnimatedCounter end={365} />
              </div>
              <div className="text-sm opacity-75">Days Open</div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Contact CTA with enhanced effects */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1EB] via-[#F0E6D6] to-[#F6F1EB]"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl font-bold text-[#161616] mb-6 gradient-text">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us at Bodega for an evening of exceptional cocktails, delicious Euro-Asian cuisine, and warm
            hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#D79A3A] hover:bg-[#D79A3A]/90 text-white px-8 btn-interactive group"
              asChild
              data-magnetic
            >
              <Link href="/reservations">
                <Phone className="w-5 h-5 mr-2" />
                Call to Reserve
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#7A4F32] text-[#7A4F32] hover:bg-[#7A4F32] hover:text-white px-8 bg-transparent btn-interactive magnetic"
              asChild
              data-magnetic
            >
              <Link href="https://instagram.com/bodega_knp" target="_blank">
                <Instagram className="w-5 h-5 mr-2" />
                Follow Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </div>
  )
}
