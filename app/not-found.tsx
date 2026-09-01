'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-2xl">
          404
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#4F46E5] hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
