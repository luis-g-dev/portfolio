"use client"

import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ThemeBackgroundProps {
  className?: string
}

export function ThemeBackground({ className }: ThemeBackgroundProps) {
  const { isCoffee, isCozy } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch and empty href preload errors
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return a simple div during server-side rendering or when not mounted
  if (!mounted) {
    return <div className={cn("fixed inset-0 z-0 bg-black", className)} />
  }

  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      {isCoffee ? (
        <>
          {/* Only render Image when we have a valid src */}
          <Image
            src="images/coffee-background.png"
            alt="Coffee Background"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-amber-900/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-800/10 to-amber-950/30" />
        </>
      ) : isCozy ? (
        <>
          {/* Cozy (vibe) background */}
          <Image
            src="images/cozy-background.png"
            alt="Cozy Background"
            fill
            className="object-cover opacity-80"
            priority={false}
          />
          <div className="absolute inset-0 bg-teal-900/30" />
        </>
      ) : (
        <>
          {/* Default (dark) background */}
          <Image
            src="images/code-background.png"
            alt="Dark Background"
            fill
            className="object-cover opacity-100"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
    </div>
  )
}
