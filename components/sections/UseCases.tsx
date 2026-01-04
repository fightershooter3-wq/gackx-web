"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, CreditCard, MessageSquare, Share2, FileText } from "lucide-react"

const useCases = [
  {
    title: "Lead Management",
    description: "Capture leads from forms, enrich data with AI, and sync directly to your CRM.",
    icon: Users,
    example: "Form → AI Enrichment → Salesforce"
  },
  {
    title: "Billing & Invoicing",
    description: "Automate your entire billing cycle from invoice generation to payment reminders.",
    icon: CreditCard,
    example: "Order → Stripe → QuickBooks → Email"
  },
  {
    title: "Customer Support",
    description: "Handle common queries with AI chatbots and escalate complex issues to humans.",
    icon: MessageSquare,
    example: "Ticket → AI Triage → Slack Notification"
  },
  {
    title: "Email Marketing",
    description: "Send personalized follow-ups and nurture sequences based on user behavior.",
    icon: Mail,
    example: "User Action → Segment → Personalized Email"
  },
  {
    title: "Social Media",
    description: "Schedule posts, track mentions, and automate engagement across all platforms.",
    icon: Share2,
    example: "Blog Post → AI Summary → Multi-platform Post"
  },
  {
    title: "Report Generation",
    description: "Aggregate data from multiple sources and generate beautiful PDF reports automatically.",
    icon: FileText,
    example: "Data Source → AI Analysis → PDF → Email"
  }
]

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Every Business Need</h2>
            <p className="text-muted-foreground text-lg">
              From simple tasks to complex enterprise workflows, GACKX handles it all with ease.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <useCase.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Workflow Example</p>
                    <p className="text-xs font-mono text-foreground/80">{useCase.example}</p>
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
