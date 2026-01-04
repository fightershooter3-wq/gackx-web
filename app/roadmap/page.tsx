import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

const roadmapItems = [
  {
    quarter: "Q1 2026",
    status: "In Progress",
    items: ["Advanced AI Reasoning Engine v2", "Native Mobile App (iOS/Android)", "Custom Plugin Marketplace"]
  },
  {
    quarter: "Q2 2026",
    status: "Planned",
    items: ["Enterprise SSO & SAML", "Real-time Collaboration", "Advanced Data Visualization"]
  },
  {
    quarter: "Q3 2026",
    status: "Researching",
    items: ["Autonomous Agent Swarms", "Voice-to-Workflow Builder", "Blockchain Integrations"]
  }
]

export default function RoadmapPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Product Roadmap</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          See what we're building next. Our roadmap is driven by our community and the evolving landscape of AI.
        </p>
        
        <div className="space-y-12">
          {roadmapItems.map((item, i) => (
            <div key={i} className="border-l-2 border-primary pl-8 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">{item.quarter}</h2>
                <Badge variant="secondary">{item.status}</Badge>
              </div>
              <ul className="space-y-4">
                {item.items.map((li, j) => (
                  <li key={j} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
