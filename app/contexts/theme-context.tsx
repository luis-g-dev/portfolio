"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "default" | "coffee" | "cozy"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  changeTheme: (theme: Theme) => void
  isCoffee: boolean
  isCozy: boolean
}

// Create a default context value
const defaultContextValue: ThemeContextType = {
  theme: "default",
  toggleTheme: () => {},
  changeTheme: () => {},
  isCoffee: false,
  isCozy: false,
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default")
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    // cycle default (dark) -> coffee -> cozy -> default
    setTheme((prev) => (prev === "default" ? "coffee" : prev === "coffee" ? "cozy" : "default"))
  }
  const changeTheme = (newTheme: Theme) => setTheme(newTheme)

  const isCoffee = theme === "coffee"
  const isCozy = theme === "cozy"

  // Handle client-side rendering
  useEffect(() => {
    setMounted(true)
    // Load theme from localStorage
    try {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("mousefulness-theme") as Theme | null
        if (savedTheme && ["default", "coffee", "cozy"].includes(savedTheme)) {
          setTheme(savedTheme)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      try {
        if (typeof window !== "undefined") {
          localStorage.setItem("mousefulness-theme", theme)
        }
      } catch (error) {
        console.error("Error writing to localStorage:", error)
      }
    }
  }, [theme, mounted])

  // Use the default context during server rendering
  const value = mounted
    ? { theme, toggleTheme, changeTheme, isCoffee, isCozy }
    : defaultContextValue

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
