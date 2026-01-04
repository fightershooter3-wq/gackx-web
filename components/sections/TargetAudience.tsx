import { Rocket, Building2, Palette, ShoppingCart, Globe } from "lucide-react"

const audiences = [
  { name: "Startups", icon: Rocket },
  { name: "SMEs", icon: Building2 },
  { name: "Creators", icon: Palette },
  { name: "Agencies", icon: Globe },
  { name: "E-commerce", icon: ShoppingCart }
]

export function TargetAudience() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Who is GACKX for?</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {audiences.map((audience) => (
            <div key={audience.name} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all shadow-sm">
                <audience.icon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {audience.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
