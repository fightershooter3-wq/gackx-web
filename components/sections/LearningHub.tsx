"use client"

import { motion } from "framer-motion"
import { BookOpen, PlayCircle, Award, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  { title: "AI Communication", progress: 85, icon: BookOpen },
  { title: "Workflow Architecture", progress: 40, icon: PlayCircle },
  { title: "Data Intelligence", progress: 10, icon: TrendingUp },
  { title: "Enterprise Governance", progress: 0, icon: Award }
]

export function LearningHub() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Skill Builder</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">GACKX Academy: Master AI Operations</h3>
            <p className="text-xl text-muted-foreground mb-10">
              Don't just use AI—master it. Our integrated learning hub provides personalized lessons, practice modules, and certifications to help you become an automation expert.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <p className="font-medium">Practice real-world automation scenarios.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                <p className="font-medium">Earn milestones and industry-recognized rewards.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                <p className="font-medium">Track your growth with personalized analytics.</p>
              </div>
            </div>

            <Button size="lg" className="gap-2">
              Start Learning <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl">
            <h4 className="text-xl font-bold mb-8">Your Learning Progress</h4>
            <div className="space-y-8">
              {modules.map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <m.icon className="w-4 h-4 text-primary" />
                      <span className="font-bold">{m.title}</span>
                    </div>
                    <span className="text-muted-foreground">{m.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Next Milestone</p>
              <p className="font-bold">Automation Architect Certification</p>
              <p className="text-[10px] text-muted-foreground mt-1">Complete 2 more modules to unlock.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
