"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Zap,
  ShieldAlert,
  Sparkles,
  Layers,
  PhoneCall,
  BarChart3,
  UserCheck,
} from "lucide-react";

export function ProblemSolutionSection() {
  // Real Pain Points faced by educational institutes
  const traditionalProblems = [
    {
      title: "Disconnected Lead Sources",
      desc: "Leads scattered across Meta Ads, Google Ads, & third-party publishers with no central sync.",
    },
    {
      title: "Delayed Counselor Actions",
      desc: "Manual Excel sheet exports cause hours of delay before a counselor calls a potential student.",
    },
    {
      title: "Zero Ad ROI Visibility",
      desc: "Spending ad budget blindly without knowing which channel or publisher yields real admissions.",
    },
    {
      title: "Unintegrated Telephony",
      desc: "No record or automated logging of counselor calls, follow-ups, or pitch quality.",
    },
  ];

  // Actual EnrollIQ Solutions & Features
  const enrollIqSolutions = [
    {
      title: "Omnichannel Ingestion & Custom Forms",
      desc: "Seamless integration with Meta, Google, Publisher APIs, and customizable lead forms.",
    },
    {
      title: "Smart Auto-Allocation Rules",
      desc: "Instant real-time lead routing to counselors for instant speed-to-lead execution.",
    },
    {
      title: "Campaign ROI Intelligence",
      desc: "Live campaign manager dashboard tracking exact source-wise ROI & admission conversions.",
    },
    {
      title: "Built-in Telephony & AWS SES",
      desc: "Native connectors for telephony call logs, AWS SES emailers, and automated workflows.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold text-[#4F46E5]">
            <Zap className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Why EnrollIQ?</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Designed to Fix Educational Admission Bottlenecks
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Upgrade from generic sales tools to EnrollIQ—a digital CRM built for
            admissions that seamlessly integrates marketing channels, counselor
            workflows, and telephony.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* PROBLEM CARD (Traditional Admissions CRM) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-rose-50/40 border border-rose-200/80 flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  Generic CRMs & Spreadsheets
                </div>
                <span className="text-xs font-semibold text-rose-600">
                  The Problem
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 leading-snug">
                Fragmented tools & manual work lead to lost admission inquiries.
              </h3>

              <div className="space-y-4 pt-2">
                {traditionalProblems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-rose-200/80 text-xs text-rose-700 font-semibold flex items-center justify-between">
              <span>
                ⚠️ Result: Wasted ad budget & dropped student conversions
              </span>
            </div>
          </motion.div>

          {/* SOLUTION CARD (EnrollIQ Platform) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-800 shadow-2xl shadow-indigo-500/10 flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            {/* Dark Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F46E5]/25 blur-3xl pointer-events-none rounded-full" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#4F46E5] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-4 h-4 text-indigo-200" />
                  The EnrollIQ Platform
                </div>
                <span className="text-xs font-semibold text-indigo-300">
                  The Solution
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white leading-snug">
                Unified lead management & campaign intelligence in one
                dashboard.
              </h3>

              <div className="space-y-4 pt-2">
                {enrollIqSolutions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 text-xs text-indigo-300 font-semibold flex items-center justify-between relative z-10">
              <span>
                🚀 Result: Streamlined counselor workflows & better lead
                conversion
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
