import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: January 1, 2026</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account or contact support.</p>
          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services.</p>
          <h2>3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
          {/* Add more privacy details as needed */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
