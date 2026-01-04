"use client"

import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function DecisionConfidence() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Decision Clarity</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Is GACKX Right for You?</h3>
          <p className="text-xl text-muted-foreground">
            We believe in transparency. GACKX is a powerful engine, but it's built for specific operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-3xl border border-border bg-card/50">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Use GACKX if...
            </h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You need to connect multiple disparate APIs and CRMs.</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You want to inject AI reasoning into your business logic.</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You require enterprise-grade security and audit logs.</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>You are scaling operations and need reliable, 24/7 automation.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-muted/10">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" /> Not ideal if...
            </h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <span>You only need simple, single-step "if this then that" triggers.</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <span>You have zero technical understanding of your business data.</span>
              </li>
              <li className="text-muted-foreground flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                <span>You are looking for a "magic button" without defining logic.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">10min</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">To First Workflow</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">Zero</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Code Required</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">Infinite</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Scalability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
