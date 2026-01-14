import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have questions about GACKX? Our team of automation experts is here to help you scale your operations.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">hello@gackx.com</p>
                  <p className="text-xs text-muted-foreground mt-1">Response time: &lt; 2 hours</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Headquarters</h4>
                  <p className="text-muted-foreground">123 Automation Way, Suite 500</p>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Live Chat</h4>
                  <p className="text-muted-foreground">Available 24/7 for Enterprise customers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Garvit" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Sharma" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="garvit@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" placeholder="Tell us about your automation needs..." className="min-h-[150px]" />
              </div>
              <Button className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
