import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Zap, Target, Eye, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">The Future of Work is <span className="text-primary">Automated</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GACKX was founded on the belief that human potential is wasted on repetitive tasks. We're building the infrastructure for the next generation of business operations.
            </p>
          </div>
        </div>

        <div className="bg-muted/30 py-24 mb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="aspect-video rounded-3xl bg-card border border-border overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  To democratize enterprise-grade AI automation, making it accessible to every business, from solo founders to global corporations. We believe that by automating the mundane, we free people to do the extraordinary.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-primary text-3xl mb-2">10M+</h4>
                    <p className="text-sm text-muted-foreground">Tasks Automated</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-3xl mb-2">5k+</h4>
                    <p className="text-sm text-muted-foreground">Active Teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Precision</h3>
              <p className="text-muted-foreground">We build for 100% accuracy. In automation, there is no room for "almost."</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-muted-foreground">No black boxes. You should always know exactly why an automation did what it did.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Human-Centric</h3>
              <p className="text-muted-foreground">AI should empower humans, not replace them. We build tools that augment creativity.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the Revolution</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              We're always looking for brilliant minds to help us build the future of automation.
            </p>
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
