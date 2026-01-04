"use client"

import { motion } from "framer-motion"
import { 
  MousePointer2, 
  Link2, 
  Layers, 
  Webhook, 
  Calendar, 
  BrainCircuit, 
  Users, 
  BarChart3 
} from "lucide-react"

const features = [
  {
    title: "Drag & Drop Builder",
    description: "Build complex automations visually. No coding required, just pure logic.",
    icon: MousePointer2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "API Integrations",
    description: "Connect to thousands of apps via native integrations or custom API calls.",
    icon: Link2,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Multi-step Chains",
    description: "Create sophisticated workflows with conditional logic and branching.",
    icon: Layers,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Webhook Triggers",
    description: "Listen for events from any external service and trigger actions instantly.",
    icon: Webhook,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Scheduled Tasks",
    description: "Run your automations on a recurring schedule—daily, weekly, or custom.",
    icon: Calendar,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "AI Reasoning Engine",
    description: "Leverage LLMs to process data, summarize content, and make decisions.",
    icon: BrainCircuit,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Team Management",
    description: "Collaborate with your team on shared projects and workflows.",
    icon: Users,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Advanced Analytics",
    description: "Monitor performance, usage, and ROI of your automations in real-time.",
    icon: BarChart3,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Teams</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to build, manage, and scale your business automations in one unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
