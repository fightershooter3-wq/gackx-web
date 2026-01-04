import Link from "next/link"
import { Zap, Twitter, Github, Linkedin, Mail, Globe, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">GACKX</span>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm mb-8">
              The enterprise-ready AI automation platform. Build, run, and scale mission-critical workflows with bank-grade security and 99.99% uptime.
            </p>
            <div className="flex gap-5">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/integrations" className="text-muted-foreground hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/developers" className="text-muted-foreground hover:text-primary transition-colors">Developer API</Link></li>
              <li><Link href="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/solutions/ecommerce" className="text-muted-foreground hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link href="/solutions/agencies" className="text-muted-foreground hover:text-primary transition-colors">Agencies</Link></li>
              <li><Link href="/solutions/saas" className="text-muted-foreground hover:text-primary transition-colors">SaaS</Link></li>
              <li><Link href="/solutions/finance" className="text-muted-foreground hover:text-primary transition-colors">Finance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GACKX AI Automation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="w-3 h-3" />
              <span>Built for global scale</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3 h-3" />
              <span>WCAG 2.1 Compliant</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3 h-3" />
              <span>hello@gackx.com</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
