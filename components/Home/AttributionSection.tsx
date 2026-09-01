'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Target, 
  Search, 
  Bot, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3,
  Flame
} from 'lucide-react';

export function AttributionSection() {
  const [activeChannel, setActiveChannel] = useState<'meta' | 'google' | 'tiktok' | 'youtube'>('meta');

  const channelStats = {
    meta: {
      name: 'Meta Ads (Instagram & FB)',
      adSpend: '$4,200',
      leads: '428 leads',
      cpl: '$9.81',
      enrolledStudents: '46 enrolled',
      revenue: '$41,400',
      roas: '9.85x',
      bestAd: 'Creative #04 - "Become an AI Engineer in 6 Months"'
    },
    google: {
      name: 'Google Search & PMax',
      adSpend: '$6,800',
      leads: '312 leads',
      cpl: '$21.79',
      enrolledStudents: '52 enrolled',
      revenue: '$62,400',
      roas: '9.17x',
      bestAd: 'Keyword [best data science bootcamp near me]'
    },
    tiktok: {
      name: 'TikTok Spark Ads',
      adSpend: '$2,100',
      leads: '580 leads',
      cpl: '$3.62',
      enrolledStudents: '34 enrolled',
      revenue: '$23,800',
      roas: '11.33x',
      bestAd: 'Video #12 - "Day in the Life of a Software Engineer Graduate"'
    },
    youtube: {
      name: 'YouTube In-Stream Video',
      adSpend: '$3,500',
      leads: '240 leads',
      cpl: '$14.58',
      enrolledStudents: '28 enrolled',
      revenue: '$30,800',
      roas: '8.80x',
      bestAd: 'Tutorial Preroll - "Free Python Masterclass Preview"'
    }
  };

  const current = channelStats[activeChannel];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative" id="attribution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
            <Target className="w-3.5 h-3.5" />
            Ad-to-Tuition Attribution Engine
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Paid-Ads Attribution &amp; Management Hub
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate blind marketing spend. Know exactly which ad creative, search query, campaign ID, and counselor produced your highest tuition enrollments.
          </p>
        </div>

        {/* 4 Feature Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Zero-Leakage Lead Capture */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E3A8A] border border-blue-200 flex items-center justify-center mb-5 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
              Zero-Leakage Lead Capture
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Direct real-time webhook ingestion from Meta Lead Forms, Google Search extensions, TikTok Instant Forms, and web landing pages.
            </p>
            <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#1E3A8A] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 0.2s Server-to-Server Sync
            </div>
          </div>

          {/* Card 2: Source-Level Keyword & Ad Set Attribution */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DC2626] border border-red-200 flex items-center justify-center mb-5 group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
              Keyword &amp; Ad Set Attribution
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Pass UTM parameters, creative IDs, and keyword tokens through the entire pipeline to know which video ad converted into paid cohort seats.
            </p>
            <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#DC2626] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-Touch Attribution
            </div>
          </div>

          {/* Card 3: Smart Counselor Lead Distribution */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
              Smart Lead Distribution
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Intelligent round-robin routing matches incoming high-intent leads to counselors based on language, course vertical, and past close rate.
            </p>
            <div className="pt-3 border-t border-slate-200 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Zero Queue Bottlenecks
            </div>
          </div>

          {/* Card 4: Live ROAS & CAC Tracking */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2.5">
              Ad Spend vs. Revenue (ROAS)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Real-time financial dashboards comparing actual Razorpay/Stripe tuition collected directly against daily ad spend across all channels.
            </p>
            <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#2563EB] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> True Cohort CAC Metrics
            </div>
          </div>

        </div>

        {/* Interactive Channel Attribution Live Inspector */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider mb-1">
                <BarChart3 className="w-4 h-4 text-[#2563EB]" /> Live Multi-Channel Attribution Inspector
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                Inspect Real-Time Campaign ROAS by Ad Platform
              </h3>
            </div>

            {/* Platform Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              {(['meta', 'google', 'tiktok', 'youtube'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveChannel(key)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer capitalize ${
                    activeChannel === key
                      ? 'bg-[#DC2626] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {key === 'meta' ? 'Meta Ads' : key === 'google' ? 'Google Search' : key === 'tiktok' ? 'TikTok' : 'YouTube'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Channel Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Ad Spend</div>
              <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">{current.adSpend}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Leads Captured</div>
              <div className="text-lg sm:text-xl font-black text-[#1E3A8A] mt-1">{current.leads}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Avg Cost / Lead</div>
              <div className="text-lg sm:text-xl font-black text-[#DC2626] mt-1">{current.cpl}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Enrolled Students</div>
              <div className="text-lg sm:text-xl font-black text-emerald-700 mt-1">{current.enrolledStudents}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Tuition Collected</div>
              <div className="text-lg sm:text-xl font-black text-[#1E3A8A] mt-1">{current.revenue}</div>
            </div>
            <div className="p-4 rounded-xl bg-red-50 border border-red-200">
              <div className="text-[11px] font-bold text-[#DC2626] uppercase">Verified ROAS</div>
              <div className="text-xl sm:text-2xl font-black text-[#DC2626] mt-1">{current.roas}</div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-600 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#DC2626]" /> <strong className="text-slate-900 font-semibold">Top Performing Asset:</strong> {current.bestAd}
            </div>
            <Link 
              href="/attribution" 
              className="text-[#2563EB] hover:text-[#1E3A8A] font-bold flex items-center gap-1"
            >
              Explore Full Attribution Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
