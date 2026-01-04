"use client"

import { Code2, Terminal, Cpu, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DeveloperPortal() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-zinc-950 rounded-2xl p-6 font-mono text-sm text-zinc-400 shadow-2xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-zinc-500">gackx-api-client.js</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-purple-400">import</span> Gackx <span className="text-purple-400">from</span> <span className="text-green-400">'@gackx/sdk'</span>;</p>
                <p>&nbsp;</p>
                <p><span className="text-zinc-500">// Initialize client</span></p>
                <p><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-400">Gackx</span>({'{'} api_key: <span className="text-green-400">'gk_live_...'</span> {'}'});</p>
                <p>&nbsp;</p>
                <p><span className="text-zinc-500">// Trigger a workflow programmatically</span></p>
                <p><span className="text-purple-400">await</span> client.<span className="text-blue-400">workflows</span>.<span className="text-blue-400">trigger</span>(<span className="text-green-400">'wf_8291'</span>, {'{'});</p>
                <p>&nbsp;&nbsp;payload: {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;customer_id: <span className="text-green-400">'cust_01'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;event: <span className="text-green-400">'checkout_completed'</span></p>
                <p>&nbsp;&nbsp;{'}'}</p>
                <p>{'}'});</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">For Developers</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Built by Developers, for Developers</h3>
            <p className="text-xl text-muted-foreground mb-8">
              GACKX is fully extensible. Use our robust API, SDKs, and webhooks to integrate automation directly into your own applications.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Full REST API</h4>
                  <p className="text-sm text-muted-foreground">Programmatic access to every feature of the GACKX platform.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Custom Code Steps</h4>
                  <p className="text-sm text-muted-foreground">Write Node.js or Python directly inside your workflows for complex logic.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Read Documentation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get API Key
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
