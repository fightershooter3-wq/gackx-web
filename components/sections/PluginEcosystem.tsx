"use client"

import { motion } from "framer-motion"
import { Puzzle, Download, Star, ArrowRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const plugins = [
  { name: "LinkedIn Scraper Pro", author: "GACKX Labs", rating: 4.9, category: "Data" },
  { name: "Stripe Revenue Bot", author: "FinTechAI", rating: 4.8, category: "Finance" },
  { name: "Slack Sentiment Analyst", author: "TeamOps", rating: 5.0, category: "Communication" },
  { name: "HubSpot Lead Sync", author: "SalesFlow", rating: 4.7, category: "CRM" }
]

export function PluginEcosystem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Extensibility</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">The GACKX Plugin Ecosystem</h3>
            <p className="text-xl text-muted-foreground">
              Extend the power of GACKX with hundreds of community-built plugins and extensions. From custom data scrapers to advanced financial models.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            Browse Marketplace <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plugins.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-3xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Puzzle className="w-6 h-6" />
              </div>
              <Badge variant="secondary" className="mb-3 text-[10px] uppercase tracking-widest">{p.category}</Badge>
              <h4 className="text-lg font-bold mb-1">{p.name}</h4>
              <p className="text-xs text-muted-foreground mb-6">by {p.author}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  {p.rating}
                </div>
                <button className="text-xs font-bold flex items-center gap-1 text-primary">
                  <Download className="w-3 h-3" /> Install
                </button>
              </div>
            </motion.div>
          ))}
          
          <div className="border-2 border-dashed border-border rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-1">Build Your Own</h4>
            <p className="text-xs text-muted-foreground">Join our developer program</p>
          </div>
        </div>
      </div>
    </section>
  )
}
