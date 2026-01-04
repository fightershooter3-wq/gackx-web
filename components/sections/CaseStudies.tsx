"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"

const cases = [
  {
    company: "GlobalLogistics Co.",
    title: "Automating 50,000+ Monthly Shipments",
    description: "How a global shipping giant used GACKX to automate their entire customs documentation process.",
    stats: [
      { label: "Time Saved", value: "85%", icon: Clock },
      { label: "Cost Reduction", value: "40%", icon: TrendingUp },
      { label: "Accuracy", value: "99.9%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
  }
]

export function CaseStudies() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Success Stories</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Real Results for Real Businesses</h3>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {cases.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <div className="flex-1 p-8 md:p-12">
              <p className="text-primary font-bold mb-4">{c.company}</p>
              <h4 className="text-3xl font-bold mb-6">{c.title}</h4>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                {c.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {c.stats.map((s, j) => (
                  <div key={j}>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <s.icon className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{s.label}</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 min-h-[300px] relative">
              <img src={c.image} alt={c.company} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent hidden lg:block" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
