"use client";

import React from "react";
import { Globe2, MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function OfficeLocationsSection() {
  const offices = [
    {
      city: "Jodhpur, Rajasthan",
      tag: "Main HQ & Operations",
      timeZone: "IST (UTC +5:30)",
      address:
        "142, Pal Rd, near Amargarh Resort, Ravi Nagar, Bhadu Market, Jodhpur, Rajasthan 342001",
      phone: "+91 80031 41049",
      email: "hq@enrolliq.com",
      isPrimary: true,
      landmark: "Near Amargarh Resort",
    },
    {
      city: "Bengaluru, Karnataka",
      tag: "Tech & Innovation Hub",
      timeZone: "IST (UTC +5:30)",
      address: "Bengaluru, Karnataka, India",
      phone: "+91 97616 92241",
      email: "bangalore@enrolliq.com",
      isPrimary: false,
      landmark: "Silicon Valley of India",
    },
  ];

  return (
    <div
      className="space-y-8 sm:space-y-10 py-12"
      id="office-locations-section"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700">
          <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
          <span>Our Presence</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
          Office Locations
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-normal">
          When not on the cloud, or in people&#39;s hearts, we work from here
        </p>
      </div>

      {/* Office Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
        {offices.map((office, idx) => (
          <div
            key={office.city}
            id={`office-card-${idx}`}
            className={`bg-white rounded-3xl border ${
              office.isPrimary
                ? "border-indigo-200 shadow-md ring-1 ring-indigo-500/10"
                : "border-slate-200/90 shadow-sm"
            } p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all group relative overflow-hidden`}
          >
            {/* Background Accent Pill */}
            <div
              className={`absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100 ${
                office.isPrimary
                  ? "bg-indigo-500/10 group-hover:bg-indigo-500/20 group-hover:blur-xl"
                  : "bg-slate-500/10 group-hover:bg-slate-500/20 group-hover:blur-xl"
              }`}
            />

            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    office.isPrimary
                      ? "text-indigo-700 bg-indigo-50 border border-indigo-100"
                      : "text-slate-700 bg-slate-100"
                  }`}
                >
                  {office.tag}
                </span>
                {/* <span className="text-xs font-semibold text-slate-400">
                  {office.timeZone}
                </span> */}
              </div>

              {/* City Title */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                    office.isPrimary
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                  {office.city}
                </h3>
              </div>

              {/* Address Details */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                {office.address}
              </p>

              {/* Contact Information */}
              <div className="space-y-2 pt-2 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
              {/* <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                {office.landmark}
              </span> */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  office.address,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-bold hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
