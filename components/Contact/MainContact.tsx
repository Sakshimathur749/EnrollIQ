"use client";
import { EduNavbar } from "../EduNavbar";
import { EduFooter } from "../EduFooter";
import { CtaBanner } from "../Home/CtaBanner";
import { useState } from "react";
import HeroContact from "./HeroContact";
import ContactSection from "./ContactSection";
import OfficeLocationsSection from "./OfficeLocationsSection";

export default function MainContact() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <EduNavbar />
      <HeroContact />
      <ContactSection />
      <OfficeLocationsSection />
      <CtaBanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      <EduFooter />
    </>
  );
}
