"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"

export function VibeMousefulness() {
  const [activeTab, setActiveTab] = useState("about")
  const { isCoffee, isCozy } = useTheme()

  return (
    <div
      className={cn(
        "h-screen relative font-serif overflow-hidden",
        isCoffee
          ? "text-amber-200"
          : isCozy
          ? "text-teal-50"
          : "text-[#2d4c4c]"
      )}
    >
      {/* Background Image */}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border-none",
                isCoffee
                  ? "bg-amber-800/90 hover:bg-amber-800 text-amber-200"
                  : isCozy
                  ? "bg-teal-600/90 hover:bg-teal-600 text-teal-50"
                  : "bg-[#f5e9d0]/90 hover:bg-[#f5e9d0] text-[#2d4c4c]"
              )}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="container mx-auto pt-16 pb-6 px-4 text-center">
          <div className="relative mb-2">
            <div className="absolute -top-8 right-1/2 transform translate-x-32">
              <div className="w-6 h-6 text-[#f5e9d0]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 1.5V11.5L17.5 6.5M1.5 12.5H11.5L6.5 17.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h1
              className={cn(
                "text-6xl md:text-7xl font-bold tracking-wide drop-shadow-md",
                isCozy ? "text-teal-200" : "text-[#f5e9d0]"
              )}
            >mousefulness</h1>
          </div>
          <p
            className={cn(
              "text-xl drop-shadow-sm max-w-2xl mx-auto",
              isCozy ? "text-teal-100" : "text-[#f5e9d0]"
            )}
          >
            /ˈmaʊs fʊl.nəs/ noun – The art of input device mastery
          </p>
        </header>

        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("about")}
              className={cn(
                "px-6 py-2 rounded-md text-lg font-medium transition-colors",
                activeTab === "about"
                  ? isCozy
                    ? "bg-teal-600 text-teal-50"
                    : "bg-[#f5e9d0] text-[#2d4c4c]"
                  : isCozy
                  ? "bg-teal-600/80 text-teal-50 hover:bg-teal-600"
                  : "bg-[#f5e9d0]/80 text-[#2d4c4c] hover:bg-[#f5e9d0]",
              )}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={cn(
                "px-6 py-2 rounded-md text-lg font-medium transition-colors",
                activeTab === "projects"
                  ? isCozy
                    ? "bg-teal-600 text-teal-50"
                    : "bg-[#f5e9d0] text-[#2d4c4c]"
                  : isCozy
                  ? "bg-teal-600/80 text-teal-50 hover:bg-teal-600"
                  : "bg-[#f5e9d0]/80 text-[#2d4c4c] hover:bg-[#f5e9d0]",
              )}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={cn(
                "px-6 py-2 rounded-md text-lg font-medium transition-colors",
                activeTab === "philosophy"
                  ? isCozy
                    ? "bg-teal-600 text-teal-50"
                    : "bg-[#f5e9d0] text-[#2d4c4c]"
                  : isCozy
                  ? "bg-teal-600/80 text-teal-50 hover:bg-teal-600"
                  : "bg-[#f5e9d0]/80 text-[#2d4c4c] hover:bg-[#f5e9d0]",
              )}
            >
              Philosophy
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 flex-grow">
          <div className="max-w-4xl mx-auto">
            <blockquote
              className={cn(
                "text-center text-2xl italic drop-shadow-sm mb-10",
                isCozy ? "text-teal-100" : "text-[#f5e9d0]"
              )}
            >
              "The ability to not have to use the mouse at all when using it to its full potential."
            </blockquote>

            <div
              className={cn(
                "space-y-6 drop-shadow-sm",
                isCozy ? "text-teal-100" : "text-[#f5e9d0]"
              )}
            >
              <p className="text-xl leading-relaxed">
                <span className="font-bold">Mousefulness</span> is a play on words inspired by 'mindfulness,'
                representing a holistic approach to computer interactions aiming to enhance productivity by freeing
                users from mouse dependency and expand capabilities in its uses.
              </p>

              <p className="text-xl leading-relaxed">
                Through mousefulness techniques, users can significantly increase productivity by reducing the need to
                switch between input devices, maintaining optimal hand positions, and leveraging the strengths of both
                keyboard and mouse interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className={cn(
                isCozy
                  ? "bg-teal-600/90 text-teal-50 border-none shadow-md"
                  : "bg-[#f5e9d0]/90 border-none shadow-md"
              )}>
                <CardContent className="p-6">
                  <h3 className={cn(
                    "text-2xl font-bold mb-4",
                    isCozy ? "text-teal-50" : "text-[#2d4c4c]"
                  )}>Keyboard Mastery</h3>
                  <p className={cn(
                    "text-lg",
                    isCozy ? "text-teal-100" : "text-[#2d4c4c]"
                  )}>
                    Navigate and control your system efficiently without relying solely on mouse.
                  </p>
                </CardContent>
              </Card>

              <Card className={cn(
                isCozy
                  ? "bg-teal-600/90 text-teal-50 border-none shadow-md"
                  : "bg-[#f5e9d0]/90 border-none shadow-md"
              )}>
                <CardContent className="p-6">
                  <h3 className={cn(
                    "text-2xl font-bold mb-4",
                    isCozy ? "text-teal-50" : "text-[#2d4c4c]"
                  )}>Mouse Efficiency</h3>
                  <p className={cn(
                    "text-lg",
                    isCozy ? "text-teal-100" : "text-[#2d4c4c]"
                  )}>
                    Transform your mouse into a powerful tool capable of executing complex commands.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={cn(
              "font-medium text-lg mb-4 md:mb-0",
              isCozy ? "text-teal-100" : "text-[#f5e9d0]"
            )}>mousefulness</div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com"
                className={cn(
                  "px-4 py-2 rounded-md flex items-center gap-2 transition-colors",
                  isCoffee
                    ? "bg-amber-800/90 hover:bg-amber-800 text-amber-200"
                    : isCozy
                    ? "bg-teal-600/90 hover:bg-teal-600 text-teal-50"
                    : "bg-[#f5e9d0]/90 hover:bg-[#f5e9d0] text-[#2d4c4c]"
                )}
              >
                <SiGithub className="h-5 w-5" />
                View on GitHub
              </Link>
              <Button
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-md",
                  isCozy
                    ? "bg-teal-600/90 hover:bg-teal-600 text-teal-50"
                    : "bg-[#f5e9d0]/90 hover:bg-[#f5e9d0] text-[#2d4c4c]"
                )}
                aria-label="Share"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
