"use client"

import { motion } from "framer-motion"
import { Terminal, Code2, Cpu, Zap, ArrowRight, Key, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DeveloperHub() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-zinc-950 rounded-3xl p-8 font-mono text-sm text-zinc-400 shadow-2xl border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Badge variant="outline" className="border-zinc-800 text-zinc-500">v2.4.0</Badge>
              </div>
              <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-zinc-500">gackx-sdk-example.py</span>
              </div>
              <div className="space-y-3">
                <p><span className="text-purple-400">from</span> gackx <span className="text-purple-400">import</span> GackxClient</p>
                <p>&nbsp;</p>
                <p><span className="text-zinc-500"># Initialize with your API key</span></p>
                <p>client = <span className="text-yellow-400">GackxClient</span>(api_key=<span className="text-green-400">"gk_live_8291..."</span>)</p>
                <p>&nbsp;</p>
                <p><span className="text-zinc-500"># Trigger an autonomous agent swarm</span></p>
                <p>response = client.agents.<span className="text-blue-400">deploy_swarm</span>(</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;objective=<span className="text-green-400">"Analyze Q4 revenue and generate report"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;tools=[<span className="text-green-400">"stripe"</span>, <span className="text-green-400">"google_docs"</span>, <span className="text-green-400">"slack"</span>]</p>
                <p>)</p>
                <p>&nbsp;</p>
                <p><span className="text-purple-400">print</span>(f<span className="text-green-400">"Swarm ID: {'{' }response.id{'}'}"</span>)</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Developer Mode</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Build on the GACKX Infrastructure</h3>
            <p className="text-xl text-muted-foreground mb-10">
              Integrate GACKX's intelligence directly into your own applications. Our robust API and SDKs give you full control over the automation engine.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">API Key Management</h4>
                <p className="text-sm text-muted-foreground">Generate and rotate keys with granular scope permissions.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold">Usage Analytics</h4>
                <p className="text-sm text-muted-foreground">Track quotas, limits, and consumption in real-time.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get API Access <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
