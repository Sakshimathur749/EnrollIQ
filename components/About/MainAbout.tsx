"use client";
import AboutHeroSection from "./AboutHeroSection";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import ValuesSection from "./ValuesSection";
import TimelineSection from "./TimelineSection";
import { EduNavbar } from "../EduNavbar";
import { EduFooter } from "../EduFooter";

export default function MainAbout() {
  return (
    <>
      <EduNavbar />
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <TimelineSection />
      <EduFooter />
    </>
  );
}
