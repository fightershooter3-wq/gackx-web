import { Clock, TrendingUp, ShieldCheck, Zap } from "lucide-react"

const benefits = [
  {
    title: "Faster Execution",
    description: "Deploy workflows in minutes that used to take weeks of development time.",
    icon: Zap
  },
  {
    title: "Reduced Manual Effort",
    description: "Free your team from repetitive tasks so they can focus on high-value work.",
    icon: Clock
  },
  {
    title: "Increased Output",
    description: "Scale your operations without increasing headcount by automating core processes.",
    icon: TrendingUp
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance to keep your business data safe.",
    icon: ShieldCheck
  }
]

export function Benefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
