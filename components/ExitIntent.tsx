"use client"

import * as React from "react"
import { X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export function ExitIntent() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [hasShown, setHasShown] = React.useState(false)

  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Wait! Don't leave yet.</h2>
            <p className="text-muted-foreground mb-8">
              Get our "Automation Blueprint" for 2026 and see how top companies are scaling with AI.
            </p>
            
            <div className="space-y-4">
              <Input placeholder="Enter your work email" className="h-12" />
              <Button className="w-full h-12 text-lg">Send Me the Blueprint</Button>
            </div>
            
            <p className="mt-6 text-xs text-muted-foreground">
              Join 5,000+ operators receiving our weekly automation insights.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
