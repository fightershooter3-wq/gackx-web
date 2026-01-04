"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Zap, Users } from "lucide-react"

const principles = [
  { title: "User Empowerment", desc: "We build tools that augment human creativity, not replace it. GACKX is designed to give you more control, not less.", icon: Users },
  { title: "Reliability-First", desc: "In automation, stability is everything. Our engineering decisions are always driven by the need for 100% uptime.", icon: Shield },
  { title: "Human-in-Control", desc: "AI should be a partner, not a black box. We ensure you always have the final say in every automated decision.", icon: Heart },
  { title: "Adaptive Intelligence", desc: "Our platform is built to evolve. As AI advances, GACKX seamlessly integrates the latest intelligence into your workflows.", icon: Zap }
]

export function Philosophy() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">The Principles Behind GACKX</h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We believe that the future of work is a partnership between human intuition and machine intelligence. Our design principles reflect this commitment to a more efficient, creative, and human-centric world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <p.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-bold">{p.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" alt="Philosophy" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-lg font-bold mb-2">"Technology should empower, not replace."</p>
              <p className="text-xs text-muted-foreground">— Garvit Sharma, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
