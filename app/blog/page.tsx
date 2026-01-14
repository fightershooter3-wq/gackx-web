import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const posts = [
  {
    title: "The Future of AI Automation in 2026",
    excerpt: "How autonomous agents are changing the landscape of business process management. Discover the shift from linear workflows to intelligent swarms.",
    date: "Jan 12, 2026",
    category: "Trends",
    author: "Garvit Sharma"
  },
  {
    title: "5 Workflows Every SaaS Startup Needs",
    excerpt: "From lead enrichment to churn prevention, these automations are essential for growth. Learn how to scale your operations without increasing headcount.",
    date: "Jan 8, 2026",
    category: "Guides",
    author: "GACKX Team"
  },
  {
    title: "Introducing GACKX AI Reasoning Engine",
    excerpt: "A deep dive into our new engine that allows for complex decision making in workflows. See how AI can now handle 'if-then' logic with human-like intuition.",
    date: "Jan 5, 2026",
    category: "Product",
    author: "Garvit Sharma"
  },
  {
    title: "How to Reduce Operational Costs by 40% with AI",
    excerpt: "A comprehensive guide on identifying manual bottlenecks and replacing them with autonomous agents. Real-world case studies included.",
    date: "Dec 28, 2025",
    category: "Business",
    author: "GACKX Team"
  },
  {
    title: "The Ethics of Autonomous Business Operations",
    excerpt: "As we move towards a fully automated world, how do we ensure transparency and human control? Our philosophy on responsible AI usage.",
    date: "Dec 20, 2025",
    category: "Philosophy",
    author: "Garvit Sharma"
  }
]

export default function BlogPage() {
  return (
    <main className=\"min-h-screen\">
      <Navbar />
      <div className=\"pt-32 pb-20 container mx-auto px-4\">
        <div className=\"max-w-3xl mb-16\">
          <h1 className=\"text-4xl md:text-7xl font-bold mb-6 tracking-tighter\">Blog & <span className=\"text-primary\">Resources</span></h1>
          <p className=\"text-xl text-muted-foreground leading-relaxed\">
            Insights, guides, and updates from the forefront of the AI automation revolution.
          </p>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {posts.map((post, i) => (
            <Card key={i} className=\"hover:border-primary transition-all cursor-pointer group bg-card/50 backdrop-blur-sm\">
              <CardHeader className=\"pb-4\">
                <div className=\"flex items-center justify-between mb-4\">
                  <div className=\"text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded\">{post.category}</div>
                  <div className=\"flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-widest\">
                    <Calendar className=\"w-3 h-3\" /> {post.date}
                  </div>
                </div>
                <CardTitle className=\"text-2xl font-bold leading-tight group-hover:text-primary transition-colors\">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=\"text-muted-foreground text-sm mb-6 leading-relaxed\">{post.excerpt}</p>
                <div className=\"flex items-center justify-between pt-4 border-t border-border/50\">
                  <div className=\"flex items-center gap-2 text-xs font-medium\">
                    <div className=\"w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[8px] font-bold\">GS</div>
                    <span>{post.author}</span>
                  </div>
                  <div className=\"text-primary font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity\">
                    Read More <ArrowRight className=\"w-3 h-3\" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
