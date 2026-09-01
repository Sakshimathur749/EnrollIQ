import React from 'react';

interface EnrolliLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  id?: string;
}

export function EnrolliLogo({ size = 'md', showTagline = false, className = '', id = 'enrolliq-logo' }: EnrolliLogoProps) {
  const iconSize = size === 'sm' ? 26 : size === 'lg' ? 42 : 34;
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';

  return (
    <div id={id} className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Monogram Icon for EnrollIQ: Intelligent Loop with Neural Nodes */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="iq-blue-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="iq-cyan-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="iq-spark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          
          {/* Main Continuous Ribbon Loop ("e" + "Q" intelligence orbit) */}
          <path
            d="M22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38C26.4183 38 30.4183 36.2091 33.3137 33.3137L26 26"
            stroke="url(#iq-blue-indigo)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Top Intelligence Arc */}
          <path
            d="M16 22C16 18.6863 18.6863 16 22 16C25.3137 16 28 18.6863 28 22C28 25.3137 25.3137 28 22 28H14"
            stroke="url(#iq-cyan-teal)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* IQ Target Dot / Intelligence Spark */}
          <circle cx="35" cy="35" r="4" fill="url(#iq-spark)" />
          <circle cx="22" cy="10" r="2.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span className={`font-extrabold text-slate-900 font-sans ${textSize}`}>
            Enroll<span className="text-blue-600">IQ</span>
          </span>
          <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 rounded-md">
            CRM
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] font-medium text-slate-500 tracking-normal -mt-0.5">
            Admissions Intelligence & CRM Cloud
          </span>
        )}
      </div>
    </div>
  );
}
