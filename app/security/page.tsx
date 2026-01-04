import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SecurityEthics } from "@/components/sections/SecurityEthics"
import { Shield, Lock, Eye, CheckCircle, FileText, AlertCircle } from "lucide-react"

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3.",
    icon: Lock
  },
  {
    title: "Compliance",
    description: "SOC2 Type II, GDPR, and CCPA compliant infrastructure and processes.",
    icon: Shield
  },
  {
    title: "Audit Logs",
    description: "Detailed logs of all user and system actions for security monitoring.",
    icon: Eye
  },
  {
    title: "Vulnerability Scanning",
    description: "Continuous automated scanning and regular third-party penetration testing.",
    icon: AlertCircle
  }
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Security & Trust</h1>
            <p className="text-xl text-muted-foreground">
              Your data security is our highest priority. We employ industry-leading practices to ensure your information and workflows remain protected.
            </p>
          </div>
        </div>

        <SecurityEthics />

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-2xl border border-border bg-card/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 pb-24">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need our Security Whitepaper?</h2>
                <p className="text-muted-foreground">
                  Download our detailed security documentation for your compliance team.
                </p>
              </div>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold flex items-center gap-2">
                <FileText className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
