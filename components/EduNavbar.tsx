'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Box, 
  UserCheck, 
  BarChart2, 
  Settings, 
  Menu, 
  X,
  BookOpen,
  FileText,
  Lightbulb,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface EduNavbarProps {
  onOpenDemo?: () => void;
}

export function EduNavbar({ onOpenDemo }: EduNavbarProps) {
  const pathname = usePathname();
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const productDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const productTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setProductDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setProductDropdownOpen(true);
  };
  const handleProductLeave = () => {
    productTimeoutRef.current = setTimeout(() => setProductDropdownOpen(false), 180);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };
  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => setResourcesDropdownOpen(false), 180);
  };

  const isFeaturesActive = pathname === '/features';
  const isAboutActive = pathname === '/solutions';

  const productItems = [
    {
      title: 'CRM Suite',
      subtitle: 'Manage leads, deals & admissions',
      href: '/features',
      icon: Box,
    },
    {
      title: 'Student Portal',
      subtitle: 'Everything for student engagement',
      href: '/counselors',
      icon: UserCheck,
    },
    {
      title: 'Analytics & Attribution',
      subtitle: 'Real-time campaign insights',
      href: '/attribution',
      icon: BarChart2,
    },
    {
      title: 'Integrations',
      subtitle: '100+ native connectors',
      href: '/integrations',
      icon: Settings,
    },
  ];

  const resourceItems = [
    {
      title: 'Case Studies',
      subtitle: 'How 500+ institutes scale',
      href: '/solutions',
      icon: Sparkles,
    },
    {
      title: 'Playbooks & Guides',
      subtitle: 'Best practices for admissions',
      href: '/admission-process',
      icon: BookOpen,
    },
    {
      title: 'API & Documentation',
      subtitle: 'Developer guides and webhooks',
      href: '/integrations',
      icon: FileText,
    },
    {
      title: 'Growth Insights',
      subtitle: 'Latest EdTech CRM trends',
      href: '/solutions',
      icon: Lightbulb,
    },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3.5' 
          : 'bg-transparent py-4'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Left Logo: EnrollIQ (with 3-tiered pill icon) */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" id="nav-brand-logo">
            {/* Custom 3-bar funnel icon matching the reference image */}
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5 group-hover:scale-105 transition-transform">
              <div className="w-7 h-1.5 bg-[#0F172A] rounded-full" />
              <div className="w-5 h-1.5 bg-[#0F172A] rounded-full" />
              <div className="w-3.5 h-1.5 bg-[#4F46E5] rounded-full" />
            </div>
            
            <div className="font-heading text-2xl tracking-tight leading-none">
              <span className="font-extrabold text-[#0F172A]">Enroll</span>
              <span className="font-extrabold text-[#4F46E5]">IQ</span>
            </div>
          </Link>

          {/* 2. Center Navigation Links: Home, About, Product ▾, Contact */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            
            {/* Home */}
            <div className="relative py-1">
              <Link
                href="/"
                className={`text-[14px] lg:text-[15px] font-medium transition-colors ${
                  pathname === '/' ? 'text-[#4F46E5] font-semibold' : 'text-slate-700 hover:text-[#4F46E5]'
                }`}
                id="nav-home-link"
              >
                Home
              </Link>
            </div>

            {/* About */}
            <div className="relative py-1">
              <Link
                href="/solutions"
                className={`text-[14px] lg:text-[15px] font-medium transition-colors ${
                  pathname === '/solutions' || pathname === '/about' ? 'text-[#4F46E5] font-semibold' : 'text-slate-700 hover:text-[#4F46E5]'
                }`}
                id="nav-about-link"
              >
                About
              </Link>
            </div>

            {/* Product with interactive Dropdown */}
            <div 
              className="relative py-1"
              ref={productDropdownRef}
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button
                type="button"
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className={`text-[14px] lg:text-[15px] font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  productDropdownOpen || pathname === '/features' ? 'text-[#4F46E5] font-semibold' : 'text-slate-700 hover:text-[#4F46E5]'
                }`}
                aria-expanded={productDropdownOpen}
                id="product-menu-button"
              >
                <span>Product</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-[#4F46E5]' : 'text-slate-500'}`} />
              </button>

              {/* Product Popover Dropdown Card */}
              {productDropdownOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-72 sm:w-80 animate-in fade-in zoom-in-95 duration-150"
                  id="product-dropdown-card"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-300/30 border border-slate-100 overflow-hidden divide-y divide-slate-100/80">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-slate-100" />

                    {productItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setProductDropdownOpen(false)}
                          className="p-3.5 flex items-center gap-3 transition-colors group relative z-10 hover:bg-indigo-50/40"
                        >
                          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#4F46E5] transition-colors leading-tight">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {item.subtitle}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="relative py-1">
              <Link
                href="/contact"
                className={`text-[14px] lg:text-[15px] font-medium transition-colors ${
                  pathname === '/contact' ? 'text-[#4F46E5] font-semibold' : 'text-slate-700 hover:text-[#4F46E5]'
                }`}
                id="nav-contact-link"
              >
                Contact
              </Link>
            </div>

          </nav>

          {/* 3. Right Action: Login Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="px-6 py-2 rounded-xl text-sm font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-sm shadow-indigo-500/25 hover:shadow-md hover:shadow-indigo-500/35 transition-all flex items-center gap-2"
              id="nav-login-btn"
            >
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/login"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#4F46E5] rounded-lg"
              id="mobile-nav-login-btn"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle mobile navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-slate-100 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 bg-white">
            
            <div className="grid grid-cols-1 gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === '/' ? 'bg-indigo-50 text-[#4F46E5]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === '/solutions' || pathname === '/about' ? 'bg-indigo-50 text-[#4F46E5]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              {/* Product items in mobile menu */}
              <div className="pt-2 pb-1 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Product Solutions
              </div>

              {productItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 hover:bg-slate-50 text-slate-700"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                    </div>
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === '/contact' ? 'bg-indigo-50 text-[#4F46E5]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
                id="mobile-drawer-login-btn"
              >
                <span>Login to Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}


