import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Integrations } from "@/components/sections/Integrations"
import { PluginEcosystem } from "@/components/sections/PluginEcosystem"

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">Connect Your <span className="text-primary">Entire Stack</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            GACKX integrates with over 1,000+ apps, CRMs, and APIs. Build seamless data pipelines and intelligent workflows across your favorite tools.
          </p>
        </div>
        <Integrations />
        <PluginEcosystem />
      </div>
      <Footer />
    </main>
  )
}
