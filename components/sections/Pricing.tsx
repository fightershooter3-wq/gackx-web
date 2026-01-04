import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "/bin/bash",
    description: "Perfect for individuals and small projects.",
    features: ["5 active workflows", "1,000 tasks/month", "Standard integrations", "Community support"],
    buttonText: "Get Started",
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "9",
    description: "Ideal for growing businesses and power users.",
    features: ["Unlimited workflows", "50,000 tasks/month", "Premium integrations", "AI reasoning engine", "Priority support"],
    buttonText: "Start Free Trial",
    variant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features for large-scale operations.",
    features: ["Unlimited tasks", "Custom integrations", "Dedicated account manager", "SLA & uptime guarantee", "On-premise options"],
    buttonText: "Contact Sales",
    variant: "outline" as const
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your business needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.variant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
