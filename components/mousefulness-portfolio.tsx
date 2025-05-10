"use client"

import { useState } from "react"
import { ArrowRight, Github, Keyboard, Mouse, MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ThemeBackground } from "@/components/theme-background"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

export function MousefulnessPortfolio() {
  // State for tab navigation only
  const [activeTab, setActiveTab] = useState("about")
  const { isCoffee, isCozy } = useTheme()

  return (
    <div className="flex flex-col min-h-screen relative text-white">
      {/* Background Image */}
      <ThemeBackground />

      {/* Content */}
      <div className="relative z-10 flex-1">
        {/* Header */}
        <header className="container mx-auto pt-12 pb-6 px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div
              className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full mb-2 backdrop-blur-sm",
                isCoffee ? "bg-amber-500/20" : isCozy ? "bg-teal-500/20" : "bg-primary/20",
              )}
            >
              <MousePointer className={cn("h-8 w-8", isCoffee ? "text-amber-400" : isCozy ? "text-teal-400" : "text-primary")} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">mousefulness</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              /ˈmaʊsfəlnəs/ <span className="italic">noun</span> - The art of input device mastery
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList
                className={cn(
                  "grid grid-cols-3 w-full max-w-md backdrop-blur-sm",
                  isCoffee ? "bg-amber-900/50" : isCozy ? "bg-teal-900/50" : "bg-stone-800/70",
                )}
              >
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about" className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <blockquote
                  className={cn(
                  "text-xl italic border-l-4 pl-4 mb-4",
                  isCoffee ? "border-amber-500" : isCozy ? "border-teal-500" : "border-primary",
                  )}
                >
                  "The ability to not have to use the mouse at all but when using it using it to its full potential"
                </blockquote>

                <p className="text-lg leading-relaxed text-gray-300">
                  <span className="font-bold text-white">Mousefulness</span> is a play on words inspired by
                  "mindfulness," representing a holistic approach to computer interaction. It encompasses two
                  complementary philosophies: the freedom from mouse dependency and the enhanced capabilities when mouse
                  usage is necessary.
                </p>

                <p className="text-lg leading-relaxed text-gray-300">
                  Through mousefulness techniques, users can significantly increase their productivity by reducing the
                  need to switch between input devices, maintaining optimal hand positions, and leveraging the strengths
                  of both keyboard and mouse interactions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <a href="/mouseless" hx-boost="true" className="block">
                  <Card className={cn(
                    "backdrop-blur-sm cursor-pointer transition-transform transform hover:scale-105 group",
                    isCoffee
                      ? "bg-amber-900/40 border-amber-700/50"
                      : isCozy
                      ? "bg-teal-900/40 border-teal-700/50"
                      : "bg-stone-800/70 border-stone-600",
                  )}>
                   <CardHeader>
                     <CardTitle className={cn(
                       "flex items-center gap-2 text-white transition-colors",
                       isCoffee
                         ? "group-hover:text-amber-400"
                         : isCozy
                         ? "group-hover:text-teal-400"
                         : "group-hover:text-sky-400"
                     )}>
                       <Keyboard className="h-5 w-5" />
                       Keyboard Mastery
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="text-gray-300">
                     <p>Navigate and control your entire system without lifting your hands from the keyboard.</p>
                   </CardContent>
                </Card>
                </a>

                <a href="/mouseful" hx-boost="true" className="block">
                  <Card className={cn(
                    "backdrop-blur-sm cursor-pointer transition-transform transform hover:scale-105 group",
                    isCoffee
                      ? "bg-amber-900/40 border-amber-700/50"
                      : isCozy
                      ? "bg-teal-900/40 border-teal-700/50"
                      : "bg-stone-800/70 border-stone-600",
                  )}>
                   <CardHeader>
                     <CardTitle className={cn(
                       "flex items-center gap-2 text-white transition-colors",
                       isCoffee
                         ? "group-hover:text-amber-400"
                         : isCozy
                         ? "group-hover:text-teal-400"
                         : "group-hover:text-sky-400"
                     )}>
                       <Mouse className="h-5 w-5" />
                       Mouse Efficiency
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="text-gray-300">
                     <p>Transform your mouse into a powerful tool capable of executing complex commands.</p>
                   </CardContent>
                </Card>
                </a>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <Card
                  className={cn(
                    "overflow-hidden backdrop-blur-sm",
                    isCoffee
                      ? "bg-amber-900/40 border-amber-700/50"
                      : isCozy
                      ? "bg-teal-900/40 border-teal-700/50"
                      : "bg-stone-800/70 border-stone-600",
                  )}
                >
                  <CardHeader
                    className={cn(
                      isCoffee ? "bg-amber-800/40" : isCozy ? "bg-teal-800/40" : "bg-stone-700/40",
                    )}
                  >
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Keyboard className="h-5 w-5" />
                      mouseless
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Click anywhere on screen using only the keyboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div
                      className={cn(
                        "relative aspect-video rounded-md overflow-hidden mb-4",
                        isCoffee
                          ? "bg-amber-950/60"
                          : isCozy
                          ? "bg-teal-900/60"
                          : "bg-stone-900/80"
                      )}
                    >
                      <Image
                        src="/images/mouseless.png"
                        alt="Mouseless Demo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-300">
                      Mouseless enables complete freedom from the mouse by providing an intuitive keyboard interface for
                      cursor control. Using a combination of hotkeys, users can position the cursor anywhere on screen
                      and perform clicks, drags, and other mouse actions without ever touching the mouse.
                    </p>
                  </CardContent>
                  <CardFooter
                    className={cn(
                      "border-t flex justify-between",
                      isCoffee
                        ? "border-amber-700/50 bg-amber-900/60"
                        : isCozy
                        ? "border-teal-700/50 bg-teal-900/60"
                        : "border-stone-600 bg-stone-800/60",
                    )}
                  >
                    <div className="text-sm text-gray-400">Technologies: TypeScript, Electron</div>
                    <Link href="/mouseless">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-200 hover:text-white">
                        View Project <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card
                  className={cn(
                    "overflow-hidden backdrop-blur-sm",
                    isCoffee
                      ? "bg-amber-900/40 border-amber-700/50"
                      : isCozy
                      ? "bg-teal-900/40 border-teal-700/50"
                      : "bg-stone-800/70 border-stone-600",
                  )}
                >
                  <CardHeader
                    className={cn(
                      isCoffee ? "bg-amber-800/40" : isCozy ? "bg-teal-800/40" : "bg-stone-700/40",
                    )}
                  >
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Mouse className="h-5 w-5" />
                      mouseful
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Use your mouse to perform keyboard tasks
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div
                      className={cn(
                        "aspect-video rounded-md flex flex-col items-center justify-center mb-4",
                        isCoffee
                          ? "bg-amber-950/60"
                          : isCozy
                          ? "bg-teal-900/60"
                          : "bg-stone-900/80",
                    )}>
                      <div className="text-center mb-2">
                        <p className="text-gray-300 text-sm">Command wheel visualization</p>
                      </div>
                      <div className="w-64 h-64 mx-auto">
                        <Image
                          src="/images/pie-chart.png"
                          alt="Command Wheel"
                          width={300}
                          height={300}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <p className="text-gray-300">
                      Mouseful transforms your mouse into a command center by mapping gestures, clicks, and movements to
                      keyboard shortcuts and commands. The radial menu above demonstrates how different sections can be
                      assigned to various command categories:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-300 list-disc pl-5">
                      <li>
                        <span className="text-white font-medium">Modifiers (a):</span> Ctrl, Alt, Shift combinations
                      </li>
                      <li>
                        <span className="text-white font-medium">Keyboard (b):</span> Common keyboard shortcuts
                      </li>
                      <li>
                        <span className="text-white font-medium">Clicks (c):</span> Different click types
                      </li>
                      <li>
                        <span className="text-white font-medium">Functions (d):</span> Application-specific commands
                      </li>
                      <li>
                        <span className="text-white font-medium">Navigation (e):</span> Movement and scrolling
                      </li>
                      <li>
                        <span className="text-white font-medium">Text (f):</span> Text manipulation commands
                      </li>
                      <li>
                        <span className="text-white font-medium">Nested Commands (z):</span> Contextual sub-menus (1-4)
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter
                    className={cn(
                      "border-t flex justify-between",
                      isCoffee
                        ? "border-amber-700/50 bg-amber-900/60"
                        : isCozy
                        ? "border-teal-700/50 bg-teal-900/60"
                        : "border-stone-600 bg-stone-800/60",
                    )}
                  >
                    <div className="text-sm text-gray-400">Technologies: JavaScript, WebExtension API</div>
                    <Link href="/mouseful">
                      <Button variant="ghost" size="sm" className="gap-1 text-gray-200 hover:text-white">
                        View Project <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="philosophy" className="space-y-8">
              <Card
                className={cn(
                  "backdrop-blur-sm",
                  isCoffee
                    ? "bg-amber-900/40 border-amber-700/50"
                    : isCozy
                    ? "bg-teal-900/40 border-teal-700/50"
                    : "bg-stone-800/70 border-stone-600",
                )}
              >
                <CardHeader>
                  <CardTitle className="text-white">The Philosophy of Mousefulness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    Mousefulness draws inspiration from mindfulness practices, encouraging users to be fully present and
                    intentional with their computer interactions. It's not about eliminating tools, but about using each
                    tool optimally for its intended purpose.
                  </p>

                  <h3 className="text-lg font-semibold mt-6 text-white">Core Principles:</h3>

                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <span className="font-medium text-white">Intentional Interaction:</span> Every input should be
                      deliberate and purposeful.
                    </li>
                    <li>
                      <span className="font-medium text-white">Tool Appropriateness:</span> Use the right input method
                      for each task.
                    </li>
                    <li>
                      <span className="font-medium text-white">Efficiency Without Sacrifice:</span> Optimize workflows
                      without compromising ergonomics or comfort.
                    </li>
                    <li>
                      <span className="font-medium text-white">Adaptability:</span> Systems should conform to users, not
                      the other way around.
                    </li>
                  </ul>

                  <blockquote
                    className={cn(
                      "border-l-4 pl-4 italic my-6 text-gray-200",
                      isCoffee ? "border-amber-500" : isCozy ? "border-teal-500" : "border-primary",
                    )}
                  >
                    "Mousefulness isn't about choosing between keyboard or mouse—it's about transcending that false
                    dichotomy to achieve true input harmony."
                  </blockquote>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer
          className={cn(
            "mt-auto border-t backdrop-blur-sm",
            isCoffee
              ? "border-amber-700/50 bg-amber-900/50"
              : isCozy
              ? "border-teal-700/50 bg-teal-900/50"
              : "border-stone-700 bg-stone-800/70",
          )}
        >
          <div className="container mx-auto py-2 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <MousePointer className={cn("h-5 w-5", isCoffee ? "text-amber-400" : isCozy ? "text-teal-400" : "text-primary")} />
                <span className="font-medium">mousefulness</span>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://github.com/luis-g-dev/portfolio" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="gap-2"
                  >
                   <Github className="h-4 w-4" />
                   View on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
