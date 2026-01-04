"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background border border-border rounded-[3rem] p-8 md:p-20 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tighter">Ready to Automate Your Success?</h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the next generation of businesses scaling with GACKX. Start your 14-day free trial and build your first automation in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <Input placeholder="Enter your work email" className="h-14 text-lg rounded-xl" />
              <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl shadow-xl shadow-primary/20" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Free onboarding session</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
