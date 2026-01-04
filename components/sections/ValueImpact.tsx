"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Users, Zap } from "lucide-react"

const impacts = [
  { title: "Time Reclaimed", value: "40+ Hours", desc: "Average weekly time saved per department through intelligent automation.", icon: Clock },
  { title: "Cost Reduction", value: "65%", desc: "Decrease in operational overhead by automating repetitive manual tasks.", icon: TrendingUp },
  { title: "Productivity Uplift", value: "3x", desc: "Increase in team output without adding additional headcount.", icon: Zap },
  { title: "Error Reduction", value: "99.9%", desc: "Improvement in data accuracy by removing human intervention from workflows.", icon: Users }
]

export function ValueImpact() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Measurable Impact</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Outcomes You Can Expect</h3>
          <p className="text-xl text-muted-foreground">
            GACKX isn't just about technology; it's about driving real, measurable value for your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {impacts.map((impact, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <impact.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{impact.value}</p>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{impact.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
