"use client";

import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  Headphones,
  Clock,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users2,
} from "lucide-react";

export default function ContactSection() {
  // State variables for form management
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [institutionType, setInstitutionType] = React.useState(
    "Higher Ed / University",
  );
  const [counselorCount, setCounselorCount] =
    React.useState("1 - 5 Counselors");
  const [requirement, setRequirement] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative bg-slate-50/70 py-16 sm:py-24 border-b border-slate-200/80 overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Details & Channels */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>Transform Your Student Admissions</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.12]">
                Scale Your Enrollment with <br className="hidden sm:inline" />
                <span className="text-indigo-600">EnrollIQ CRM</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Ready to streamline student inquiries, lead assignment, and
                tele-calling? Talk with our product team to see how EnrollIQ CRM
                fits your institution.
              </p>
            </div>

            {/* Sales & Support Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Sales Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Sales Enquiries
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[36px]">
                  Schedule a personalized demo or inquire about customized plan
                  pricing for your counselors.
                </p>

                <div className="space-y-2.5 pt-3 text-xs sm:text-sm font-medium border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a
                      href="tel:+918003141049"
                      className="text-slate-900 hover:text-indigo-600 transition-colors font-bold"
                    >
                      +91 80031 41049
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight flex items-center gap-2">
                    <Headphones className="w-4.5 h-4.5 text-indigo-600" />
                    Technical Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[36px]">
                  Existing customer? Get support with system configuration,
                  integrations, or counselor logins.
                </p>

                <div className="space-y-2.5 pt-3 text-xs sm:text-sm font-medium border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a
                      href="mailto:ticket@enrolliq.com"
                      className="text-slate-900 hover:text-indigo-600 transition-colors font-bold"
                    >
                      ticket@enrolliq.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-indigo-500/5 relative transition-all">
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
                    <PieChart className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#0F172A] tracking-tight">
                      Request a Product Demo
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Fill out the form below and our team will get in touch.
                    </p>
                  </div>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-xl text-[#0F172A]">
                    Enquiry Received, {name}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Thank you for reaching out. An EnrollIQ specialist will
                    contact you shortly at <strong>{email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setRequirement("");
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                  id="contact-sales-form"
                >
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all"
                      id="contact-name-input"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work / Official Email *"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all"
                      id="contact-email-input"
                    />
                  </div>

                  <div className="flex rounded-xl bg-[#F8FAFC] border border-slate-200 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-600/15 overflow-hidden transition-all">
                    <div className="px-3.5 py-3 bg-slate-100/80 border-r border-slate-200 text-sm font-semibold text-slate-700 flex items-center shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number *"
                      className="w-full px-3.5 py-3 bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
                      id="contact-phone-input"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Institution Type
                      </label>
                      <select
                        value={institutionType}
                        onChange={(e) => setInstitutionType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-600 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Higher Ed / University">
                          Higher Ed / University
                        </option>
                        <option value="K-12 School Group">
                          K-12 School Group
                        </option>
                        <option value="EdTech / Coaching">
                          EdTech / Coaching
                        </option>
                        <option value="Study Abroad Agency">
                          Study Abroad Agency
                        </option>
                        <option value="Vocational / Skill Center">
                          Vocational / Skill Center
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Counselor Team Size
                      </label>
                      <select
                        value={counselorCount}
                        onChange={(e) => setCounselorCount(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-600 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="1 - 5 Counselors">
                          1 - 5 Counselors
                        </option>
                        <option value="5 - 15 Counselors">
                          5 - 15 Counselors
                        </option>
                        <option value="15 - 50 Counselors">
                          15 - 50 Counselors
                        </option>
                        <option value="50+ Counselors">50+ Counselors</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      placeholder="How can EnrollIQ help your team? (Optional)"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all resize-none"
                      id="contact-requirement-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 text-sm sm:text-base transform hover:-translate-y-0.5"
                    id="contact-sales-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    🔒 Your information is confidential and will only be used to
                    respond to your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
