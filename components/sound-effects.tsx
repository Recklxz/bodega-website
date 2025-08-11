"use client"

import { useEffect, useRef } from "react"

export function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    const playSound = (frequency: number, duration: number, type: OscillatorType = "sine") => {
      if (!audioContextRef.current) return

      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime)
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration)

      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + duration)
    }

    const handleButtonHover = () => {
      playSound(800, 0.1, "sine")
    }

    const handleButtonClick = () => {
      playSound(600, 0.2, "square")
    }

    const handleLinkHover = () => {
      playSound(1000, 0.05, "triangle")
    }

    // Add event listeners
    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement
      if (target.matches("button")) {
        handleButtonHover()
      } else if (target.matches("a")) {
        handleLinkHover()
      }
    })

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      if (target.matches("button, a")) {
        handleButtonClick()
      }
    })

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return null
}
