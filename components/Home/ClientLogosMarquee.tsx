"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface ClientLogoItem {
  id: string;
  name: string;
  src: string;
}

const clientLogos: ClientLogoItem[] = [
  {
    id: "oxford-global",
    name: "Oxford Global University",
    src: "/assets/clients/client_logo_oxford_global_1794995346628.jpg",
  },
  {
    id: "apex-university",
    name: "Apex University",
    src: "/assets/clients/client_logo_apex_university_1794995347017.jpg",
  },
  {
    id: "nextgen-academy",
    name: "NextGen Academy",
    src: "/assets/clients/client_logo_nextgen_academy_1794995347173.jpg",
  },
  {
    id: "scalerx-institute",
    name: "ScalerX Institute",
    src: "/assets/clients/client_logo_scalerx_tech_1794995348192.jpg",
  },
  {
    id: "vanguard-bschool",
    name: "Vanguard Business School",
    src: "/assets/clients/client_logo_vanguard_bschool_1794995348952.jpg",
  },
  {
    id: "sterling-schools",
    name: "Sterling Schools",
    src: "/assets/clients/client_logo_sterling_schools_1794995348789.jpg",
  },
];

function ClientLogoImageCard({ client }: { client: ClientLogoItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative flex items-center justify-center w-44 sm:w-52 h-24 sm:h-28 px-4 py-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-300/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 overflow-hidden"
      title={client.name}
    >
      {hasError ? (
        <div className="flex flex-col items-center justify-center gap-1.5 text-slate-400">
          <Building2 className="w-6 h-6 text-indigo-500" />
          <span className="text-xs font-semibold text-slate-700 text-center line-clamp-1">
            {client.name}
          </span>
        </div>
      ) : (
        <Image
          src={client.src}
          alt={`${client.name} logo`}
          width={240}
          height={160}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
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
        {/* Clean Editorial Header */}
        <div className="max-w-2xl mx-auto space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
            Trusted By Leading Campuses
          </p>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight text-balance">
            Powering Admissions for{" "}
            <span className="text-[#4F46E5]">Top Educational Institutions</span>
          </h2>
        </div>

        {/* Continuous Image-Only Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Edge Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFE] via-[#FAFAFE]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFE] via-[#FAFAFE]/90 to-transparent z-10 pointer-events-none" />

          <div
            className="animate-marquee flex items-center motion-reduce:[animation:none]"
            style={{ animationDuration: "34s" }}
          >
            {/* Primary Logo Image Track */}
            <div className="flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 shrink-0">
              {clientLogos.map((client) => (
                <ClientLogoImageCard key={client.id} client={client} />
              ))}
            </div>

            {/* Duplicate Track for Seamless Infinite Loop */}
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
