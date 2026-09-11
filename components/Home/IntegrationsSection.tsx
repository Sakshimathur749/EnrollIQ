"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  MessageSquare,
  Megaphone,
  Workflow,
  ShieldCheck,
  Globe,
  FileText,
  BarChart3,
  Search,
  ChevronRight,
  Layers,
  Phone,
  Mail,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  category: "acquisition" | "engagement" | "operations" | "analytics";
  tagline: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  hoverColor: string;
  badge?: string;
  linkUrl: string;
}

export function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const products: ProductItem[] = [
    {
      id: "publisher-apis",
      name: "Publisher APIs Integration",
      category: "acquisition",
      tagline: "Direct Lead Ingestion",
      description:
        "Seamless real-time integration with Shiksha, CollegeDunia, and Edustoke.",
      icon: Globe,
      iconColor: "text-[#0284C7]",
      iconBg: "bg-sky-50 border-sky-100/80",
      hoverColor: "group-hover:text-[#0284C7]",
      badge: "Verified Ingestion",
      linkUrl: "/services",
    },
    {
      id: "ads-integration",
      name: "Ads & Social Connect",
      category: "acquisition",
      tagline: "Multi-Platform Ad Sync",
      description:
        "Connect Google Ads, GMB, Meta Instant Forms, and Meta Conversions API.",
      icon: Megaphone,
      iconColor: "text-[#E11D48]",
      iconBg: "bg-rose-50 border-rose-100/80",
      hoverColor: "group-hover:text-[#E11D48]",
      badge: "Instant Ad Sync",
      linkUrl: "/services",
    },
    {
      id: "telephony-integration",
      name: "Telephony Integration",
      category: "engagement",
      tagline: "Smart Calling Hub",
      description:
        "Cloud telephony integration with MyOperator and TeleCMI for instant calls.",
      icon: Phone,
      iconColor: "text-[#2563EB]",
      iconBg: "bg-blue-50 border-blue-100/80",
      hoverColor: "group-hover:text-[#2563EB]",
      badge: "Click-to-Call",
      linkUrl: "/services",
    },
    {
      id: "email-connect",
      name: "Email Campaigns & AWS SES",
      category: "engagement",
      tagline: "High-Deliverability Email",
      description:
        "Automate bulk email campaigns backed by reliable AWS SES infrastructure.",
      icon: Mail,
      iconColor: "text-[#D97706]",
      iconBg: "bg-amber-50 border-amber-100/80",
      hoverColor: "group-hover:text-[#D97706]",
      badge: "AWS SES Powered",
      linkUrl: "/services",
    },
    {
      id: "leads-import",
      name: "Lead Import & Field Mapping",
      category: "operations",
      tagline: "Smart Data Ingestion",
      description:
        "Import leads easily from Google Sheets or CSV files with dynamic field mapping.",
      icon: FileSpreadsheet,
      iconColor: "text-[#0D9488]",
      iconBg: "bg-teal-50 border-teal-100/80",
      hoverColor: "group-hover:text-[#0D9488]",
      badge: "Bulk Upload",
      linkUrl: "/services",
    },
    {
      id: "workflow-automation",
      name: "Workflow & App Automation",
      category: "operations",
      tagline: "Third-Party Connectors",
      description:
        "Connect your favorite tools seamlessly via Zapier and Calendly integrations.",
      icon: Workflow,
      iconColor: "text-[#4F46E5]",
      iconBg: "bg-indigo-50 border-indigo-100/80",
      hoverColor: "group-hover:text-[#4F46E5]",
      badge: "Zapier & Calendly",
      linkUrl: "/services",
    },
    {
      id: "application-reports-analytics",
      name: "Application Reports & Analytics",
      category: "analytics",
      tagline: "Funnel Intelligence",
      description:
        "Real-time admission performance dashboards and channel conversion reports.",
      icon: BarChart3,
      iconColor: "text-[#9333EA]",
      iconBg: "bg-purple-50 border-purple-100/80",
      hoverColor: "group-hover:text-[#9333EA]",
      badge: "Real-Time BI",
      linkUrl: "/services",
    },
  ];

  const categories = [
    { id: "all", label: "All Integrations" },
    { id: "acquisition", label: "Lead Sources & Ads" },
    { id: "engagement", label: "Telephony & Messaging" },
    { id: "operations", label: "Imports & Automations" },
    { id: "analytics", label: "Analytics & Reports" },
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="relative py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200/80 overflow-hidden"
      id="integrations"
    >
      {/* Subtle modern background accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider text-[#4F46E5] shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
            Unified Product Suite
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.15]">
            Purpose-Built Products for Higher Education Admissions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From instant lead capture and automated tracking to seamless app
            integrations and AI insights—explore the core modules driving higher
            conversions for modern institutions.
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-100">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/80 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none ${
                  activeCategory === cat.id
                    ? "bg-white text-[#0F172A] shadow-xs border border-slate-200/60"
                    : "text-slate-600 hover:text-[#0F172A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-slate-50/80 hover:bg-white focus:bg-white border border-slate-200/90 rounded-xl pl-9 pr-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all"
            />
          </div>
        </div>

        {/* 4 Cards per row on desktop with column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => {
            const Icon = prod.icon;
            return (
              <Link
                key={prod.id}
                href={prod.linkUrl || "/services"}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300/80 shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Icon with distinct colored background & subtle border */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${prod.iconBg} border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs`}
                    >
                      <Icon
                        className={`w-6 h-6 ${prod.iconColor}`}
                        strokeWidth={2.2}
                      />
                    </div>
                    {prod.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100/90 text-slate-600 border border-slate-200/80 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-[#4F46E5] transition-colors">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-base text-[#0F172A] ${prod.hoverColor} transition-colors leading-snug tracking-tight mb-2`}
                  >
                    {prod.name}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {prod.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-5 pt-3.5 border-t border-slate-100/90 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#4F46E5] transition-colors">
                  <span>Explore module</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View More Services / Products Button Section */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-indigo-500/25 transition-all duration-300 group cursor-pointer"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
