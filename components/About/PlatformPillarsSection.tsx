"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Share2, Layers, BarChart3, Users, Workflow } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Instant Lead Aggregation",
    subtitle: "Zero Lead Leakage",
    description:
      "Capture inquiries in real-time across Meta Ads, Google Ads, publisher networks, and web forms directly into a single unified workspace.",
    badge: "Speed to Lead",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  },
  {
    icon: Workflow,
    title: "Automated Lead Routing",
    subtitle: "Fair & Smart Distribution",
    description:
      "Assign incoming leads dynamically to counselors based on language, course preference, geography, or round-robin capacity rules.",
    badge: "Operational Efficiency",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    icon: BarChart3,
    title: "Complete Attribution & ROI",
    subtitle: "Data-Driven Marketing",
    description:
      "Track ad performance down to final enrollment status. Identify high-performing channels and eliminate wasted marketing budget.",
    badge: "Ad Attribution",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
  {
    icon: Users,
    title: "Counselor-First Simplicity",
    subtitle: "High Adoption Rate",
    description:
      "Empower counselors with intuitive call logs, instant follow-up reminders, and built-in communication tools designed for high daily volume.",
    badge: "Team Productivity",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-200",
  },
  {
    icon: Layers,
    title: "Unified Communication Stack",
    subtitle: "Connected Workflow",
    description:
      "Integrate telephony, WhatsApp, and email directly into counselor dashboards to ensure consistent engagement across every touchpoint.",
    badge: "Omnichannel Engagement",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    iconBg: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
  {
    icon: Share2,
    title: "Portal & API Connectivity",
    subtitle: "Multi-Platform Sync",
    description:
      "Connect seamlessly with external education portals, publisher APIs, websites, and third-party tools to keep all student data synchronized.",
    badge: "Ecosystem Integration",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    iconBg: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
  },
];

export default function PlatformPillarsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative bg-[#FAFAFE] py-16 sm:py-24 border-t border-slate-200/80 ">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={isMounted ? { opacity: 0, y: 24 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            Core Platform Pillars
          </p>
          <h2 className="text-3xl font-heading font-black tracking-tight text-[#0F172A] sm:text-4xl">
            What We Stand For
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            EnrollIQ is engineered to give educational institutions full
            visibility, total automation, and faster student engagement from
            first click to enrollment.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map(
            (
              {
                icon: Icon,
                title,
                subtitle,
                description,
                badge,
                badgeColor,
                iconBg,
              },
              i,
            ) => (
              <motion.div
                key={title}
                initial={isMounted ? { opacity: 0, y: 28 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${iconBg}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* <span
                      className={`text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${badgeColor}`}
                    >
                      {badge}
                    </span> */}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors mb-1">
                    {title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {subtitle}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
