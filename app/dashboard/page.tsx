"use client"

import * as React from "react"
import { DashboardSidebar } from "@/components/dashboard/Sidebar"
import { 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  MoreHorizontal,
  Plus,
  Loader2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [automations, setAutomations] = React.useState<any[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('/api/automations')
      .then(res => res.json())
      .then(data => {
        setAutomations(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back, Garvit. Here is what happened today.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">Export Data</button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold shadow-lg shadow-primary/20">Upgrade Plan</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard label="Active Workflows" value={automations.length.toString()} change="+3" icon={Zap} />
          <StatCard label="Tasks Executed" value="12,842" change="+1,204" icon={CheckCircle2} />
          <StatCard label="Success Rate" value="99.9%" change="Stable" icon={TrendingUp} />
          <StatCard label="Time Saved" value="420h" change="+18h" icon={Clock} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="p-8 rounded-3xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Your Automations</h2>
                <button className="text-sm text-primary font-bold flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Create New
                </button>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                <div className="space-y-4">
                  {automations.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl">
                      <p className="text-muted-foreground">No automations created yet.</p>
                    </div>
                  ) : (
                    automations.map((auto) => (
                      <div key={auto.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            auto.status === "active" ? "bg-green-500" : "bg-yellow-500"
                          )} />
                          <div>
                            <p className="text-sm font-bold">{auto.name}</p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">{auto.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <Badge variant="outline" className="text-[10px] uppercase">{auto.status}</Badge>
                          <button className="p-1 text-muted-foreground hover:text-foreground">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </section>
          </div>

          <div className="space-y-8">
            <section className="p-8 rounded-3xl border border-border bg-primary text-primary-foreground shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-xl font-bold mb-4 relative z-10">Usage Quota</h2>
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tasks Used</span>
                    <span className="font-bold">12,842 / 50,000</span>
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[25%]" />
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-primary font-bold rounded-xl text-sm mt-4">Manage Billing</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ label, value, change, icon: Icon }: any) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{change}</span>
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{label}</p>
    </div>
  )
}
