'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, CheckCircle2, FileText, Sparkles, Award, ArrowRight } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);
    }, 1200);
  };

  const handleDone = () => {
    setDownloaded(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 overflow-hidden"
        >
          {/* Close button */}
          <button
            id="close-report-modal"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!downloaded ? (
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase rounded-full">
                  Second Edition • 2026 Release
                </span>
              </div>

              <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
                Enrollment Index 2026: The State of Student Enrollments
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                48 pages of empirical admissions data, counselor conversion benchmarks, and student engagement channel insights.
              </p>

              {/* Highlights Preview */}
              <div className="my-4 p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Why response times &lt;90 seconds increase fee deposits by 3.8x</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>The shift from email-only to 2-way WhatsApp applicant nurturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Multi-campus attribution models & counselor performance data</span>
                </div>
              </div>

              <form onSubmit={handleDownload} className="space-y-3">
                <div>
                  <label htmlFor="report-email-input" className="block text-xs font-semibold text-slate-800 mb-1">
                    Send PDF Report to Your Work Email
                  </label>
                  <input
                    id="report-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admissions.dean@university.edu"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                  />
                </div>

                <button
                  id="submit-download-report-btn"
                  type="submit"
                  disabled={isDownloading}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isDownloading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Instant PDF Copy (12.4 MB)</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-bold text-slate-900">Report Transmitted!</h2>
              <p className="text-xs text-slate-600 mt-2 mb-6 max-w-xs mx-auto">
                The comprehensive <strong>Enrollment Index 2026 Report</strong> has been sent to <strong className="text-slate-900">{email}</strong> and downloaded.
              </p>

              <button
                id="done-report-modal-btn"
                type="button"
                onClick={handleDone}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Continue to Login
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
