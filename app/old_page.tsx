"use client"

import { useState } from "react"
import { ArrowRight, Github, Keyboard, Mouse, MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VibeToggle from "@/components/ui/toggle"

export default function MousefulnessPortfolio() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="container mx-auto pt-12 pb-6 px-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            <MousePointer className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">mousefulness</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            /ˈmaʊsfəlnəs/ <span className="italic">noun</span> - The art of mindful input mastery
          </p>
          <VibeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <blockquote className="text-xl italic border-l-4 pl-4 border-primary mt-4 mb-4">
                "The ability to not have to use the mouse at all but when using it unleash its full potential"
              </blockquote>

              <p className="text-lg leading-relaxed">
                <span className="font-bold">Mousefulness</span> is a play on words inspired by "mindfulness,"
                representing a holistic approach to computer interaction. It encompasses two complementary philosophies:
                the freedom from mouse dependency and the enhanced capabilities when mouse usage is necessary.
              </p>

              <p className="text-lg leading-relaxed">
                Through mousefulness techniques, users can significantly increase their productivity by reducing the
                need to switch between input devices, maintaining optimal hand positions, and leveraging the strengths
                of both keyboard and mouse interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Keyboard className="h-5 w-5" />
                    Keyboard Mastery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Navigate and control your entire system without lifting your hands from the keyboard.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mouse className="h-5 w-5" />
                    Mouse Efficiency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Transform your mouse into a powerful tool capable of executing complex commands.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Keyboard className="h-5 w-5" />
                    mouseless
                  </CardTitle>
                  <CardDescription>Click anywhere on screen using only the keyboard</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-center p-4">
                      <div className="inline-block border border-border rounded px-3 py-1 mb-2 font-mono text-sm">
                        Alt + J K L I
                      </div>
                      <p className="text-muted-foreground">Interactive demo would appear here</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Mouseless enables complete freedom from the mouse by providing an intuitive keyboard interface for
                    cursor control. Using a combination of hotkeys, users can position the cursor anywhere on screen and
                    perform clicks, drags, and other mouse actions without ever touching the mouse.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 flex justify-between">
                  <div className="text-sm text-muted-foreground">Technologies: TypeScript, Electron</div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Mouse className="h-5 w-5" />
                    mouseful
                  </CardTitle>
                  <CardDescription>Use your mouse to perform keyboard tasks</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <div className="text-center p-4">
                      <div className="inline-block border border-border rounded-full p-2 mb-2">
                        <Mouse className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">Interactive demo would appear here</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Mouseful transforms your mouse into a command center by mapping gestures, clicks, and movements to
                    keyboard shortcuts and commands. This allows users to execute complex operations with simple mouse
                    movements, reducing the need to memorize keyboard combinations while maintaining efficiency.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 flex justify-between">
                  <div className="text-sm text-muted-foreground">Technologies: JavaScript, WebExtension API</div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="philosophy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The Philosophy of Mousefulness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Mousefulness draws inspiration from mindfulness practices, encouraging users to be fully present and
                  intentional with their computer interactions. It's not about eliminating tools, but about using each
                  tool optimally for its intended purpose.
                </p>

                <h3 className="text-lg font-semibold mt-6">Core Principles:</h3>

                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <span className="font-medium">Intentional Interaction:</span> Every input should be deliberate and
                    purposeful.
                  </li>
                  <li>
                    <span className="font-medium">Tool Appropriateness:</span> Use the right input method for each task.
                  </li>
                  <li>
                    <span className="font-medium">Efficiency Without Sacrifice:</span> Optimize workflows without
                    compromising ergonomics or comfort.
                  </li>
                  <li>
                    <span className="font-medium">Adaptability:</span> Systems should conform to users, not the other
                    way around.
                  </li>
                </ul>

                <blockquote className="border-l-4 pl-4 italic border-primary my-6">
                  "Mousefulness isn't about choosing between keyboard or mouse—it's about transcending that false
                  dichotomy to achieve true input harmony."
                </blockquote>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <MousePointer className="h-5 w-5 text-primary" />
              <span className="font-medium">mousefulness</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2 border-gray-700 text-gray-300 hover:text-white" asChild>
                <a href="https://github.com/luis-g-dev/portfolio" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
                {/* <Button size="sm">Get in Touch</Button> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

