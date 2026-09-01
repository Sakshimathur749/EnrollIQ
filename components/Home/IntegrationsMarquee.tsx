'use client';

import React from 'react';
import { Blocks, Sparkles } from 'lucide-react';

export function IntegrationsMarquee() {
  const brandLogos = [
    {
      name: 'Salesforce',
      color: '#00A1E0',
      svg: (
        <svg viewBox="0 0 100 70" className="h-8 sm:h-9 w-auto fill-current">
          <path d="M41.7 13.6c4.6-4.9 11.2-8 18.5-8 11.8 0 21.8 8.1 24.6 19.1 4.5 1.5 8.2 4.9 10.3 9.4 3 6.4 2.2 13.8-2 19.4-4.2 5.5-11 8.5-18 8.5H19.5c-6.8 0-13.1-3.6-16.5-9.4-3.5-5.9-3.2-13.1.6-18.7 3.8-5.6 10-8.9 16.7-8.9.8 0 1.6.1 2.4.2 2.7-5.9 8.6-9.9 15.3-11.2.9-.2 2.5-.4 3.7-.4z" />
        </svg>
      ),
      label: 'Salesforce'
    },
    {
      name: 'HubSpot',
      color: '#FF7A59',
      svg: (
        <svg viewBox="0 0 100 35" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M84.5 15.2V11c1.8-.8 3-2.6 3-4.7 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 2.1 1.2 3.9 3 4.7v4.2c-3.1 1.1-5.6 3.4-6.8 6.5-1.9-.8-4.1-1.3-6.4-1.3-7.7 0-14 6.3-14 14s6.3 14 14 14c7.7 0 14-6.3 14-14 0-1.8-.3-3.5-.9-5.1 2.2-2 3.5-4.9 3.5-8.1 0-.4 0-.8-.1-1.2zm-2.2-8.9c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6zm-15.4 32.8c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5 10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5z"/>
        </svg>
      ),
      label: 'HubSpot'
    },
    {
      name: 'Shopify',
      color: '#96BF48',
      svg: (
        <svg viewBox="0 0 100 115" className="h-8 sm:h-9 w-auto fill-current">
          <path d="M82.2 18.2c-.4-.4-1.1-.3-1.6.1L69.8 28.5c-.8.8-2 1.2-3.1 1.2s-2.3-.4-3.1-1.2L53 18.2c-.5-.4-1.2-.5-1.6-.1L20.8 45.4c-.6.5-.9 1.3-.8 2.1l6.3 54.4c.1 1.2 1.1 2.1 2.3 2.1h42.8c1.2 0 2.2-.9 2.3-2.1l6.3-54.4c.1-.8-.2-1.6-.8-2.1L82.2 18.2zM52.3 8.3c1.7 0 3.3.7 4.5 1.9l4.5 4.5-9 9-9-9 4.5-4.5c1.2-1.2 2.8-1.9 4.5-1.9z" />
        </svg>
      ),
      label: 'Shopify'
    },
    {
      name: 'Squarespace',
      color: '#1E293B',
      svg: (
        <svg viewBox="0 0 100 80" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M68.5 28.2l-15.3-15.3c-2.3-2.3-6-2.3-8.3 0L33.7 24.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l11.2-11.2 15.3 15.3-11.2 11.2c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l11.2-11.2c2.3-2.3 2.3-6-.1-8.4zm-37 23.6l15.3 15.3c2.3 2.3 6 2.3 8.3 0l11.2-11.2c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L50.9 62.9 35.6 47.6l11.2-11.2c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L31.4 43.4c-2.3 2.3-2.3 6.1.1 8.4z" />
        </svg>
      ),
      label: 'Squarespace'
    },
    {
      name: 'LinkedIn',
      color: '#0A66C2',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      label: 'LinkedIn'
    },
    {
      name: 'Zapier',
      color: '#FF4A00',
      svg: (
        <svg viewBox="0 0 100 100" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M43.5 10h13v30.5h30.5v13H56.5V84h-13V53.5H13v-13h30.5V10z" transform="rotate(45 50 50)"/>
        </svg>
      ),
      label: 'Zapier'
    },
    {
      name: 'Google',
      color: '#4285F4',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      ),
      label: 'Google'
    },
    {
      name: 'QuickBooks',
      color: '#2CA01C',
      svg: (
        <svg viewBox="0 0 100 100" className="h-8 sm:h-9 w-auto fill-current">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"/>
          <path d="M38 30v40c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10h10V30H28c-11 0-20 9-20 20s9 20 20 20h10v10h10V30H38zm24 40V30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10H62v30h10c11 0 20-9 20-20s-9-20-20-20H62V10H52v70h10z"/>
        </svg>
      ),
      label: 'QuickBooks'
    },
    {
      name: 'Stripe',
      color: '#635BFF',
      svg: (
        <svg viewBox="0 0 100 40" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M13.5 18.2c0-3.3 2.6-4.6 6.9-4.6 3.8 0 8.3 1.2 12.1 3.3V5.5C28.2 4 23.6 3.4 19.8 3.4 8.7 3.4 1.5 9.2 1.5 18.5c0 14.1 19.4 11.8 19.4 17.9 0 3.9-3.4 5.2-8.1 5.2-4.7 0-10.4-1.9-14.8-4.6v11.6c4.9 2.1 10.3 3.1 15.2 3.1 11.4 0 19.7-5.6 19.7-15.2-.1-14.7-19.4-12.4-19.4-18.3z"/>
        </svg>
      ),
      label: 'Stripe'
    },
    {
      name: 'Slack',
      color: '#4A154B',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 sm:h-8 w-auto fill-current">
          <path d="M5.04 14.65a2.52 2.52 0 0 1-2.52-2.52c0-1.39 1.13-2.52 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-2.52 2.52zm3.78 0a2.52 2.52 0 0 1 2.52 2.52v6.3a2.52 2.52 0 1 1-5.04 0v-6.3c0-1.39 1.13-2.52 2.52-2.52zm0-3.78a2.52 2.52 0 0 1-2.52-2.52V2.05a2.52 2.52 0 1 1 5.04 0v6.3c0 1.39-1.13 2.52-2.52 2.52zm3.78 0a2.52 2.52 0 0 1 2.52-2.52h6.3a2.52 2.52 0 1 1 0 5.04h-6.3c-1.39 0-2.52-1.13-2.52-2.52z"/>
        </svg>
      ),
      label: 'Slack'
    }
  ];

  return (
    <section 
      className="relative bg-gradient-to-b from-white via-[#FAFAFE] to-white py-14 sm:py-20 overflow-hidden border-b border-slate-200/80" 
      id="integrations-marquee"
    >
      {/* Subtle ambient backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        
        {/* Section Header & Subtitle */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/80 border border-purple-200/90 text-xs font-bold text-[#7E22CE] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="tracking-wide uppercase text-[11px]">Universal Ecosystem</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight">
            Connect Seamlessly to <span className="text-[#4F46E5]">100+ Leading Platforms</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Zero-latency native sync with your ad channels, cloud telephony, payment gateways, and learning management systems.
          </p>
        </div>

        {/* Autoplay Marquee Container */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Left & Right gradient edge fades matching pure white/soft background */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-6 sm:gap-8">
            {/* First Set of Logos */}
            {brandLogos.map((brand, i) => (
              <div 
                key={`logo-1-${i}`}
                className="group flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300/80 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shrink-0"
                title={brand.name}
              >
                <div 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 group-hover:bg-indigo-50/60 flex items-center justify-center transition-all duration-300"
                  style={{ color: brand.color }}
                >
                  {brand.svg}
                </div>
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-slate-700 group-hover:text-slate-950 transition-colors">
                  {brand.label}
                </span>
              </div>
            ))}

            {/* Duplicate Set for Seamless Infinite Loop */}
            {brandLogos.map((brand, i) => (
              <div 
                key={`logo-2-${i}`}
                className="group flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300/80 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shrink-0"
                title={brand.name}
              >
                <div 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 group-hover:bg-indigo-50/60 flex items-center justify-center transition-all duration-300"
                  style={{ color: brand.color }}
                >
                  {brand.svg}
                </div>
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-slate-700 group-hover:text-slate-950 transition-colors">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

