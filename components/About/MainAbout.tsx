"use client";
import AboutHeroSection from "./AboutHeroSection";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import PlatformPillarsSection from "./PlatformPillarsSection";
import TimelineSection from "./TimelineSection";
import { EduNavbar } from "../EduNavbar";
import { EduFooter } from "../EduFooter";
import { CtaBanner } from "../Home/CtaBanner";
import { useState } from "react";
import { ProblemSolutionSection } from "./ProblemSolutionSection";

export default function MainAbout() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <EduNavbar />
      <AboutHeroSection />
      <MissionSection />
      <ProblemSolutionSection />
      {/* <TeamSection /> */}
      <PlatformPillarsSection />
      {/* <TimelineSection /> */}
      <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      <EduFooter />
    </>
  );
}
