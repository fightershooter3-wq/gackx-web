import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: January 1, 2026</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using GACKX, you agree to be bound by these Terms of Service.</p>
          <h2>2. Description of Service</h2>
          <p>GACKX provides an AI-driven automation platform that allows users to create and manage workflows.</p>
          <h2>3. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.</p>
          {/* Add more terms as needed */}
        </div>
      </div>
      <Footer />
    </main>
  )
}
