'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  MessageSquare, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  Users, 
  Volume2
} from 'lucide-react';

export function InteractiveTabsSection() {
  const [activeTab, setActiveTab] = useState<'telephony' | 'whatsapp' | 'webinar'>('telephony');
  
  // Interactive mini-states
  const [simulatedDialing, setSimulatedDialing] = useState(false);
  const [callDuration, setCallDuration] = useState('00:48');
  const [waMessageSent, setWaMessageSent] = useState(false);

  const handleTestDial = () => {
    setSimulatedDialing(true);
    setTimeout(() => {
      setSimulatedDialing(false);
    }, 2500);
  };

  const handleSendWaTest = () => {
    setWaMessageSent(true);
    setTimeout(() => {
      setWaMessageSent(false);
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Admissions Acceleration Suite
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Interactive Feature Highlights
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the three most powerful conversion engines built into EduCRM to maximize lead contact and enrollment velocity.
          </p>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 gap-2 max-w-full overflow-x-auto">
            
            {/* Tab 1 */}
            <button
              type="button"
              onClick={() => setActiveTab('telephony')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'telephony'
                  ? 'bg-[#DC2626] text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Built-in Telephony &amp; Auto-Dialer</span>
            </button>

            {/* Tab 2 */}
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'whatsapp'
                  ? 'bg-[#DC2626] text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp &amp; Omni-Channel Drip</span>
            </button>

            {/* Tab 3 */}
            <button
              type="button"
              onClick={() => setActiveTab('webinar')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap ${
                activeTab === 'webinar'
                  ? 'bg-[#DC2626] text-white shadow-md shadow-red-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Webinar &amp; Masterclass Sync</span>
            </button>

          </div>
        </div>

        {/* Tab Content 1: Telephony & Auto-Dialer */}
        {activeTab === 'telephony' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-200/60 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#1E3A8A] font-bold text-xs border border-blue-200">
                  Zero Hardware • Browser &amp; Mobile WebRTC
                </div>
                
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
                  1-Click Progressive Cloud Dialer with Live Call Recordings
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Stop counselors from manually typing 10-digit phone numbers. EduCRM automatically cues up fresh ad leads, dials immediately, and records every call with AI speech sentiment scoring.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Auto-dial next hot lead in queue within 5 seconds of hang-up</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Live call whispering and manager barge-in for new counselors</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated disposition tagging (Interested, Call Back, DND, Enrolled)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:text-[#1E3A8A] text-sm"
                  >
                    <span>Read Cloud Telephony Architecture Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Interactive Telephony Simulator */}
              <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <PhoneCall className="w-4 h-4 text-[#2563EB]" />
                    Counselor Dialer Workstation (Simulated)
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    VOIP READY
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Rahul Sharma (High Intent)</div>
                      <div className="text-xs text-slate-500">Campaign: Google Search [Data Science Batch 18]</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-emerald-700 font-bold">{callDuration}</span>
                      <div className="text-[10px] text-slate-400">Active Call</div>
                    </div>
                  </div>

                  {/* Audio Waveform visualization */}
                  <div className="p-3 bg-white rounded-lg flex items-center justify-between gap-1 border border-slate-200 shadow-xs">
                    <Volume2 className="w-4 h-4 text-[#2563EB] shrink-0 mr-2" />
                    <div className="flex-1 flex items-center gap-1 h-6">
                      {[30, 70, 45, 90, 60, 30, 80, 95, 40, 60, 75, 50, 85, 30, 65, 45].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-[#2563EB] rounded-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Disposition Quick Tags */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Tag Call Disposition:</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg cursor-pointer hover:bg-emerald-100">
                        ✓ Scholarship Offered
                      </span>
                      <span className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100">
                        📞 Demo Scheduled
                      </span>
                      <span className="px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 rounded-lg cursor-pointer hover:bg-amber-100">
                        ⏳ Call Back Tomorrow
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleTestDial}
                  disabled={simulatedDialing}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#DC2626] hover:from-red-700 hover:to-red-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{simulatedDialing ? 'Connecting to Next Hot Lead...' : 'Trigger Instant Auto-Dialer Test'}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content 2: WhatsApp & Omni-Channel Drip */}
        {activeTab === 'whatsapp' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-200/60 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                  Official Meta WhatsApp Cloud API
                </div>
                
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
                  Automated WhatsApp Drips with Interactive Quick-Replies
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Engage prospects on the app they open 20+ times a day. Dispatch PDF syllabi, scholarship eligibility quizzes, and counselor booking buttons with 98% open rates.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant brochure dispatch within 10 seconds of lead form submission</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-day automated nurturing sequences tailored by ad keyword</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Shared WhatsApp team inbox for seamless counselor handoff</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 text-sm"
                  >
                    <span>Explore WhatsApp Drip Templates</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Interactive WhatsApp Chat Simulator */}
              <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    EduCRM Verified WhatsApp Bot
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> ONLINE
                  </span>
                </div>

                {/* Chat Bubble Container */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  {/* Bot Message */}
                  <div className="p-3 bg-white border border-emerald-200 rounded-2xl rounded-tl-xs max-w-[85%] text-slate-800 space-y-2 shadow-xs">
                    <p className="font-semibold text-slate-900">
                      Hi Priya! 👋 Thanks for downloading our Full-Stack AI Syllabus from Instagram!
                    </p>
                    <p className="text-slate-600 text-[11px]">
                      Here is your instant syllabus PDF. Would you like to reserve a 1-on-1 counseling slot with our lead instructor?
                    </p>
                    <div className="p-2 bg-emerald-50 rounded-lg flex items-center justify-between border border-emerald-200 text-[11px]">
                      <span className="font-medium text-emerald-900">📄 AI_FullStack_2026_Curriculum.pdf</span>
                      <span className="text-emerald-700 font-bold">Download</span>
                    </div>
                  </div>

                  {/* Interactive Quick-Reply Buttons */}
                  <div className="space-y-1.5 pl-2">
                    <button 
                      type="button" 
                      onClick={handleSendWaTest}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 font-bold border border-slate-200 text-left block w-full transition-colors cursor-pointer shadow-xs"
                    >
                      👉 Yes, book a free career guidance call
                    </button>
                    <button 
                      type="button" 
                      onClick={handleSendWaTest}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold border border-slate-200 text-left block w-full transition-colors cursor-pointer shadow-xs"
                    >
                      💰 Check scholarship eligibility test
                    </button>
                  </div>

                  {waMessageSent && (
                    <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-[11px] text-center font-bold animate-in fade-in">
                      ✓ Instant Counselor notification dispatched to admissions queue!
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSendWaTest}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#DC2626] hover:bg-red-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Test WhatsApp Drip Sequence</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Tab Content 3: Webinar & Masterclass Sync */}
        {activeTab === 'webinar' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-200/60 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-50 text-purple-800 font-bold text-xs border border-purple-200">
                  Zoom &amp; YouTube Live Ingestion
                </div>
                
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
                  Live Masterclass Lead Capture &amp; Drop-off Follow-up
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Hosting live demo classes? EduCRM tracks who showed up, minutes watched, and polls answered. When a student leaves during the pitch, counselors are alerted immediately.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Real-time attendee minutes tracking (e.g. 0-15m, 15-45m, Full Session)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Automated discount code SMS during the live masterclass offer window</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Immediate counselor call trigger for non-attendees with recording replay</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:text-[#1E3A8A] text-sm"
                  >
                    <span>View Webinar Conversion Playbook</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Webinar Live Analytics Widget */}
              <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Video className="w-4 h-4 text-purple-600" />
                    Live Masterclass Attendance &amp; Exit Trigger
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    684 LIVE ATTENDEES
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">&quot;Master AI in 2026&quot; - Live Session</span>
                    <span className="text-emerald-700 font-mono font-semibold">Minute 42/60 (Offer Pitch)</span>
                  </div>

                  {/* Attendance breakdown bars */}
                  <div className="space-y-2 pt-1">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Stayed for Tuition Pitch (&gt;40 mins)</span>
                        <span className="text-emerald-700 font-bold">420 students (61%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '61%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                        <span>Early Drop-offs (Triggered Re-engagement WhatsApp)</span>
                        <span className="text-amber-700 font-bold">184 students (27%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '27%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between text-[11px]">
                    <span className="text-red-900">🚀 Fast-Action Tuition Offer: <strong>$200 Off for Next 15 mins</strong></span>
                    <span className="px-2 py-0.5 bg-[#DC2626] rounded text-white font-bold">Active</span>
                  </div>
                </div>

                <Link
                  href="/features"
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#1E3A8A] hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Users className="w-4 h-4" />
                  <span>Configure Masterclass Webhook Connectors</span>
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
