'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileCheck, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col overflow-hidden"
        >
          {/* Close button */}
          <button
            id="close-legal-modal"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-4 shrink-0">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileCheck className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {isPrivacy ? 'EnrollI Privacy & Data Protection Policy' : 'EnrollI Terms of Use & Service Agreement'}
              </h2>
              <p className="text-xs text-slate-500">Last updated: August 2026 • Enterprise Compliance</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto space-y-4 text-xs text-slate-600 pr-2 leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  EnrollI CRM is committed to protecting student applicant and educational institutional data. We operate under stringent global data compliance frameworks including GDPR, FERPA, SOC 2 Type II, and ISO 27001 standards.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
                <p>
                  We collect institutional account credentials, counselor user telemetry, and student admission pipeline records solely for delivering admissions workflow automation, multi-channel communications, and CRM services.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">2. Data Security & Encryption</h4>
                <p>
                  All data in transit is encrypted using TLS 1.3 with AES-256 encryption at rest. Strict role-based access control (RBAC) ensures only authorized institutional personnel can access applicant data.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">3. Zero Third-Party Monetization</h4>
                <p>
                  EnrollI does not sell, rent, or monetize educational or student inquiry data to third-party advertisers under any circumstances.
                </p>
              </>
            ) : (
              <>
                <p>
                  By accessing or signing in to EnrollI CRM Cloud, you agree to comply with these terms, representing an authorized educational institution or accredited organization.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">1. Authorized Institutional Access</h4>
                <p>
                  Only verified institutional staff, admissions deans, counselors, and approved administrators may utilize CRM credentials. Sharing account access outside organizational boundaries is strictly prohibited.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">2. Telephony & Messaging Compliance</h4>
                <p>
                  Institutions utilizing WhatsApp Business API, SMS broadcasting, or Cloud Calling must ensure opt-in consent has been obtained from student inquiries in accordance with local telecommunication regulations.
                </p>
                <h4 className="font-bold text-slate-900 text-sm">3. Service Level Agreement (SLA)</h4>
                <p>
                  EnrollI guarantees 99.95% portal uptime for admissions application processing and uninterrupted multi-campus counselor workflows.
                </p>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end shrink-0">
            <button
              id="confirm-legal-modal-btn"
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
