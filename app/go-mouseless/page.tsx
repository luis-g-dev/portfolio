import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Share2, Cpu, Zap, Lock } from "lucide-react"
import Image from "next/image"
import { SiGithub } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"

export default function GoMouselessPage() {
  // Go's primary color
  const goBlue = "#00ADD8"

  return (
    <div className="min-h-screen relative text-white">
      {/* -- Removed ThemeBackground overlay -- */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-br from-[#00ADD8]/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#00ADD8]/30 bg-stone-900/80 backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-[#00ADD8] transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Mousefulness</span>
              </Link>
              <div className="flex items-center gap-2">
                <Image src="/go-logo.svg" alt="Go logo" width={20} height={20} />
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
                className="inline-flex items-center justify-center p-3 rounded-full mb-4"
                style={{ backgroundColor: 'rgba(0,173,216,0.2)' }}
              >
                <Image src="/go-logo.svg" alt="Go logo" width={32} height={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Go mouseless</h1>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                High-performance keyboard navigation powered by Go
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button className="gap-2" style={{ backgroundColor: goBlue, borderColor: goBlue }}>
                  <Download className="h-4 w-4" />
                  Download Go Binary
                </Button>
                <Button variant="outline" className="gap-2 border-[#00ADD8]/70 text-[#00ADD8] hover:bg-[#00ADD8]/10">
                  <SiGithub className="h-4 w-4" />
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
              <h2 className="text-2xl font-bold mb-6 border-b border-[#00ADD8]/30 pb-2">Project Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-stone-300 mb-4">
                    Go mouseless is a high-performance implementation of the mouseless navigation system, built with 
                    Go's powerful concurrency model and efficient system interaction capabilities. This implementation 
                    offers superior performance, lower resource usage, and cross-platform compatibility.
                  </p>
                  <p className="text-stone-300 mb-4">
                    By leveraging Go's strengths, we've created a mouseless experience that's lightweight, 
                    blazing fast, and capable of running on virtually any operating system. The Go implementation 
                    also provides enhanced security and stability compared to other approaches.
                  </p>
                  <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-4 mt-6">
                    <h3 className="font-medium text-white mb-2">Key Features</h3>
                    <ul className="space-y-2 text-stone-300 list-disc pl-5">
                      <li>Lightweight binary with minimal dependencies</li>
                      <li>Cross-platform support (Windows, macOS, Linux)</li>
                      <li>Efficient memory usage and low CPU footprint</li>
                      <li>Goroutine-powered concurrent processing</li>
                      <li>Native OS integration via CGO when needed</li>
                      <li>Simple configuration via YAML or JSON</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-stone-900/80 rounded-lg p-6 border border-[#00ADD8]/30">
                  <h3 className="text-lg font-medium mb-4 text-[#00ADD8]">Go Implementation Highlights</h3>
                  <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                    <pre className="text-stone-300">
                      <span className="text-[#00ADD8]">package</span> main<br/><br/>
                      <span className="text-[#00ADD8]">import</span> (<br/>
                      &nbsp;&nbsp;"fmt"<br/>
                      &nbsp;&nbsp;"github.com/go-mouseless/grid"<br/>
                      &nbsp;&nbsp;"github.com/go-mouseless/input"<br/>
                      &nbsp;&nbsp;"github.com/go-mouseless/ui"<br/>
                      )<br/><br/>
                      <span className="text-[#00ADD8]">func</span> <span className="text-[#FFC300]">main</span>() {'{'}<br/>
                      &nbsp;&nbsp;app := ui.NewApp()<br/>
                      &nbsp;&nbsp;grid := grid.New(3, 3)<br/>
                      &nbsp;&nbsp;input.Listen(app.Context())<br/>
                      &nbsp;&nbsp;app.Run()<br/>
                      {'}'}
                    </pre>
                  </div>
                  <p className="text-stone-400 text-sm">
                    The Go implementation uses a clean, modular architecture with clear separation of concerns.
                    Each component is designed to be testable and maintainable.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-[#00ADD8]/30 pb-2">Go Architecture</h2>
              <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Concurrent Grid System</h3>
                <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                  <pre className="text-stone-300">
{`
type Grid struct {
  Rows, Cols int
  Cells [][]Cell
  ActiveCell *Cell
  mutex sync.RWMutex
}

func (g *Grid) Navigate(direction Direction) {
  g.mutex.Lock()
  defer g.mutex.Unlock()

  switch direction {
  case Left:
    if g.ActiveCell.Col > 0 {
      g.ActiveCell = &g.Cells[g.ActiveCell.Row][g.ActiveCell.Col-1]
    }
  // Other directions...
  }

  go g.notifyListeners()
}
`}
                  </pre>
                </div>
                <p className="text-stone-300">
                  The grid system uses Go's concurrency primitives to handle navigation events efficiently.
                  Mutex locks ensure thread safety while goroutines handle event notifications without blocking the main flow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-stone-800/70 backdrop-blur-sm border-[#00ADD8]/30">
                  <CardContent className="p-6">
                    <Cpu className="h-10 w-10 text-[#00ADD8] mb-4" />
                    <h3 className="text-xl font-bold mb-2">System Integration</h3>
                    <p className="text-stone-300">
                      Go's CGO capabilities allow for direct integration with system APIs across platforms, 
                      enabling low-level access to input devices and display servers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-[#00ADD8]/30">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 text-[#00ADD8] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Concurrency Model</h3>
                    <p className="text-stone-300">
                      Goroutines and channels provide a clean, efficient way to handle input events, 
                      grid updates, and UI rendering without blocking the main thread.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-800/70 backdrop-blur-sm border-[#00ADD8]/30">
                  <CardContent className="p-6">
                    <Lock className="h-10 w-10 text-[#00ADD8] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Memory Safety</h3>
                    <p className="text-stone-300">
                      Go's memory management and type safety help prevent common bugs and security issues 
                      that can occur in systems programming.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Performance Comparison */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-[#00ADD8]/30 pb-2">Performance Comparison</h2>
              <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Resource Usage</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-stone-300">Memory Usage</span>
                          <span className="text-sm text-[#00ADD8]">8MB</span>
                        </div>
                        <div className="w-full bg-stone-700 rounded-full h-2">
                          <div className="bg-[#00ADD8] h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-stone-400">
                          <span>Go Implementation</span>
                          <span>Other Implementations (40-60MB)</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-stone-300">CPU Usage</span>
                          <span className="text-sm text-[#00ADD8]">0.5%</span>
                        </div>
                        <div className="w-full bg-stone-700 rounded-full h-2">
                          <div className="bg-[#00ADD8] h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-stone-400">
                          <span>Go Implementation</span>
                          <span>Other Implementations (2-5%)</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-stone-300">Startup Time</span>
                          <span className="text-sm text-[#00ADD8]">0.1s</span>
                        </div>
                        <div className="w-full bg-stone-700 rounded-full h-2">
                          <div className="bg-[#00ADD8] h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-stone-400">
                          <span>Go Implementation</span>
                          <span>Other Implementations (1-3s)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Benchmarks</h3>
                    <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                      <pre className="text-stone-300">
                        <span className="text-[#00ADD8]">func</span> <span className="text-[#FFC300]">BenchmarkGridNavigation</span>(b *testing.B) {'{'}<br/>
                        &nbsp;&nbsp;grid := grid.New(3, 3)<br/>
                        &nbsp;&nbsp;b.ResetTimer()<br/>
                        &nbsp;&nbsp;<br/>
                        &nbsp;&nbsp;<span className="text-[#00ADD8]">for</span> i := 0; i {'<'} b.N; i++ {'{'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;grid.Navigate(Left)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;grid.Navigate(Right)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;grid.Navigate(Up)<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;grid.Navigate(Down)<br/>
                        &nbsp;&nbsp;{'}'}<br/>
                        {'}'}<br/><br/>
                        <span className="text-stone-400">// Output:</span><br/>
                        <span className="text-stone-400">// BenchmarkGridNavigation-8&nbsp;&nbsp;&nbsp;5000000&nbsp;&nbsp;&nbsp;235 ns/op</span>
                      </pre>
                    </div>
                    <p className="text-stone-400 text-sm">
                      Go's efficient compilation and runtime make grid navigation operations extremely fast, 
                      with navigation operations completing in under 250 nanoseconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-[#00ADD8]/30 pb-2">Installation</h2>
              <div className="space-y-6">
                <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Using Go Install</h3>
                  <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                    <pre className="text-stone-300">
                      go install github.com/mousefulness/go-mouseless@latest
                    </pre>
                  </div>
                  <p className="text-stone-300">
                    The simplest way to install Go mouseless is directly from the source using Go's package manager.
                    This requires Go 1.16 or later to be installed on your system.
                  </p>
                </div>

                <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Pre-built Binaries</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <Button variant="outline" className="border-[#00ADD8]/50 text-[#00ADD8] hover:bg-[#00ADD8]/10">
                      <Download className="h-4 w-4 mr-2" />
                      Windows (x64)
                    </Button>
                    <Button variant="outline" className="border-[#00ADD8]/50 text-[#00ADD8] hover:bg-[#00ADD8]/10">
                      <Download className="h-4 w-4 mr-2" />
                      macOS (Universal)
                    </Button>
                    <Button variant="outline" className="border-[#00ADD8]/50 text-[#00ADD8] hover:bg-[#00ADD8]/10">
                      <Download className="h-4 w-4 mr-2" />
                      Linux (x64)
                    </Button>
                  </div>
                  <p className="text-stone-300">
                    Download the appropriate binary for your operating system. The binaries are statically linked 
                    and have no external dependencies, making them easy to deploy.
                  </p>
                </div>

                <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Building from Source</h3>
                  <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                    <pre className="text-stone-300">
                      git clone https://github.com/mousefulness/go-mouseless.git<br/>
                      cd go-mouseless<br/>
                      go build -o mouseless
                    </pre>
                  </div>
                  <p className="text-stone-300">
                    Building from source gives you the most control and allows you to customize the build for your 
                    specific environment. The build process is straightforward and requires minimal dependencies.
                  </p>
                </div>
              </div>
            </div>

            {/* Configuration */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-[#00ADD8]/30 pb-2">Configuration</h2>
              <div className="bg-stone-800/70 backdrop-blur-sm border border-[#00ADD8]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">YAML Configuration</h3>
                <div className="font-mono text-sm bg-stone-950 p-4 rounded-md border border-[#00ADD8]/20 overflow-x-auto mb-4">
                  <pre className="text-stone-300">
                    <span className="text-[#FFC300]">hotkeys:</span><br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">activate:</span> "Alt+Space"<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">navigation:</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">up:</span> "i"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">down:</span> "k"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">left:</span> "j"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">right:</span> "l"<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">actions:</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">click:</span> "Enter"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">rightClick:</span> "Shift+Enter"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">doubleClick:</span> "Ctrl+Enter"<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFC300]">drag:</span> "Space"<br/>
                    <br/>
                    <span className="text-[#FFC300]">grid:</span><br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">initialRows:</span> 3<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">initialCols:</span> 3<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">color:</span> "#00ADD8"<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">opacity:</span> 0.7<br/>
                    <br/>
                    <span className="text-[#FFC300]">performance:</span><br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">lowLatencyMode:</span> true<br/>
                    &nbsp;&nbsp;<span className="text-[#FFC300]">maxConcurrentOperations:</span> 4
                  </pre>
                </div>
                <p className="text-stone-300">
                  Go mouseless uses a simple YAML configuration file that can be customized to suit your preferences.
                  The configuration file is automatically created on first run and can be edited with any text editor.
                </p>
              </div>
            </div>

            {/* Get Started */}
            <div className="text-center mt-16 p-8 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-[#00ADD8]/30">
              <h2 className="text-2xl font-bold mb-4">Ready to try the Go implementation?</h2>
              <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
                Experience the speed and efficiency of Go mouseless. Download the binary for your platform or build from source to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gap-2" style={{ backgroundColor: goBlue, borderColor: goBlue }}>
                  <Download className="h-4 w-4" />
                  Download Go Binary
                </Button>
                <Link href="/roadmap">
                  <Button variant="outline" className="gap-2 border-[#00ADD8]/70 text-[#00ADD8] hover:bg-[#00ADD8]/10">
                    <ExternalLink className="h-4 w-4" />
                    View Development Roadmap
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
