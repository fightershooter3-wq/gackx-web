"use client"

import { motion } from "framer-motion"
import { MousePointer2, BrainCircuit, Link2, Webhook, Database, LayoutDashboard, Users2 } from "lucide-react"

const deepDives = [
  {
    title: "Visual Automation Builder",
    description: "A canvas for your business logic. Drag, drop, and connect triggers to actions with zero latency.",
    icon: MousePointer2,
    features: ["Conditional Branching", "Looping & Iteration", "Error Handling", "Version Control"]
  },
  {
    title: "AI Reasoning Engine",
    description: "Inject intelligence into every step. Use LLMs to summarize, categorize, and make decisions based on data.",
    icon: BrainCircuit,
    features: ["Prompt Engineering", "Context Injection", "Multi-model Support", "Sentiment Analysis"]
  },
  {
    title: "Universal API Connector",
    description: "Connect to any service. If it has an API, GACKX can talk to it. No pre-built integration required.",
    icon: Link2,
    features: ["REST & GraphQL", "OAuth2 Support", "Custom Headers", "Payload Mapping"]
  },
  {
    title: "Real-time Monitoring",
    description: "Full visibility into your automation health. Track every execution, error, and performance metric.",
    icon: LayoutDashboard,
    features: ["Live Logs", "Usage Analytics", "Alerting System", "ROI Tracking"]
  }
]

export function FeatureDeepDive() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Technical Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Engineered for Performance</h3>
          <p className="text-xl text-muted-foreground">
            Deep dive into the core technologies that power the GACKX platform.
          </p>
        </div>

        <div className="space-y-24">
          {deepDives.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-3xl font-bold mb-6">{item.title}</h4>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {item.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full aspect-video bg-card border border-border rounded-3xl shadow-2xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Placeholder for a technical diagram or UI screenshot */}
                   <div className="text-center p-12">
                      <item.icon className="w-20 h-20 text-primary/20 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Technical Visualization</p>
                   </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
