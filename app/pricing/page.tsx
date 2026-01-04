import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32">
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
