import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mouse, Download, ExternalLink, Github, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeBackground } from "@/components/theme-background"

export default function MousefulPage() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image */}
      <ThemeBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-stone-700 bg-stone-800/70 backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Mousefulness</span>
              </Link>
              <div className="flex items-center gap-2">
                <Mouse className="h-5 w-5 text-primary" />
                <span className="font-medium">mouseful</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
                <Mouse className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">mouseful</h1>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                Use your mouse to perform keyboard tasks with an intuitive radial menu
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Beta
                </Button>
                <Button variant="outline" className="gap-2 border-stone-600">
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
              <h2 className="text-2xl font-bold mb-6 border-b border-stone-700 pb-2">Project Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-stone-300 mb-4">
                    Mouseful transforms your mouse into a command center by mapping gestures, clicks, and movements to
                    keyboard shortcuts and commands. The radial menu provides quick access to frequently used actions
                    without memorizing complex keyboard combinations.
                  </p>
                  <p className="text-stone-300 mb-4">
                    With Mouseful, you can create custom command wheels for different applications, making your workflow
                    more efficient and intuitive. The contextual menus adapt to your current task, providing relevant
                    options at your fingertips.
                  </p>
                  <div className="bg-stone-800/70 backdrop-blur-sm border border-stone-600 rounded-lg p-4 mt-6">
                    <h3 className="font-medium text-white mb-2">Key Features</h3>
                    <ul className="space-y-2 text-stone-300 list-disc pl-5">
                      <li>Customizable radial command menu</li>
                      <li>Application-specific command sets</li>
                      <li>Nested command hierarchies</li>
                      <li>Gesture recognition</li>
                      <li>Keyboard shortcut integration</li>
                      <li>Productivity analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center mb-2">
                    <p className="text-gray-300 text-sm">Command wheel visualization</p>
                  </div>
                  <div className="w-64 h-64 relative">
                    <Image
                      src="/images/pie-chart.png"
                      alt="Command Wheel"
                      width={300}
                      height={300}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                        <Mouse className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Categories */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-stone-700 pb-2">Command Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                      <span className="text-red-400 font-bold">A</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Modifiers</h3>
                    <p className="text-stone-300 text-sm">
                      Access Ctrl, Alt, Shift combinations quickly without keyboard gymnastics
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                      <span className="text-orange-400 font-bold">B</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Keyboard</h3>
                    <p className="text-stone-300 text-sm">
                      Common keyboard shortcuts organized in an intuitive radial layout
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                      <span className="text-yellow-400 font-bold">C</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Clicks</h3>
                    <p className="text-stone-300 text-sm">
                      Different click types including right, middle, double, and drag operations
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <span className="text-green-400 font-bold">D</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Functions</h3>
                    <p className="text-stone-300 text-sm">
                      Application-specific commands that adapt to your current context
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                      <span className="text-cyan-400 font-bold">E</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Navigation</h3>
                    <p className="text-stone-300 text-sm">
                      Movement and scrolling controls for efficient document navigation
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-stone-600">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <span className="text-blue-400 font-bold">F</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Text</h3>
                    <p className="text-stone-300 text-sm">
                      Text manipulation commands for editing, formatting, and selection
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-stone-700 pb-2">Use Cases</h2>
              <div className="space-y-6">
                <div className="bg-stone-800/70 backdrop-blur-sm border border-stone-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Design Professionals</h3>
                  <p className="text-stone-300 mb-4">
                    Graphic designers, UI/UX professionals, and digital artists can create custom command wheels for
                    their design tools, providing quick access to brushes, layers, and transformations without
                    constantly switching between keyboard and mouse.
                  </p>
                </div>

                <div className="bg-stone-800/70 backdrop-blur-sm border border-stone-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Software Developers</h3>
                  <p className="text-stone-300 mb-4">
                    Programmers can configure command wheels for their IDEs with quick access to debugging tools, code
                    refactoring options, and version control commands, streamlining their development workflow.
                  </p>
                </div>

                <div className="bg-stone-800/70 backdrop-blur-sm border border-stone-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Content Creators</h3>
                  <p className="text-stone-300 mb-4">
                    Video editors, streamers, and content creators can use Mouseful to quickly access editing tools,
                    stream controls, and media management functions without memorizing complex keyboard shortcuts.
                  </p>
                </div>
              </div>
            </div>

            {/* Get Started */}
            <div className="text-center mt-16 p-8 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-600">
              <h2 className="text-2xl font-bold mb-4">Ready to enhance your mouse experience?</h2>
              <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
                Join our beta program and be among the first to experience the future of mouse interaction. Help shape
                the development of Mouseful with your feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Beta
                </Button>
                <Link href="/roadmap">
                  <Button variant="outline" className="gap-2 border-stone-600">
                    <ExternalLink className="h-4 w-4" />
                    View Development Roadmap
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-stone-700 bg-stone-800/70 backdrop-blur-sm mt-12">
          <div className="container mx-auto py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Mouse className="h-5 w-5 text-primary" />
                <span className="font-medium">mouseful</span>
              </div>
              <p className="text-stone-400 text-sm">© 2023 Mousefulness Project. Enhancing mouse interaction.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
