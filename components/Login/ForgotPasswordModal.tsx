'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2, ArrowRight, KeyRound, ShieldAlert } from 'lucide-react';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 overflow-hidden"
        >
          {/* Close button */}
          <button
            id="close-forgot-password-modal"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <KeyRound className="w-6 h-6" />
              </div>

              <h2 className="text-xl font-bold text-slate-900">Reset Your Password</h2>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Enter your official work or institution email address, and we will send you a secure password reset link.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="forgot-email-input" className="block text-xs font-semibold text-slate-800 mb-1">
                    Official Institution Email
                  </label>
                  <div className="relative">
                    <input
                      id="forgot-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@institute.com"
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Only authorized educational administrators and counselor accounts can request reset links.</span>
                </div>

                <button
                  id="submit-forgot-password-btn"
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Recovery Instructions</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-bold text-slate-900">Recovery Email Dispatched</h2>
              <p className="text-xs text-slate-600 mt-2 mb-6 max-w-xs mx-auto">
                We have transmitted temporary credentials and a magic reset link to <strong className="text-slate-900">{email}</strong>.
              </p>

              <button
                id="done-forgot-password-btn"
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Return to Login
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
