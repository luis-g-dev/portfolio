"use client"

import { useState } from "react"
import { Keyboard, Mouse } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"
import { CardContent } from "@/components/ui/card"
import MousefulnessCard from "@/components/MousefulnessCard"
import ProjectCard from "@/components/ProjectCard"
import Header from "@/components/Header"
import Image from "next/image"

export default function MousefulnessPage() {
  const TAB_ABOUT = "about";
  const TAB_PROJECTS = "projects";
  const [activeTab, setActiveTab] = useState(TAB_ABOUT)
  const { isCoffee, isCozy } = useTheme()

  // theme-based class variables
  const tabBgClass = isCoffee ? "bg-amber-900/50" : isCozy ? "bg-teal-900/50" : "bg-stone-800/50"
  const cardBgClass = isCoffee ? "bg-amber-900/40 border-amber-700/50" : isCozy ? "bg-teal-900/40 border-teal-700/50" : "bg-stone-800/40 border-stone-600/50"
  const contentBgClass = isCoffee ? "bg-amber-950/60" : isCozy ? "bg-teal-900/60" : "bg-stone-900/60"
  const blockquoteBorderClass = isCoffee ? "border-amber-500" : isCozy ? "border-teal-500" : "border-primary"
  const paragraphClass = "text-lg leading-relaxed text-gray-300"

  return (
    <div>
      <div className="relative">
        <Header/>
        <main className=" pb-8">
          <Tabs defaultValue={TAB_ABOUT} value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <div className="flex justify-center">
              <TabsList className={cn("grid grid-cols-2 w-full max-w-md",tabBgClass,)}>
                <TabsTrigger value={TAB_ABOUT}>About</TabsTrigger>
                <TabsTrigger value={TAB_PROJECTS}>Projects</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={TAB_ABOUT}>
              <div>
                <blockquote className={cn("text-xl italic mb-4 mx-auto text-center",blockquoteBorderClass)}>
                    "The ability to not have to use the mouse at all but when using it using it to its full potential"
                </blockquote>

                <p className={paragraphClass}>
                  <span className="font-bold text-white">Mousefulness</span> is a play on words inspired by
                  <span className="italic"> "mindfulness,"</span> representing a holistic approach to computer interaction. It encompasses two
                  complementary philosophies: the freedom from mouse dependency and the enhanced capabilities when mouse
                  usage is necessary.
                </p>

                <p className={paragraphClass}>
                  Through mousefulness techniques, users can significantly increase their productivity by reducing the
                  need to switch between input devices, maintaining optimal hand positions, and leveraging the strengths
                  of both keyboard and mouse interactions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <MousefulnessCard
                  icon={<Keyboard />}
                  title="Keyboard Mastery"
                  description="Navigate and control your entire system without lifting your hands from the keyboard."
                  linkHref="/mouseless"
                />
                <MousefulnessCard
                  icon={<Mouse />}
                  title="Mouse Efficiency"
                  description="Transform your mouse into a powerful tool capable of executing complex commands."
                  linkHref="/mouseful"
                />
              </div>
            </TabsContent>
            <TabsContent value={TAB_PROJECTS}>
              <div className="grid gap-8">
                <ProjectCard className={cardBgClass}icon={<Keyboard/>}title="mouseless"description="Click anywhere on screen using only the keyboard"technologies="TypeScript, Electron"linkHref="/mouseless">
                  <CardContent>
                    <div className={cn("relative aspect-video mb-4",contentBgClass)}>
                      <Image src="images/mouseless.png" alt="Mouseless Demo" className="object-cover" fill/>
                    </div>
                    <p className="text-gray-300">
                      Mouseless enables complete freedom from the mouse by providing an intuitive keyboard interface for
                      cursor control. Using a combination of hotkeys, users can position the cursor anywhere on screen
                      and perform clicks, drags, and other mouse actions without ever touching the mouse.
                    </p>
                  </CardContent>
                </ProjectCard>
                <ProjectCard icon={<Mouse/>} title="mouseful" description="Use your mouse to perform keyboard tasks" technologies="JavaScript, WebExtension API" linkHref="/mouseful">
                  <div className={cn("relative aspect-video mb-4",contentBgClass,)}>
                    <div className="absolute inset-0 flex justify-center">
                      <div className="relative h-full aspect-square">
                        <Image src="images/pie-chart.png" alt="Mousefull Demo" className="object-cover" fill/>
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
