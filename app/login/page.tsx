"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate a login delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    toast.success("Welcome to GACKX OS!", {
      description: "You have successfully signed in.",
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="w-full max-w-md space-y-8 bg-card p-8 rounded-3xl border border-border shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary mb-4">
              <Zap className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Enter your credentials to access GACKX OS</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="name@company.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button className="w-full h-11 text-base font-bold" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or continue with</span></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-11">Google</Button>
            <Button variant="outline" className="h-11">GitHub</Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account? <Link href="/pricing" className="text-primary font-bold hover:underline">Get Started</Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
