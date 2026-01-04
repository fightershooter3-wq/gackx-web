"use client"

import { motion } from "framer-motion"
import { BookOpen, PlayCircle, FileText, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Automation 101",
    type: "Guide",
    icon: BookOpen,
    desc: "Learn the fundamentals of building your first AI workflow."
  },
  {
    title: "Advanced AI Logic",
    type: "Tutorial",
    icon: PlayCircle,
    desc: "Master the reasoning engine for complex decision making."
  },
  {
    title: "Enterprise Scaling",
    type: "Whitepaper",
    icon: FileText,
    desc: "How to manage 1M+ monthly tasks with zero downtime."
  }
]

export function LearningCorner() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Knowledge Hub</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Master the Art of Automation</h3>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            Explore All Resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-3xl p-8 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <r.icon className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{r.type}</p>
              <h4 className="text-xl font-bold mb-3">{r.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {r.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold group-hover:text-primary transition-colors">
                Read More <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Coming soon: <span className="text-foreground font-bold">GACKX Academy</span> — Certified Automation Architect Program.
          </p>
        </div>
      </div>
    </section>
  )
}
