import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "GACKX has completely transformed how we handle our lead pipeline. What used to take hours now happens in seconds.",
    author: "Sarah Chen",
    role: "COO at TechFlow",
    avatar: "SC"
  },
  {
    quote: "The AI reasoning engine is a game-changer. It's like having a junior analyst working 24/7 on our data processing.",
    author: "Marcus Thorne",
    role: "Founder of ScaleUp",
    avatar: "MT"
  },
  {
    quote: "Finally, an automation platform that is actually easy to use but powerful enough for enterprise needs.",
    author: "Elena Rodriguez",
    role: "Product Manager at GlobalLink",
    avatar: "ER"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Innovative Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <p className="text-lg italic mb-8 text-foreground/80">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
