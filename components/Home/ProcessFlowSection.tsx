"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  FileText,
  Tv,
  MessageSquare,
  Users,
  Share2,
  UploadCloud,
  Check,
  PhoneCall,
  Layers,
  CreditCard,
  BarChart3,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  PieChart as PieChartIcon,
  Bot,
  FileCheck,
  Receipt,
  UserCheck,
} from "lucide-react";

interface StageTab {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

const STAGES: StageTab[] = [
  {
    id: "attract-capture",
    label: "Lead Management",
    eyebrow: "Lead Management",
    title: "Manage Every Lead From One Powerful CRM",
    description:
      "Capture, organize, allocate and manage leads from multiple sources while keeping every lead and its ownership in one centralized platform.",
    bullets: [
      "Centralize leads from multiple sources in one place",
      "Track lead source, campaign and acquisition details",
      "Automatically allocate leads to counselors and teams",
      "Transfer leads easily without losing ownership history",
      "Import leads from Google Sheets and CSV",
    ],
  },
  {
    id: "engage-nurture",
    label: "Forms & Lead Fields",
    eyebrow: "Forms & Lead Fields",
    title: "Build Forms That Fit Your Lead Journey",
    description:
      "Create flexible forms and dynamically configure the lead information your team needs to capture.",
    bullets: [
      "Create customized registration and student application forms",
      "Add and manage dynamic lead fields",
      "Capture the right information at every stage",
      "Create and manage campaigns from one platform",
      "Monitor campaign performance through a centralized dashboard",
      "Track leads by source and campaign",
    ],
  },
  {
    id: "campaign-manager",
    label: "Campaign Manager ",
    eyebrow: "Campaign Manager",
    title: "Create, Manage & Track Every Campaign in One Place.",
    description:
      "Create and manage campaigns from a centralized CRM while connecting leads, sources, and performance data. From campaign creation to lead management, track the complete campaign journey from one platform.",
    bullets: [
      "Monitor campaign performance and lead conversion.",
      "Create and launch campaigns from one centralized platform.",
      "Keep campaign and lead data organized in one place.",
      "Manage campaign-wise lead allocation and ownership.",
      "Filter and analyze leads based on campaigns and sources.",
    ],
  },
  {
    id: "apply-enroll",
    label: "Integrations & Automation",
    eyebrow: "Integrations & Automation",
    title: "Connect Every Channel. Automate Your Workflow.",
    description:
      "Connect your favorite advertising, publisher, communication and automation tools with your CRM and keep your entire lead ecosystem working together.",
    bullets: [
      "Connect publishers like Shiksha, CollegeDunia and Edustoke.",
      "Integrate Google Ads, Google My Business and Meta.",
      "Capture leads through Meta Instant Forms.",
      "Connect MyOperator, TeleCMI, AWS SES and WhatsApp Business",
      "Automate workflows with Zapier and Calendly",
    ],
  },
  {
    id: "unlock-intelligence",
    label: "AI Call Insights",
    eyebrow: "AI Call Insights",
    title: "Turn Every Conversation Into Actionable Insight",
    description:
      "Let AI analyze counselor calls, understand lead intent and transform conversations into clear insights that help your team take the next best action.",
    bullets: [
      "AI Summary - Get a quick overview of every conversation",
      "Key Points - Identify important needs, questions and objections",
      "Lead Mood - Understand the tone and mood of the conversation",
      "Counselor Tips - Get intelligent suggestions to improve follow-ups",
      "Suggested Follow-ups - Know what action to take next.",
      "Full Transcript - Review the complete conversation whenever needed.",
    ],
  },
];

export function ProcessFlowSection() {
  const [activeTabId, setActiveTabId] = useState<string>("attract-capture");

  const currentStage = STAGES.find((s) => s.id === activeTabId) || STAGES[0];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 overflow-hidden"
      id="process-flow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
            One Connected Enrollment System
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.15]">
            Run Every Stage of Enrollment on One Unified Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Bring marketing, admissions, applications, and student engagement
            together on one purpose-built education enrollment CRM.
          </p>
        </div>

        {/* Segmented / Navigation Tab Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 gap-1.5 shadow-xs">
            {STAGES.map((stage) => {
              const isActive = activeTabId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveTabId(stage.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-600 hover:text-[#0F172A] hover:bg-white"
                  }`}
                  id={`tab-${stage.id}`}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Container with Split Left and Right Visuals */}
        <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left Column: Stage Text Content */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Eyebrow */}
                  <div className="text-xs font-black tracking-widest text-[#4F46E5] uppercase">
                    {currentStage.eyebrow}
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-[38px] text-[#0F172A] leading-[1.18] tracking-tight">
                    {currentStage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {currentStage.description}
                  </p>

                  {/* Bullets List */}
                  <ul className="space-y-3.5 pt-2">
                    {currentStage.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-700 font-medium leading-normal"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Visual Dashboard Mockup Display */}
            <div className="lg:col-span-6 bg-slate-50/90 border-t lg:border-t-0 lg:border-l border-slate-200/70 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTabId === "attract-capture" && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white"
                  >
                    <img
                      src="../assets/lead-mangement-sec.webp"
                      alt="Attract and Capture Analytics"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </motion.div>
                )}

                {activeTabId === "engage-nurture" && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white"
                  >
                    <img
                      src="../assets/lead-field.webp"
                      alt="Attract and Capture Analytics"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </motion.div>
                )}

                {activeTabId === "campaign-manager" && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white"
                  >
                    <img
                      src="../assets/campaign-manager.webp"
                      alt="Attract and Capture Analytics"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </motion.div>
                )}

                {activeTabId === "apply-enroll" && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white"
                  >
                    <img
                      src="../assets/integrations-sec.webp"
                      alt="Attract and Capture Analytics"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </motion.div>
                )}

                {activeTabId === "unlock-intelligence" && (
                  <motion.div
                    key="attract-capture-view"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white"
                  >
                    <img
                      src="../assets/ai-insight-sec.webp"
                      alt="Attract and Capture Analytics"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
