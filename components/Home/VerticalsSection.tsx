'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  BookOpen, 
  Code, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';

export function VerticalsSection() {
  const [activeVertical, setActiveVertical] = useState<'testprep' | 'highered' | 'bootcamp' | 'studyabroad'>('bootcamp');

  const verticalData = {
    testprep: {
      title: 'K-12 & Competitive Test Prep (JEE / NEET / SAT)',
      badge: 'Parent-Student Dual Communication',
      icon: BookOpen,
      color: 'border-blue-200 text-[#1E3A8A] bg-blue-50',
      description: 'Built for high-volume exam coaching institutes. Connects student entrance exam mock scores to automated parent SMS alerts and offline branch walk-in appointments.',
      features: [
        'Dual parent & student WhatsApp notifications for test schedules and fee dues',
        'Branch & offline classroom seat capacity allocation engine',
        'Scholarship admission test (SAT/Olympiad) automated score cards'
      ],
      caseStudy: {
        company: 'NextGen IIT-JEE Academy',
        result: '+48% higher branch walk-in conversions with zero lead drops'
      }
    },
    highered: {
      title: 'Higher Education & Online Degree Universities',
      badge: 'Multi-Semester Admissions & Compliance',
      icon: Building2,
      color: 'border-indigo-200 text-[#2563EB] bg-indigo-50',
      description: 'Streamline online MBA, MCA, and Bachelor degree applications. Manage UGC/DEB regulatory document compliance, semester installment tracking, and academic credit evaluation.',
      features: [
        'Multi-stage university application portal with auto-saved drafts',
        'Automated 10th/12th/Degree certificate verification and OCR validation',
        'Semester-wise fee schedule with automated payment reminder webhooks'
      ],
      caseStudy: {
        company: 'Oxford Global Online University',
        result: '3.4x faster application verification turnaround time'
      }
    },
    bootcamp: {
      title: 'Tech Bootcamps & Upskilling Cohorts',
      badge: 'Cohort Seat Scarcity & Job Readiness',
      icon: Code,
      color: 'border-red-200 text-[#DC2626] bg-red-50',
      description: 'Tailored for fast-paced coding, AI, and Product cohorts. Drive urgency with real-time seat countdowns, automated coding assessment triggers, and Income Share Agreement (ISA) / EMI loans.',
      features: [
        'Real-time remaining cohort seat countdown widgets for landing pages',
        'Instant coding test (HackerRank/LeetCode) webhook score syncing',
        'NBFC loan & 0% EMI financing pre-approval directly inside the CRM'
      ],
      caseStudy: {
        company: 'ScalerX Tech Academy',
        result: '18.4% lead-to-enrolled rate on $2,500 Full-Stack cohort'
      }
    },
    studyabroad: {
      title: 'Study Abroad & Language Test Consultancies',
      badge: 'Multi-Country University & Visa Tracker',
      icon: Globe2,
      color: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      description: 'Manage complex multi-country student visa pipelines, IELTS/TOEFL score matching, university shortlisting, and foreign exchange commission payouts.',
      features: [
        'Automated university & course eligibility matrix across US, UK, Canada & Europe',
        'Visa application milestone tracker with document expiry alerts',
        'Sub-agent and international consultancy partner commission portal'
      ],
      caseStudy: {
        company: 'GlobalFly Visa & Education',
        result: '+62% counselor caseload efficiency across 12 countries'
      }
    }
  };

  const current = verticalData[activeVertical];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
            <GraduationCap className="w-3.5 h-3.5" />
            Specialized EdTech Workflows
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Built Specifically for Every EdTech Sub-Vertical
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Generic B2B sales CRMs fail in EdTech. EduCRM delivers pre-configured admissions pipelines tailored to your exact curriculum and student lifecycle.
          </p>
        </div>

        {/* 4 Vertical Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {(['bootcamp', 'highered', 'testprep', 'studyabroad'] as const).map((key) => {
            const item = verticalData[key];
            const ItemIcon = item.icon;
            const isSelected = activeVertical === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveVertical(key)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#2563EB] shadow-md shadow-blue-500/10 ring-1 ring-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-slate-50 border border-slate-200 ${isSelected ? 'text-[#2563EB]' : 'text-slate-500'}`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
                  )}
                </div>

                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
                  {key === 'bootcamp' ? 'Tech Bootcamps' : key === 'highered' ? 'Online Universities' : key === 'testprep' ? 'K-12 & Test Prep' : 'Study Abroad'}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail View */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 text-xs font-bold rounded-lg border ${current.color}`}>
                  {current.badge}
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
                {current.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:text-[#1E3A8A] text-sm"
                >
                  <span>Explore Dedicated {current.title} Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case study callout */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="text-xs font-bold text-[#DC2626] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Verified EdTech Success Metric
              </div>
              
              <h4 className="font-heading font-bold text-lg text-slate-900">
                {current.caseStudy.company}
              </h4>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-emerald-700 font-bold text-base leading-snug shadow-xs">
                &ldquo;{current.caseStudy.result}&rdquo;
              </div>

              <p className="text-xs text-slate-500">
                Switched from generic CRM spreadsheets to EduCRM and achieved complete ad-to-enrollment attribution within 14 days.
              </p>

              <Link
                href="/demo"
                className="w-full py-3 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 mt-2 shadow-md shadow-red-500/20"
              >
                <span>Request Custom Vertical Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
