import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Features } from "@/components/sections/Features"
import { Integrations } from "@/components/sections/Integrations"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Platform Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore the powerful tools and capabilities that make GACKX the leading AI automation platform.
          </p>
        </div>
        <Features />
        <Integrations />
      </div>
      <Footer />
    </main>
  )
}
