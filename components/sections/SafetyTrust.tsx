"use client"

import { ShieldAlert, Eye, Lock, Scale, AlertCircle, CheckCircle2 } from "lucide-react"

const safetyFeatures = [
  { title: "Sensitive Content Handling", desc: "Built-in filters to detect and manage sensitive or inappropriate content.", icon: ShieldAlert },
  { title: "Misinformation Cautions", desc: "AI-driven fact-checking and uncertainty explanations for unclear data.", icon: AlertCircle },
  { title: "Privacy Protections", desc: "Anonymization and data masking for sensitive team conversations.", icon: Eye },
  { title: "Abuse Filtering", desc: "Proactive monitoring to prevent harassment and platform misuse.", icon: Scale }
]

export function SafetyTrust() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Safety & Compliance</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Responsible AI by Design</h3>
          <p className="text-xl text-muted-foreground">
            Trust is built on safety. GACKX includes a multi-layered compliance engine to ensure ethical and secure automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {safetyFeatures.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-border bg-card/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-3">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Transparency Notice</h4>
              <p className="text-sm text-muted-foreground">We provide full audit logs for every AI decision made on the platform.</p>
            </div>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            View Compliance Docs <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
