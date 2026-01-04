"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  MessageSquare, 
  Mic, 
  Search, 
  Globe, 
  Settings, 
  User, 
  Shield, 
  Zap, 
  FileText, 
  BarChart3, 
  LayoutGrid,
  Play,
  Save,
  Plus,
  MoreHorizontal,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PlatformPreview() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The GACKX OS</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">One Platform. Infinite Intelligence.</h3>
          <p className="text-xl text-muted-foreground">
            Experience the most advanced AI workspace ever built. From conversational memory to autonomous task pipelines.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-card border border-border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[700px]">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-muted/30 border-r border-border p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-2 mb-6">
              <div className="bg-primary p-1 rounded-lg">
                <Zap className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="font-bold tracking-tighter">GACKX OS</span>
            </div>
            
            <Button variant="ghost" className="justify-start gap-3 bg-primary/10 text-primary">
              <MessageSquare className="w-4 h-4" /> AI Assistant
            </Button>
            <Button variant="ghost" className="justify-start gap-3">
              <LayoutGrid className="w-4 h-4" /> Workflows
            </Button>
            <Button variant="ghost" className="justify-start gap-3">
              <FileText className="w-4 h-4" /> Doc Brain
            </Button>
            <Button variant="ghost" className="justify-start gap-3">
              <BarChart3 className="w-4 h-4" /> Analytics
            </Button>
            
            <div className="mt-auto pt-4 border-t border-border">
              <div className="flex items-center gap-3 px-2 py-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">GS</div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-bold truncate">Garvit Sharma</p>
                  <p className="text-[10px] text-muted-foreground">Pro Plan</p>
                </div>
                <Settings className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-background relative">
            {/* Top Bar */}
            <div className="h-14 border-b border-border px-6 flex items-center justify-between bg-background/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Personalized mode active
                </Badge>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Auto-detect: English</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Tabs defaultValue="ai" className="w-[200px]">
                  <TabsList className="grid w-full grid-cols-2 h-8">
                    <TabsTrigger value="ai" className="text-[10px]">AI Only</TabsTrigger>
                    <TabsTrigger value="web" className="text-[10px]">Web Assist</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted/50 rounded-2xl p-4 text-sm max-w-[80%]">
                  Hello Garvit! I remember you were working on the **E-commerce Automation** project yesterday. Would you like to continue where we left off or start a new workflow?
                </div>
              </div>

              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl p-4 text-sm max-w-[80%]">
                  Let's build a new workflow for **Lead Enrichment**. I want to summarize LinkedIn profiles and sync them to HubSpot.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted/50 rounded-2xl p-4 text-sm max-w-[80%] space-y-4">
                  <p>Great idea. I've initialized the **Lead Enrichment Pipeline** for you. Here's the proposed chain:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-background border border-border">
                      <CheckCircle2 className="w-3 h-3 text-green-500" /> 1. Extract Profile Data
                    </div>
                    <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-background border border-border">
                      <CheckCircle2 className="w-3 h-3 text-green-500" /> 2. AI Summary (Professional Tone)
                    </div>
                    <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-background border border-border">
                      <CheckCircle2 className="w-3 h-3 text-green-500" /> 3. Sync to HubSpot CRM
                    </div>
                  </div>
                  <Button size="sm" className="w-full gap-2">
                    <Play className="w-3 h-3" /> Run Workflow
                  </Button>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-border bg-background/50 backdrop-blur-sm">
              <div className="relative">
                <Input 
                  placeholder="Ask GACKX anything or trigger a workflow..." 
                  className="pr-24 h-12 rounded-xl border-primary/20 focus-visible:ring-primary"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button size="icon" className="h-8 w-8 bg-primary">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Privacy Settings
                  </button>
                  <button className="text-[10px] text-muted-foreground hover:text-primary flex items-center gap-1">
                    <Save className="w-3 h-3" /> View Memory
                  </button>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Press <kbd className="px-1 rounded bg-muted border border-border">⌘</kbd> + <kbd className="px-1 rounded bg-muted border border-border">K</kbd> for Command Palette
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
