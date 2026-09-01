'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Globe, 
  Share2, 
  Users, 
  UploadCloud, 
  Phone, 
  MessageSquare, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Play, 
  Layers, 
  Send,
  Award,
  Sparkles,
  ArrowRight,
  PieChart as PieIcon,
  BarChart2
} from 'lucide-react';

interface TabItem {
  id: string;
  name: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
}

const TABS: TabItem[] = [
  {
    id: 'attract-capture',
    name: 'Attract & Capture',
    tag: 'ATTRACT & CAPTURE',
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
    name: 'Engage & Nurture',
    tag: 'ENGAGE & NURTURE',
    title: 'Instant communication on WhatsApp, calls and email.',
    description: 'Reach prospects in seconds with automated drip sequences, AI telephony dialers, and conversational chatbots.',
    bullets: [
      'Cloud telephony with 1-click click-to-call and automatic call recordings.',
      'Official WhatsApp Business API with templates and interactive buttons.',
      'Automated follow-up reminders and counselor task queues.',
      'Omnichannel inbox bringing WhatsApp, SMS and email into a single thread.',
      'Real-time activity timeline tracking email opens, link clicks and brochure downloads.'
    ]
  },
  {
    id: 'apply-enroll',
    name: 'Apply & Enroll',
    tag: 'APPLY & ENROLL',
    title: 'Frictionless multi-step application journeys.',
    description: 'Transform complex enrollment forms into smooth, mobile-first applicant portals with live document verification.',
    bullets: [
      'Dynamic custom forms with conditional logic and course selection.',
      'Automated Aadhaar, Digilocker & document OCR verification.',
      'Real-time application progress meter and drop-off recovery reminders.',
      'Merit list generation, scholarship scoring, and instant offer letter issuance.',
      'Multi-campus seat allocation engine with reservation quota rules.'
    ]
  },
  {
    id: 'collect-reconcile',
    name: 'Collect & Reconcile',
    tag: 'COLLECT & RECONCILE',
    title: 'Automated fee collection and instant reconciliation.',
    description: 'Collect tuition fees, seat-booking deposits, and installments with integrated payment gateways and ERP sync.',
    bullets: [
      'Integrated with Razorpay, Stripe, PayU, and bank NEFT/RTGS virtual accounts.',
      'Automated payment receipts and GST-compliant invoice generation.',
      'Custom installment schedules and automated fee reminder SMS/WhatsApp.',
      'Instant ERP synchronization with SAP, Tally, QuickBooks and Ellucian.',
      'One-click refunds and concession approvals with multi-level audit logs.'
    ]
  },
  {
    id: 'unlock-intelligence',
    name: 'Unlock Intelligence',
    tag: 'UNLOCK INTELLIGENCE',
    title: 'Full-funnel attribution and predictive enrollment analytics.',
    description: 'Understand exactly which marketing campaigns, keywords, and counselors drive enrolled students and revenue.',
    bullets: [
      'Multi-touch attribution from first ad click to final tuition fee receipt.',
      'Predictive enrollment forecasting powered by historical conversion AI.',
      'Counselor performance leaderboards with conversion rate tracking.',
      'Cost-per-enrolled-student (CPES) calculation across Google, Meta and YouTube.',
      'Executive BI dashboards with automated scheduled exports.'
    ]
  }
];

