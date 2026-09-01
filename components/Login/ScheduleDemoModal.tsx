'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, ArrowRight, Sparkles, Building, Users } from 'lucide-react';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleDemoModal({ isOpen, onClose }: ScheduleDemoModalProps) {
  const [institute, setInstitute] = useState('');
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('10-50 Counselors');
  const [preferredDate, setPreferredDate] = useState('2026-09-02');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !institute) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleDone = () => {
    setSubmitted(false);
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
            id="close-demo-modal"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Schedule a 1-on-1 CRM Demo</h2>
                  <p className="text-xs text-slate-500">
                    See how EnrollI accelerates student admissions & counselor conversions
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
                <div>
                  <label htmlFor="demo-institute-input" className="block text-xs font-semibold text-slate-800 mb-1">
                    Institution / University Name
                  </label>
                  <input
                    id="demo-institute-input"
                    type="text"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                    placeholder="e.g. Stanford University Admissions Wing"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="demo-work-email-input" className="block text-xs font-semibold text-slate-800 mb-1">
                    Work Email
                  </label>
                  <input
                    id="demo-work-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="dean.admissions@stanford.edu"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="demo-team-size-select" className="block text-xs font-semibold text-slate-800 mb-1">
                      Admissions Team Size
                    </label>
                    <select
                      id="demo-team-size-select"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                    >
                      <option>1-10 Counselors</option>
                      <option>10-50 Counselors</option>
                      <option>50-200 Counselors</option>
                      <option>200+ Multi-Campus</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="demo-date-input" className="block text-xs font-semibold text-slate-800 mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="demo-date-input"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-800 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Includes a customized demo walkthrough with live admissions pipeline metrics.</span>
                </div>

                <button
                  id="submit-schedule-demo-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm Demo Session</span>
                      <ArrowRight className="w-4 h-4" />
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

              <h2 className="text-xl font-bold text-slate-900">Demo Walkthrough Confirmed!</h2>
              <p className="text-xs text-slate-600 mt-2 mb-6 max-w-xs mx-auto">
                A calendar invitation for <strong className="text-slate-900">{preferredDate}</strong> has been dispatched to <strong className="text-slate-900">{email}</strong>.
              </p>

              <button
                id="done-demo-modal-btn"
                type="button"
                onClick={handleDone}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
