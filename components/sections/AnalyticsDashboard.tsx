"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Clock, Zap, Download, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Total Automations", value: "1,284", change: "+12%", icon: Zap },
  { label: "Time Saved", value: "420h", change: "+18%", icon: Clock },
  { label: "Success Rate", value: "99.9%", change: "Stable", icon: TrendingUp },
  { label: "AI Tokens Used", value: "2.4M", change: "-5%", icon: BarChart3 }
]

export function AnalyticsDashboard() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Measure Your Productivity ROI</h3>
            <p className="text-xl text-muted-foreground mb-10">
              GACKX doesn't just automate; it provides deep insights into your operational efficiency and the tangible value created by AI.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl border border-border bg-muted/20">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Weekly Email Summaries</h4>
                  <p className="text-sm text-muted-foreground">Get a detailed report of your team's automation performance every Monday.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl border border-border bg-muted/20">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Exportable Reports</h4>
                  <p className="text-sm text-muted-foreground">Download PDF or CSV reports for your stakeholders and investors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <h4 className="text-xl font-bold">Productivity Overview</h4>
              <Badge variant="outline" className="gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Live Data
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-500' : stat.change === 'Stable' ? 'text-muted-foreground' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="h-48 w-full bg-muted/50 rounded-2xl border border-border flex items-end justify-between p-6 gap-2">
              {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  className="w-full bg-primary/20 rounded-t-lg relative group"
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                <span key={d} className="text-[10px] font-bold text-muted-foreground">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
