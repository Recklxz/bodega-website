"use client"

import { useEffect, useRef } from "react"

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = "1"
      cursorDot.style.opacity = "1"
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"
      cursorDot.style.opacity = "0"
    }

    const animate = () => {
      // Smooth cursor following
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1
      dotX += (mouseX - dotX) * 0.15
      dotY += (mouseY - dotY) * 0.15

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`

      requestAnimationFrame(animate)
    }

    // Magnetic effect for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches("button, a, [data-magnetic]")) {
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1.5)`
        cursor.style.backgroundColor = "rgba(215, 154, 58, 0.3)"
      }
    }

    const handleElementLeave = () => {
      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1)`
      cursor.style.backgroundColor = "rgba(215, 154, 58, 0.1)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleElementHover)
    document.addEventListener("mouseout", handleElementLeave)

    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleElementHover)
      document.removeEventListener("mouseout", handleElementLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] opacity-0 transition-all duration-300 ease-out border border-[#D79A3A] mix-blend-difference"
        style={{ backgroundColor: "rgba(215, 154, 58, 0.1)" }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] opacity-0 bg-[#D79A3A]"
      />
    </>
  )
}
