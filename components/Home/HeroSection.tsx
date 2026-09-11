"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenVideo?: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section
      className="relative bg-gradient-to-b from-[#FAFAFE] via-white to-white text-slate-900 pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden"
      id="hero"
    >
      {/* Subtle organic curves & light gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO GRID: items-stretch keeps both columns equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pt-4 lg:pt-6">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-left flex flex-col justify-center"
            suppressHydrationWarning
          >
            {/* 1. Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/60 border border-purple-200/80 text-xs font-semibold text-[#7E22CE] shadow-xs w-fit">
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
              EnrollIQ helps you engage leads, close deals, and build lasting
              customer relationships — all in one powerful platform.
            </p>

            {/* 4. CTA Button */}
            <div className="pt-2">
              <Link
                href="https://crm.mediagarh.com/CRM/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
                  id="hero-get-started-free-btn"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* 5. Feature Badges */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-slate-600 font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                Smart Allocation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                Native Portal Integrations
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border border-indigo-400 text-indigo-600 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                Automated Campaigns
              </span>
            </div>
          </motion.div>

          {/* Right Column: Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative flex items-center"
            suppressHydrationWarning
          >
            {/* Floating Paper Airplane */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20 animate-bounce [animation-duration:3s]">
              <div className="w-12 h-12 text-[#6366F1] drop-shadow-md">
                <Send
                  className="w-10 h-10 text-indigo-600 rotate-12"
                  strokeWidth={1.8}
                  fill="none"
                />
              </div>
            </div>

            {/* Image Container with Padding & object-contain */}
            <div className="relative w-full bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-slate-100 overflow-hidden flex items-center justify-center">
              <img
                src="../assets/dashboard-hero-img.webp"
                alt="CRM Dashboard Preview"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
