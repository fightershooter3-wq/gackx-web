export const runtime = "edge";
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const solutionsData: Record<string, any> = {
  ecommerce: {
    title: "E-commerce Automation",
    description: "Scale your online store without scaling your manual workload. Automate inventory, orders, and customer support.",
    benefits: ["Real-time Inventory Sync", "Automated Order Processing", "AI Customer Support", "Personalized Marketing"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop"
  },
  agencies: {
    title: "Agency Workflows",
    description: "Deliver more value to your clients with automated reporting, lead qualification, and project management.",
    benefits: ["Automated Client Reporting", "24/7 Lead Qualification", "Project Task Automation", "Multi-client Dashboards"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
  },
  saas: {
    title: "SaaS Operations",
    description: "Optimize your SaaS growth with automated onboarding, churn prevention, and usage monitoring.",
    benefits: ["Personalized Onboarding", "Churn Risk Alerts", "Usage-based Triggers", "Automated Billing Sync"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  finance: {
    title: "Finance & Invoicing",
    description: "Streamline your financial operations with automated invoicing, reconciliation, and payment tracking.",
    benefits: ["Automated Invoice Generation", "Bank Reconciliation", "Payment Reminders", "Expense Tracking"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop"
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutionsData[slug] || solutionsData.ecommerce;

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                {data.description}
              </p>
              <div className="space-y-4 mb-10">
                {data.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="h-12 px-8">Get Started with {data.title}</Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border border-border p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-sm font-bold mb-2">"GACKX transformed our {slug} operations in weeks."</p>
                <p className="text-xs text-muted-foreground">— Head of Ops, Fortune 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
