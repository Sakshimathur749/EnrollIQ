'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  PhoneCall, 
  Bot, 
  Award,
  Layers
} from 'lucide-react';

interface SlideData {
  id: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string; // e.g. 'amber' | 'blue' | 'indigo' | 'emerald'
  visualType: 'report-book' | 'workflow-speed' | 'counselor-funnel' | 'omnichannel';
}

const slides: SlideData[] = [
  {
    id: 'report-2026',
    badge: 'ANNUAL BENCHMARK REPORT',
    title: 'Discover what actually drives enrollments in 2026',
    description: 'Get exclusive access to data-backed insights on changing student behavior, inquiry-to-enrollment trends, and channel performance across 500+ institutions.',
    buttonText: 'Download the Report',
    buttonColor: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25',
    visualType: 'report-book',
  },
  {
    id: 'workflow-automation',
    badge: 'ADMISSIONS AUTOMATION',
    title: 'Connect with applicants in under 90 seconds',
    description: 'Automate 80% of student follow-ups with intelligent multi-channel triggers across WhatsApp, SMS, and Email right from first inquiry capture.',
    buttonText: 'Explore Admissions Automation',
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25',
    visualType: 'workflow-speed',
  },
  {
    id: 'counselor-productivity',
    badge: 'COUNSELOR CRM & PIPELINE',
    title: 'Empower counseling teams to close 3x more admissions',
    description: 'Unified multi-campus lead allocation, dynamic counselor leaderboards, telephony integration, and predictive intent scoring for student applications.',
    buttonText: 'View Counselor CRM Suite',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25',
    visualType: 'counselor-funnel',
  },
  {
    id: 'omnichannel-hub',
    badge: 'OMNICHANNEL ENGAGEMENT',
    title: 'Engage Gen-Z students on their preferred channels',
    description: 'Official WhatsApp Business API, verified cloud telephony, and 24/7 AI-assisted inquiry resolution in one centralized counselor inbox.',
    buttonText: 'Discover Omnichannel Tools',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25',
    visualType: 'omnichannel',
  },
];

interface CarouselSectionProps {
  onOpenReportModal?: () => void;
  onOpenDemoModal?: () => void;
}

