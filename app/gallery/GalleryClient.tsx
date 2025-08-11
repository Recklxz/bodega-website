"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function GalleryPageClient() {
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


