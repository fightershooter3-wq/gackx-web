"use client"

import { motion } from "framer-motion"

export function FounderSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-12 group">
            {/* Advanced Neon Shading Effect */}
            <div className="absolute -inset-6 bg-primary/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-full animate-pulse opacity-50 blur-sm" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-80" />
            
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
              <img 
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68f638e4538fe6d02b99f109/attachments/c1b9f5f8-e305-448c-a5fd-0bd3cab66a22-garvit_cutout_hero.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20260104%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20260104T150346Z&X-Amz-Expires=86400&X-Amz-Signature=160342d5fd7770807c134d7c3ec6c0c03bb4df33c6e87aaaca43f75ef905a775&X-Amz-SignedHeaders=host&x-id=GetObject" 
                alt="Garvit Sharma" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter">Garvit Sharma</h3>
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-8">Founder & Visionary Architect, GACKX</p>
            
            <div className="relative">
              <span className="absolute -top-8 -left-8 text-8xl text-primary/10 font-serif">"</span>
              <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-medium">
                GACKX is the manifestation of a singular vision: to liberate human creativity from the shackles of repetitive labor. We aren't just building a tool; we are architecting the future of intelligent operations, where every business can scale with the speed of thought and the precision of AI.
              </p>
              <span className="absolute -bottom-16 -right-8 text-8xl text-primary/10 font-serif">"</span>
            </div>
            
            <div className="mt-12 flex justify-center gap-4">
              <div className="h-px w-12 bg-primary/30 self-center" />
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Leading the Automation Revolution</p>
              <div className="h-px w-12 bg-primary/30 self-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
