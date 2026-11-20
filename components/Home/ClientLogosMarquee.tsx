"use client";

import React, { useState } from "react";
import { Building2 } from "lucide-react";

interface ClientLogoItem {
  id: string;
  name: string;
  src: string;
}

const clientLogos: ClientLogoItem[] = [
  { id: "aims", name: "aims", src: "/assets/clients/aimsibs.webp" },
  {
    id: "Alpenstock",
    name: "Alpenstock",
    src: "/assets/clients/Alpenstock.webp",
  },
  { id: "Amatir", name: "Amatir", src: "/assets/clients/Amatir.webp" },
  {
    id: "AmberValley",
    name: "AmberValley",
    src: "/assets/clients/AmberValley.webp",
  },
  { id: "Doon", name: "Doon", src: "/assets/clients/Doon.webp" },
  {
    id: "e-Drishyam",
    name: "e-Drishyam",
    src: "/assets/clients/e-Drishyam.webp",
  },
  { id: "Himalayan", name: "Himalayan", src: "/assets/clients/Himalayan.webp" },
  { id: "izee", name: "izee", src: "/assets/clients/izee.webp" },
  {
    id: "JuniorToes",
    name: "JuniorToes",
    src: "/assets/clients/JuniorToes.webp",
  },
  { id: "NIIB", name: "NIIB", src: "/assets/clients/NIIB.webp" },
  { id: "Rockwell", name: "Rockwell", src: "/assets/clients/Rockwell.webp" },
  { id: "Scope", name: "Scope", src: "/assets/clients/Scope.webp" },
  { id: "Shreejee", name: "Shreejee", src: "/assets/clients/Shreejee.webp" },
  {
    id: "StarYogStudio",
    name: "StarYogStudio",
    src: "/assets/clients/StarYogStudio.webp",
  },
  {
    id: "TheIndianHeritage",
    name: "TheIndianHeritage",
    src: "/assets/clients/TheIndianHeritage.webp",
  },
  {
    id: "VishwaVidyapeeth",
    name: "VishwaVidyapeeth",
    src: "/assets/clients/VishwaVidyapeeth.webp",
  },
];

function ClientLogoImageCard({ client }: { client: ClientLogoItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-center h-[100px] bg-white w-auto px-4 py-2 rounded-lg border border-slate-200/90 hover:border-indigo-300/90 transition-all duration-200 shrink-0"
      title={client.name}
    >
      {hasError ? (
        <div className="flex items-center gap-2 text-slate-400">
          <Building2 className="w-5 h-5 text-indigo-500 shrink-0" />
          <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
            {client.name}
          </span>
        </div>
      ) : (
        <img
          src={client.src}
          alt={`${client.name} logo`}
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-auto object-contain select-none transition-transform duration-200 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export function ClientLogosMarquee() {
  return (
    <section
      className="relative bg-[#FAFAFE] py-12 sm:py-16 overflow-hidden border-b border-slate-200/80"
      id="client-logos-marquee"
      aria-label="Client Logos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            Trusted By Leading Campuses
          </p>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight text-balance">
            Powering Admissions for{" "}
            <span className="text-[#4F46E5]">Top Educational Institutions</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Edge Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFAFE] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFAFE] to-transparent z-10 pointer-events-none" />

          <div
            className="animate-marquee flex items-center will-change-transform motion-reduce:[animation:none]"
            style={{ animationDuration: "34s" }}
          >
            <div className="flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 shrink-0">
              {clientLogos.map((client) => (
                <ClientLogoImageCard key={client.id} client={client} />
              ))}
            </div>

            <div
              className="flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 shrink-0"
              aria-hidden="true"
            >
              {clientLogos.map((client) => (
                <ClientLogoImageCard key={`${client.id}-dup`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
