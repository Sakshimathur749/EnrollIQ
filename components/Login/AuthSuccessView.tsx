'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  BarChart3, 
  LogOut, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { EnrolliLogo } from './EnrolliLogo';

interface AuthSuccessViewProps {
  userEmail: string;
  institutionName?: string;
  isNewAccount?: boolean;
  onLogout: () => void;
}

export function AuthSuccessView({
  userEmail,
  institutionName = 'Oxford Global University',
  isNewAccount = false,
  onLogout,
}: AuthSuccessViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl border border-slate-200"
    >
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          {isNewAccount ? 'Welcome to EnrollIQ!' : 'Authentication Successful'}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Signed in as <span className="font-semibold text-slate-800">{userEmail}</span>
        </p>

        {/* Institution Badge */}
        <div className="mt-4 p-3 bg-blue-50/80 rounded-xl border border-blue-100 flex items-center gap-3 text-left">
          <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
            <Building className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">{institutionName}</div>
            <div className="text-[10px] text-blue-700 font-medium">Enterprise Admissions Portal • Live 2026 Session</div>
          </div>
        </div>

        {/* Quick Launch Cards */}
        <div className="mt-5 grid grid-cols-2 gap-2 text-left">
          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all cursor-pointer group">
            <Users className="w-4 h-4 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-slate-800">Lead Pipeline</div>
            <div className="text-[10px] text-slate-500">1,240 Inquiries</div>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all cursor-pointer group">
            <MessageSquare className="w-4 h-4 text-emerald-600 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-slate-800">WhatsApp Inbox</div>
            <div className="text-[10px] text-slate-500">18 Unread Chats</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          <button
            type="button"
            onClick={() => alert(`Redirecting to ${institutionName} CRM Dashboard...`)}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Launch CRM Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            id="auth-logout-btn"
            type="button"
            onClick={onLogout}
            className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out & Back to Login</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
