'use client';

import React from 'react';
import { X, Play, Sparkles, ArrowRight } from 'lucide-react';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoBooking: () => void;
}

export function VideoDemoModal({ isOpen, onClose, onOpenDemoBooking }: VideoDemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden text-slate-900">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> 3-Minute Platform Walkthrough
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#1E3A8A]">
            How EduCRM Converts Ad Spend into Enrolled Students
          </h3>

          {/* Interactive Simulated Video Stage */}
          <div className="relative aspect-video rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center group text-white">
            <div className="w-16 h-16 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-xl shadow-red-500/40 group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>

            <div className="mt-4 space-y-1">
              <div className="font-bold text-white text-sm sm:text-base">
                Interactive Ad-to-Enrollment Simulation
              </div>
              <p className="text-xs text-slate-300 max-w-md">
                Watching: Meta Ad Webhook &rarr; WhatsApp Drip &rarr; 1-Click Auto-Dialer &rarr; LMS Enrollment
              </p>
            </div>

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400 font-mono">02:14 / 03:30 (Live Demo)</span>
              <span>1080p HD • 60 FPS</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-0.5">1. Ingest Leads</div>
              <div className="text-slate-500">&lt; 0.2s from Meta &amp; Google</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-0.5">2. WhatsApp Drips</div>
              <div className="text-slate-500">98% open rates with syllabi</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-0.5">3. Auto-Dial Hot Leads</div>
              <div className="text-slate-500">Reach prospects in &lt; 60s</div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <span className="text-xs text-slate-600">
              Ready to see EduCRM with your institution&apos;s live numbers?
            </span>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDemoBooking();
              }}
              className="px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-red-500/20"
            >
              <span>Book Customized Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
