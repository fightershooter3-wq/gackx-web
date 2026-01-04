"use client"

import { Check, X } from "lucide-react"

const rows = [
  { feature: "AI Reasoning Engine", manual: false, legacy: false, gackx: true },
  { feature: "Visual No-Code Builder", manual: false, legacy: true, gackx: true },
  { feature: "Universal API Connector", manual: false, legacy: false, gackx: true },
  { feature: "Real-time Monitoring", manual: true, legacy: true, gackx: true },
  { feature: "Zero-Lock-in Philosophy", manual: true, legacy: false, gackx: true },
  { feature: "Enterprise Security (SOC2)", manual: false, legacy: true, gackx: true },
  { feature: "Autonomous Decision Making", manual: true, legacy: false, gackx: true },
]

export function Comparison() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Why GACKX is the Future</h3>
          <p className="text-xl text-muted-foreground">
            Compare GACKX with manual work and legacy automation tools to see the AI-powered difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-left font-bold text-muted-foreground uppercase tracking-wider text-xs">Feature</th>
                <th className="py-6 px-4 text-center font-bold text-muted-foreground uppercase tracking-wider text-xs">Manual Work</th>
                <th className="py-6 px-4 text-center font-bold text-muted-foreground uppercase tracking-wider text-xs">Legacy Tools</th>
                <th className="py-6 px-4 text-center font-bold text-primary uppercase tracking-wider text-xs bg-primary/5">GACKX AI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-6 px-4 font-medium">{row.feature}</td>
                  <td className="py-6 px-4 text-center">
                    {row.manual ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                  </td>
                  <td className="py-6 px-4 text-center">
                    {row.legacy ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                  </td>
                  <td className="py-6 px-4 text-center bg-primary/5">
                    {row.gackx ? <Check className="w-6 h-6 text-primary mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
