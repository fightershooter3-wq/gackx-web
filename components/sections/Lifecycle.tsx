"use client"

import { motion } from "framer-motion"
import { Search, Settings, Zap, TrendingUp, Maximize } from "lucide-react"

const stages = [
  { title: "Discover", icon: Search, desc: "Identify manual bottlenecks in your current business processes.", achievement: "Automation Audit", reassurance: "We help you find the quick wins." },
  { title: "Setup", icon: Settings, desc: "Connect your tools and design your first intelligent workflow.", achievement: "Live Integration", reassurance: "No-code builder makes it easy." },
  { title: "Automate", icon: Zap, desc: "Deploy your workflows and let AI handle the repetitive tasks.", achievement: "Autonomous Ops", reassurance: "Reliable execution at any scale." },
  { title: "Optimize", icon: TrendingUp, desc: "Analyze performance and refine logic for maximum efficiency.", achievement: "Efficiency Gains", reassurance: "Data-driven improvements." },
  { title: "Scale", icon: Maximize, desc: "Expand automation across departments and complex operations.", achievement: "Enterprise Maturity", reassurance: "Built for global growth." }
]

export function Lifecycle() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Lifecycle</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Your Path to Operational Excellence</h3>
          <p className="text-xl text-muted-foreground">
            Automation is a journey, not a destination. GACKX supports you at every stage of your growth.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stages.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/10 relative z-10">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">{s.achievement}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <p className="text-[10px] italic text-muted-foreground/60">{s.reassurance}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
