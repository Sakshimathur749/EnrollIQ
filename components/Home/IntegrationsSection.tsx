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
      id: "lead-management-system",
      name: "Lead Management System",
      category: "acquisition",
      tagline: "360° Lead Pipeline",
      description: "Capture and auto-distribute student inquiries instantly.",
      icon: Users,
      iconColor: "text-[#2563EB]",
      iconBg: "bg-blue-50 border-blue-100/80",
      hoverColor: "group-hover:text-[#2563EB]",
      badge: "Zero Leakage",
      linkUrl: "/services",
    },
    {
      id: "lead-nurturing",
      name: "Lead Nurturing",
      category: "engagement",
      tagline: "Multi-Channel Journeys",
      description: "Automate personalized WhatsApp and email journeys.",
      icon: MessageSquare,
      iconColor: "text-[#059669]",
      iconBg: "bg-emerald-50 border-emerald-100/80",
      hoverColor: "group-hover:text-[#059669]",
      badge: "4.8x Conversion",
      linkUrl: "/services",
    },
    {
      id: "campaign-management",
      name: "Campaign Management",
      category: "acquisition",
      tagline: "Multi-Source Attribution",
      description: "Track multi-channel ad campaigns and ROI.",
      icon: Megaphone,
      iconColor: "text-[#E11D48]",
      iconBg: "bg-rose-50 border-rose-100/80",
      hoverColor: "group-hover:text-[#E11D48]",
      badge: "Multi-Touch ROI",
      linkUrl: "/services",
    },
    {
      id: "marketing-automation",
      name: "Marketing Automation",
      category: "engagement",
      tagline: "Visual Workflow Builder",
      description: "Build visual admission workflows without code.",
      icon: Workflow,
      iconColor: "text-[#D97706]",
      iconBg: "bg-amber-50 border-amber-100/80",
      hoverColor: "group-hover:text-[#D97706]",
      badge: "No-Code Engine",
      linkUrl: "/services",
    },
    {
      id: "user-management",
      name: "User Management",
      category: "operations",
      tagline: "Granular Role Governance",
      description: "Control counselor permissions with audit logs.",
      icon: ShieldCheck,
      iconColor: "text-[#4F46E5]",
      iconBg: "bg-indigo-50 border-indigo-100/80",
      hoverColor: "group-hover:text-[#4F46E5]",
      badge: "RBAC Security",
      linkUrl: "/services",
    },
    {
      id: "publisher-panel",
      name: "Publisher Panel",
      category: "acquisition",
      tagline: "Partner Portals",
      description: "Direct partner lead ingestion and validation.",
      icon: Globe,
      iconColor: "text-[#0284C7]",
      iconBg: "bg-sky-50 border-sky-100/80",
      hoverColor: "group-hover:text-[#0284C7]",
      badge: "Partner Portal",
      linkUrl: "/services",
    },
    {
      id: "advance-form-builder",
      name: "Advance Form Builder",
      category: "engagement",
      tagline: "Multi-Step Portals",
      description: "Multi-step admission forms with OTP verification.",
      icon: FileText,
      iconColor: "text-[#0D9488]",
      iconBg: "bg-teal-50 border-teal-100/80",
      hoverColor: "group-hover:text-[#0D9488]",
      badge: "Smart Logic",
      linkUrl: "/services",
    },
    {
      id: "application-reports-analytics",
      name: "Application Reports & Analytics",
      category: "analytics",
      tagline: "BI & Funnel Intelligence",
      description: "Real-time BI dashboards and funnel reports.",
      icon: BarChart3,
      iconColor: "text-[#9333EA]",
      iconBg: "bg-purple-50 border-purple-100/80",
      hoverColor: "group-hover:text-[#9333EA]",
      badge: "Executive BI",
      linkUrl: "/services",
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "acquisition", label: "Acquisition" },
    { id: "engagement", label: "Nurturing & Automation" },
    { id: "operations", label: "Operations & Governance" },
    { id: "analytics", label: "Analytics" },
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
            From student lead acquisition to multi-channel nurturing and BI
            analytics—explore our 8 core enterprise modules designed for modern
            institutions.
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
                href={prod.linkUrl || "/demo"}
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

                  {/* Concise Description (6-7 words) */}
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
      </div>
    </section>
  );
}
