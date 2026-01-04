"use client"

import { ShieldCheck, Zap, Activity, Lock } from "lucide-react"

export function ReliabilityProof() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4">Reliability & Performance</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Engineered for Mission-Critical Stability</h3>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              We understand that your business depends on our platform. That's why we've built GACKX with a reliability-first mindset, ensuring your automations run perfectly, every time.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Performance-Optimized Engine</h4>
                  <p className="text-sm text-primary-foreground/70">Low-latency execution environment designed for high-throughput workloads.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Stability Under Scale</h4>
                  <p className="text-sm text-primary-foreground/70">Our infrastructure automatically scales to handle sudden spikes in automation volume.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <p className="text-5xl font-bold mb-2">99.99%</p>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Uptime Guarantee</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium">System Status</span>
                <span className="flex items-center gap-2 text-xs font-bold text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium">Avg. Execution Time</span>
                <span className="text-xs font-bold">142ms</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium">Data Integrity</span>
                <span className="text-xs font-bold">100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
