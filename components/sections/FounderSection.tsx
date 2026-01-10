"use client"

import { motion } from "framer-motion"

export function FounderSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-12">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <img 
                src="https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68f638e4538fe6d02b99f109/attachments/583a836a-7e4e-45f0-bc9e-40b343622426-WhatsApp%20Image%202025-12-28%20at%2022.09.22.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20260110%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20260110T125519Z&X-Amz-Expires=86400&X-Amz-Signature=0a52c6e7537d2cb47e5bc3a02d36a732aca0bba8a7189c9f09115d192e09b82a&X-Amz-SignedHeaders=host&x-id=GetObject&v=1768050886" 
                alt="Garvit Sharma" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter">Garvit Sharma</h3>
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-8">Founder & Visionary Architect, GACKX</p>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl italic text-foreground leading-relaxed font-medium">
                "GACKX is the manifestation of a singular vision: to liberate human creativity from the shackles of repetitive labor. We aren't just building a tool; we are architecting the future of intelligent operations, where every business can scale with the speed of thought and the precision of AI."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
