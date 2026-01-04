"use client"

import { motion } from "framer-motion"
import { Users, ShieldCheck, Layout, Lock, BarChart3, Database, Globe, Zap } from "lucide-react"

const features = [
  {
    title: "Team Collaboration",
    desc: "Work together on shared workflows with real-time editing and comments.",
    icon: Users
  },
  {
    title: "Role-Based Access",
    desc: "Granular permissions to control who can view, edit, or deploy automations.",
    icon: ShieldCheck
  },
  {
    title: "Multi-Workspace",
    desc: "Separate environments for different departments, clients, or projects.",
    icon: Layout
  },
  {
    title: "Secure Data Separation",
    desc: "Enterprise-grade isolation of data and execution environments.",
    icon: Lock
  }
]

export function EnterpriseFeatures() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Built for Teams</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Scale Your Automation with Confidence</h3>
            <p className="text-xl text-muted-foreground mb-10">
              GACKX provides the governance and security features required by growing companies and enterprise organizations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden">
               <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">GS</div>
                    <div>
                      <p className="text-xs font-bold">Garvit Sharma</p>
                      <p className="text-[10px] text-muted-foreground">Admin • Workspace: Enterprise</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Active Workflows</p>
                    <p className="text-2xl font-bold">1,284</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Success Rate</p>
                    <p className="text-2xl font-bold text-green-500">99.9%</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    <span>Recent Activity</span>
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-between">
                    <span className="text-xs font-medium">Marketing Workflow</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">Deployed</span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border flex items-center justify-between">
                    <span className="text-xs font-medium">Finance Sync</span>
                    <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded">Updated</span>
                  </div>
               </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
