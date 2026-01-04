"use client"

import { motion } from "framer-motion"
import { Lightbulb, ArrowRight, Zap, Sparkles } from "lucide-react"

const ideas = [
  { title: "Auto-Qualify Leads", desc: "Use AI to score leads based on LinkedIn profiles and website behavior.", icon: Zap },
  { title: "Smart Invoice Follow-up", desc: "Automatically send personalized reminders based on payment history.", icon: Sparkles },
  { title: "Social Media Repurposing", desc: "Turn one blog post into 10+ social snippets using AI reasoning.", icon: Lightbulb },
  { title: "Customer Sentiment Alerts", desc: "Monitor support tickets and alert managers of high-churn risks.", icon: Zap }
]

export function WorkflowIdeas() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Inspiration Hub</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">What Will You Automate First?</h3>
          <p className="text-xl text-muted-foreground">
            Explore popular workflow ideas and start experimenting with the power of GACKX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ideas.map((idea, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl border border-border bg-background flex items-start gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <idea.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{idea.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{idea.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Build this workflow <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Explore Idea Library
          </button>
        </div>
      </div>
    </section>
  )
}
