import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const posts = [
  {
    title: "The Future of AI Automation in 2026",
    excerpt: "How autonomous agents are changing the landscape of business process management.",
    date: "Jan 1, 2026",
    category: "Trends"
  },
  {
    title: "5 Workflows Every SaaS Startup Needs",
    excerpt: "From lead enrichment to churn prevention, these automations are essential for growth.",
    date: "Dec 28, 2025",
    category: "Guides"
  },
  {
    title: "Introducing GACKX AI Reasoning Engine",
    excerpt: "A deep dive into our new engine that allows for complex decision making in workflows.",
    date: "Dec 15, 2025",
    category: "Product"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Blog & Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="text-xs font-bold text-primary uppercase mb-2">{post.category}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="text-xs text-muted-foreground">{post.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
