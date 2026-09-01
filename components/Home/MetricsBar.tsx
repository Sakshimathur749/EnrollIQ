'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Award, ShieldCheck, TrendingUp, Users, Wallet } from 'lucide-react';

interface CounterMetricProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, decimals = 0, prefix = '', suffix = '', duration = 1800 }: CounterMetricProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutQuad
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = easeProgress * end;
      
      setCount(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, end, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function MetricsBar() {
  const metrics = [
    {
      end: 10,
      suffix: 'M+',
      label: 'Student Inquiries Processed',
      icon: Users,
      iconColor: 'text-[#4F46E5]',
      iconBg: 'bg-indigo-50 border-indigo-200/80'
    },
    {
      end: 850,
      suffix: '+',
      label: 'Institutions & Universities',
      icon: Award,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-200/80'
    },
    {
      end: 4.8,
      decimals: 1,
      suffix: 'x',
      label: 'Average Enrollment ROAS',
      icon: TrendingUp,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-200/80'
    },
    {
      end: 99.9,
      decimals: 1,
      suffix: '%',
      label: 'Attribution & Uptime SLA',
      icon: ShieldCheck,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50 border-violet-200/80'
    },
    {
      end: 1500,
      prefix: '₹',
      suffix: 'Cr+',
      label: 'Tuition Fees Reconciled',
      icon: Wallet,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-200/80'
    }
  ];

  return (
    <section 
      className="relative bg-gradient-to-b from-[#FAFAFE] via-white to-[#F8FAFC] text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-slate-200/80" 
      id="metrics-bar"
    >
      {/* Ambient background accents matching homepage */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[260px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[260px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle modern dot-grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4F46E5 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main Header */}
        <div className="mb-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.15] text-[#0F172A]">
            Made in India. Built for the World.
          </h2>
        </div>

        {/* Brand Theme Bright Accent Line */}
        <div className="w-14 h-1 bg-gradient-to-r from-[#818CF8] via-[#4F46E5] to-[#A855F7] rounded-full mb-10 sm:mb-14 shadow-sm" />

        {/* Horizontal Metrics Grid with Clean Vertical Dividers */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-0 md:divide-x md:divide-slate-200 py-2 md:py-0">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx} 
                className={`px-4 sm:px-6 flex flex-col items-center justify-center text-center group ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {/* Micro CRM Icon badge with subtle colored theme */}
                <div className={`w-11 h-11 rounded-xl ${metric.iconBg} border flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 group-hover:shadow-sm transition-all duration-300`}>
                  <Icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>

                <div className="font-heading font-black text-3xl sm:text-4xl lg:text-[40px] text-[#0F172A] tracking-tight leading-none mb-2 sm:mb-2.5">
                  <AnimatedCounter 
                    end={metric.end} 
                    decimals={metric.decimals} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix} 
                  />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug max-w-[160px]">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


