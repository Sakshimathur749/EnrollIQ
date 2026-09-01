'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  CreditCard,
  RefreshCw,
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  Shield, 
  BarChart2, 
  Layers,
  Send,
  TrendingUp,
  UserCheck
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenVideo?: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#FAFAFE] via-white to-white text-slate-900 pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden" id="hero">
      
      {/* Subtle organic curves & light gradient backdrop matching image */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO GRID: Left Text Content & Right Interactive Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-4 lg:pt-6">
          
          {/* Left Column: Headline, Badge, CTAs & Micro-assurances */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 text-left"
            suppressHydrationWarning
          >
            {/* 1. Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/60 border border-purple-200/80 text-xs font-semibold text-[#7E22CE] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>AI-Powered CRM for Modern Businesses</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[54px] text-slate-900 tracking-tight leading-[1.12]">
              Smarter CRM. <br />
              <span className="text-[#4F46E5]">Stronger Growth.</span>
            </h1>

            {/* 3. Description */}
            <p className="text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              EnrollIQ helps you engage leads, close deals, and build lasting customer relationships — all in one powerful platform.
            </p>

            {/* 4. CTA Button: Vibrant Purple/Indigo Pill */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
                id="hero-get-started-free-btn"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 5. Micro-guarantees */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-slate-600 font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                No Credit Card
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                14-Day Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                Cancel Anytime
              </span>
            </div>

          </motion.div>

          {/* Right Column: High-Fidelity UI Mockup from Screenshot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 relative"
            suppressHydrationWarning
          >
            {/* Floating Origami Paper Airplane in top right */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20 animate-bounce [animation-duration:3s]">
              <div className="w-12 h-12 text-[#6366F1] drop-shadow-md">
                <Send className="w-10 h-10 text-indigo-600 rotate-12" strokeWidth={1.8} fill="none" />
              </div>
            </div>

            {/* Main CRM Dashboard Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-100 overflow-hidden flex flex-col sm:flex-row min-h-[460px]">
              
              {/* Left Vertical Mini Sidebar */}
              <div className="hidden sm:flex flex-col items-center py-5 px-3.5 bg-slate-50/70 border-r border-slate-100 gap-5 text-slate-400">
                {/* Mini logo icon */}
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex flex-col items-center justify-center gap-0.5 p-1 mb-2">
                  <div className="w-4 h-0.5 bg-white rounded-full" />
                  <div className="w-3 h-0.5 bg-white rounded-full" />
                  <div className="w-2 h-0.5 bg-white rounded-full" />
                </div>
                
                <div className="p-2 rounded-xl bg-indigo-100/70 text-indigo-600 shadow-xs">
                  <Home className="w-4 h-4" />
                </div>
                <div className="p-2 hover:text-indigo-600 transition-colors">
                  <Users className="w-4 h-4" />
                </div>
                <div className="p-2 hover:text-indigo-600 transition-colors">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div className="p-2 hover:text-indigo-600 transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="p-2 hover:text-indigo-600 transition-colors">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="p-2 hover:text-indigo-600 transition-colors">
                  <Settings className="w-4 h-4" />
                </div>
              </div>

              {/* Center & Right Dashboard Body */}
              <div className="flex-1 p-5 sm:p-6 space-y-5 bg-white">
                
                {/* Header Row */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dashboard</span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 flex items-center gap-1.5">
                      Welcome back, Sakshi <span className="text-base">👋</span>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Here&apos;s what&apos;s happening with your business today.
                  </p>
                </div>

                {/* 4 Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {/* Total Leads */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-[11px] text-slate-500 font-medium">Total Leads</div>
                    <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">2,453</div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+14.8%</div>
                  </div>

                  {/* Open Deals */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-[11px] text-slate-500 font-medium">Open Deals</div>
                    <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">320</div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+10.7%</div>
                  </div>

                  {/* Won Deals */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-[11px] text-slate-500 font-medium">Won Deals</div>
                    <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">120</div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+15.9%</div>
                  </div>

                  {/* Revenue */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-indigo-200 transition-colors">
                    <div className="text-[11px] text-slate-500 font-medium">Revenue</div>
                    <div className="font-heading font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">₹ 18.6L</div>
                    <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+20.5%</div>
                  </div>
                </div>

                {/* Sales Pipeline Section */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-800">Sales Pipeline</div>
                  
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                    <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
                      <div className="text-[10px] font-semibold text-blue-600 truncate">New Lead</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">520</div>
                    </div>

                    <div className="p-2 rounded-xl bg-indigo-50/70 border border-indigo-100 text-center">
                      <div className="text-[10px] font-semibold text-indigo-600 truncate">Contacted</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">200</div>
                    </div>

                    <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-100 text-center">
                      <div className="text-[10px] font-semibold text-rose-600 truncate">Qualified</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">100</div>
                    </div>

                    <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-100 text-center">
                      <div className="text-[10px] font-semibold text-amber-700 truncate">Proposal</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">82</div>
                    </div>

                    <div className="p-2 rounded-xl bg-emerald-50/70 border border-emerald-100 text-center">
                      <div className="text-[10px] font-semibold text-emerald-700 truncate">Won</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">45</div>
                    </div>
                  </div>
                </div>

                {/* Recent Activities List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-800">Recent Activities</div>
                  
                  <div className="space-y-2">
                    {/* Activity 1 */}
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px]">
                          R
                        </div>
                        <span className="font-medium text-slate-800">Follow-up with Ramesh</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">Arlene McCoy</span>
                      <span className="text-slate-400 text-[11px]">10:32 AM</span>
                    </div>

                    {/* Activity 2 */}
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-[10px]">
                          P
                        </div>
                        <span className="font-medium text-slate-800">Demo scheduled with Priya</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">Devon Lane</span>
                      <span className="text-slate-400 text-[11px]">11:45 AM</span>
                    </div>

                    {/* Activity 3 */}
                    <div className="flex items-center justify-between text-xs py-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-[10px]">
                          V
                        </div>
                        <span className="font-medium text-slate-800">Proposal sent to Ventech</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">Wade Warren</span>
                      <span className="text-slate-400 text-[11px]">01:22 PM</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Bottom-Right Revenue Card matching image */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-indigo-500/20 border border-slate-100 p-4 w-48 sm:w-56 animate-in zoom-in-95 duration-200">
                <div className="text-[11px] text-slate-500 font-medium">Revenue This Month</div>
                <div className="font-heading font-black text-lg text-slate-900 mt-0.5">₹ 18,60,000</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    +20.5%
                  </span>
                  
                  {/* Purple Sparkline Wave */}
                  <svg className="w-20 h-6 text-indigo-600" viewBox="0 0 100 30" fill="none">
                    <path 
                      d="M0 25 C 20 25, 30 10, 50 18 C 70 26, 80 5, 100 2" 
                      stroke="#4F46E5" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                    />
                    <circle cx="100" cy="2" r="3.5" fill="#4F46E5" />
                  </svg>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
