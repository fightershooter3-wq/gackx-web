"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Globe, Laptop, Landmark, Users, Headset, Rocket, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    problem: "Manual order processing and inventory sync across multiple channels.",
    solution: "Automated sync between Shopify, Amazon, and ERP systems with AI-driven stock forecasting.",
    outcome: "90% reduction in manual entry.",
    workflow: "Order → AI Stock Check → ERP Sync"
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    icon: Laptop,
    problem: "High churn due to slow onboarding and lack of behavioral triggers.",
    solution: "Automated onboarding sequences and proactive churn alerts based on usage patterns.",
    outcome: "25% increase in conversion.",
    workflow: "Signup → AI Onboarding → Usage Alert"
  },
  {
    id: "agencies",
    title: "Agencies",
    icon: Globe,
    problem: "Fragmented client reporting and repetitive lead qualification tasks.",
    solution: "Unified data pipelines that aggregate metrics and AI agents that qualify leads 24/7.",
    outcome: "15+ hours saved per manager.",
    workflow: "Lead → AI Qualify → CRM → Slack"
  },
  {
    id: "finance",
    title: "Finance",
    icon: Landmark,
    problem: "Delayed payments and manual reconciliation of thousands of invoices.",
    solution: "Automated invoice generation, payment reminders, and bank reconciliation.",
    outcome: "DSO reduced by 12 days.",
    workflow: "Milestone → Invoice → Reminder"
  },
  {
    id: "support",
    title: "Customer Support",
    icon: Headset,
    problem: "Overwhelmed support teams handling repetitive Tier-1 queries.",
    solution: "AI-powered triage and automated resolution for common issues with human escalation.",
    outcome: "70% faster response time.",
    workflow: "Ticket → AI Triage → Auto-Reply"
  },
  {
    id: "startups",
    title: "Startups",
    icon: Rocket,
    problem: "Limited resources struggling to scale operations and outreach.",
    solution: "Lean automation stacks that handle everything from cold outreach to investor updates.",
    outcome: "4x operational leverage.",
    workflow: "Prospect → AI Outreach → Meeting"
  }
]

export function IndustryUseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Industry Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Tailored Automation for Every Sector</h3>
          <p className="text-xl text-muted-foreground">
            GACKX provides industry-specific workflow blueprints designed to solve your unique operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold">{industry.title}</h4>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{industry.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-sm text-foreground font-medium">{industry.solution}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 mb-8">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">AI Logic Flow</p>
                    <p className="text-xs font-mono text-muted-foreground">{industry.workflow}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Impact</p>
                      <p className="text-lg font-bold text-primary">{industry.outcome}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Try Template <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
