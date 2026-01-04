"use client"

import { motion } from "framer-motion"
import { XCircle, CheckCircle2, ArrowRight, Clock, Zap, Brain, Shield } from "lucide-react"

const pillars = [
  { title: "Speed", icon: Zap, desc: "Deploy in minutes, not months." },
  { title: "Reliability", icon: Shield, desc: "99.99% uptime for critical tasks." },
  { title: "Intelligence", icon: Brain, desc: "AI-driven decision making." },
  { title: "Control", icon: CheckCircle2, desc: "Full visibility into every step." }
]

export function ProblemSolution() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Transformation</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">From Manual Chaos to Automated Excellence</h3>
          <p className="text-xl text-muted-foreground">
            Stop wasting human potential on repetitive tasks. GACKX bridges the gap between manual effort and scalable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <XCircle className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Before GACKX</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Fragmented data silos and manual copy-pasting.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Human error leading to costly business mistakes.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Slow response times and bottlenecked operations.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>High operational costs with low scalability.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
            <div className="flex items-center gap-3 mb-6 text-green-500">
              <CheckCircle2 className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">After GACKX</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Unified, real-time data flow across all platforms.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>AI-powered accuracy with zero human intervention.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Instant execution and 24/7 autonomous operations.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Infinite scalability with reduced overhead.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <p.icon className="w-8 h-8" />
              </div>
              <h5 className="font-bold mb-1">{p.title}</h5>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
