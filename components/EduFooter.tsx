"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

interface EduFooterProps {
  onOpenDemo?: () => void;
}

export function EduFooter({ onOpenDemo }: EduFooterProps) {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/features" },
    { name: "About", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="relative bg-white text-slate-600 border-t border-slate-200/90 overflow-hidden"
      id="main-footer"
    >
      {/* Subtle background ambient light */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />

      {/* Upper Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Column 1: Brand & Description (Span 6 on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 space-y-4"
            suppressHydrationWarning
          >
            <Link
              href="/"
              className="flex items-center gap-3 group inline-flex"
              id="footer-logo"
            >
              {/* Custom 3-bar funnel logo matching header in light mode */}
              <div className="w-8 h-8 flex flex-col justify-center gap-1.5 group-hover:scale-105 transition-transform">
                <div className="w-7 h-1.5 bg-[#0F172A] rounded-full" />
                <div className="w-5 h-1.5 bg-slate-400 rounded-full" />
                <div className="w-3.5 h-1.5 bg-[#4F46E5] rounded-full" />
              </div>

              <div className="font-heading text-2xl tracking-tight leading-none">
                <span className="font-extrabold text-[#0F172A]">Enroll</span>
                <span className="font-extrabold text-[#4F46E5]">IQ</span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Powering smarter CRM and stronger growth for modern educational
              institutions worldwide. Streamline your sales pipeline, engage
              leads, and close enrollments effortlessly.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-purple-200 text-xs font-semibold text-[#7E22CE] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Next-Gen AI CRM Platform</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Span 3 on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4"
            suppressHydrationWarning
          >
            <h4 className="font-heading font-bold text-base text-[#0F172A] tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-600 hover:text-[#4F46E5] font-medium transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#4F46E5] group-hover:scale-125 transition-all" />
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#4F46E5]" />
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact (Span 3 on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 space-y-4"
            suppressHydrationWarning
          >
            <h4 className="font-heading font-bold text-base text-[#0F172A] tracking-tight">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:info@enrolliq.com"
                className="group flex items-center gap-3 text-slate-600 hover:text-[#4F46E5] transition-colors"
                id="footer-email-link"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100/70 border border-indigo-100 flex items-center justify-center text-[#4F46E5] group-hover:scale-110 transition-transform shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-[#4F46E5] transition-colors">
                  info@enrolliq.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-slate-600 group">
                <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-indigo-50 border border-slate-200/80 group-hover:border-indigo-200 flex items-center justify-center text-slate-500 group-hover:text-[#4F46E5] transition-colors shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-700">
                  Mumbai, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright Bar with Divider Line */}
      <div className="relative border-t border-slate-200/90 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
            &copy; 2026 ENROLLIQ TECHNOLOGIES PRIVATE LIMITED. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
