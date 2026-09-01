"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  Building2,
  MessageSquare,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { EduNavbar } from "@/components/EduNavbar";
import { EduFooter } from "@/components/EduFooter";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFE] text-slate-900 flex flex-col py-8 md:py-10">
      <EduNavbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/70 border border-purple-200 text-xs font-semibold text-[#7E22CE]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>We&apos;re Here to Help</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Get in Touch with <span className="text-[#4F46E5]">EnrollIQ</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Have questions about features, pricing, or custom enterprise
              solutions? Our growth and customer success team is ready to assist
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Contact Channels & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Direct Support */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
                <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-[#4F46E5]" />
                  Direct Channels
                </h2>

                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:contact@enrolliq.com"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-indigo-50/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">
                        Email Us
                      </div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-[#4F46E5] transition-colors">
                        contact@enrolliq.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-indigo-50/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">
                        Call Support
                      </div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                        +91 (800) 456-7890
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">
                        Operating Hours
                      </div>
                      <div className="text-sm font-bold text-slate-800">
                        Mon - Fri: 9:00 AM - 7:00 PM IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: HQ Location */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#4F46E5]" />
                  Global Headquarters
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  EnrollIQ Technologies Pvt Ltd.
                  <br />
                  Level 8, Cyber Tower B, Hitec City, Hyderabad, 500081 India
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    24/7 Priority SLA available for Enterprise clients
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out, <strong>{name}</strong>. An
                    EnrollIQ solutions specialist will get back to you within 2
                    business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setCompany("");
                        setMessage("");
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-form"
                >
                  <div>
                    <h2 className="font-heading font-bold text-xl text-slate-900">
                      Send us a Message
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and we&apos;ll respond promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sakshi Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sakshi@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Company / Institute
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Apex Education Group"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      How can we help you? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your team size, current CRM, and requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-md shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    id="submit-contact-form-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <EduFooter />
    </div>
  );
}
