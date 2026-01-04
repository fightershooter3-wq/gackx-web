"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Star, Download, ArrowRight, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const items = [
  { title: "SEO Content Pack", author: "Alex R.", rating: 4.9, downloads: "12k", price: "Free", category: "Marketing" },
  { title: "Python Debugger Pro", author: "Sarah K.", rating: 5.0, downloads: "8k", price: "9", category: "Coding" },
  { title: "Investor Update Bot", author: "Garvit S.", rating: 4.8, downloads: "5k", price: "Free", category: "Business" },
  { title: "Legal Doc Summarizer", author: "LegalAI", rating: 4.7, downloads: "3k", price: "9", category: "Legal" }
]

export function MarketplacePreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Ecosystem</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Prompt & Workflow Marketplace</h3>
            <p className="text-xl text-muted-foreground">
              Discover, install, and monetize premium AI assets. Join a global community of automation creators.
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search marketplace..." className="pl-10" />
            </div>
            <button className="p-2 border border-border rounded-lg hover:bg-background transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-background border border-border rounded-3xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="aspect-video bg-muted rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <ShoppingBag className="w-10 h-10 text-primary/20 group-hover:scale-110 transition-transform" />
                <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground border-border">
                  {item.category}
                </Badge>
              </div>
              
              <h4 className="text-lg font-bold mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground mb-4">by {item.author}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  {item.rating}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Download className="w-3 h-3" />
                  {item.downloads}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-bold text-primary">{item.price}</span>
                <button className="text-xs font-bold flex items-center gap-1 group-hover:text-primary transition-colors">
                  Install <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-primary/20 bg-primary/5 text-center">
          <h4 className="text-2xl font-bold mb-4">Become a GACKX Creator</h4>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build your own prompt packs and workflows, publish them to the marketplace, and earn revenue from every installation.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold">
            Start Creating
          </button>
        </div>
      </div>
    </section>
  )
}
