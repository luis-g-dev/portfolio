"use client"

import { useState } from "react"
import { Keyboard, Mouse } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeBackground } from "@/components/theme-background"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import ProjectCard from "@/components/ProjectCard"
import Header from "@/components/Header"
import Image from "next/image"

export default function MousefulnessPage() {
  const [activeTab, setActiveTab] = useState("about")
  const { isCoffee, isCozy } = useTheme()

  return (
    <div>
      <ThemeBackground />
      <div className="relative">
        <Header/>
        <main className=" pb-8">
          <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <div className="flex justify-center">
              <TabsList
                className={cn(
                  "grid grid-cols-2 w-full max-w-md",
                  isCoffee ? "bg-amber-900/50" : isCozy ? "bg-teal-900/50" : "bg-stone-800/70",
                )}
              >
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about">
              <div className="prose prose-invert max-w-none">
                <blockquote
                    className={cn(
                        "text-xl italic border-l-4 pl-4 mb-4 mx-auto text-center max-w-prose",
                        isCoffee ? "border-amber-500" : isCozy ? "border-teal-500" : "border-primary",
                    )}
                >
                    "The ability to not have to use the mouse at all but when using it using it to its full potential"
                </blockquote>

                <p className="text-lg leading-relaxed text-gray-300">
                  <span className="font-bold text-white">Mousefulness</span> is a play on words inspired by
                  <span className="italic"> "mindfulness,"</span> representing a holistic approach to computer interaction. It encompasses two
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
            <TabsContent value="projects">
              <div className="grid gap-8">
                <ProjectCard
                  className={cn(
                    isCoffee
                      ? "bg-amber-900/40 border-amber-700/50"
                      : isCozy
                      ? "bg-teal-900/40 border-teal-700/50"
                      : "bg-stone-800/70 border-stone-600",
                  )}
                  icon={<Keyboard/>}
                  title="mouseless"
                  description="Click anywhere on screen using only the keyboard"
                  technologies="TypeScript, Electron"
                  linkHref="/mouseless"
                >
                  <CardContent>
                    <div
                      className={cn(
                        "relative aspect-video mb-4",
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
                </ProjectCard>
                <ProjectCard
                  icon={<Mouse/>}
                  title="mouseful"
                  description="Use your mouse to perform keyboard tasks"
                  technologies="JavaScript, WebExtension API"
                  linkHref="/mouseful"
                >
                  <div
                    className={cn(
                      "relative aspect-video mb-4",
                      isCoffee
                        ? "bg-amber-950/60"
                        : isCozy
                        ? "bg-teal-900/60"
                        : "bg-stone-900/80",
                    )}
                  >
                    <div className="absolute inset-0 flex justify-center">
                      <div className="relative h-full aspect-square">
                        <Image
                          src="/images/pie-chart.png"
                          alt="Command Wheel"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Mouseful transforms your mouse into a command center by mapping gestures, clicks, and movements to
                    keyboard shortcuts and commands. The radial menu above demonstrates how different sections can be
                    assigned to various command categories:
                  </p>
                  <ul className=" list-disc pl-5">
                    <li><span className="text-white">Modifiers (a):</span> Ctrl, Alt, Shift combinations</li>
                    <li><span className="text-white">Keyboard (b):</span> Common keyboard shortcuts</li>
                    <li><span className="text-white">Clicks (c):</span> Different click types</li>
                    <li><span className="text-white">Navigation (e):</span> Movement and scrolling</li>
                    <li><span className="text-white">Functions (d):</span> Application-specific commands</li>
                    <li><span className="text-white">Text (f):</span> Text manipulation commands</li>
                    <li><span className="text-white">Nested Commands (z):</span> Contextual sub-menus (1-4)</li>
                  </ul>
                </ProjectCard>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
