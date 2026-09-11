"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To eliminate lead leakage and delay in student admissions by providing educational institutions with a unified, automated, and intelligent enrollment CRM.",
    color: "bg-[#4F46E5]/10 text-[#4F46E5] border-indigo-200",
    glow: "from-indigo-500/5",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To become the standard admission operating system for modern educational institutions — driving instant counselor-student connections through automated lead distribution.",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    glow: "from-blue-500/5",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "Counselor-first simplicity, 100% lead attribution transparency for marketing teams, continuous feature delivery, and scalable data security.",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    glow: "from-emerald-500/5",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-slate-50/70 py-16 sm:py-24 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-2xl text-center space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            Purpose Driven
          </p>
          <h2 className="text-3xl font-heading font-black tracking-tight text-[#0F172A] sm:text-4xl">
            Why EnrollIQ Exists
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We are building the dedicated admission technology stack that
            bridges the gap between marketing ad spend and final student
            enrollments.
          </p>
        </motion.div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body, color, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white hover:bg-gradient-to-br hover:${glow} hover:to-transparent p-8 shadow-xs hover:shadow-md transition-shadow`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-white`}
              />
              <div
                className={`relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mb-3 text-xl font-heading font-bold text-[#0F172A]">
                {title}
              </h3>
              <p className="relative text-sm leading-relaxed text-slate-600">
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story & Platform Impact Block */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-3xl border border-indigo-100 bg-white p-8 lg:p-12 shadow-xs"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                Built For Modern Institutions
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-[#0F172A] sm:text-3xl leading-snug">
                The Problem We Built EnrollIQ To Solve
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Most admission teams struggle with disconnected tools — Meta
                Ads, Google Ads, publisher lead sources, custom web forms, and
                separate telephony platforms. Leads end up waiting in
                spreadsheets for hours before counselors can reach out.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                EnrollIQ centralizes the entire pipeline: auto-capturing leads
                instantly, executing dynamic allocation rules, integrating
                built-in telephony, and giving campaign managers real-time ROI
                analytics.
              </p>
            </div>
 
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  before: "Scattered Channels",
                  after: "Unified Dashboard",
                  label: "Lead Aggregation",
                },
                {
                  before: "Manual Excel Assign",
                  after: "Automated Routing",
                  label: "Counselor Allocation",
                },
                {
                  before: "Unclear Campaign ROI",
                  after: "Real-Time Tracking",
                  label: "Source Analytics",
                },
                {
                  before: "Delayed Follow-ups",
                  after: "Instant Lead Alerts",
                  label: "Counselor Readiness",
                },
              ].map(({ before, after, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs"
                >
                  <p className="text-xs text-rose-500/80 mb-1 line-through font-medium">
                    {before}
                  </p>
                  <p className="text-base sm:text-lg font-heading font-black text-[#4F46E5]">
                    {after}
                  </p>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
