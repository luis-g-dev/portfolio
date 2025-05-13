"use client"

import Link from "next/link"
import { ArrowLeft, Keyboard, Download, Github, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import MouselessDemo from "@/components/mouseless-demo"
import { ThemeBackground } from "@/components/theme-background"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function MouselessPage() {
  const { isCozy } = useTheme()

  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image */}
      <ThemeBackground />

      <div className="relative z-10">
        {/* Header */}
        <header
          className={cn(
            "border-b backdrop-blur-sm",
            isCozy ? "border-amber-700/50 bg-amber-900/70" : "border-stone-700 bg-stone-800/70",
          )}
        >
          <div className="container mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Mousefulness</span>
              </Link>
              <div className="flex items-center gap-2">
                <Keyboard className={cn("h-5 w-5", isCozy ? "text-amber-400" : "text-primary")} />
                <span className="font-medium">mouseless</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div
                className={cn(
                  "inline-flex items-center justify-center p-3 rounded-full mb-4",
                  isCozy ? "bg-amber-500/20" : "bg-primary/20",
                )}
              >
                <Keyboard className={cn("h-8 w-8", isCozy ? "text-amber-400" : "text-primary")} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">mouseless</h1>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                Click anywhere on screen using only the keyboard
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Beta
                </Button>
                <Button variant="outline" className={cn("gap-2", isCozy ? "border-amber-700/50" : "border-stone-600")}>
                  <Github className="h-4 w-4" />
                  View Source
                </Button>
                <Link href="/roadmap">
                  <Button variant="secondary" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Development Roadmap
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project Overview */}
            {/* ...rest of code unchanged... */}
          </div>
        </main>

        {/* Footer */}
        {/* ...unchanged footer... */}
      </div>
    </div>
  )
}
