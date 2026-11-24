'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X, Download, Sparkles } from 'lucide-react';
import { BrochureForm } from './BrochureForm';

const SUBMITTED_KEY = 'brochure_popup_submitted';
const CLOSED_KEY = 'brochure_popup_closed';
const SHOW_DELAY_MS = 3000; // 3 seconds after page load
const CLOSED_COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes
const SUBMITTED_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

// Don't show popup on these pages
const EXCLUDED_PATHS = ['/thank-you', '/download-brochure', '/login'];

export function LeadPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show on excluded pages
    if (EXCLUDED_PATHS.some((p) => pathname?.startsWith(p))) {
      return;
    }

    const now = Date.now();

    // Check if form was submitted within 24 hours
    const submittedAt = localStorage.getItem(SUBMITTED_KEY);
    if (submittedAt && now - parseInt(submittedAt) < SUBMITTED_COOLDOWN_MS) {
      return;
    }

    // Check if popup was closed within 10 minutes
    const closedAt = localStorage.getItem(CLOSED_KEY);
    if (closedAt && now - parseInt(closedAt) < CLOSED_COOLDOWN_MS) {
      return;
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(CLOSED_KEY, Date.now().toString());
  };

  // Also set submitted flag when form is submitted
  // The BrochureForm redirects to /thank-you, so we set this here as a safety
  useEffect(() => {
    const handleStorageChange = () => {
      const submittedAt = localStorage.getItem(SUBMITTED_KEY);
      if (submittedAt && Date.now() - parseInt(submittedAt) < 5000) {
        setVisible(false);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" id="lead-popup-overlay">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[4px] animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Popup Card */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
        id="lead-popup-card"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close popup"
          id="lead-popup-close-btn"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Header Section with gradient */}
        <div className="relative bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] px-6 sm:px-8 pt-8 pb-7 overflow-hidden rounded-t-3xl">
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

          <h2 className="relative z-10 font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            Download Our Brochure
          </h2>
          <p className="relative z-10 text-sm text-indigo-100 mt-1.5 max-w-sm">
            Get the complete overview of EnrollIQ CRM — features, pricing, and how we help institutions scale
            admissions.
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 sm:px-8 py-6">
          <BrochureForm compact onSuccess={handleClose} />
        </div>
      </div>
    </div>
  );
}
