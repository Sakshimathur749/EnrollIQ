"use client";
import AboutHeroSection from "./AboutHeroSection";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import ValuesSection from "./ValuesSection";
import TimelineSection from "./TimelineSection";
import { EduNavbar } from "../EduNavbar";
import { EduFooter } from "../EduFooter";
import { CtaBanner } from "../Home/CtaBanner";
import { useState } from "react";

export default function MainAbout() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <EduNavbar />
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <TimelineSection />
      <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      <EduFooter />
    </>
  );
}
