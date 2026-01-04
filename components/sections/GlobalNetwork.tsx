"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Zap, Cpu } from "lucide-react"

const nodes = [
  { city: "San Francisco", status: "Optimal", latency: "12ms" },
  { city: "London", status: "Optimal", latency: "24ms" },
  { city: "Tokyo", status: "Optimal", latency: "18ms" },
  { city: "Singapore", status: "Optimal", latency: "15ms" },
  { city: "Berlin", status: "Optimal", latency: "22ms" },
  { city: "Sydney", status: "Optimal", latency: "32ms" }
]

export function GlobalNetwork() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Global Infrastructure</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Gathering Intelligence from Everywhere</h3>
          <p className="text-xl text-muted-foreground">
            GACKX operates on a distributed global network, ensuring low-latency execution and real-time data gathering from every corner of the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            {/* Mock Map Visualization */}
            <div className="aspect-video bg-background border border-border rounded-[3rem] shadow-2xl relative overflow-hidden p-12">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
              
              {/* Animated Connection Lines (Simplified) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                <motion.path
                  d="M 150 150 Q 400 50 650 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M 150 150 Q 400 350 650 150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </svg>

              {/* Node Points */}
              <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse" />
              <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse" />
              <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse" />
              <div className="absolute top-[20%] left-[70%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse" />

              <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="bg-background/80 backdrop-blur-md border border-border p-6 rounded-2xl max-w-xs shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-sm">Network Status</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Active Nodes</span>
                      <span className="font-bold">142</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Global Latency</span>
                      <span className="font-bold text-green-500">18ms</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Data Throughput</span>
                      <span className="font-bold">4.2 TB/s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-8">Regional Performance</h4>
            {nodes.map((node, i) => (
              <div key={i} className="p-4 rounded-xl bg-background border border-border flex items-center justify-between group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-bold text-sm">{node.city}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{node.status}</span>
                  <span className="text-xs font-mono text-primary">{node.latency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
