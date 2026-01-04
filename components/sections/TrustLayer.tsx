"use client"

import { ShieldCheck, Lock, Globe, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "SOC2 Type II Ready",
    description: "Enterprise-grade security standards for data protection."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your workflow data is encrypted at rest and in transit."
  },
  {
    icon: Globe,
    title: "99.99% Uptime SLA",
    description: "Reliable infrastructure built for mission-critical operations."
  },
  {
    icon: Zap,
    title: "GDPR & CCPA Compliant",
    description: "Privacy-first architecture respecting global data regulations."
  }
]

export function TrustLayer() {
  return (
    <section className="py-16 border-y border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Enterprise Grade Reliability</h2>
          <p className="text-2xl md:text-3xl font-bold">Built for Stability, Scalability, and Trust</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border/50 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Placeholder for security badges */}
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> SOC2</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Lock className="w-6 h-6" /> ISO 27001</div>
          <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle className="w-6 h-6" /> HIPAA</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6" /> GDPR</div>
        </div>
      </div>
    </section>
  )
}
