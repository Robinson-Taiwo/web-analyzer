import { Network, Search, Sparkles, Users,  Check, Download, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <header className="fixed top-0 w-full border-b bg-white/50 backdrop-blur-xl z-50">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Network className="h-6 w-6 text-rose-600" />
            <span className="text-xl">WebRedesign</span>
          </Link>
          <nav className="ml-8 hidden gap-6 md:flex">
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Examples
            </Link>
            <Link className="text-sm font-medium text-muted-foreground transition hover:text-rose-600" href="#">
              Pricing
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <Link
              className="hidden text-sm font-medium text-muted-foreground transition hover:text-rose-600 md:block"
              href="#"
            >
              Sign In
            </Link>
            <Button className="bg-rose-600 text-white hover:bg-rose-700">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 py-20">
          <div className="relative w-full max-w-4xl space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                Transform Your Website Design
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Enter your website URL below and let our AI analyze and generate a modern, optimized redesign in seconds
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="group mx-auto flex max-w-3xl items-center gap-2 rounded-full bg-white p-2 shadow-2xl shadow-rose-100/50 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/50 focus-within:ring-2 focus-within:ring-rose-200"
            >
              <input
                type="url"
                placeholder="Enter your website URL..."
                className="flex-1 bg-transparent px-4 py-3 text-lg outline-none placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm transition-colors hover:bg-rose-700"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Analyze Website</span>
              </button>
            </form>
          </div>
          <div className="grid w-full max-w-5xl gap-8 px-4 sm:grid-cols-3">
            <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-rose-950">Instant Analysis</h3>
              <p className="text-muted-foreground">
                Advanced AI analysis identifies design issues and opportunities for improvement
              </p>
            </div>
            <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-rose-950">Smart Redesign</h3>
              <p className="text-muted-foreground">
                Get an AI-generated mockup that follows modern design principles and best practices
              </p>
            </div>
            <div className="group space-y-3 rounded-3xl bg-white p-8 shadow-xl shadow-rose-100/10 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-rose-950">Detailed Report</h3>
              <p className="text-muted-foreground">
                Compare before and after designs with a comprehensive analysis report
              </p>
            </div>
          </div>
        </div>
        
        {/* New Comparison Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-rose-950 mb-12">See the Difference</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Original website design"
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-75"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-rose-950 mb-4">Identified Issues</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-rose-600">•</span>
                      Low color contrast affecting readability
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-rose-600">•</span>
                      Cluttered layout with poor use of whitespace
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-rose-600">•</span>
                      Non-responsive design, poor mobile experience
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-rose-600">•</span>
                      Outdated typography choices
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Redesigned website"
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-75"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-rose-950 mb-4">Improvements Made</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Enhanced color scheme for better contrast and readability
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Streamlined layout with improved use of whitespace
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Fully responsive design for optimal mobile experience
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      Modern typography for enhanced visual appeal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center space-y-6">
              <h3 className="text-2xl font-semibold text-rose-950">Ready to Transform Your Website?</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-rose-600 text-white hover:bg-rose-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Redesign
                </Button>
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Speak to Our Experts
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get your redesign now or contact us for custom development and advanced features
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}