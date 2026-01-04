"use client"

import { motion } from "framer-motion"
import { Link2, MousePointer2, Zap, BarChart3 } from "lucide-react"

const steps = [
  {
    title: "Connect Tools",
    desc: "Link your apps and APIs in seconds with our secure connectors.",
    icon: Link2
  },
  {
    title: "Design Workflow",
    desc: "Map out your logic visually. No-code, drag-and-drop simplicity.",
    icon: MousePointer2
  },
  {
    title: "Run Automations",
    desc: "Deploy with one click. GACKX handles the execution at scale.",
    icon: Zap
  },
  {
    title: "Track Results",
    desc: "Monitor performance and ROI through your real-time dashboard.",
    icon: BarChart3
  }
]

export function Onboarding() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Getting Started</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Your Journey to Automation in 4 Steps</h3>
          <p className="text-xl text-muted-foreground">
            We've removed the complexity. GACKX is built for everyone, from beginners to enterprise architects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 -z-10" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-3xl p-8 text-center relative"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-muted border border-border rounded-full flex items-center justify-center text-xs font-bold">
                0{i + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">Ready to build your first automation?</h4>
            <p className="text-muted-foreground">No credit card required. Start exploring the platform today.</p>
          </div>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  )
}
