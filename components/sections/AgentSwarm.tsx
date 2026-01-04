"use client"

import { motion } from "framer-motion"
import { Cpu, MessageSquare, Search, Database, Zap, ArrowRight } from "lucide-react"

const agents = [
  { id: 1, name: "Researcher", icon: Search, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: 2, name: "Analyst", icon: Cpu, color: "text-purple-500", bg: "bg-purple-500/10" },
  { id: 3, name: "Writer", icon: MessageSquare, color: "text-green-500", bg: "bg-green-500/10" },
  { id: 4, name: "Deployer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" }
]

export function AgentSwarm() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center">
            {/* Central Objective */}
            <div className="w-32 h-32 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-center p-4 z-20 shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              <span className="text-xs font-bold uppercase tracking-tighter">Global Objective</span>
            </div>

            {/* Orbiting Agents */}
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                className="absolute"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: 300 + i * 60, height: 300 + i * 60 }}
              >
                <motion.div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl ${agent.bg} border border-border flex flex-col items-center justify-center shadow-xl backdrop-blur-sm`}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <agent.icon className={`w-6 h-6 ${agent.color} mb-1`} />
                  <span className="text-[8px] font-bold uppercase">{agent.name}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connection Lines (Simplified) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-[400px] h-[400px] border border-dashed border-primary rounded-full" />
              <div className="w-[500px] h-[500px] border border-dashed border-primary rounded-full" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Autonomous Collaboration</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">AI Agent Swarms</h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              GACKX moves beyond simple linear workflows. Our platform allows multiple specialized AI agents to collaborate autonomously on complex objectives, sharing context and tools in real-time.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Shared Context Memory</h4>
                  <p className="text-sm text-muted-foreground">Agents maintain a unified memory of the project, ensuring consistency across all tasks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Dynamic Tool Selection</h4>
                  <p className="text-sm text-muted-foreground">Agents autonomously decide which APIs and tools to use based on the current sub-task.</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-primary font-bold group">
              Learn about Swarm Intelligence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
