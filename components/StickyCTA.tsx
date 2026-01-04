"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md"
        >
          <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-bold">Ready to scale?</p>
              <p className="text-xs text-muted-foreground">Start your 14-day free trial.</p>
            </div>
            <Button className="flex-1 sm:flex-none bg-primary shadow-lg shadow-primary/20">
              Get Started Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
