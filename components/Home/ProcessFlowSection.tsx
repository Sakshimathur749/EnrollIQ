'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  FileText, 
  Tv, 
  MessageSquare, 
  Users, 
  Share2, 
  UploadCloud, 
  Check, 
  PhoneCall, 
  Layers, 
  CreditCard, 
  BarChart3, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  PieChart as PieChartIcon,
  Bot,
  FileCheck,
  Receipt,
  UserCheck
} from 'lucide-react';

interface StageTab {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

const STAGES: StageTab[] = [
  {
    id: 'attract-capture',
    label: 'Attract & Capture',
    eyebrow: 'ATTRACT & CAPTURE',
    title: 'Every enquiry captured, attributed and owned.',
    description: 'Online, offline, partner and campaign demand lands in one pipeline with its source intact.',
    bullets: [
      'Enquiries centralised across every channel and campaign.',
      'Primary, secondary and tertiary source attribution.',
      'Auto source tracking that cannot be edited later.',
      'Lead verification and de-duplication at entry.',
      'Publisher panel with quality and impact scoring.',
      '200+ lead sources, 40 ERPs and 20 exam systems integrated.'
    ]
  },
  {
    id: 'engage-nurture',
    label: 'Engage & Nurture',
    eyebrow: 'ENGAGE & NURTURE',
    title: 'Instant engagement, automated omnichannel nurturing.',
    description: 'Trigger conversational AI, dynamic WhatsApp drips, and smart counselor call allocations the moment intent is shown.',
    bullets: [
      '3-second instant lead response via WhatsApp and cloud telephony.',
      'Smart round-robin and skill-based counselor allocation.',
      'Visual drag-and-drop multi-channel drip campaign builder.',
      'Real-time conversation timeline with sentiment detection.',
      'Automated callback scheduler and missed-call recovery.',
      'Granular disposition tracking and reminder notifications.'
    ]
  },
  {
    id: 'apply-enroll',
    label: 'Apply & Enroll',
    eyebrow: 'APPLY & ENROLL',
    title: 'Frictionless application journey with live tracking.',
    description: 'Empower candidates with dynamic, mobile-friendly forms, instant document OCR checks, and counselor guidance.',
    bullets: [
      'Configurable multi-step application forms with conditional logic.',
      'Instant AI document verification and OCR extraction.',
      'Self-service candidate portal with live progress status.',
      'Merit list computation and interview scheduling matrix.',
      'Digital signature capture and instant offer letter issuance.',
      'Bi-directional sync with university student SIS/ERP databases.'
    ]
  },
  {
    id: 'collect-reconcile',
    label: 'Collect & Reconcile',
    eyebrow: 'COLLECT & RECONCILE',
    title: 'Seamless fee collection, instant auto-reconciliation.',
    description: 'Eliminate revenue leakages with multi-mode payment gateways, installment scheduling, and automated finance ledgers.',
    bullets: [
      'Integrated UPI, NetBanking, Credit/Debit cards & instant EMI.',
      'Automated payment reminder links over WhatsApp and SMS.',
      'Configurable fee structures, scholarships, and installment splits.',
      'Instant GST-compliant digital receipt and invoice generation.',
      'Bank statement auto-reconciliation with zero manual errors.',
      'Live fee collections & settlement dashboards for finance teams.'
    ]
  },
  {
    id: 'unlock-intelligence',
    label: 'Unlock Intelligence',
    eyebrow: 'UNLOCK INTELLIGENCE',
    title: 'Predictive analytics & end-to-end attribution.',
    description: 'Actionable visibility into channel CAC, counselor performance leaderboards, and enrollment cohort conversions.',
    bullets: [
      'Multi-touch attribution modeling from first impression to fee deposit.',
      'Counselor productivity leaderboards and call quality metrics.',
      'Stage-by-stage drop-off funnel analysis by course and location.',
      'Real-time marketing ROI and cost-per-enrolled-student calculator.',
      'Executive KPI dashboards with automated scheduled summaries.',
      'Custom report builder with one-click Excel & BI exports.'
    ]
  }
];

export function ProcessFlowSection() {
  const [activeTabId, setActiveTabId] = useState<string>('attract-capture');

  const currentStage = STAGES.find(s => s.id === activeTabId) || STAGES[0];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 overflow-hidden" id="process-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
            One Connected Enrollment System
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.15]">
            Run Every Stage of Enrollment on One Unified Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Bring marketing, admissions, applications, fee collection, and student engagement together on one purpose-built education enrollment CRM.
          </p>
        </div>

