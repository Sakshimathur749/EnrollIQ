'use client';

import React from 'react';
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

interface FooterLinksProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export function FooterLinks({ onOpenPrivacy, onOpenTerms }: FooterLinksProps) {
  const socialLinks = [
    {
      id: 'social-linkedin',
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
        </svg>
      ),
    },
    {
      id: 'social-twitter',
      name: 'X (Twitter)',
      href: 'https://x.com',
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      id: 'social-facebook',
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
        </svg>
      ),
    },
    {
      id: 'social-youtube',
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 2c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
        </svg>
      ),
    },
    {
      id: 'social-instagram',
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div id="footer-links-container" className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-center gap-3">
      {/* Social Icons Row (matching the reference UI) */}
      <div className="flex items-center gap-2">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            id={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-8 h-8 rounded-lg border border-slate-200/90 hover:border-slate-300 text-slate-400 hover:text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Legal Links */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button
          id="privacy-policy-link"
          type="button"
          onClick={onOpenPrivacy}
          className="hover:text-blue-600 hover:underline cursor-pointer transition-colors"
        >
          Privacy Policy
        </button>
        <span className="text-slate-300">|</span>
        <button
          id="terms-of-use-link"
          type="button"
          onClick={onOpenTerms}
          className="hover:text-blue-600 hover:underline cursor-pointer transition-colors"
        >
          Terms of Use
        </button>
      </div>

      <div className="text-[11px] text-slate-400">
        © 2026 EnrollIQ Technologies Inc. All rights reserved.
      </div>
    </div>
  );
}
