"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect Your Apps",
    description: "Choose from 1000+ integrations or connect any API with our universal connector."
  },
  {
    number: "02",
    title: "Design Your Logic",
    description: "Use our visual builder to map out your workflow with triggers, actions, and filters."
  },
  {
    number: "03",
    title: "Add AI Intelligence",
    description: "Inject AI reasoning into your steps to process unstructured data and make decisions."
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description: "Launch your automation with one click and monitor its performance in real-time."
  }
]

export function Workflow() {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How GACKX Works</h2>
            <p className="text-muted-foreground text-lg mb-10">
              We've simplified the complex world of automation into four easy steps. No engineering degree required.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center text-primary font-bold shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-mono text-muted-foreground">workflow_v2.gackx</div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-medium">New Lead in HubSpot</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5 text-blue-500" />
                    </motion.div>
                    <span className="font-medium">AI Content Analysis</span>
                  </div>
                  <div className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded">Processing</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>

                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Send Slack Notification</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-green-500/30" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
