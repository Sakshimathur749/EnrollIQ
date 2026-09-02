"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  PieChart,
  Building2,
  ArrowRight,
  Headphones,
  ShieldCheck,
  Clock,
  MessageSquare,
  Users,
  Globe2,
  Zap,
} from "lucide-react";
import { EduNavbar } from "@/components/EduNavbar";
import { EduFooter } from "@/components/EduFooter";
import { CtaBanner } from "@/components/Home/CtaBanner";
import { ScheduleDemoModal } from "@/components/Login/ScheduleDemoModal";

export default function ContactPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institutionType, setInstitutionType] = useState(
    "Higher Ed / University",
  );
  const [counselorCount, setCounselorCount] = useState("10 - 25 Counselors");
  const [requirement, setRequirement] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const regionalOffices = [
    {
      type: "Regional Office",
      city: "Bangalore, Karnataka",
      region: "South Hub",
      phone: "+91 (80) 4129-8800",
      address:
        "KustomWork, #1611, 7th Cross, 19th Main, Sector - 1, HSR Layout, Bengaluru, Karnataka - 560102",
      landmark: "Near CP67 Tech Hub",
      iconSvg: (
        <svg
          viewBox="0 0 64 64"
          className="w-9 h-9 stroke-indigo-600 fill-indigo-50/60"
          strokeWidth="1.8"
        >
          <path
            d="M12 52h40M16 52V28m32 24V28M24 52V36m16 16V36M8 28h48M20 28V18m24 10V18M28 28V12c0-2 2-4 4-4s4 2 4 4v16M32 8V4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="22" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      type: "Regional Office",
      city: "Chennai, Tamil Nadu",
      region: "Tamil Nadu & Kerala",
      phone: "+91 (44) 2836-4100",
      address:
        "Office No. 01, IndiQube Viceroy, Raj Bhavan Exchange, Sardar Patel Rd, Little Mount, Tamil Nadu 600032",
      landmark: "Next to Raj Bhavan Metro",
      iconSvg: (
        <svg
          viewBox="0 0 64 64"
          className="w-9 h-9 stroke-rose-600 fill-rose-50/60"
          strokeWidth="1.8"
        >
          <path
            d="M10 52h44M18 52V24h28v28M26 24V14l6-6 6 6v10M14 52V34h4v18M46 52V34h4v18M32 28v6M30 44h4v8h-4z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="20" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      type: "Regional Office",
      city: "Pune, Maharashtra",
      region: "West Tech Hub",
      phone: "+91 (20) 6780-9200",
      address:
        "12th Floor, Amar Apex Center, Pancard Club Rd, Baner, Pune, Maharashtra 411069",
      landmark: "Baner IT Corridor",
      iconSvg: (
        <svg
          viewBox="0 0 64 64"
          className="w-9 h-9 stroke-purple-600 fill-purple-50/60"
          strokeWidth="1.8"
        >
          <path
            d="M10 52h44M14 52V26l6-4v30M44 52V22l6 4v26M20 30h24v22H20zM26 38h12M28 52v-6h8v6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 22h16l-8-8z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      type: "Satellite Office",
      city: "Ahmedabad, Gujarat",
      region: "Gujarat & Rajasthan",
      phone: "+91 (79) 4900-3310",
      address:
        "Mondeal Heights, B Wing, 17th Floor, Near Novotel Hotel, SG Highway, Ahmedabad, Gujarat 380015",
      landmark: "SG Highway Business Bay",
      iconSvg: (
        <svg
          viewBox="0 0 64 64"
          className="w-9 h-9 stroke-amber-600 fill-amber-50/60"
          strokeWidth="1.8"
        >
          <path
            d="M8 52h48M14 52V28m36 24V28M20 52V22c0-4 4-8 12-8s12 4 12 8v30M26 34c0-3 3-5 6-5s6 2 6 5v18H26z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 28l2-8 2 8M48 28l2-8 2 8M32 14V8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white"
      id="contact-page-root"
    >
      <EduNavbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 py-12 sm:py-16 lg:py-24 overflow-hidden relative">
        {/* Subtle Ambient Glows & Dot Matrix */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Isometric Pattern Background on the Right */}
        <div className="absolute right-0 top-12 w-1/2 h-[600px] opacity-[0.035] pointer-events-none hidden lg:block overflow-hidden">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full stroke-indigo-900 fill-none"
            strokeWidth="1"
          >
            <pattern
              id="iso-grid"
              width="60"
              height="104"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1)"
            >
              <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" />
              <path d="M30 69.28 L60 86.6 L60 121.24 L30 138.56 L0 121.24 L0 86.6 Z" />
              <path d="M0 51.96 L30 69.28 L30 103.92 L0 86.6 Z" />
              <path d="M60 51.96 L30 69.28 L30 103.92 L60 86.6 Z" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#iso-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28 lg:space-y-32">
          {/* 1. TOP HERO & FORM SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content: Get In Touch & Channels */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#7E22CE] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span>Let&apos;s Accelerate Your Admissions</span>
                </div>

                <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[56px] text-[#0F172A] tracking-tight leading-[1.1]">
                  Get in touch
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                  Our educational CRM experts are available to walk through
                  custom solutions, pricing tiers, and counselor team setup.
                </p>
              </div>

              {/* Two Direct Enquiry Channels (Sales & Support) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Sales Enquiries Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:border-indigo-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading font-bold text-xl text-[#0F172A] tracking-tight flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Sales Enquiries
                    </h2>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Online Now
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[36px]">
                    Interested in getting your counseling teams to work as one?
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-800">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <a
                        href="tel:+917303393210"
                        className="text-slate-900 hover:text-[#4F46E5] transition-colors font-bold"
                      >
                        +91 - 7303 39 3210
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800">
                      <Mail className="w-4 h-4 text-[#4F46E5] shrink-0" />
                      <a
                        href="mailto:connect@enrolliq.com"
                        className="text-slate-900 hover:text-[#4F46E5] transition-colors font-bold"
                      >
                        connect@enrolliq.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Support Enquiries Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 hover:border-indigo-300 transition-all">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading font-bold text-xl text-[#0F172A] tracking-tight flex items-center gap-2">
                      <Headphones className="w-4 h-4 text-[#4F46E5]" />
                      Support Helpdesk
                    </h2>
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                      24/7 SLA
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[36px]">
                    Need technical assistance or onboarding support for your
                    campus?
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs sm:text-sm font-medium border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-800">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <a
                        href="mailto:ticket@enrolliq.com"
                        className="text-slate-900 hover:text-[#4F46E5] transition-colors font-bold"
                      >
                        ticket@enrolliq.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Avg response time: &lt; 15 minutes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reassurance Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    Enterprise NDA
                  </span>
                  <span className="text-[10px] text-slate-500">
                    100% Data Confidential
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <Zap className="w-5 h-5 text-amber-500 mb-1" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    Zero Setup Fee
                  </span>
                  <span className="text-[10px] text-slate-500">
                    14-Day Free Sandbox
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <Users className="w-5 h-5 text-[#4F46E5] mb-1" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    Dedicated TAM
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Technical Account Manager
                  </span>
                </div>
              </div>
            </div>

            {/* Right Card: Contact Sales Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-2xl shadow-indigo-500/5 relative transition-all">
                {/* Header Icon + Title */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shadow-2xs">
                      <PieChart className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-2xl text-[#0F172A] tracking-tight">
                        Talk with Admissions Team
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Fill out the details below and we will reach out ASAP.
                      </p>
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-black text-xl text-[#0F172A]">
                      Enquiry Received, {name}!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-xs mx-auto">
                      Our admissions solutions specialist will reach out to you
                      at <strong>{email}</strong> within 2 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setRequirement("");
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3.5"
                    id="contact-sales-form"
                  >
                    {/* Your Name */}
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name *"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-[#4F46E5] focus:bg-white focus:ring-2 focus:ring-[#4F46E5]/15 transition-all"
                        id="contact-name-input"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Official Work Email *"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-[#4F46E5] focus:bg-white focus:ring-2 focus:ring-[#4F46E5]/15 transition-all"
                        id="contact-email-input"
                      />
                    </div>

                    {/* Phone with Country Code Pill */}
                    <div className="flex rounded-xl bg-[#F8FAFC] border border-slate-200 focus-within:border-[#4F46E5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#4F46E5]/15 overflow-hidden transition-all">
                      <div className="px-3.5 py-3 bg-slate-100/80 border-r border-slate-200 text-sm font-semibold text-slate-700 flex items-center shrink-0">
                        +91
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number *"
                        className="w-full px-3.5 py-3 bg-transparent text-slate-900 placeholder-slate-500 text-sm focus:outline-none"
                        id="contact-phone-input"
                      />
                    </div>

                    {/* Institute Type Selector */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Institution Type
                        </label>
                        <select
                          value={institutionType}
                          onChange={(e) => setInstitutionType(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#4F46E5] focus:bg-white transition-all"
                        >
                          <option value="Higher Ed / University">
                            Higher Ed / University
                          </option>
                          <option value="K-12 School Group">
                            K-12 School Group
                          </option>
                          <option value="EdTech / Test Prep">
                            EdTech / Test Prep
                          </option>
                          <option value="Study Abroad Agency">
                            Study Abroad Agency
                          </option>
                          <option value="Vocational / Training">
                            Vocational / Training
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Counselor Team Size
                        </label>
                        <select
                          value={counselorCount}
                          onChange={(e) => setCounselorCount(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#4F46E5] focus:bg-white transition-all"
                        >
                          <option value="1 - 5 Counselors">
                            1 - 5 Counselors
                          </option>
                          <option value="5 - 15 Counselors">
                            5 - 15 Counselors
                          </option>
                          <option value="15 - 50 Counselors">
                            15 - 50 Counselors
                          </option>
                          <option value="50+ Counselors (Enterprise)">
                            50+ Counselors (Enterprise)
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Requirements Textarea */}
                    <div>
                      <textarea
                        rows={2}
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        placeholder="Tell us about your campus goals or telephony needs..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-[#4F46E5] focus:bg-white focus:ring-2 focus:ring-[#4F46E5]/15 transition-all resize-none"
                        id="contact-requirement-input"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-bold text-white bg-[#0080FF] hover:bg-[#0070E0] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 text-sm sm:text-base transform hover:-translate-y-0.5"
                      id="contact-sales-submit-btn"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Contact Sales</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-500 pt-1">
                      🔒 No credit card required. Guaranteed 2-hour SLA
                      response.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* 2. OFFICE LOCATIONS SECTION */}
          <div
            className="space-y-8 sm:space-y-10"
            id="office-locations-section"
          >
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                <Globe2 className="w-3.5 h-3.5 text-[#4F46E5]" />
                <span>Pan-India Presence &amp; Global Hubs</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
                Office Locations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                When not on the cloud, or in people&apos;s hearts, we work from
                here
              </p>
            </div>

            {/* Offices Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Featured Card: Head Office */}
              <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                      Global Headquarters
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      IST (UTC +5:30)
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                    Gurugram, Haryana (NCR)
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                    1st Floor, Plot No- 242-243, Udyog Vihar Phase IV, Gurugram,
                    Haryana - 122015
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <Phone className="w-3.5 h-3.5" /> +91 (124) 492-8000
                    </span>
                    <span className="flex items-center gap-1.5 text-indigo-600">
                      <Mail className="w-3.5 h-3.5" /> hq@enrolliq.com
                    </span>
                  </div>
                </div>

                {/* Cityscape Graphic Illustration */}
                <div className="mt-8 pt-6 border-t border-slate-100 overflow-hidden relative">
                  <svg
                    viewBox="0 0 500 160"
                    className="w-full h-36 sm:h-44 text-slate-400 opacity-90 mx-auto"
                    fill="none"
                  >
                    {/* Background City Silhouettes */}
                    <rect x="20" y="70" width="40" height="90" fill="#F1F5F9" />
                    <rect
                      x="70"
                      y="50"
                      width="50"
                      height="110"
                      fill="#E2E8F0"
                    />
                    <rect
                      x="130"
                      y="80"
                      width="45"
                      height="80"
                      fill="#F1F5F9"
                    />
                    <rect
                      x="185"
                      y="30"
                      width="55"
                      height="130"
                      fill="#CBD5E1"
                    />
                    <polygon points="265,10 295,160 250,160" fill="#334155" />
                    <rect
                      x="305"
                      y="60"
                      width="60"
                      height="100"
                      fill="#475569"
                    />
                    <rect
                      x="375"
                      y="85"
                      width="40"
                      height="75"
                      fill="#64748B"
                    />
                    <rect
                      x="425"
                      y="100"
                      width="50"
                      height="60"
                      fill="#94A3B8"
                    />

                    {/* Window Grid Patterns */}
                    <g fill="#94A3B8" opacity="0.6">
                      <rect x="76" y="58" width="8" height="6" />
                      <rect x="88" y="58" width="8" height="6" />
                      <rect x="100" y="58" width="8" height="6" />
                      <rect x="76" y="72" width="8" height="6" />
                      <rect x="88" y="72" width="8" height="6" />
                      <rect x="100" y="72" width="8" height="6" />
                      <rect x="76" y="86" width="8" height="6" />
                      <rect x="88" y="86" width="8" height="6" />
                      <rect x="100" y="86" width="8" height="6" />
                    </g>

                    <g fill="#FFFFFF" opacity="0.8">
                      <rect x="195" y="45" width="10" height="8" />
                      <rect x="215" y="45" width="10" height="8" />
                      <rect x="195" y="60" width="10" height="8" />
                      <rect x="215" y="60" width="10" height="8" />
                      <rect x="195" y="75" width="10" height="8" />
                      <rect x="215" y="75" width="10" height="8" />
                      <rect x="195" y="90" width="10" height="8" />
                      <rect x="215" y="90" width="10" height="8" />
                      <rect x="195" y="105" width="10" height="8" />
                      <rect x="215" y="105" width="10" height="8" />
                    </g>

                    {/* Tower Stripes */}
                    <g stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3">
                      <line x1="265" y1="20" x2="255" y2="160" />
                      <line x1="268" y1="20" x2="280" y2="160" />
                    </g>

                    {/* Low-rise modern wing & Trees */}
                    <rect
                      x="312"
                      y="70"
                      width="46"
                      height="50"
                      stroke="#CBD5E1"
                      strokeWidth="2"
                      fill="#1E293B"
                    />
                    <line
                      x1="0"
                      y1="158"
                      x2="500"
                      y2="158"
                      stroke="#94A3B8"
                      strokeWidth="3"
                    />

                    {/* Street Elements / Bus / Cars */}
                    <g fill="#4F46E5" opacity="0.85">
                      <rect x="30" y="146" width="28" height="12" rx="3" />
                      <circle cx="36" cy="158" r="2.5" fill="#0F172A" />
                      <circle cx="52" cy="158" r="2.5" fill="#0F172A" />
                    </g>
                    <g fill="#F59E0B" opacity="0.9">
                      <rect x="150" y="148" width="18" height="10" rx="2" />
                      <circle cx="154" cy="158" r="2" fill="#0F172A" />
                      <circle cx="164" cy="158" r="2" fill="#0F172A" />
                    </g>

                    {/* Green shrubs */}
                    <circle cx="100" cy="154" r="5" fill="#10B981" />
                    <circle cx="107" cy="154" r="6" fill="#059669" />
                    <circle cx="390" cy="154" r="6" fill="#10B981" />
                    <circle cx="398" cy="154" r="5" fill="#059669" />
                  </svg>
                </div>
              </div>

              {/* Right 2x2 Grid: Regional Offices */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regionalOffices.map((office, idx) => (
                  <div
                    key={office.city}
                    className="bg-white rounded-3xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all"
                    id={`office-card-${idx}`}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-2xs">
                          {office.iconSvg}
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                          {office.region}
                        </span>
                      </div>

                      {/* City Info */}
                      <div className="space-y-1 text-left">
                        <h4 className="font-heading font-bold text-base text-[#0F172A] leading-tight">
                          {office.city}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed pt-0.5 line-clamp-3">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Contact footer */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span className="text-slate-500">{office.landmark}</span>
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-[#4F46E5] hover:underline font-bold"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* HOMEPAGE CTA BANNER */}
      <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* FOOTER */}
      <EduFooter onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Interactive Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
