"use client"

import { HelpCircle, MessageSquare, BookOpen, Headphones } from "lucide-react"

const supportItems = [
  { title: "Help Center", desc: "Comprehensive documentation and step-by-step guides for every feature.", icon: BookOpen },
  { title: "Community Hub", desc: "Connect with other automation experts and share your workflow blueprints.", icon: MessageSquare },
  { title: "24/7 Support", desc: "Our team is always available to help you troubleshoot and optimize your workflows.", icon: Headphones },
  { title: "Priority Access", desc: "Business and Enterprise plans include dedicated support and faster response times.", icon: HelpCircle }
]

export function SupportEcosystem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Support & Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">We're Here to Help You Scale</h3>
          <p className="text-xl text-muted-foreground">
            GACKX is more than just a platform; it's a supportive ecosystem designed to ensure your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportItems.map((item, i) => (
            <div key={i} className="text-center p-8 rounded-3xl border border-border bg-background shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
