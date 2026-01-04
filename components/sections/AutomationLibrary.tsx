"use client"

import { motion } from "framer-motion"
import { Layout, FileText, Users, CreditCard, ArrowRight } from "lucide-react"

const blueprints = [
  { title: "Lead Enrichment", category: "Sales", icon: Users, items: 12 },
  { title: "Invoice Processing", category: "Finance", icon: CreditCard, items: 8 },
  { title: "Content Generation", category: "Marketing", icon: FileText, items: 15 },
  { title: "Support Triage", category: "Customer Success", icon: Layout, items: 10 }
]

export function AutomationLibrary() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Blueprint Library</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Start Fast with Proven Workflows</h3>
            <p className="text-xl text-muted-foreground">
              Don't start from scratch. Use our library of industry-specific blueprints to deploy your first automation in minutes.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            Browse All Blueprints <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blueprints.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-3xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <b.icon className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">{b.category}</p>
              <h4 className="text-lg font-bold mb-4">{b.title}</h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{b.items} Steps</span>
                <span className="text-primary font-bold">Use Template →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
