"use client"

import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

const integrations = [
  { name: "HubSpot", status: "Operational", latency: "42ms" },
  { name: "Salesforce", status: "Operational", latency: "85ms" },
  { name: "Stripe", status: "Operational", latency: "31ms" },
  { name: "Slack", status: "Operational", latency: "12ms" },
  { name: "Google Drive", status: "Operational", latency: "54ms" },
  { name: "Shopify", status: "Operational", latency: "62ms" }
]

export function IntegrationStatus() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Reliability</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Integration Health Board</h3>
          <p className="text-xl text-muted-foreground">
            We monitor thousands of API connections in real-time to ensure your mission-critical workflows never skip a beat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {integrations.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-background border border-border flex items-center justify-between group hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-bold">{item.name}</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">{item.status}</span>
                <div className="flex items-center gap-1 text-primary font-mono">
                  <Clock className="w-3 h-3" />
                  {item.latency}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            All systems operational. Last checked: Just now.
          </p>
        </div>
      </div>
    </section>
  )
}
