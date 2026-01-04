"use client"

import { ShieldCheck, Eye, Scale, Lock } from "lucide-react"
import { motion } from "framer-motion"

const principles = [
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    description: "You own your data. We never use your workflow data to train our models without explicit consent."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Full audit logs for every action taken by an AI agent. Know exactly why a decision was made."
  },
  {
    icon: Scale,
    title: "Responsible AI",
    description: "Built-in guardrails to prevent bias and ensure ethical automation practices."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Zero-knowledge architecture options for highly sensitive enterprise data."
  }
]

export function SecurityEthics() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white blur-[150px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4">Trust & Ethics</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">The GACKX Commitment to Responsible AI</h3>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              In the age of AI, trust is the most valuable currency. We've built GACKX on a foundation of security, transparency, and ethical data handling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-3">
                    <p.icon className="w-5 h-5 text-white" />
                    <h4 className="font-bold">{p.title}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h4 className="text-2xl font-bold mb-6">Security & Compliance</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="font-bold">AES-256 Encryption</p>
                  <p className="text-sm text-primary-foreground/70">All data at rest is encrypted using industry-standard AES-256.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="font-bold">SOC2 Type II Compliant</p>
                  <p className="text-sm text-primary-foreground/70">Rigorous third-party audits of our security controls and processes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="font-bold">Role-Based Access Control (RBAC)</p>
                  <p className="text-sm text-primary-foreground/70">Granular permissions to ensure users only see what they need to.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
