import React from "react"
import { MousePointer, ArrowRight } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export default function Footer() {
    const colors = {
        default: { border: "border-stone-700", bg: "bg-stone-800/70", text: "text-primary" },
        coffee:  { border: "border-amber-700/50", bg: "bg-amber-900/50", text: "text-amber-400" },
        cozy:    { border: "border-teal-700/50",   bg: "bg-teal-900/50",   text: "text-teal-400" }
    };
    
    const { isCoffee, isCozy } = useTheme()
    const mode = isCoffee ? "coffee" : isCozy ? "cozy" : "default"
    const { border, bg, text } = colors[mode]

  return (
    <footer className={cn("border-t backdrop-blur-sm", border, bg, text)}>
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex gap-2">
            <MousePointer />
            <span>mousefulness</span>
          </div>
          <a href="https://github.com/luis-g-dev/portfolio" target="_blank" rel="noopener noreferrer">
            <Button><SiGithub/>View on GitHub</Button>
          </a>
        </div>
    </footer>
  )
}