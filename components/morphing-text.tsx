"use client"

import { useEffect, useState } from "react"

interface MorphingTextProps {
  texts: string[]
  className?: string
  morphDuration?: number
  pauseDuration?: number
}

export function MorphingText({ texts, className = "", morphDuration = 2000, pauseDuration = 1000 }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(texts[0])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (texts.length <= 1) return

    const interval = setInterval(() => {
      setIsAnimating(true)

      // Morphing effect
      const currentText = texts[currentIndex]
      const nextIndex = (currentIndex + 1) % texts.length
      const nextText = texts[nextIndex]

      let progress = 0
      const morphInterval = setInterval(() => {
        progress += 0.05

        if (progress >= 1) {
          setDisplayText(nextText)
          setCurrentIndex(nextIndex)
          setIsAnimating(false)
          clearInterval(morphInterval)
          return
        }

        // Create morphing effect by mixing characters
        let morphedText = ""
        for (let i = 0; i < Math.max(currentText.length, nextText.length); i++) {
          const currentChar = currentText[i] || ""
          const nextChar = nextText[i] || ""

          if (Math.random() < progress) {
            morphedText += nextChar
          } else {
            morphedText += currentChar
          }
        }

        setDisplayText(morphedText)
      }, 50)
    }, morphDuration + pauseDuration)

    return () => clearInterval(interval)
  }, [currentIndex, texts, morphDuration, pauseDuration])

  return <span className={`${className} ${isAnimating ? "animate-pulse" : ""}`}>{displayText}</span>
}
