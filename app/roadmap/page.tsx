import Link from "next/link"
import { HardHat, Hammer, ConeIcon as Crane, ArrowLeft, MapPin, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeBackground } from "@/components/theme-background"
import Footer from "@/components/Footer"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Stone texture background */}
      <ThemeBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-stone-600 bg-stone-800/70 backdrop-blur-sm">
          <div className="container mx-auto py-4 px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Mousefulness</span>
              </Link>
              <div className="flex items-center gap-2">
                <HardHat className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">Development Roadmap</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-yellow-500/20 rounded-full mb-4">
                <Construction className="h-8 w-8 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Under Construction</h1>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                We're building something amazing. Our development roadmap is being paved with innovation.
              </p>
            </div>

            {/* Road Map */}
            <div className="relative py-10">
              {/* Road */}
              <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-stone-700 -translate-x-1/2 rounded-full" />

              {/* Milestones */}
              <div className="space-y-32">
                {/* Milestone 1 - Completed */}
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 absolute left-1/2 -translate-x-1/2 z-10">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-[calc(50%+2rem)] pl-6 pr-4 py-6 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Completed</div>
                      <h3 className="text-xl font-bold">Concept Development</h3>
                    </div>
                    <p className="text-stone-300">
                      The foundation stones have been laid. Core concepts of mousefulness defined and initial prototypes
                      created.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-stone-400 text-sm">
                      <Hammer className="h-4 w-4" />
                      <span>Completed Q1 2023</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 2 - In Progress */}
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 absolute left-1/2 -translate-x-1/2 z-10">
                    <Crane className="h-6 w-6 text-white" />
                  </div>
                  <div className="mr-[calc(50%+2rem)] pr-6 pl-4 py-6 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">In Progress</div>
                      <h3 className="text-xl font-bold">Core Implementation</h3>
                    </div>
                    <p className="text-stone-300">
                      Building the infrastructure. Developing the command wheel interface and keyboard mapping system.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-stone-400 text-sm">
                      <Construction className="h-4 w-4" />
                      <span>Expected Q3 2023</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 3 - Planned */}
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-600 absolute left-1/2 -translate-x-1/2 z-10">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-[calc(50%+2rem)] pl-6 pr-4 py-6 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-stone-600/20 text-stone-400 text-xs rounded-full">Planned</div>
                      <h3 className="text-xl font-bold">Beta Release</h3>
                    </div>
                    <p className="text-stone-300">
                      Paving the way for user testing. First public beta with core functionality and customization
                      options.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-stone-400 text-sm">
                      <HardHat className="h-4 w-4" />
                      <span>Targeted Q1 2024</span>
                    </div>
                  </div>
                </div>

                {/* Milestone 4 - Future */}
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-600 absolute left-1/2 -translate-x-1/2 z-10">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="mr-[calc(50%+2rem)] pr-6 pl-4 py-6 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 bg-stone-600/20 text-stone-400 text-xs rounded-full">Future</div>
                      <h3 className="text-xl font-bold">Full Release</h3>
                    </div>
                    <p className="text-stone-300">
                      The cornerstone of our vision. Complete integration with major applications and operating systems.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-stone-400 text-sm">
                      <HardHat className="h-4 w-4" />
                      <span>Projected Q3 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="p-8 bg-stone-800/70 backdrop-blur-sm rounded-lg border border-stone-500">
                <h2 className="text-2xl font-bold mb-4">Want to help build the road?</h2>
                <p className="text-stone-300 mb-6">
                  We're looking for contributors to help shape the future of mousefulness. Join our team of builders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-yellow-600 hover:bg-yellow-700">
                    <HardHat className="h-4 w-4 mr-2" />
                    Join the Crew
                  </Button>
                  <Button variant="outline" className="border-stone-600">
                    <Hammer className="h-4 w-4 mr-2" />
                    Suggest Features
                  </Button>
                </div>
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
