"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"

export function ROICalculator() {
  const [hours, setHours] = React.useState([40])
  const [rate, setHoursRate] = React.useState([50])
  const [teamSize, setTeamSize] = React.useState([5])

  const monthlySavings = hours[0] * rate[0] * teamSize[0] * 4 * 0.75 // Assuming 75% automation efficiency
  const yearlySavings = monthlySavings * 12

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">ROI Calculator</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">See How Much You Can Save</h3>
          <p className="text-xl text-muted-foreground">
            Calculate the potential impact of GACKX on your business operations and bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm uppercase tracking-wider">Manual Hours / Week (per person)</label>
                <span className="text-primary font-bold text-xl">{hours[0]}h</span>
              </div>
              <Slider value={hours} onValueChange={setHours} max={80} step={1} className="py-4" />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm uppercase tracking-wider">Average Hourly Rate ($)</label>
                <span className="text-primary font-bold text-xl">${rate[0]}</span>
              </div>
              <Slider value={rate} onValueChange={setHoursRate} max={200} step={5} className="py-4" />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="font-bold text-sm uppercase tracking-wider">Team Size</label>
                <span className="text-primary font-bold text-xl">{teamSize[0]}</span>
              </div>
              <Slider value={teamSize} onValueChange={setTeamSize} max={100} step={1} className="py-4" />
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold">Estimated Annual Savings</h4>
              </div>

              <div className="space-y-2">
                <p className="text-6xl md:text-7xl font-extrabold tracking-tighter">
                  ${yearlySavings.toLocaleString()}
                </p>
                <p className="text-primary-foreground/70 font-medium">Potential savings with 75% automation efficiency</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
                <div>
                  <p className="text-2xl font-bold">${monthlySavings.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Monthly Savings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{(hours[0] * teamSize[0] * 4 * 0.75).toLocaleString()}h</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">Monthly Hours Reclaimed</p>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-white/90 transition-all">
                Get Started & Save Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
