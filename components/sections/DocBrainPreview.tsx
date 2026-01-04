"use client"

import { motion } from "framer-motion"
import { FileText, Upload, Search, CheckCircle2, ArrowRight } from "lucide-react"

export function DocBrainPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Document Intelligence</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">The GACKX Doc Brain</h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Upload any PDF, DOCX, or research paper and let GACKX extract intelligence instantly. Summarize complex documents, find specific data points, and turn unstructured text into actionable workflow triggers.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Instant Multi-file Summarization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Automated Action Item Extraction</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Semantic Search Across Your Entire Library</span>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Try Doc Brain Free
            </button>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10">
              <div className="border-2 border-dashed border-primary/30 rounded-3xl p-12 text-center bg-primary/5 group hover:border-primary transition-colors cursor-pointer">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">Drop your documents here</h4>
                <p className="text-sm text-muted-foreground">PDF, DOCX, TXT up to 50MB</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between animate-pulse">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="text-xs font-medium">market_research_2026.pdf</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase">Analyzing...</span>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-medium">q4_financial_report.docx</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
