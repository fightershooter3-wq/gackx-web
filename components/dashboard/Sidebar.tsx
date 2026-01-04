"use client"

import Link from "next/link"
import { 
  LayoutDashboard, 
  Zap, 
  Link2, 
  FileText, 
  BarChart3, 
  Settings, 
  Shield, 
  CreditCard,
  Users,
  History,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Workflows", icon: Zap, href: "/dashboard/workflows" },
  { name: "Integrations", icon: Link2, href: "/dashboard/integrations" },
  { name: "Doc Brain", icon: FileText, href: "/dashboard/docs" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { name: "Team", icon: Users, href: "/dashboard/team" },
  { name: "Logs", icon: History, href: "/dashboard/logs" },
  { name: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { name: "Security", icon: Shield, href: "/dashboard/security" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="bg-primary p-1.5 rounded-lg">
          <Zap className="w-5 h-5 text-primary-foreground fill-current" />
        </div>
        <span className="text-xl font-bold tracking-tighter">GACKX OS</span>
      </div>

      <div className="px-4 mb-6">
        <button className="w-full bg-primary text-primary-foreground rounded-xl py-2.5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
          <Plus className="w-4 h-4" /> New Workflow
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">GS</div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold truncate">Garvit Sharma</p>
            <p className="text-[10px] text-muted-foreground">Enterprise Plan</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
