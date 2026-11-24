'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  Users,
  MessageSquare,
  ArrowRight,
  Sparkles,
  FileText,
  Calendar,
  PhoneCall,
} from 'lucide-react';
import { EduNavbar } from '@/components/EduNavbar';
import { EduFooter } from '@/components/EduFooter';

interface FormData {
  name: string;
  email: string;
  phone: string;
  institutionType: string;
  counselorCount: string;
  requirement: string;
}

export default function ThankYouPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem('brochure_form_data');
    if (stored) {
      try {
        setFormData(JSON.parse(stored));
        // Auto-download the brochure PDF
        const link = document.createElement('a');
        link.href = '/images/enrolliq-brochure.pdf';
        link.download = 'EnrollIQ-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        setFormData(null);
      }
    }
  }, []);

  // Show loading state until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC]" />;
  }

  // If no form data (direct URL access), show access restricted message
  if (!formData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC] text-slate-900 flex flex-col">
        <EduNavbar />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-lg text-center space-y-6">
            <div className="w-16 h-16 bg-amber-50 text-amber-600 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="font-heading font-black text-3xl text-[#0F172A] tracking-tight">Form Submission Required</h1>
            <p className="text-base text-slate-600 leading-relaxed">
              The brochure download is available only after submitting the form. Please fill out the form to get instant
              access.
            </p>
            <Link
              href="/download-brochure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Go to Download Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <EduFooter />
      </div>
    );
  }

  // Form was submitted — show thank-you page with download
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      <EduNavbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Background ambient */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Success Hero */}
          <div className="text-center space-y-5 mb-12">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10 animate-in fade-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-11 h-11" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/60 border border-purple-200/80 text-xs font-semibold text-[#7E22CE] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Brochure Request Confirmed</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] tracking-tight leading-[1.12]">
              Thank You, {formData.name.split(' ')[0]}!
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Your brochure download has started automatically. Our team will also reach out to you at{' '}
              <strong className="text-[#4F46E5]">{formData.email}</strong> within 24 hours.
            </p>
          </div>

          {/* User Details Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm mb-8">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100">
              <h3 className="font-heading font-bold text-lg text-[#0F172A] tracking-tight">Your Submission Details</h3>
            </div>
            <div className="px-6 sm:px-8 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Name</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{formData.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5 break-all">{formData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Phone</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">+91 {formData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Institution Type</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{formData.institutionType}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Counselor Team Size</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{formData.counselorCount}</p>
                </div>
              </div>

              {formData.requirement && (
                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <MessageSquare className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Message</p>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">{formData.requirement}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps / CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] shrink-0 group-hover:scale-105 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-sm text-[#0F172A]">Talk to Sales</p>
                <p className="text-xs text-slate-500 mt-0.5">Schedule a personalized demo</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-sm text-[#0F172A]">Explore Features</p>
                <p className="text-xs text-slate-500 mt-0.5">Back to homepage</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </main>

      <EduFooter />
    </div>
  );
}
