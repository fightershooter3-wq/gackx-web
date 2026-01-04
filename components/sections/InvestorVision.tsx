"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Cpu, Rocket } from "lucide-react"

const visionItems = [
  { title: "Market Leadership", desc: "Positioned at the intersection of AI and Business Process Automation.", icon: TrendingUp },
  { title: "Global Scalability", desc: "Infrastructure built to support millions of concurrent autonomous agents.", icon: Globe },
  { title: "AI Agent Evolution", desc: "Moving beyond simple workflows to fully autonomous business agents.", icon: Cpu },
  { title: "Ecosystem Growth", desc: "Expanding our integration marketplace and developer community.", icon: Rocket }
]

export function InvestorVision() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Investor Relations</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">The Future of Autonomous Business</h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              GACKX is not just a tool; it's the operating system for the next generation of businesses. We are building the foundation for a world where operations are intelligent, autonomous, and infinitely scalable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {visionItems.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h4 className="text-2xl font-bold mb-8">Product Roadmap Vision</h4>
            <div className="space-y-8">
              <div className="flex gap-6 relative">
                <div className="w-px h-full bg-border absolute left-3 top-8 -z-10" />
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-sm">Q1 2026: AI Reasoning v2</p>
                  <p className="text-xs text-muted-foreground">Advanced decision-making capabilities for complex logic.</p>
                </div>
              </div>
              <div className="flex gap-6 relative">
                <div className="w-px h-full bg-border absolute left-3 top-8 -z-10" />
                <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-sm">Q2 2026: Autonomous Agent Swarms</p>
                  <p className="text-xs text-muted-foreground">Multi-agent collaboration for end-to-end business processes.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold text-sm">Q3 2026: Global Integration Marketplace</p>
                  <p className="text-xs text-muted-foreground">Community-driven connectors and workflow blueprints.</p>
                </div>
              </div>
            </div>
            <button className="mt-12 w-full py-4 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
              Download Investor Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
