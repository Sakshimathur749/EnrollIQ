"use client";

import React, { useState } from "react";
import { EduNavbar } from "@/components/EduNavbar";
import { HeroSection } from "@/components/Home/HeroSection";
import { MetricsBar } from "@/components/Home/MetricsBar";
import { IntegrationsMarquee } from "@/components/Home/IntegrationsMarquee";
import { ProcessFlowSection } from "@/components/Home/ProcessFlowSection";
import { IntegrationsSection } from "@/components/Home/IntegrationsSection";
import { FaqSection } from "@/components/Home/FaqSection";
import { CtaBanner } from "@/components/Home/CtaBanner";
import { EduFooter } from "@/components/EduFooter";
import { ScheduleDemoModal } from "@/components/Login/ScheduleDemoModal";
import { VideoDemoModal } from "@/components/VideoDemoModal";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col antialiased selection:bg-indigo-600 selection:text-white"
      id="educrm-homepage"
    >
      {/* 1. STICKY NAVIGATION BAR */}
      <EduNavbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1">
        {/* 2. PAID-ADS FOCUSED HERO SECTION */}
        <HeroSection
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* 3. "CONNECT TO 100+ INTEGRATIONS" MARQUEE (Right after Hero) */}
        <IntegrationsMarquee />

        {/* 4. PROCESS & FLOW OF LEADS (ONE CONNECTED ENROLLMENT SYSTEM) */}
        <ProcessFlowSection />

        {/* 5. KEY VALUE METRICS BAR */}
        <MetricsBar />

        {/* 6. NATIVE INTEGRATIONS ECOSYSTEM GRID */}
        <IntegrationsSection />

        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
        <FaqSection />

        {/* 8. HIGH-CONVERTING CLOSING CTA BANNER WITH HIGHLIGHT STRIP */}
        <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>

      {/* FOOTER */}
      <EduFooter onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Interactive Modals */}
      <ScheduleDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <VideoDemoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenDemoBooking={() => setIsDemoModalOpen(true)}
      />
    </div>
  );
}
