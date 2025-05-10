"use client"

import { useState, useEffect } from "react"
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Coffee, Moon, House } from 'lucide-react'
import { useTheme } from "@/contexts/theme-context"
import { cn } from '@/lib/utils'
import React from 'react'

export function VibeButton() {
  const { theme, changeTheme } = useTheme()
  const { isCoffee, isCozy } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-center space-x-2">
      <ToggleGroup.Root
        type="single"
        value={theme}
        onValueChange={(value) => changeTheme(value as any)}
        className={cn(
          "inline-flex rounded-full p-1",
          isCoffee
            ? "bg-amber-800/20"
            : isCozy
            ? "bg-teal-600/20"
            : "bg-muted",
        )}
        aria-label="Theme selector"
      >
        <ToggleGroup.Item
          value="default"
          className={cn(
            "flex items-center rounded-full transition-colors",
            theme === 'default'
              ? 'space-x-1 px-3 py-2 bg-stone-800 text-stone-50'
              : 'p-2 hover:bg-stone-800/50 text-stone-400'
          )}
          aria-label="Dark theme"
        >
          <Moon className="h-5 w-5" />
          {theme === 'default' && <span className="text-sm">Dark</span>}
        </ToggleGroup.Item>
        {/* Coffee (caffeinated) */}
        <ToggleGroup.Item
          value="coffee"
          className={cn(
            "flex items-center rounded-full transition-colors",
            theme === 'coffee'
              ? 'space-x-1 px-3 py-2 bg-amber-800 text-amber-200'
              : 'p-2 hover:bg-amber-800/50 text-amber-400'
          )}
          aria-label="Coffee theme"
        >
          <Coffee className="h-5 w-5" />
          {theme === 'coffee' && <span className="text-sm">Coffee</span>}
        </ToggleGroup.Item>
        {/* Cozy (vibe) */}
        <ToggleGroup.Item
          value="cozy"
          className={cn(
            "flex items-center rounded-full transition-colors",
            theme === 'cozy'
              ? 'space-x-1 px-3 py-2 bg-teal-600 text-teal-50'
              : 'p-2 hover:bg-teal-600/50 text-teal-400'
          )}
          aria-label="Cozy theme"
        >
          <House className="h-5 w-5" />
          {theme === 'cozy' && <span className="text-sm">Cozy</span>}
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}
