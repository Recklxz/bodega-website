"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const MagneticCursor = dynamic(
  () => import('@/components/magnetic-cursor').then((m) => ({ default: m.MagneticCursor })),
  { 
    ssr: false, 
    loading: () => null,
  }
)

export function GlobalEffects() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <>
      <MagneticCursor />
    </>
  )
}
