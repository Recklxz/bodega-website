"use client"

import { useRef, useEffect } from "react"

interface VideoFrameProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  controls?: boolean
  muted?: boolean
  loop?: boolean
}

// Renders a responsive video frame with better integration
export function VideoFrame({
  src,
  poster,
  className = "",
  autoPlay = false,
  controls = true,
  muted = true,
  loop = true,
}: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // On mobile browsers ensure inline playback
    video.setAttribute("playsinline", "")
  }, [])

  return (
    <div className={`relative mx-auto ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        controls={controls}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg bg-black"
        style={{ aspectRatio: "9/16", maxWidth: "400px" }}
      />
    </div>
  )
}


