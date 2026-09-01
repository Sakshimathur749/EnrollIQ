'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitFork, 
  Zap, 
  PhoneCall, 
  FileCheck, 
  CreditCard, 
  ArrowRight, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

export function WorkflowSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      title: 'Instant Lead Ingestion',
      timeframe: '< 200 milliseconds',
      icon: Zap,
      badge: 'Zero-Latency Webhook',
      accentColor: 'border-blue-200 text-[#1E3A8A] bg-blue-50',
      summary: 'Leads from Meta Lead Gen, Google PMax, TikTok Instant Forms, and web landing pages trigger instant server-side ingestion with UTM token persistence.',
      details: [
        'Automatic deduplication check across email & phone numbers',
        'UTM Campaign, Ad Set, and Keyword tracking preserved',
        'Lead intent scoring applied via pre-qualification questionnaire'
      ]
    },
    {
      stepNumber: '02',
      title: 'Automated First Touch',
      timeframe: '< 30 seconds',
      icon: Clock,
      badge: 'WhatsApp Drip & SMS',
      accentColor: 'border-red-200 text-[#DC2626] bg-red-50',
      summary: 'Before the student leaves their social feed, EduCRM dispatches a rich WhatsApp welcome message with the course syllabus PDF and masterclass invitation.',
      details: [
        'Verified Meta WhatsApp Business API green-tick delivery',
        'Interactive quick-reply buttons (e.g. "Talk to Senior Counselor")',
        'Calendar booking link synced with counselor availability'
      ]
    },
    {
      stepNumber: '03',
      title: 'Counselor Engagement',
      timeframe: '< 60 seconds',
      icon: PhoneCall,
      badge: 'Cloud Auto-Dialer',
      accentColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      summary: 'Assigned admissions counselor receives an instant browser screen-pop and 1-click cloud telephony trigger with student profile and quiz scores.',
      details: [
        'Zero manual dialing with automated progressive call queue',
        'Live speech sentiment analysis and objection handling battlecards',
        'One-click disposition tagging (e.g., "Interested - Demo Scheduled")'
      ]
    },
    {
      stepNumber: '04',
      title: 'Verification & Aid',
      timeframe: '< 15 minutes',
      icon: FileCheck,
      badge: 'Smart OCR & Scholarships',
      accentColor: 'border-indigo-200 text-[#2563EB] bg-indigo-50',
      summary: 'Students upload prior marksheets or transcripts via a secure mobile link. EduCRM validates credentials and computes eligible fee discounts.',
      details: [
        'Automated OCR validation of academic certificates & IDs',
        'Custom eligibility rules engine for merit-based scholarships',
        'Automated parent consent e-signature workflows'
      ]
    },
    {
      stepNumber: '05',
      title: 'Payment & LMS Provisioning',
      timeframe: 'Instant (Real-time)',
      icon: CreditCard,
      badge: 'Closed-Loop Enrollment',
      accentColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
      summary: 'Dynamic multi-currency payment links sent via SMS/WhatsApp. Upon tuition capture, student credentials are automatically provisioned in LMS.',
      details: [
        'Razorpay, Stripe, EMI finance & installments webhook reconciliation',
        'Auto-creates student profile and batch allocation in Canvas/Moodle/Custom LMS',
        'Attribution engine triggers ad platform offline conversion signal'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative border-y border-slate-200" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">
            <GitFork className="w-3.5 h-3.5" />
            Admissions Automation Blueprint
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            End-to-End 5-Step Enrollment Workflow
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the initial Facebook ad click to verified classroom login in your LMS — every friction point is eliminated.
          </p>
        </div>

        {/* 5-Step Horizontal / Stacked Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStepIndex === index;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`text-left p-5 rounded-2xl transition-all relative border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-2 border-[#2563EB] shadow-md shadow-blue-500/10 ring-1 ring-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
                }`}
              >
                {/* Step number indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-md border ${step.accentColor}`}>
                    STEP {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {step.timeframe}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-xl bg-slate-50 border border-slate-200 ${isSelected ? 'text-[#2563EB]' : 'text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {step.summary}
                </p>

                {isSelected && (
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#2563EB]">
                    <span>Active Stage</span> &rarr;
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Step Deep-Dive Card */}
        {(() => {
          const current = steps[activeStepIndex];
          return (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-xs font-black rounded-lg border ${current.accentColor}`}>
                      STAGE {current.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Typical Execution: <strong className="text-emerald-600 font-semibold">{current.timeframe}</strong>
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Automated Actions Triggered in this Stage:
                    </div>
                    {current.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between text-xs border-b border-slate-200 pb-3">
                    <span className="font-bold text-slate-800">Live Stage Automation Rule</span>
                    <span className="text-emerald-700 font-mono text-[11px] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ACTIVE TRIGGER</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white font-mono text-xs text-slate-800 space-y-1.5 border border-slate-200 shadow-xs">
                    <div><span className="text-[#1E3A8A] font-bold">ON EVENT:</span> <span>Ad_Lead_Created(utm_campaign)</span></div>
                    <div><span className="text-[#DC2626] font-bold">EXECUTE:</span> <span>WhatsApp_Send_Brochure(template_v2)</span></div>
                    <div><span className="text-emerald-700 font-bold">DISPATCH:</span> <span>AutoDialer.Route(counselor_top_performer)</span></div>
                    <div><span className="text-[#2563EB] font-bold">TIMEOUT:</span> <span>If No Answer &gt; Trigger SMS Followup</span></div>
                  </div>

                  <Link
                    href="/admission-process"
                    className="w-full py-3 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-red-500/20"
                  >
                    <span>View Complete Workflow Engine</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
