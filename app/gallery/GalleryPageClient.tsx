"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"

export function GalleryPageClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const galleryImages = {
    food: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%282%29.jpg-2RF7kbtSPIvmjAHDbqVP4Layez9AgC.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%282%29.jpg-2RF7kbtSPIvmjAHDbqVP4Layez9AgC.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13.jpg-qVmMY3zg6PjbkAz59IfIoeulq9aACS.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%283%29.jpg-qfoPImNGGM6dfx3xmJqoFfT6xRLGGb.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%282%29.jpg-2RF7kbtSPIvmjAHDbqVP4Layez9AgC.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-D4YVXjwPzBqloCpz2jobCwxIEGgfaK.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%287%29.jpg-BXWLtnWpu1lZyEIrXmFQbO0RaeiCaZ.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%289%29.jpg-tptFQ459EeHfcCDajHpRBH44EGRJic.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-02-18.jpg-7Sv9WxRuyC7hHPETW6WlRtWUvMzoeq.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2810%29.jpg-sOFzWBiaOG1inSrOKYd1QUxi6zGTPe.webp",
    ],
    drinks: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%285%29.jpg-EPQEGwcEYNC6DP9HwKwqTP9A2ujot0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%285%29.jpg-EPQEGwcEYNC6DP9HwKwqTP9A2ujot0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%284%29.jpg-Oa0N8r5G5TLGFtWkkKcAPqyaOhMrqg.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%281%29.jpg-rjTped7yG55TkUrC09rlsxuqXGBDxV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2812%29.jpg-C5hbOvFaJ2jjY6gNLX2kSDOYXY489e.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%285%29.jpg-EPQEGwcEYNC6DP9HwKwqTP9A2ujot0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%288%29.jpg-MaBH52emV7BbRhcjoTovPbXSM20axl.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%284%29.jpg-WXgTQxkPg4RQh88oaVvt2LP45LHmxK.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2811%29.jpg-XERPQ3ffBs1LrW6yHUhBUyjB3hYpPI.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%287%29.jpg-2ZtzcVmsntgZZ2kLoVijujcVk2NWhP.webp",
    ],
    interiors: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-qi7otplQyUJKMbvAeVd2CX2osqTxFI.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%286%29.jpg-4wNxhkChgq3NXMmWJqj0sD1yBHTygB.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29.jpg-V0wCdtDXo2APgrv1i3XrXIWCBuE9o6.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2832%29.jpg-b6oFqDoEoSjgnwtHenGgj6w81m4Z8I.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2833%29.jpg-2qXu0RD2hR8A0AdumKUy6fKpGmHCbV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2831%29.jpg-6RH12dBMxAIbpNZedcpmG6DxQxa1XD.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2830%29.jpg-PDitNlFqcaKJkbF6yiiZDa3tb70xae.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-12-14.jpg-6HZRmvo7oFQPeWb1xmte5IXKTX4Kno.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2814%29.jpg-9gamc1ckxjLFwBEZCEeA1Fohoa9E9t.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-qi7otplQyUJKMbvAeVd2CX2osqTxFI.webp",
    ],
    menu: [
      "/menu/2023-02-20.jpg",
      "/menu/2023-02-201.jpg",
      "/menu/2023-02-20 (1).jpg",
      "/menu/2023-02-20 (2).jpg",
      "/menu/2023-02-20 (3).jpg",
      "/menu/2023-02-20 (4).jpg",
      "/menu/2023-02-20 (5).jpg",
      "/menu/2023-02-20 (6).jpg",
      "/menu/2023-02-20 (7).jpg",
      "/menu/2023-02-20 (8).jpg",
      "/menu/2023-02-20 (9).jpg",
      "/menu/2023-02-20 (10).jpg",
      "/menu/2023-02-20 (11).jpg",
      "/menu/2023-02-20 (12).jpg",
      "/menu/2023-02-20 (13).jpg",
      "/menu/2023-02-20 (14).jpg",
      "/menu/2023-02-20 (15).jpg",
    ],
    events: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-12-14.jpg-6HZRmvo7oFQPeWb1xmte5IXKTX4Kno.webp",
      "/bodega-romantic-dinner-candles.png",
      "/bodega-business-meeting-professional.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2831%29.jpg-6RH12dBMxAIbpNZedcpmG6DxQxa1XD.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2832%29.jpg-b6oFqDoEoSjgnwtHenGgj6w81m4Z8I.webp",
      "/bodega-romantic-dinner-candles.png",
      "/bodega-business-meeting-professional.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-12-14.jpg-6HZRmvo7oFQPeWb1xmte5IXKTX4Kno.webp",
      "/bodega-romantic-dinner-candles.png",
      "/bodega-business-meeting-professional.png",
    ],
  }

  return (
    <div className="min-h-screen bg-[#F6F1EB] pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-[#D79A3A] text-white mb-4">Gallery</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#161616] mb-6">Visual Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the essence of Bodega through our curated collection of moments, flavors, and experiences
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="interiors" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 bg-[#7A4F32] text-white">
              <TabsTrigger value="interiors" className="data-[state=active]:bg-[#D79A3A]">
                Ambiance
              </TabsTrigger>
              <TabsTrigger value="drinks" className="data-[state=active]:bg-[#D79A3A]">
                Cocktails
              </TabsTrigger>
              <TabsTrigger value="food" className="data-[state=active]:bg-[#D79A3A]">
                Cuisine
              </TabsTrigger>
              <TabsTrigger value="menu" className="data-[state=active]:bg-[#D79A3A]">
                Menu
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-[#D79A3A]">
                Events
              </TabsTrigger>
            </TabsList>

            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => {
                        setLightboxImages(images)
                        setLightboxIndex(index)
                        setLightboxOpen(true)
                      }}
                    >
                      <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-[#D79A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-[#7A4F32] text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-[#D79A3A] text-white mb-4">Social Media</Badge>
          <h2 className="font-serif text-4xl font-bold mb-6">Follow Our Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Stay connected with us on Instagram for daily updates, behind-the-scenes content, and the latest from our
            kitchen and bar
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2833%29.jpg-2qXu0RD2hR8A0AdumKUy6fKpGmHCbV.webp",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023-09-13%20%286%29.jpg-4wNxhkChgq3NXMmWJqj0sD1yBHTygB.webp",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2814%29.jpg-9gamc1ckxjLFwBEZCEeA1Fohoa9E9t.webp",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-page.jpg-l5YBDqQWDlWhFiLtuRdWCF2V9yKXqP.webp",
            ].map((src, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com/bodega_knp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-shadow"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @bodega_knp
          </a>
          <p className="text-sm opacity-75 mt-4">2.2K+ followers • Join our community for exclusive content</p>
        </div>
      </section>
      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((i) => (i + 1) % lightboxImages.length)}
        onPrevious={() => setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length)}
      />
    </div>
  )
}
