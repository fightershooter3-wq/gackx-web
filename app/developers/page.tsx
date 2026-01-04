import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { DeveloperPortal } from "@/components/sections/DeveloperPortal"
import { Code2, Terminal, Cpu, Zap, Database, Shield } from "lucide-react"

const techFeatures = [
  {
    title: "RESTful API",
    description: "A clean, predictable API for managing workflows, users, and data programmatically.",
    icon: Terminal
  },
  {
    title: "Webhooks",
    description: "Receive real-time notifications for workflow events with signature verification.",
    icon: Zap
  },
  {
    title: "SDKs",
    description: "Official libraries for Node.js, Python, and Go to speed up your integration.",
    icon: Code2
  },
  {
    title: "Custom Code",
    description: "Execute arbitrary logic in isolated environments with full access to npm/pip packages.",
    icon: Cpu
  },
  {
    title: "Data Pipelines",
    description: "Stream data between your internal databases and GACKX with high throughput.",
    icon: Database
  },
  {
    title: "Security First",
    description: "API keys, OAuth2, and IP whitelisting to keep your integrations secure.",
    icon: Shield
  }
]

export default function DevelopersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Developer Hub</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to build powerful, automated experiences. Integrate GACKX into your stack with our enterprise-grade API and SDKs.
            </p>
          </div>
        </div>

        <DeveloperPortal />

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techFeatures.map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start building?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our developer community and start creating advanced AI-driven workflows today.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold">Get API Key</button>
              <button className="bg-background border border-border px-8 py-3 rounded-lg font-bold">Join Discord</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
