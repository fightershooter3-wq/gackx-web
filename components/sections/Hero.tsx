"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
        >
          <Sparkles className="w-3 h-3" />
          <span>THE FUTURE OF WORK IS HERE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          Automate Smarter <br className="hidden md:block" /> with <span className="text-primary">GACKX</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build, run, and scale production-ready AI workflows without writing a single line of code. Connect your apps, APIs, and business processes in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20 group">
            Start Automating Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold bg-background/50 backdrop-blur-sm">
            <PlayCircle className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale"
        >
          <span className="text-xl font-bold tracking-tighter">FORBES</span>
          <span className="text-xl font-bold tracking-tighter">TECHCRUNCH</span>
          <span className="text-xl font-bold tracking-tighter">WIRED</span>
          <span className="text-xl font-bold tracking-tighter">THE VERGE</span>
          <span className="text-xl font-bold tracking-tighter">FAST COMPANY</span>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-3 shadow-2xl overflow-hidden">
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
               <div className="relative z-20 text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Zap className="w-12 h-12 text-primary fill-current" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Visual Workflow Builder</h3>
                  <p className="text-muted-foreground text-lg">Drag, drop, and connect your business logic</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
