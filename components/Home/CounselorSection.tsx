'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  AlertTriangle, 
  Play, 
  Pause, 
  Smartphone, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CounselorSectionProps {
  onOpenDemo: () => void;
}

export function CounselorSection({ onOpenDemo }: CounselorSectionProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const counselors = [
    {
      rank: '🥇 1st',
      name: 'Ananya Mishra',
      avatar: 'AM',
      callsToday: '68 calls',
      talkTime: '3h 42m',
      enrolledStudents: '12 enrollments',
      revenue: '$22,800',
      conversionRate: '17.6%',
      scoreColor: 'text-amber-800'
    },
    {
      rank: '🥈 2nd',
      name: 'Vikram Joshi',
      avatar: 'VJ',
      callsToday: '54 calls',
      talkTime: '3h 10m',
      enrolledStudents: '9 enrollments',
      revenue: '$17,100',
      conversionRate: '16.6%',
      scoreColor: 'text-slate-700'
    },
    {
      rank: '🥉 3rd',
      name: 'Pooja Verma',
      avatar: 'PV',
      callsToday: '61 calls',
      talkTime: '2h 55m',
      enrolledStudents: '8 enrollments',
      revenue: '$15,200',
      conversionRate: '13.1%',
      scoreColor: 'text-amber-900'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative border-y border-slate-200" id="counselors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Admissions Team Command Center
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Counselor Productivity &amp; Performance Tracker
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Empower your team with automated lead queues, strict SLA alerts, and AI-powered speech quality scoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Counselor Leaderboard */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    Today&apos;s Live Admissions Leaderboard
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Real-time tuition bookings updated instantly</p>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  LIVE SHIFT
                </span>
              </div>

              {/* Table / List */}
              <div className="space-y-3">
                {counselors.map((c) => (
                  <div
                    key={c.name}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] border border-blue-200 flex items-center justify-center font-bold text-sm">
                        {c.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                          <span className="text-xs font-bold text-slate-500">{c.rank}</span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                          <span>{c.callsToday}</span>
                          <span>•</span>
                          <span>{c.talkTime} Talk</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 text-xs">
                      <div className="text-left sm:text-right">
                        <div className="font-black text-emerald-700 text-sm">{c.revenue}</div>
                        <div className="text-[11px] text-slate-500">{c.enrolledStudents}</div>
                      </div>
                      <div className="px-2.5 py-1 rounded-lg bg-white font-mono font-bold text-[#1E3A8A] border border-slate-200 shadow-2xs">
                        {c.conversionRate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SLA Alert Notification Strip */}
              <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-red-900">
                  <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0" />
                  <span><strong>SLA Alert:</strong> 2 Google Search leads untouched for &gt; 3 mins. Auto-rerouting to available counselors.</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#DC2626] text-white font-bold text-[10px] shrink-0">
                  ENFORCED
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: AI Call Quality Audit & Mobile CRM */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* AI Call Quality Audit Audio Snippet */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  AI Call Quality &amp; Script Audit
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  SCORE: 96/100
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-900">Call Recording #8941 - MBA Course Counseling</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Prospect: Deepa S. (Meta Lead Form)</p>
              </div>

              {/* Interactive Player Control */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleAudio}
                    className="w-10 h-10 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md shadow-red-500/20 shrink-0"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                      <span>{isPlayingAudio ? '01:14' : '00:00'}</span>
                      <span>03:25</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2563EB] rounded-full transition-all duration-300"
                        style={{ width: isPlayingAudio ? '48%' : '20%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* AI Speech Insights Checklist */}
                <div className="pt-2 border-t border-slate-200 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between text-slate-700">
                    <span>Curriculum Pitch Adherence:</span>
                    <span className="text-emerald-700 font-bold">100% Passed</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>Objection Handling (Fee EMI):</span>
                    <span className="text-emerald-700 font-bold">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span>Call Disposition Verification:</span>
                    <span className="text-emerald-700 font-bold">Verified Enrolled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Counselor App Callout */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Native Mobile CRM for Remote Counselors
                  </h4>
                  <p className="text-xs text-slate-500">iOS &amp; Android Apps with automatic call logging</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Counselors can make phone calls directly from their mobile SIM while EduCRM automatically logs durations and recordings back to the central dashboard.
              </p>
              <Link
                href="/counselors"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1E3A8A] pt-1"
              >
                <span>View Counselor Telephony Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
