"use client"

import { motion } from "framer-motion"
import { Brain, Sparkles, Zap, Cpu, ArrowRight } from "lucide-react"

const improvements = [
  {
    title: "Predictive Workflow Optimization",
    desc: "AI that analyzes your workflow performance and automatically suggests logic improvements to reduce latency and cost.",
    icon: Brain,
    status: "Beta"
  },
  {
    title: "Autonomous Error Self-Healing",
    desc: "When an API fails or data is malformed, GACKX will automatically attempt to resolve the issue using AI reasoning before alerting you.",
    icon: Zap,
    status: "In Development"
  },
  {
    title: "Natural Language Workflow Generation",
    desc: "Simply describe your business process in plain English, and GACKX will architect the entire multi-step automation for you.",
    icon: Sparkles,
    status: "Coming Soon"
  },
  {
    title: "Cross-Platform Intelligence Sync",
    desc: "Share learned patterns and data insights across all your connected tools to create a unified 'Business Brain'.",
    icon: Cpu,
    status: "Researching"
  }
]

export function SmartImprovements() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Next Frontier</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Smart Improvements Every Second</h3>
          <p className="text-xl text-muted-foreground">
            We are constantly evolving. Here are the next-generation intelligence features currently being integrated into the GACKX OS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {improvements.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-muted border border-border uppercase tracking-widest">
                  {item.status}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {item.desc}
              </p>
              <button className="text-xs font-bold flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                Learn about our R&D <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