        {/* Segmented / Navigation Tab Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1.5 shadow-xs">
            {STAGES.map((stage) => {
              const isActive = activeTabId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveTabId(stage.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
                    isActive 
                      ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-600/30' 
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-white'
                  }`}
                  id={`tab-${stage.id}`}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Container with Split Left and Right Visuals */}
        <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            
            {/* Left Column: Stage Text Content */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Eyebrow */}
                  <div className="text-xs font-black tracking-widest text-[#4F46E5] uppercase">
                    {currentStage.eyebrow}
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] leading-[1.18] tracking-tight">
                    {currentStage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {currentStage.description}
                  </p>

                  {/* Bullets List */}
                  <ul className="space-y-3.5 pt-2">
                    {currentStage.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium leading-normal">
                        <span className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Visual Dashboard Mockup Display */}
            <div className="lg:col-span-6 bg-slate-50/90 border-t lg:border-t-0 lg:border-l border-slate-200/70 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTabId === 'attract-capture' && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {/* Top Card: Lead Sources Grid */}
                    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading font-bold text-sm text-slate-800">Lead Sources</span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                          <span>All Leads</span>
                          <span className="font-extrabold text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                            7,327
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        {/* 1. Website Forms */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Website Forms</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">1,245</div>
                          </div>
                        </div>

                        {/* 2. Landing Pages */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Landing Pages</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">842</div>
                          </div>
                        </div>

                        {/* 3. Ads (Meta / YouTube) */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                            <Tv className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Ads & Campaigns</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">2,350</div>
                          </div>
                        </div>

                        {/* 4. WhatsApp */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">WhatsApp Leads</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">1,150</div>
                          </div>
                        </div>

                        {/* 5. Walk-ins */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Walk-ins</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">620</div>
                          </div>
                        </div>

                        {/* 6. Referrals */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Referrals</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">540</div>
                          </div>
                        </div>

                        {/* 7. Publishers */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Publishers</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">320</div>
                          </div>
                        </div>

                        {/* 8. Bulk Uploads */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                            <UploadCloud className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] text-slate-500 truncate font-medium">Bulk Uploads</div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">260</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Lead Origin Tracking & Donut Chart */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      
                      {/* Lead Origin Tracking Card */}
                      <div className="sm:col-span-5 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                        <div className="font-heading font-bold text-xs text-slate-800 mb-2.5">
                          Lead Origin Tracking
                        </div>
                        <div className="space-y-1.5 text-[11px]">
                          <div className="flex justify-between py-0.5 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">Source</span>
                            <span className="font-bold text-slate-900">Google / YouTube</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">Medium</span>
                            <span className="font-semibold text-slate-800">CPC</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">Campaign</span>
                            <span className="font-semibold text-slate-800">Admission_2026</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">Content</span>
                            <span className="font-semibold text-slate-800">Engineering_UG</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-slate-50">
                            <span className="text-slate-500 font-medium">Lead Origin</span>
                            <span className="font-semibold text-[#4F46E5]">Landing Page</span>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-slate-500 font-medium">Captured On</span>
                            <span className="font-medium text-slate-600">Jan 25, 2026</span>
                          </div>
                        </div>
                      </div>

                      {/* Channel-wise Enrollments Donut */}
                      <div className="sm:col-span-7 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                        <div className="font-heading font-bold text-xs text-slate-800 mb-2">
                          Channel-wise Enrollments
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {/* Donut graphic */}
                          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              {/* Background Circle */}
                              <path
                                className="text-slate-100"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Segment 1: Ads 32% (Blue/Indigo) */}
                              <path
                                className="text-[#3B82F6]"
                                strokeDasharray="32, 100"
                                strokeDashoffset="0"
                                strokeWidth="5"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Segment 2: Forms 22% (Green) */}
                              <path
                                className="text-[#10B981]"
                                strokeDasharray="22, 100"
                                strokeDashoffset="-32"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Segment 3: WhatsApp 16% (Orange) */}
                              <path
                                className="text-[#F59E0B]"
                                strokeDasharray="16, 100"
                                strokeDashoffset="-54"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Segment 4: Landing Pages 11% (Rose) */}
                              <path
                                className="text-[#EC4899]"
                                strokeDasharray="11, 100"
                                strokeDashoffset="-70"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Segment 5: Walk-ins 8% (Purple) */}
                              <path
                                className="text-[#8B5CF6]"
                                strokeDasharray="8, 100"
                                strokeDashoffset="-81"
                                strokeWidth="5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center text-center">
                              <span className="font-heading font-black text-sm text-slate-900 leading-none">842</span>
                              <span className="text-[8px] text-slate-500 uppercase tracking-tighter">Enrolled</span>
                            </div>
                          </div>

                          {/* Legend breakdown */}
                          <div className="space-y-1 text-[10px] flex-1">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> Ads & Campaigns
                              </span>
                              <span className="font-bold text-slate-900">32%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Website Forms
                              </span>
                              <span className="font-bold text-slate-900">22%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" /> WhatsApp
                              </span>
                              <span className="font-bold text-slate-900">16%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> Landing Pages
                              </span>
                              <span className="font-bold text-slate-900">11%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> Walk-ins & Others
                              </span>
                              <span className="font-bold text-slate-900">19%</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTabId === 'engage-nurture' && (
                  <motion.div
                    key="engage-nurture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">AI WhatsApp Drip Flow</div>
                            <div className="text-[10px] text-emerald-600 font-medium">● 3-sec Auto-Trigger Active</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold bg-blue-50 text-[#1E3A8A] px-2 py-0.5 rounded-full border border-blue-100">
                          84.2% Read Rate
                        </span>
                      </div>

                      <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-xs max-w-[88%]">
                          <div className="font-semibold text-slate-800 text-[11px]">EnrollIQ AI Bot:</div>
                          <div className="text-slate-600 text-[11px] mt-0.5">
                            Hi Priya! Thanks for enquiring about B.Tech AI & Data Science. Here is your personalized program guide 📄
                          </div>
                          <span className="text-[9px] text-slate-400 block text-right mt-1">10:14 AM • Delivered</span>
                        </div>

                        <div className="bg-[#4F46E5] text-white p-2.5 rounded-lg ml-auto max-w-[75%] shadow-xs">
                          <div className="text-[11px]">
                            Thanks! Can you schedule a campus tour for this Saturday?
                          </div>
                          <span className="text-[9px] text-indigo-200 block text-right mt-1">10:15 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Avg. Call Response</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">42 Secs</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">⚡ 4.8x faster follow-up</div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Counselor Connection</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">91.4%</div>
                        <div className="text-[10px] font-bold text-[#4F46E5] mt-0.5">Cloud Telephony Sync</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTabId === 'apply-enroll' && (
                  <motion.div
                    key="apply-enroll-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs text-slate-800">Application Pipeline</span>
                        <span className="text-xs font-extrabold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">1,480 In Review</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
                          <span className="font-semibold">Aarav Sharma • MBA 2026</span>
                          <span className="font-bold text-[11px] bg-white px-2 py-0.5 rounded shadow-xs text-emerald-700">Verified & Approved</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-100">
                          <span className="font-semibold">Sneha Roy • B.Tech CSE</span>
                          <span className="font-bold text-[11px] bg-white px-2 py-0.5 rounded shadow-xs text-indigo-700">Doc OCR Check</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-100">
                          <span className="font-semibold">Rohan Verma • B.Des Fashion</span>
                          <span className="font-bold text-[11px] bg-white px-2 py-0.5 rounded shadow-xs text-amber-700">Fee Link Dispatched</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Form Completion Rate</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">78.4%</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+24% vs legacy forms</div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">OCR Verification</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">100% Auto</div>
                        <div className="text-[10px] font-bold text-[#4F46E5] mt-0.5">Aadhaar, Marks & Docs</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTabId === 'collect-reconcile' && (
                  <motion.div
                    key="collect-reconcile-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs text-slate-800">Fee Ledger & Gateway</span>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Auto-Reconciliation 99.4%
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <div className="font-bold text-slate-900">₹ 85,000 • Semester 1 Fee</div>
                            <div className="text-[10px] text-slate-500">Kavita Reddy • UPI Instant Pay</div>
                          </div>
                          <span className="font-bold text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Settled</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <div className="font-bold text-slate-900">₹ 1,20,000 • Admission Deposit</div>
                            <div className="text-[10px] text-slate-500">Vikram Malhotra • NetBanking HDFC</div>
                          </div>
                          <span className="font-bold text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Settled</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Collections This Month</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">₹ 42.8 Lakhs</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+18.5% MoM Growth</div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Payment Modes</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">UPI & NetBank</div>
                        <div className="text-[10px] font-bold text-[#4F46E5] mt-0.5">Instant Digital Receipts</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTabId === 'unlock-intelligence' && (
                  <motion.div
                    key="unlock-intelligence-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs text-slate-800">Campaign ROI Matrix</span>
                        <span className="text-xs font-bold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">Multi-Touch Model</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="font-semibold text-slate-800">YouTube Ads (Video Funnel)</span>
                          <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">5.2x ROI</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="font-semibold text-slate-800">Google Search (High Intent)</span>
                          <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">4.8x ROI</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="font-semibold text-slate-800">Meta & Instagram Retargeting</span>
                          <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">3.9x ROI</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Cost Per Enrolled Student</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">₹ 2,840</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">-34% CAC Reduction</div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                        <div className="text-[11px] text-slate-500 font-medium">Target Yield Forecast</div>
                        <div className="font-heading font-black text-xl text-slate-900 mt-1">94.2%</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">On-Track to exceed goal</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
