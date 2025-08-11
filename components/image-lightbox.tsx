"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: string[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, isOpen, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
        case "+":
        case "=":
          setZoom((prev) => Math.min(prev + 0.25, 3))
          break
        case "-":
          setZoom((prev) => Math.max(prev - 0.25, 0.5))
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetView = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    resetView()
  }, [currentIndex])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm animate-fade-in-up">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => setZoom((prev) => Math.max(prev - 0.25, 0.5))}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => setZoom((prev) => Math.min(prev + 0.25, 3))}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => {
              const link = document.createElement("a")
              link.href = images[currentIndex]
              link.download = `bodega-image-${currentIndex + 1}.jpg`
              link.click()
            }}
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 hover-lift"
        onClick={onPrevious}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 hover-lift"
        onClick={onNext}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Image */}
      <div
        className="absolute inset-0 flex items-center justify-center cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          }}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Gallery image ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[90vh] object-contain select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-lg p-2">
        {images.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((image, index) => {
          const actualIndex = Math.max(0, currentIndex - 2) + index
          return (
            <div
              key={actualIndex}
              className={`relative w-16 h-16 rounded cursor-pointer transition-all duration-300 ${
                actualIndex === currentIndex ? "ring-2 ring-[#D79A3A] scale-110" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => {
                // Handle thumbnail click
                const diff = actualIndex - currentIndex
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext()
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) onPrevious()
                }
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${actualIndex + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
