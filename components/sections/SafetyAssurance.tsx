"use client"

import { Shield, RotateCcw, Eye, Lock } from "lucide-react"

const assurances = [
  { title: "Non-Destructive Automations", desc: "GACKX is designed to be safe. We prioritize non-destructive actions and provide clear warnings for critical changes.", icon: Shield },
  { title: "Sandbox Testing Mode", desc: "Test your workflows in a safe, isolated environment before deploying them to production.", icon: Eye },
  { title: "Instant Rollback", desc: "Made a mistake? Revert to any previous version of your workflow with a single click.", icon: RotateCcw },
  { title: "User-Controlled Policies", desc: "You define the execution policies. GACKX only does exactly what you've authorized.", icon: Lock }
]

export function SafetyAssurance() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Safety & Control</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Automate with Total Confidence</h3>
          <p className="text-xl text-muted-foreground">
            We've built-in the guardrails you need to ensure your business operations remain safe, stable, and under your control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assurances.map((a, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-3xl border border-border bg-card/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{a.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
