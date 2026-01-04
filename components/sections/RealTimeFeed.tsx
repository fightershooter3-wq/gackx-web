"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Globe, Search, Database, MessageSquare, ShieldCheck } from "lucide-react"

const events = [
  { icon: Search, text: "Analyzing market trends for E-commerce blueprint...", color: "text-blue-500" },
  { icon: Zap, text: "New lead qualified for Agency workspace.", color: "text-yellow-500" },
  { icon: Database, text: "Syncing 1,200 records to Salesforce CRM.", color: "text-purple-500" },
  { icon: Globe, text: "Global node in Singapore processing workflow #8291.", color: "text-green-500" },
  { icon: MessageSquare, text: "AI Agent drafting response to support ticket #442.", color: "text-primary" },
  { icon: ShieldCheck, text: "Security audit completed for Enterprise node.", color: "text-cyan-500" }
]

export function RealTimeFeed() {
  const [visibleEvents, setEvents] = React.useState(events.slice(0, 3))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => {
        const nextIndex = (events.indexOf(prev[prev.length - 1]) + 1) % events.length
        return [...prev.slice(1), events[nextIndex]]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Always Improving</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">GACKX Intelligence in Action</h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our platform never sleeps. Every second, GACKX is gathering information, optimizing workflows, and learning from global data patterns to provide you with the most advanced automation engine on earth.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">5,281+</span> agents active right now
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative z-10 min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Live Intelligence Feed</span>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">GLOBAL_OS_V2</span>
              </div>

              <div className="space-y-4 flex-1">
                <AnimatePresence mode="popLayout">
                  {visibleEvents.map((event, i) => (
                    <motion.div
                      key={event.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-center gap-4"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center ${event.color}`}>
                        <event.icon className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{event.text}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-1 h-1 rounded-full bg-primary/40" />
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Processing 1.2M events/sec</p>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