export function CarouselSection({ onOpenReportModal, onOpenDemoModal }: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[currentIndex];

  const handleActionClick = () => {
    if (currentSlide.visualType === 'report-book') {
      onOpenReportModal?.();
    } else {
      onOpenDemoModal?.();
    }
  };

  return (
    <div
      id="carousel-container"
      className="relative flex flex-col justify-between h-full min-h-[480px] lg:min-h-full bg-gradient-to-br from-[#f2f5ff] via-[#f7f4fe] to-[#fff5f8] p-5 sm:p-8 lg:p-10 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle Arc Curve in Background */}
      <svg
        className="absolute top-12 right-12 w-96 h-96 opacity-30 pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M30,220 C80,80 200,40 280,120"
          stroke="url(#arc-gradient)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Top spacer for clean balance */}
      <div className="relative z-10 hidden sm:block h-2" />

      {/* Middle Dynamic Visual Stage & Slide Content */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full flex flex-col items-center max-w-lg"
          >
            {/* Visual Graphic Representation */}
            <div className="w-full flex justify-center mb-5">
              {currentSlide.visualType === 'report-book' && <ReportBookVisual />}
              {currentSlide.visualType === 'workflow-speed' && <WorkflowSpeedVisual />}
              {currentSlide.visualType === 'counselor-funnel' && <CounselorFunnelVisual />}
              {currentSlide.visualType === 'omnichannel' && <OmnichannelVisual />}
            </div>

            {/* Slide Title & Description (Reduced font size as requested) */}
            <div className="text-center px-3 sm:px-5">
              <h2
                id={`slide-title-${currentSlide.id}`}
                className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 tracking-tight leading-snug"
              >
                {currentSlide.title}
              </h2>
              <p
                id={`slide-desc-${currentSlide.id}`}
                className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto"
              >
                {currentSlide.description}
              </p>

              {/* Call-to-Action Button */}
              <div className="mt-4 flex justify-center">
                <button
                  id={`carousel-action-btn-${currentSlide.id}`}
                  onClick={handleActionClick}
                  type="button"
                  className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md cursor-pointer ${currentSlide.buttonColor}`}
                >
                  {currentSlide.visualType === 'report-book' ? (
                    <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                  )}
                  <span>{currentSlide.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Carousel Controls: Clean Blue-Shaded Pagination Dots (Arrows removed) */}
      <div className="relative z-10 flex items-center justify-center pt-3">
        <div id="carousel-dots-container" className="flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              id={`carousel-dot-${idx}`}
              onClick={() => goToSlide(idx)}
              type="button"
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-blue-600 shadow-sm shadow-blue-500/30'
                  : 'w-2 bg-blue-200/90 hover:bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Visual 1: Report Book (Matches Reference Image UI)
// -------------------------------------------------------------
function ReportBookVisual() {
  return (
    <div className="relative perspective-1000 group">
      {/* Ambient Shadow under the book */}
      <div className="absolute -bottom-4 left-4 right-4 h-6 bg-slate-900/15 rounded-full blur-xl transform scale-95" />

      {/* Main 3D Book Container */}
      <div className="relative w-[340px] sm:w-[420px] md:w-[460px] bg-white rounded-lg shadow-2xl border border-slate-200/90 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-3xl">
        {/* Book Left Spine Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-slate-300 via-slate-100 to-transparent border-r border-slate-200/80 z-20" />
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-slate-400/20 z-20" />

        {/* Book Inner Content Area */}
        <div className="p-4 sm:p-5 pl-7 sm:pl-8 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30">
          {/* Book Top Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span className="text-xs font-bold text-slate-800 tracking-tight">EnrollIQ</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              Insights 2026
            </span>
          </div>

          {/* Book Main Title & Graphic Split */}
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Left Col: Title & Subtitle */}
            <div className="col-span-6 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Enrollment <br />
                <span className="text-amber-500">Index 2026</span>
              </h3>
              <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-600 font-medium leading-relaxed">
                What drives student enrollments & what is changing the rules.
              </p>
              
              <div className="mt-3">
                <span className="inline-block text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                  SECOND EDITION
                </span>
              </div>
            </div>

            {/* Right Col: Compass & Growth Framework Chart */}
            <div className="col-span-6 flex justify-center">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-dashed border-slate-300 flex items-center justify-center bg-white shadow-xs p-1">
                {/* Compass Direction Marks */}
                <span className="absolute top-1 text-[8px] font-bold text-slate-600 uppercase">N • RESPOND FASTER</span>
                <span className="absolute right-1 text-[8px] font-bold text-slate-600 uppercase">E • ENGAGE</span>
                <span className="absolute bottom-1 text-[8px] font-bold text-slate-600 uppercase">S • RIGHT CHANNELS</span>
                <span className="absolute left-1 text-[8px] font-bold text-slate-600 uppercase">W • RE-ENGAGE</span>

                {/* Compass Needle Graphics */}
                <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
                  {/* Outer Ticks */}
                  <circle cx="50" cy="50" r="44" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
                  {/* Compass Star Pointer */}
                  <polygon points="50,12 55,45 88,50 55,55 50,88 45,55 12,50 45,45" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                  {/* North Needle (Blue) */}
                  <polygon points="50,14 55,50 50,47" fill="#2563eb" />
                  <polygon points="50,14 45,50 50,47" fill="#1d4ed8" />
                  {/* South Needle (Amber) */}
                  <polygon points="50,86 55,50 50,53" fill="#f59e0b" />
                  <polygon points="50,86 45,50 50,53" fill="#d97706" />
                  {/* Center Circle */}
                  <circle cx="50" cy="50" r="14" fill="#0f172a" />
                  <circle cx="50" cy="50" r="4" fill="#fbbf24" />
                </svg>

                {/* Micro Label in Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-[7px] font-extrabold text-white text-center leading-none mt-7">
                    ENROLLMENT<br />INTELLIGENCE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Bottom Landscape / Graphic Strip */}
          <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-500" />
              500+ Universities Analyzed
            </span>
            <span className="font-semibold text-slate-700">EnrollIQ Research Lab</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Visual 2: Workflow Automation & Speed to Lead
// -------------------------------------------------------------
function WorkflowSpeedVisual() {
  return (
    <div className="relative w-[340px] sm:w-[420px] bg-white rounded-xl shadow-2xl border border-slate-200 p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Speed-to-Lead Engine</div>
            <div className="text-[10px] text-slate-500">Live Auto-Allocation & Nurturing</div>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
          Live Active
        </span>
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="space-y-2.5">
        {/* Node 1: New Lead Arrived */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Student Inquiry Captured</div>
              <div className="text-[10px] text-slate-500">Portal Form • MBA Program 2026</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400">0.0s</span>
        </div>

        {/* Node 2: Dynamic Counselor Routing */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
              2
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">AI Counselor Assignment</div>
              <div className="text-[10px] text-indigo-700 font-medium">Allocated to Senior Counselor: Sarah J.</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-indigo-600 font-semibold">+1.2s</span>
        </div>

        {/* Node 3: Instant Multi-Channel Trigger */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              3
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Instant WhatsApp Brochure Sent</div>
              <div className="text-[10px] text-emerald-700 font-medium">Delivered with Personal Application Link</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 font-bold">+18.0s</span>
        </div>
      </div>

      {/* Metrics Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-center">
        <div className="p-1.5 bg-slate-50 rounded-lg">
          <div className="text-sm font-extrabold text-blue-600">&lt; 90 Sec</div>
          <div className="text-[9px] text-slate-500 font-medium">Avg. First Response</div>
        </div>
        <div className="p-1.5 bg-slate-50 rounded-lg">
          <div className="text-sm font-extrabold text-emerald-600">+42.8%</div>
          <div className="text-[9px] text-slate-500 font-medium">Enrollment Conversion</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Visual 3: Counselor Funnel & Multi-Campus CRM
// -------------------------------------------------------------
function CounselorFunnelVisual() {
  return (
    <div className="relative w-[340px] sm:w-[420px] bg-white rounded-xl shadow-2xl border border-slate-200 p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Admissions Pipeline 2026</div>
            <div className="text-[10px] text-slate-500">Multi-Campus Dynamic Tracker</div>
          </div>
        </div>
        <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
          94.2% Quota Met
        </span>
      </div>

      {/* Funnel Progress Bars */}
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
            <span>1. Verified Inquiries</span>
            <span className="font-bold">12,450 (100%)</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
            <span>2. Form Filled & Document Uploaded</span>
            <span className="font-bold">6,840 (55%)</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full w-[55%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
            <span>3. Interview Cleared & Offer Letter</span>
            <span className="font-bold">3,120 (25%)</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full w-[25%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
            <span>4. Fee Paid & Enrolled</span>
            <span className="font-bold text-emerald-700">1,890 (15.2%)</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[15.2%]" />
          </div>
        </div>
      </div>

      {/* Counselor Team Avatars */}
      <div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center justify-between">
        <div className="flex -space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
            JD
          </div>
          <div className="w-6 h-6 rounded-full bg-indigo-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
            SK
          </div>
          <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
            AR
          </div>
          <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
            +18
          </div>
        </div>
        <span className="text-[10px] font-semibold text-slate-600">
          24 Counselors Active Now
        </span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Visual 4: Omnichannel Student Engagement Hub
// -------------------------------------------------------------
function OmnichannelVisual() {
  return (
    <div className="relative w-[340px] sm:w-[420px] bg-white rounded-xl shadow-2xl border border-slate-200 p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Omnichannel Hub</div>
            <div className="text-[10px] text-slate-500">WhatsApp • Telephony • Chatbot</div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Verified API
        </span>
      </div>

      {/* Simulated 2-Way Chat Snippet */}
      <div className="space-y-2 text-xs">
        {/* Student Bubble */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
            ST
          </div>
          <div className="bg-slate-100 text-slate-800 p-2 rounded-xl rounded-tl-none max-w-[80%]">
            <p className="text-[11px]">Hi! What is the deadline for B.Tech CSE scholarship applications?</p>
            <span className="text-[9px] text-slate-400 block mt-0.5">10:42 AM</span>
          </div>
        </div>

        {/* AI + Counselor Auto Reply */}
        <div className="flex gap-2 justify-end">
          <div className="bg-blue-600 text-white p-2 rounded-xl rounded-tr-none max-w-[85%] shadow-xs">
            <div className="flex items-center gap-1 text-[9px] font-bold text-blue-100 mb-0.5">
              <Bot className="w-3 h-3" /> EnrollIQ AI Counselor
            </div>
            <p className="text-[11px] leading-tight">
              Applications close on Sept 15th. You qualify for an 85% Merit Scholarship based on your test scores!
            </p>
            <span className="text-[9px] text-blue-200 block text-right mt-0.5">10:42 AM • Instant</span>
          </div>
        </div>
      </div>

      {/* Integration Badges */}
      <div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
        <span className="flex items-center gap-1 font-semibold text-emerald-700">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> WhatsApp Official
        </span>
        <span className="flex items-center gap-1 font-semibold text-blue-700">
          <PhoneCall className="w-3 h-3 text-blue-600" /> Cloud Calling
        </span>
        <span className="flex items-center gap-1 font-semibold text-purple-700">
          <Bot className="w-3 h-3 text-purple-600" /> 24/7 AI Bot
        </span>
      </div>
    </div>
  );
}
