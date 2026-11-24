'use client';

import React from 'react';
import { Download, Sparkles, CheckCircle2, FileText, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { EduNavbar } from '@/components/EduNavbar';
import { EduFooter } from '@/components/EduFooter';
import { BrochureForm } from '@/components/Brochure/BrochureForm';

export default function DownloadBrochurePage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Admissions ROI',
      desc: 'Track every lead source and optimize spend',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      desc: 'Auto-allocate leads to counselors instantly',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      desc: '100% data confidentiality with NDA support',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      <EduNavbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Background ambient */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column — Content */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/60 border border-purple-200/80 text-xs font-semibold text-[#7E22CE] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>Free Resource</span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] tracking-tight leading-[1.12]">
                Download the <br />
                <span className="text-[#4F46E5]">EnrollIQ Brochure</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                Get the complete overview of our AI-powered education CRM. Learn how EnrollIQ helps institutions capture
                leads, automate workflows, and scale admissions effortlessly.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 pt-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{benefit.title}</p>
                        <p className="text-xs text-slate-500">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What's inside */}
              <div className="pt-4 border-t border-slate-200/80">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">What&apos;s inside</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Feature Overview',
                    'Pricing Tiers',
                    'Integration List',
                    'Case Studies',
                    'Security & Compliance',
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Form Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-indigo-500/5 overflow-hidden">
              {/* Card Header */}
              <div className="relative bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] px-6 sm:px-8 py-7 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                <h2 className="relative z-10 font-heading font-black text-2xl text-white tracking-tight">
                  Get Your Brochure
                </h2>
                <p className="relative z-10 text-sm text-indigo-100 mt-1">
                  Fill in your details below and download instantly.
                </p>
              </div>

              {/* Form */}
              <div className="px-6 sm:px-8 py-7">
                <BrochureForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <EduFooter />
    </div>
  );
}
