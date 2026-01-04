"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Zap, ChevronDown, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { 
    name: "Product", 
    href: "#",
    children: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
      { name: "Roadmap", href: "/roadmap" },
    ]
  },
  { 
    name: "Solutions", 
    href: "#",
    children: [
      { name: "E-commerce", href: "/solutions/ecommerce" },
      { name: "Agencies", href: "/solutions/agencies" },
      { name: "SaaS", href: "/solutions/saas" },
      { name: "Finance", href: "/solutions/finance" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/developers" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2 shadow-sm" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap className="w-6 h-6 text-primary-foreground fill-current" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">GACKX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.children ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                  {link.name} <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="w-full cursor-pointer">{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" asChild className="text-sm font-medium">
            <Link href="/dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" /> Console
            </Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-6" asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <Link
                href={link.href}
                onClick={() => !link.children && setIsOpen(false)}
                className="text-lg font-bold py-2 border-b border-border/50"
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="pl-4 flex flex-col gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-muted-foreground py-1"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard">Console</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