export function EnrollmentProcessFlowSection() {
  const [activeTabId, setActiveTabId] = useState<string>('attract-capture');

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 overflow-hidden" id="enrollment-process-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching uploaded image */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase">
            One connected enrollment system
          </p>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[52px] text-[#0F172A] tracking-tight leading-[1.15]">
            Run every stage of enrollment on one connected system
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto pt-1">
            Bring marketing, admissions, applications, payments and student engagement together on one purpose-built enrollment platform.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="bg-[#EEF2F6] p-1.5 sm:p-2 rounded-2xl sm:rounded-full flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 shadow-inner">
            {TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex-1 py-3 px-3 sm:px-5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all text-center cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#4F46E5] shadow-md shadow-slate-200'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                  }`}
                  id={`process-tab-${tab.id}`}
                >
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Container Card */}
        <div className="relative bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 shadow-xl shadow-slate-100 overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]"
            >
              
              {/* Left Column: Descriptions & Bullet Points */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
                
                {/* Uppercase Small Tag */}
                <div className="text-xs font-extrabold tracking-widest text-slate-800 uppercase">
                  {activeTab.tag}
                </div>

                {/* Main Heading */}
                <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-[34px] text-slate-900 tracking-tight leading-[1.2]">
                  {activeTab.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Bullet Points with Filled Purple Checkmark */}
                <div className="space-y-3.5 pt-2">
                  {activeTab.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Visual High-Fidelity UI Graphics with Tinted Backdrop */}
              <div className="lg:col-span-7 bg-[#EEF4FF] p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
                
                {/* 1. VISUAL CONTAINER FOR TAB 1: ATTRACT & CAPTURE (Exact Mockup from Image) */}
                {activeTab.id === 'attract-capture' && (
                  <div className="space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-200">
                    
                    {/* Top Card: Lead Sources Grid */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-indigo-50 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                          Lead Sources
                        </h4>
                        <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                          <span>All Leads</span>
                          <span className="font-heading font-black text-amber-600 text-sm">7,327</span>
                        </div>
                      </div>

                      {/* 2-Column Grid of Sources */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        
                        {/* 1. Website Forms */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Website Forms</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">1,245</div>
                          </div>
                        </div>

                        {/* 2. YouTube & Video Campaigns */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Play className="w-4 h-4 fill-emerald-600" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">YouTube Campaigns</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">842</div>
                          </div>
                        </div>

                        {/* 3. Meta & Google Ads */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Ads (Google & Meta)</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">2,350</div>
                          </div>
                        </div>

                        {/* 4. WhatsApp */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">WhatsApp Inquiries</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">1,150</div>
                          </div>
                        </div>

                        {/* 5. Walk-ins / Direct */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Walk-Ins & Direct</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">620</div>
                          </div>
                        </div>

                        {/* 6. Referrals */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Student Referrals</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">540</div>
                          </div>
                        </div>

                        {/* 7. Publishers */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Publishers & Portals</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">320</div>
                          </div>
                        </div>

                        {/* 8. Bulk Uploads */}
                        <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                            <UploadCloud className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[11px] text-slate-500 font-medium leading-none">Bulk Uploads (CSV)</div>
                            <div className="font-heading font-bold text-sm text-slate-900 mt-1">260</div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Split: Lead Origin Tracking & Channel-Wise Enrollments */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      
                      {/* Bottom-Left: Lead Origin Tracking */}
                      <div className="sm:col-span-5 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-indigo-50 space-y-3">
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                          Lead Origin Tracking
                        </h4>
                        
                        <div className="space-y-2 text-[11px]">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Source</span>
                            <span className="font-bold text-slate-800">Google Ads</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Medium</span>
                            <span className="font-bold text-slate-800">CPC</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Campaign</span>
                            <span className="font-bold text-slate-800">Admission_Jan26</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Content</span>
                            <span className="font-bold text-slate-800">Engineering_UG</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Lead Origin</span>
                            <span className="font-bold text-slate-800">Landing Page</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Captured On</span>
                            <span className="font-bold text-slate-800">Jan 25, 2026</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom-Right: Channel-wise Enrollments Donut */}
                      <div className="sm:col-span-7 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-indigo-50 space-y-3">
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                          Channel-wise Enrollments
                        </h4>

                        <div className="flex items-center gap-4">
                          {/* SVG Donut */}
                          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                              {/* Background Circle */}
                              <path
                                className="text-slate-100"
                                strokeWidth="5.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Blue (Ads 32%) */}
                              <path
                                className="text-blue-500"
                                strokeDasharray="32, 100"
                                strokeWidth="5.5"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Green (Web Forms 22%) */}
                              <path
                                className="text-emerald-500"
                                strokeDasharray="22, 100"
                                strokeDashoffset="-32"
                                strokeWidth="5.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Orange (WhatsApp 16%) */}
                              <path
                                className="text-amber-500"
                                strokeDasharray="16, 100"
                                strokeDashoffset="-54"
                                strokeWidth="5.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              {/* Purple (Other 30%) */}
                              <path
                                className="text-purple-500"
                                strokeDasharray="30, 100"
                                strokeDashoffset="-70"
                                strokeWidth="5.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="font-heading font-black text-sm text-slate-900 leading-none">842</span>
                              <span className="text-[8px] text-slate-400 font-semibold leading-none mt-0.5">Enrolled</span>
                            </div>
                          </div>

                          {/* Legend list */}
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] text-slate-600 flex-1">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                              <span>Ads: <strong className="text-slate-900">32%</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                              <span>Forms: <strong className="text-slate-900">22%</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                              <span>WhatsApp: <strong className="text-slate-900">16%</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                              <span>Pages: <strong className="text-slate-900">11%</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                              <span>Walk-ins: <strong className="text-slate-900">8%</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                              <span>Others: <strong className="text-slate-900">11%</strong></span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                )}

                {/* 2. VISUAL CONTAINER FOR TAB 2: ENGAGE & NURTURE */}
                {activeTab.id === 'engage-nurture' && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-50 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center text-xs">
                            WA
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">WhatsApp Drip Automation</div>
                            <div className="text-[11px] text-emerald-600 font-semibold">Active Sequence • 98.4% Delivery</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                          Automated
                        </span>
                      </div>

                      {/* Mock Conversation Bubble */}
                      <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 max-w-[85%] border border-slate-100">
                          Hi Aryan! 👋 Thank you for inquiring about B.Tech AI & Data Science at Apex University. Here is your official curriculum brochure & scholarship eligibility test link.
                        </div>
                        <div className="bg-[#E7F8E8] p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs text-slate-800 ml-auto max-w-[85%] border border-emerald-100">
                          Thanks! When is the next campus counseling batch starting?
                        </div>
                      </div>

                      {/* Interactive Telephony Action Strip */}
                      <div className="p-3 bg-indigo-50 rounded-xl flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-indigo-900 font-semibold">
                          <Phone className="w-4 h-4 text-[#4F46E5]" />
                          <span>AI Auto-Dialer Routed to Counselor: Sakshi Sharma</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-bold text-[10px]">
                          Call Live (01:45)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-4 rounded-2xl shadow-xs border border-indigo-50">
                        <div className="text-[11px] text-slate-500 font-medium">Avg Response Time</div>
                        <div className="font-heading font-black text-lg text-slate-900 mt-1">42 Seconds</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">⚡ 4.8x faster than manual</div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-xs border border-indigo-50">
                        <div className="text-[11px] text-slate-500 font-medium">Follow-up Conversion</div>
                        <div className="font-heading font-black text-lg text-slate-900 mt-1">34.2%</div>
                        <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+18% vs Last Term</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. VISUAL CONTAINER FOR TAB 3: APPLY & ENROLL */}
                {activeTab.id === 'apply-enroll' && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-50 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900">Applicant Portal Journey</h4>
                          <span className="text-[11px] text-slate-500">Candidate: Aryan Mehta (APP-2026-9812)</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-[#4F46E5] font-bold text-xs border border-indigo-100">
                          Step 3 of 4
                        </span>
                      </div>

                      {/* Progress Steps Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold text-slate-700">
                          <span>Application Progress</span>
                          <span className="text-[#4F46E5]">80% Completed</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full w-[80%]" />
                        </div>
                      </div>

                      {/* Document Verification Matrix */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="font-medium text-slate-800">10th & 12th Marks Sheet</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">OCR Verified</span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-2.5 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="font-medium text-slate-800">Digilocker Aadhaar Card</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Instant Match</span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-2.5 bg-amber-50/60 rounded-xl border border-amber-100">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border-2 border-amber-600" />
                            <span className="font-medium text-amber-900">Seat Booking Deposit</span>
                          </div>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Payment Pending</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 4. VISUAL CONTAINER FOR TAB 4: COLLECT & RECONCILE */}
                {activeTab.id === 'collect-reconcile' && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-50 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900">Real-Time Fee Reconciliation</h4>
                          <span className="text-[11px] text-slate-500">Live Gateway Sync (Razorpay & NEFT)</span>
                        </div>
                        <div className="font-heading font-black text-base text-emerald-600">
                          ₹ 48.2 Lakhs
                        </div>
                      </div>

                      {/* Transaction Feed */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                          <div>
                            <div className="font-bold text-slate-800">Sneha Roy • Semester 1 Tuition</div>
                            <div className="text-[10px] text-slate-400">UPI / QR Code • TXN #89124</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">₹ 65,000</div>
                            <span className="text-[10px] font-bold text-emerald-600">Reconciled</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                          <div>
                            <div className="font-bold text-slate-800">Karan Verma • Hostel Booking</div>
                            <div className="text-[10px] text-slate-400">Net Banking • TXN #89125</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">₹ 25,000</div>
                            <span className="text-[10px] font-bold text-emerald-600">Reconciled</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-xl flex items-center justify-between text-xs text-emerald-800 font-semibold">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Auto-synced with ERP & GST Invoices generated</span>
                        </div>
                        <span className="text-[10px] bg-white px-2 py-0.5 rounded shadow-xs font-bold">100% Match</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. VISUAL CONTAINER FOR TAB 5: UNLOCK INTELLIGENCE */}
                {activeTab.id === 'unlock-intelligence' && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-indigo-50 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-sm text-slate-900">Multi-Touch Attribution ROI</h4>
                        <span className="text-xs font-bold text-[#4F46E5] bg-indigo-50 px-2.5 py-1 rounded-full">
                          ROAS: 8.4x
                        </span>
                      </div>

                      {/* Source Performance Matrix */}
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-800">Google Ads (Search)</span>
                            <div className="text-[10px] text-slate-400">Spend: ₹1.4L • Revenue: ₹14.2L</div>
                          </div>
                          <span className="font-black text-emerald-600 text-sm">10.1x ROI</span>
                        </div>

                        <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-800">YouTube Video Discovery</span>
                            <div className="text-[10px] text-slate-400">Spend: ₹80K • Revenue: ₹6.8L</div>
                          </div>
                          <span className="font-black text-emerald-600 text-sm">8.5x ROI</span>
                        </div>

                        <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-800">Meta Instagram Lead Ads</span>
                            <div className="text-[10px] text-slate-400">Spend: ₹1.1L • Revenue: ₹7.9L</div>
                          </div>
                          <span className="font-black text-emerald-600 text-sm">7.2x ROI</span>
                        </div>
                      </div>

                      <div className="p-3 bg-purple-50 rounded-xl text-xs flex items-center justify-between text-purple-950 font-semibold">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          <span>AI Predicted Final Enrollments: 1,180 (±4%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
