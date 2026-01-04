"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Link2, Cpu, BarChart3 } from "lucide-react"

export function Architecture() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Platform Architecture</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">The Engine of Modern Business</h3>
          <p className="text-xl text-muted-foreground">
            A high-level look at how GACKX processes data and intelligence to drive your business forward.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Triggers */}
            <div className="p-6 rounded-2xl border border-border bg-card text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-sm">Triggers</h4>
              <p className="text-[10px] text-muted-foreground mt-2">Webhooks, Schedules, API Events</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="w-full h-px bg-border relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Logic Layer */}
            <div className="p-6 rounded-2xl border border-primary/50 bg-primary/5 text-center scale-110 shadow-2xl shadow-primary/10">
              <Brain className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-base">AI Logic Layer</h4>
              <p className="text-[10px] text-muted-foreground mt-2">Reasoning, Decision Making, Data Processing</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="w-full h-px bg-border relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Output */}
            <div className="p-6 rounded-2xl border border-border bg-card text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-sm">Output</h4>
              <p className="text-[10px] text-muted-foreground mt-2">Actions, Reports, Notifications</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-border bg-muted/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-primary" /> Integrations Layer
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our universal connector connects to any REST/GraphQL API, ensuring your data flows seamlessly between GACKX and your entire tech stack.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-border bg-muted/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> Workflow Engine
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A high-throughput, low-latency execution environment designed for mission-critical enterprise workloads and complex multi-step logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
