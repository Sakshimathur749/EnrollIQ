"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Rocket,
  User,
  Network,
  Puzzle,
  ArrowRight,
  Mail,
  Sparkles,
  CheckCircle2,
  Lock,
  Phone,
} from "lucide-react";

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export function CtaBanner({ onOpenDemo }: CtaBannerProps) {
  const highlights = [
    {
      title: "Lead Management",
      icon: Network, // or Layers / Contact
      desc: "Dynamic lead fields, custom forms & seamless allocation to counselors",
    },
    {
      title: "Omnichannel Sources",
      icon: Rocket, // or Globe / Share2
      desc: "Capture leads automatically from Meta, Google Ads & publisher APIs",
    },
    {
      title: "Campaign Intelligence",
      icon: User, // or BarChart3 / LayoutDashboard
      desc: "Real-time campaign manager dashboard to track source performance",
    },
    {
      title: "Native Integrations",
      icon: Puzzle,
      desc: "Built-in connectors for Telephony, AWS SES & Zapier",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-24 bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF] text-slate-900 overflow-hidden border-t border-slate-200/80"
      id="cta-banner"
    >
      {/* Topographic and ambient gradient background matching the light theme */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[250px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Main Content Area: Heading, Description & Action Buttons */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight"
            suppressHydrationWarning
          >
            Ready to Scale Your Admissions <br className="hidden sm:inline" />
            <span className="text-[#4F46E5]">with EnrollIQ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            suppressHydrationWarning
          >
            Connect ad sources, publisher APIs, and telephony in one place.
            Build dynamic forms, track live campaign ROI, and auto-allocate
            leads to counselors instantly
          </motion.p>

          {/* CTA Buttons: Contact Us & Login */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            suppressHydrationWarning
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-[#4F46E5] hover:bg-indigo-600 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
              id="cta-contact-us-btn"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="https://crm.mediagarh.com/CRM/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              id="cta-login-btn"
            >
              <User className="w-5 h-5 text-[#4F46E5]" />
              <span>Login to Portal</span>
            </Link>
          </motion.div>
        </div>

        {/* Feature Strip matching the light theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="pt-10 border-t border-slate-200/80"
          id="cta-features-strip"
          suppressHydrationWarning
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white hover:bg-white border border-slate-200/90 hover:border-indigo-300 shadow-2xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  id={`cta-feature-${index}`}
                >
                  {/* Clean outline icon in dedicated container */}
                  <div className="w-13 h-13 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100/70 border border-indigo-100 text-[#4F46E5] flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[2] text-[#4F46E5]" />
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#0F172A] group-hover:text-[#4F46E5] transition-colors tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
