"use client"
import Link from "next/link"
import { ArrowLeft, Keyboard, Download, Github, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import MouselessDemo from "@/components/mouseless-demo"
import { ThemeBackground } from "@/components/theme-background"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export function MouselessPage() {
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
            <div className="mb-16">
              <h2
                className={cn(
                  "text-2xl font-bold mb-6 border-b pb-2",
                  isCozy ? "border-amber-700/50" : "border-stone-700",
                )}
              >
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-stone-300 mb-4">
                    Mouseless enables complete freedom from the mouse by providing an intuitive keyboard interface for
                    cursor control. Using a combination of hotkeys, users can position the cursor anywhere on screen and
                    perform clicks, drags, and other mouse actions without ever touching the mouse.
                  </p>
                  <p className="text-stone-300 mb-4">
                    By eliminating the need to switch between keyboard and mouse, Mouseless helps users maintain flow
                    and increase productivity. The system uses a grid-based approach that allows for precise cursor
                    positioning with minimal keystrokes.
                  </p>
                  <div
                    className={cn(
                      "backdrop-blur-sm rounded-lg p-4 mt-6",
                      isCozy ? "bg-amber-900/40 border border-amber-700/50" : "bg-stone-800/70 border border-stone-600",
                    )}
                  >
                    <h3 className="font-medium text-white mb-2">Key Features</h3>
                    <ul className="space-y-2 text-stone-300 list-disc pl-5">
                      <li>Grid-based cursor positioning</li>
                      <li>Keyboard shortcuts for all mouse actions</li>
                      <li>Customizable hotkeys and sensitivity</li>
                      <li>Zoom functionality for precision clicks</li>
                      <li>Drag and drop support</li>
                      <li>Multi-monitor support</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={cn(
                    "rounded-lg p-6 flex flex-col items-center justify-center",
                    isCozy ? "bg-amber-950/60" : "bg-stone-900/80",
                  )}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium mb-2">Keyboard Navigation</h3>
                    <div
                      className={cn(
                        "inline-block rounded-lg px-4 py-2 mb-4 font-mono text-sm",
                        isCozy ? "border-amber-700 border bg-amber-900/50" : "border-stone-600 border bg-stone-800/50",
                      )}
                    >
                      Alt + J K L I
                    </div>
                    <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
                      <div className="h-10"></div>
                      <div
                        className={cn(
                          "h-10 rounded flex items-center justify-center",
                          isCozy
                            ? "border-amber-700 border bg-amber-900/50"
                            : "border-stone-600 border bg-stone-700/50",
                        )}
                      >
                        I
                      </div>
                      <div className="h-10"></div>
                      <div
                        className={cn(
                          "h-10 rounded flex items-center justify-center",
                          isCozy
                            ? "border-amber-700 border bg-amber-900/50"
                            : "border-stone-600 border bg-stone-700/50",
                        )}
                      >
                        J
                      </div>
                      <div
                        className={cn(
                          "h-10 rounded flex items-center justify-center",
                          isCozy
                            ? "border-amber-700 border bg-amber-900/50"
                            : "border-stone-600 border bg-stone-700/50",
                        )}
                      >
                        K
                      </div>
                      <div
                        className={cn(
                          "h-10 rounded flex items-center justify-center",
                          isCozy
                            ? "border-amber-700 border bg-amber-900/50"
                            : "border-stone-600 border bg-stone-700/50",
                        )}
                      >
                        L
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-400 text-sm text-center">
                    Use J (left), K (down), L (right), and I (up) to move the cursor
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="mb-16">
              <h2
                className={cn(
                  "text-2xl font-bold mb-6 border-b pb-2",
                  isCozy ? "border-amber-700/50" : "border-stone-700",
                )}
              >
                Interactive Demo
              </h2>
              <p className="text-stone-300 mb-6">
                Try out the grid-based navigation system below. This interactive demo simulates how mouseless works,
                allowing you to experience the efficiency of keyboard-based cursor control.
              </p>

              <MouselessDemo />
            </div>

            {/* Rest of the component remains the same */}
            {/* ... */}
          </div>
        </main>

        {/* Footer */}
        <footer
          className={cn(
            "border-t backdrop-blur-sm mt-12",
            isCozy ? "border-amber-700/50 bg-amber-900/70" : "border-stone-700 bg-stone-800/70",
          )}
        >
          <div className="container mx-auto py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Keyboard className={cn("h-5 w-5", isCozy ? "text-amber-400" : "text-primary")} />
                <span className="font-medium">mouseless</span>
              </div>
              <p className="text-stone-400 text-sm">© 2023 Mousefulness Project. Liberating you from the mouse.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
