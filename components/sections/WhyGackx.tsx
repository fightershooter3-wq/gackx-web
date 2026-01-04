import { Shield, Zap, Cpu, Globe } from "lucide-react"

const reasons = [
  {
    title: "Built for Speed",
    description: "Our engine is optimized for low-latency execution of complex multi-step workflows.",
    icon: Zap
  },
  {
    title: "AI-First Architecture",
    description: "Unlike legacy tools, GACKX was built from the ground up to leverage large language models.",
    icon: Cpu
  },
  {
    title: "Global Infrastructure",
    description: "Run your automations close to your data with our distributed global network.",
    icon: Globe
  },
  {
    title: "Security by Design",
    description: "SOC2 Type II compliant with end-to-end encryption for all your sensitive data.",
    icon: Shield
  }
]

export function WhyGackx() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GACKX?</h2>
          <p className="text-primary-foreground/70 text-lg">
            The differentiator is in the details. We've built the most robust automation platform on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
