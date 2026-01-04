import { DashboardSidebar } from "@/components/dashboard/Sidebar"
import { 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  ArrowUpRight,
  MoreHorizontal
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "Active Workflows", value: "42", change: "+3", icon: Zap },
  { label: "Tasks Executed", value: "12,842", change: "+1,204", icon: CheckCircle2 },
  { label: "Success Rate", value: "99.9%", change: "Stable", icon: TrendingUp },
  { label: "Time Saved", value: "420h", change: "+18h", icon: Clock },
]

const recentLogs = [
  { id: "8291", name: "Lead Enrichment", status: "Success", time: "2 mins ago", duration: "1.2s" },
  { id: "8292", name: "Invoice Processing", status: "Success", time: "15 mins ago", duration: "0.8s" },
  { id: "8293", name: "Slack Notification", status: "Failed", time: "1 hour ago", duration: "0.5s" },
  { id: "8294", name: "Data Sync", status: "Success", time: "3 hours ago", duration: "2.4s" },
]

export default function DashboardPage() {
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
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="p-8 rounded-3xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Recent Execution Logs</h2>
                <button className="text-sm text-primary font-bold flex items-center gap-1">View All <ArrowUpRight className="w-3 h-3" /></button>
              </div>
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        log.status === "Success" ? "bg-green-500" : "bg-red-500"
                      )} />
                      <div>
                        <p className="text-sm font-bold">{log.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">ID: {log.id} • {log.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-muted-foreground">{log.time}</span>
                      <button className="p-1 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-8 rounded-3xl border border-border bg-card shadow-sm">
              <h2 className="text-xl font-bold mb-8">Active Task Queue</h2>
              <div className="flex items-center justify-center h-40 border-2 border-dashed border-border rounded-2xl">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-20" />
                  <p className="text-sm text-muted-foreground">No tasks currently in queue.</p>
                </div>
              </div>
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
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI Tokens</span>
                    <span className="font-bold">2.4M / 10M</span>
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[24%]" />
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-primary font-bold rounded-xl text-sm mt-4">Manage Billing</button>
              </div>
            </section>

            <section className="p-8 rounded-3xl border border-border bg-card shadow-sm">
              <h2 className="text-xl font-bold mb-6">System Health</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">API Engine</span>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/5">Operational</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Worker Nodes</span>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/5">Operational</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Database</span>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/5">Operational</Badge>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
