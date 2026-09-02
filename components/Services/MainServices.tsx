"use client";
import { EduFooter } from "../EduFooter";
import { EduNavbar } from "../EduNavbar";
import ServicesHero from "./ServicesHero";
import ServicesTabs from "./ServicesTabs";
import { FaqSection } from "@/components/Home/FaqSection";

export default function MainServices() {
  return (
    <>
      <EduNavbar />
      <ServicesHero />
      <ServicesTabs />
      <FaqSection />
      <EduFooter />
    </>
  );
}
