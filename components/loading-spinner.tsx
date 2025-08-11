"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export function LoadingSpinner({ size = "md", color = "#D79A3A", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  }

  return (
    <div className={`inline-block ${className}`}>
      <div
        className={`${sizeClasses[size]} border-gray-200 rounded-full animate-spin`}
        style={{ borderTopColor: color }}
      />
    </div>
  )
}
