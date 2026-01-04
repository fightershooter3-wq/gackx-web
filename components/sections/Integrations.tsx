import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const integrations = [
  "Slack", "HubSpot", "Salesforce", "Stripe", "Discord", "Google Drive", 
  "Shopify", "Mailchimp", "Notion", "Trello", "Zendesk", "Airtable"
]

export function Integrations() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect Your Entire Stack</h2>
            <p className="text-muted-foreground text-lg mb-8">
              GACKX plays well with others. Connect to your favorite tools and CRMs in seconds with our pre-built integrations.
            </p>
            <Button variant="outline" className="group">
              View All 1000+ Integrations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {integrations.map((item) => (
              <div key={item} className="aspect-square rounded-xl border border-border bg-card flex items-center justify-center p-4 hover:border-primary/50 transition-colors group">
                <div className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-tighter text-center">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
