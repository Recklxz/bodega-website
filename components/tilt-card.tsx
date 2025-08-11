"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  perspective?: number
  scale?: number
  transitionDuration?: number
  transitionEasing?: string
  glareEnable?: boolean
  glareMaxOpacity?: number
}

export function TiltCard({
  children,
  className = "",
  tiltMaxAngleX = 20,
  tiltMaxAngleY = 20,
  perspective = 1000,
  scale = 1.05,
  transitionDuration = 400,
  transitionEasing = "cubic-bezier(.03,.98,.52,.99)",
  glareEnable = true,
  glareMaxOpacity = 0.7,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -tiltMaxAngleX
      const rotateY = ((x - centerX) / centerX) * tiltMaxAngleY

      element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
      element.style.willChange = "transform"

      if (glareEnable) {
        const glareElement = element.querySelector(".tilt-glare") as HTMLElement
        if (glareElement) {
          const glareX = (x / rect.width) * 100
          const glareY = (y / rect.height) * 100
          const glareOpacity = Math.min(glareMaxOpacity, Math.abs(rotateX + rotateY) / 20)

          glareElement.style.background = `linear-gradient(${Math.atan2(rotateY, rotateX) * (180 / Math.PI) + 90}deg, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`
          glareElement.style.opacity = glareOpacity.toString()
        }
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      element.style.transition = `transform ${transitionDuration}ms ${transitionEasing}`
      element.style.willChange = "auto"

      if (glareEnable) {
        const glareElement = element.querySelector(".tilt-glare") as HTMLElement
        if (glareElement) {
          glareElement.style.opacity = "0"
        }
      }

      setTimeout(() => {
        element.style.transition = ""
      }, transitionDuration)
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [
    tiltMaxAngleX,
    tiltMaxAngleY,
    perspective,
    scale,
    transitionDuration,
    transitionEasing,
    glareEnable,
    glareMaxOpacity,
  ])

  return (
    <div ref={ref} className={`relative ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
      {glareEnable && (
        <div
          className="tilt-glare absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: "overlay" }}
        />
      )}
    </div>
  )
}
