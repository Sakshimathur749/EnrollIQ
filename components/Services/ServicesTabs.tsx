'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Share2,
  Globe2,
  PhoneCall,
  Megaphone,
  Mail,
  MessageCircle,
  FileSpreadsheet,
  Zap,
  GraduationCap,
  Video,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Send,
  ArrowRightLeft,
} from 'lucide-react';

// ==========================================
// HIGH-FIDELITY VECTOR LOGOS & ICONS FOR ALL SERVICES
// ==========================================

export function GoogleLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
      <span className="font-bold text-lg tracking-tight text-slate-800">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    </div>
  );
}

export function FacebookLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-6 h-6 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span className="font-bold text-lg tracking-tight text-[#1877F2]">facebook</span>
    </div>
  );
}

export function ShikshaLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#shiksha-grad)" />
        <path d="M16 8L7 13L16 18L25 13L16 8Z" fill="#FFFFFF" />
        <path
          d="M10 15.5V20.5C10 22.5 12.7 24 16 24C19.3 24 22 22.5 22 20.5V15.5"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M25 13.5V19.5" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" />
        <defs>
          <linearGradient id="shiksha-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A00" />
            <stop offset="1" stopColor="#E05305" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-base tracking-tight text-[#E05305] leading-none">
          shiksha<span className="text-slate-700">.com</span>
        </span>
        <span className="text-[10px] font-medium text-slate-500">Education Discovery</span>
      </div>
    </div>
  );
}

export function CollegeDuniaLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#001E3C" />
        <path d="M16 7L6 12.5L16 18L26 12.5L16 7Z" fill="#FF9900" />
        <path
          d="M9 15.2V21C9 23.2 12.1 25 16 25C19.9 25 23 23.2 23 21V15.2"
          stroke="#FF9900"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-[#001E3C] leading-none">
          college<span className="text-[#FF9900]">dunia</span>
        </span>
        <span className="text-[10px] font-medium text-slate-500">Admission Search Hub</span>
      </div>
    </div>
  );
}

export function EdustokeLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#edustoke-grad)" />
        <path
          d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6Z"
          fill="#008344"
        />
        <path
          d="M16 10V22M11 14L16 10L21 14M12 18L16 22L20 18"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="edustoke-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00C853" />
            <stop offset="1" stopColor="#007E33" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-sm tracking-tight text-[#008344] leading-none">edustoke</span>
        <span className="text-[10px] font-medium text-slate-500">School & College Lead Portal</span>
      </div>
    </div>
  );
}

export function MyOperatorLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#E53935" />
        <path
          d="M16 8C11.6 8 8 11.6 8 16V20C8 21.1 8.9 22 10 22H11C11.6 22 12 21.6 12 21V17C12 16.4 11.6 16 11 16H9.6C9.9 12.6 12.6 10 16 10C19.4 10 22.1 12.6 22.4 16H21C20.4 16 20 16.4 20 17V21C20 21.6 20.4 22 21 22H22C23.1 22 24 21.1 24 20V16C24 11.6 20.4 8 16 8Z"
          fill="#FFFFFF"
        />
        <path d="M22 22V23.5C22 24.3 21.3 25 20.5 25H17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-sm tracking-tight text-[#D32F2F] leading-none">
          My<span className="text-slate-900">Operator</span>
        </span>
        <span className="text-[10px] font-medium text-slate-500">Cloud Telephony & IVR</span>
      </div>
    </div>
  );
}

export function TeleCMILogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0284C7" />
        <path
          d="M9 18C9 14.1 12.1 11 16 11C19.9 11 23 14.1 23 18"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M12 19C12 16.8 13.8 15 16 15C18.2 15 20 16.8 20 19"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="20" r="1.8" fill="#FFFFFF" />
        <path d="M16 6V9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-sm tracking-tight text-[#0284C7] leading-none">
          Tele<span className="text-slate-900">CMI</span>
        </span>
        <span className="text-[10px] font-medium text-slate-500">Virtual PBX Dialer</span>
      </div>
    </div>
  );
}

export function GoogleAdsLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 flex items-center justify-center">
        <svg viewBox="0 0 192 192" className="w-6 h-6">
          <path
            fill="#FBBC04"
            d="M39.6 156.4c-19.7 0-35.6-16-35.6-35.6 0-7 2.1-13.6 5.6-19.1l54.8-95c5.5-9.6 15.8-15.6 27.2-15.6 19.7 0 35.6 16 35.6 35.6 0 7-2.1 13.6-5.6 19.1l-54.8 95c-5.5 9.6-15.8 15.6-27.2 15.6z"
          />
          <path
            fill="#4285F4"
            d="M152.4 156.4c-11.4 0-21.7-6-27.2-15.6l-54.8-95c-3.5-5.5-5.6-12.1-5.6-19.1 0-19.7 16-35.6 35.6-35.6 11.4 0 21.7 6 27.2 15.6l54.8 95c3.5 5.5 5.6 12.1 5.6 19.1 0 19.7-16 35.6-35.6 35.6z"
          />
          <circle fill="#34A853" cx="39.6" cy="120.8" r="35.6" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">Google Ads</span>
        <span className="text-[10px] font-medium text-slate-500">PPC & Search Leads</span>
      </div>
    </div>
  );
}

export function GoogleMyBusinessLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#4285F4" />
        <path d="M8 12L16 7L24 12V14H8V12Z" fill="#FFFFFF" />
        <path d="M10 14V22H22V14" fill="#E8F0FE" />
        <rect x="13" y="16" width="6" height="6" rx="1" fill="#4285F4" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 leading-none">Google Business</span>
        <span className="text-[10px] font-medium text-slate-500">Local Maps & Inquiries</span>
      </div>
    </div>
  );
}

export function MetaInstantFormsLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0081FB" />
        <path
          d="M23.5 12.8C22.6 11.2 21 10.3 19.3 10.3C17.6 10.3 16.3 11.2 15 12.8C13.7 11.2 12.4 10.3 10.7 10.3C9 10.3 7.4 11.2 6.5 12.8C5.2 15 5.2 18.2 6.7 20.3C7.6 21.7 9.1 22.5 10.7 22.5C12.4 22.5 13.7 21.6 15 20C16.3 21.6 17.6 22.5 19.3 22.5C20.9 22.5 22.4 21.7 23.3 20.3C24.8 18.2 24.8 15 23.5 12.8ZM10.7 19.8C9.5 19.8 8.4 18.3 8.4 16.4C8.4 14.5 9.5 13 10.7 13C12 13 13.1 14.7 13.9 16.4C13.1 18.1 12 19.8 10.7 19.8ZM19.3 19.8C18 19.8 16.9 18.1 16.1 16.4C16.9 14.7 18 13 19.3 13C20.5 13 21.6 14.5 21.6 16.4C21.6 18.3 20.5 19.8 19.3 19.8Z"
          fill="#FFFFFF"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 leading-none">Meta Lead Ads</span>
        <span className="text-[10px] font-medium text-slate-500">FB & IG Instant Forms</span>
      </div>
    </div>
  );
}

export function MetaConversionsApiLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0064E0" />
        <path d="M12 9L7 16H13L11 23L20 14H14L17 9H12Z" fill="#FFFFFF" />
        <circle cx="23" cy="9" r="2.5" fill="#00F0FF" />
        <circle cx="24" cy="22" r="2" fill="#00F0FF" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 leading-none">Meta CAPI</span>
        <span className="text-[10px] font-medium text-slate-500">Server Conversions API</span>
      </div>
    </div>
  );
}

export function AwsSesLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#232F3E" />
        <path d="M8 11L16 16.5L24 11V21H8V11Z" fill="#FF9900" />
        <path d="M8 11L16 16.5L24 11H8Z" fill="#FFB84D" />
        <path d="M10 24.5C13.5 26.2 18.5 26.2 22 24.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">Amazon SES</span>
        <span className="text-[10px] font-medium text-slate-500">Cloud Email Delivery</span>
      </div>
    </div>
  );
}

export function EmailCampaignsLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
        <Send className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">Campaign Studio</span>
        <span className="text-[10px] font-medium text-slate-500">Automated Drip Studio</span>
      </div>
    </div>
  );
}

export function WhatsAppLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-[#25D366] leading-none">WhatsApp</span>
        <span className="text-[10px] font-medium text-slate-500">Official Cloud API</span>
      </div>
    </div>
  );
}

export function GoogleSheetsLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#0F9D58" />
        <path d="M10 9H22V23H10V9Z" fill="#FFFFFF" rx="1" />
        <path d="M10 13H22M10 17H22M15 9V23" stroke="#0F9D58" strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">Google Sheets</span>
        <span className="text-[10px] font-medium text-slate-500">Live Two-Way Sync</span>
      </div>
    </div>
  );
}

export function CsvImportLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-xs">
        <FileSpreadsheet className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">CSV & Excel Loader</span>
        <span className="text-[10px] font-medium text-slate-500">Bulk Spreadsheet Ingestion</span>
      </div>
    </div>
  );
}

export function FieldMappingLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-xs">
        <ArrowRightLeft className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-900 leading-none">Field Mapping</span>
        <span className="text-[10px] font-medium text-slate-500">Smart Auto-Matcher</span>
      </div>
    </div>
  );
}

export function ZapierLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#FF4A00" />
        <path
          d="M16 7V25M7 16H25M9.6 9.6L22.4 22.4M9.6 22.4L22.4 9.6"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-extrabold text-sm tracking-tight text-[#FF4A00] leading-none">zapier</span>
        <span className="text-[10px] font-medium text-slate-500">5,000+ App Triggers</span>
      </div>
    </div>
  );
}

export function CalendlyLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#006BFF" />
        <path
          d="M19.5 10.5C18.5 9.5 17.1 9 15.5 9C12.2 9 9.5 11.7 9.5 15C9.5 18.3 12.2 21 15.5 21C17.1 21 18.5 20.5 19.5 19.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="19.5" cy="15" r="1.8" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-[#006BFF] leading-none">Calendly</span>
        <span className="text-[10px] font-medium text-slate-500">Counseling Slot Booking</span>
      </div>
    </div>
  );
}

export function ZoomMeetLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#2D8CFF" />
        <path
          d="M8 12C8 10.9 8.9 10 10 10H18C19.1 10 20 10.9 20 12V20C20 21.1 19.1 22 18 22H10C8.9 22 8 21.1 8 20V12Z"
          fill="#FFFFFF"
        />
        <path d="M20 14L24 11V21L20 18V14Z" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm tracking-tight text-[#2D8CFF] leading-none">Zoom & Meet</span>
        <span className="text-[10px] font-medium text-slate-500">Virtual Interview Links</span>
      </div>
    </div>
  );
}

// ==========================================
// ALL SERVICE CATEGORIES DATA SPECIFICATION
// ==========================================

export interface ServiceCategory {
  id: string;
  menuTitle: string;
  badge: string;
  title: string;
  descriptionTop: string;
  descriptionBottom?: string;
  icon: React.ElementType;
  illustrationType:
    | 'social'
    | 'lead-gen'
    | 'telephony'
    | 'ads'
    | 'email'
    | 'messaging'
    | 'import'
    | 'automation'
    | 'wallet'
    | 'lms'
    | 'exams'
    | 'erp'
    | 'verification'
    | 'meetings';
  logos: React.ReactNode[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'social-plugins',
    menuTitle: 'Social Plugins',
    badge: 'Audience Sync',
    title: 'Social Plugins',
    descriptionTop:
      'Automate recurring audience push to your Google and Facebook accounts and forget needing to sync your data ever again. Create custom audience lists directly from the lead or application manager with advanced filters at your disposal.',
    descriptionBottom:
      'Further, through advanced Google/Facebook lead capturing, centralize your incoming leads and add them to your existing lead pool to ensure 360° nurturing.',
    icon: Share2,
    illustrationType: 'social',
    logos: [<GoogleLogo key="google" />, <FacebookLogo key="facebook" />],
  },
  {
    id: 'lead-generation-websites',
    menuTitle: 'Lead Generation Websites',
    badge: 'Aggregators & Portals',
    title: 'Lead Generation Websites',
    descriptionTop:
      'Say goodbye to storing and matching your data in spreadsheets or toggling between platforms to keep a track of the leads being generated. Integrate your third-party lead sources with your platform to have a real-time check-in of the leads, from inquiry to enrollment.',
    descriptionBottom:
      'Direct API webhooks ingest student inquiries instantaneously with automated deduplication and counselor assignment in under 2 seconds.',
    icon: Globe2,
    illustrationType: 'lead-gen',
    logos: [<ShikshaLogo key="shiksha" />, <CollegeDuniaLogo key="collegedunia" />, <EdustokeLogo key="edustoke" />],
  },
  {
    id: 'cloud-telephony-solutions',
    menuTitle: 'Cloud Telephony Solutions',
    badge: 'Voice & Calling',
    title: 'Cloud Telephony Solutions',
    descriptionTop:
      'Empower your counselors with one-click dialers directly from the student timeline. Every inbound and outbound call is automatically logged, recorded, and analyzed with call duration and disposition tagging.',
    descriptionBottom:
      'Integrate enterprise cloud telephony systems like MyOperator and TeleCMI to enable smart IVR routing, virtual receptionist numbers, and agent performance leaderboards.',
    icon: PhoneCall,
    illustrationType: 'telephony',
    logos: [<MyOperatorLogo key="myoperator" />, <TeleCMILogo key="telecmi" />],
  },
  {
    id: 'ads-campaigns',
    menuTitle: 'ADs & Paid Campaigns',
    badge: 'Performance Marketing',
    title: 'ADs & Paid Campaign Management',
    descriptionTop:
      'Connect your Google Ads, Google My Business, and Meta campaign accounts to seamlessly capture instant lead forms and pass server-side conversion signals back to advertising algorithms for optimized cost-per-lead (CPL).',
    descriptionBottom:
      'Track full-funnel multi-touch attribution: know exactly which campaign, ad set, creative, and keyword triggered each admitted student.',
    icon: Megaphone,
    illustrationType: 'ads',
    logos: [
      <GoogleAdsLogo key="gads" />,
      <GoogleMyBusinessLogo key="gmb" />,
      <MetaInstantFormsLogo key="meta-forms" />,
      <MetaConversionsApiLogo key="meta-capi" />,
    ],
  },
  {
    id: 'email-connector',
    menuTitle: 'Email Connector',
    badge: 'High Deliverability',
    title: 'Email Connectors & Campaign Studio',
    descriptionTop:
      'Connect your institutional email infrastructure via Amazon SES or custom SMTP relays. Build responsive drag-and-drop email templates, trigger behavior-driven automated drips, and monitor open and click rates in real time.',
    descriptionBottom:
      'Ensure 99.8% inbox deliverability with dedicated IP routing, SPF/DKIM verification, and automated unsubscribe compliance.',
    icon: Mail,
    illustrationType: 'email',
    logos: [<AwsSesLogo key="ses" />, <EmailCampaignsLogo key="campaigns" />],
  },
  {
    id: 'messaging-whatsapp',
    menuTitle: 'Messaging & WhatsApp',
    badge: 'Instant Chat',
    title: 'Messaging & WhatsApp Business API',
    descriptionTop:
      'Engage applicants instantly on their favorite channel. Use the official WhatsApp Business Cloud API to send broadcast alerts, entrance exam reminders, application fee links, and automated two-way chatbots.',
    descriptionBottom:
      'Equip counselors with a shared multi-agent WhatsApp team inbox so no student inquiry remains unanswered.',
    icon: MessageCircle,
    illustrationType: 'messaging',
    logos: [<WhatsAppLogo key="whatsapp" />],
  },
  {
    id: 'lead-import-mapping',
    menuTitle: 'Lead Import & Mapping',
    badge: 'Data Management',
    title: 'Lead Import & Intelligent Field Mapping',
    descriptionTop:
      'Import offline walk-ins, seminar attendees, and education fair contacts seamlessly. Sync directly with live Google Sheets or upload CSV spreadsheets with our visual column-to-field mapper.',
    descriptionBottom:
      'Automatic data hygiene rules normalize phone numbers, validate email syntaxes, and tag custom acquisition source codes on upload.',
    icon: FileSpreadsheet,
    illustrationType: 'import',
    logos: [<GoogleSheetsLogo key="gsheets" />, <CsvImportLogo key="csv" />, <FieldMappingLogo key="fieldmap" />],
  },
  {
    id: 'automation-plugin',
    menuTitle: 'Automation Plugin',
    badge: 'Workflows & Calendars',
    title: 'Automation Plugins & Scheduling',
    descriptionTop:
      'Connect EnrollIQ to over 5,000+ apps with Zapier. Create automated event triggers such as creating calendar events, pushing data to internal data warehouses, or notifying Slack channels on high-priority lead conversion.',
    descriptionBottom:
      'Embed Calendly directly into your applicant portal so prospective students can self-schedule 1-on-1 counseling and campus tour appointments.',
    icon: Zap,
    illustrationType: 'automation',
    logos: [<ZapierLogo key="zapier" />, <CalendlyLogo key="calendly" />],
  },
  {
    id: 'video-meeting-scheduler',
    menuTitle: 'Video Meeting Scheduler',
    badge: 'Interviews',
    title: 'Video Meeting & Interview Scheduler',
    descriptionTop:
      'Generate dynamic Zoom, Google Meet, or Microsoft Teams meeting links automatically whenever a student or parent books a counseling slot or faculty interview.',
    descriptionBottom:
      'Include meeting access codes, calendar invites (.ics), and automated 1-hour pre-meeting reminders via WhatsApp.',
    icon: Video,
    illustrationType: 'meetings',
    logos: [<ZoomMeetLogo key="zoom" />],
  },
];

// ==========================================
// VECTOR ILLUSTRATIONS (THEMATIC GRAPHICS)
// ==========================================

export function ServiceIllustration({ type }: { type: string }) {
  switch (type) {
    case 'social':
      return (
        <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
          {/* Phone Frame Illustration */}
          <div className="relative w-32 h-44 bg-white rounded-2xl border-2 border-slate-200 shadow-lg p-2 flex flex-col justify-between">
            <div className="w-8 h-1 bg-slate-200 rounded-full mx-auto" />
            {/* Screen Content */}
            <div className="space-y-1.5 py-1">
              <div className="h-3 w-full bg-blue-50 rounded" />
              <div className="h-2 w-3/4 bg-slate-100 rounded" />
              <div className="h-8 w-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                  f
                </div>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full border border-slate-200 mx-auto" />
          </div>
          {/* Megaphone vector popping out */}
          <div className="absolute -right-2 top-6 w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-12 shadow-xl flex items-center justify-center text-white border-2 border-white">
            <Megaphone className="w-10 h-10 text-white" />
          </div>
          {/* Floating badges */}
          <div className="absolute -left-2 bottom-4 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-md text-[10px] font-bold text-blue-600 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Sync
          </div>
        </div>
      );

    case 'lead-gen':
      return (
        <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-full" />
          <div className="relative w-full h-full bg-gradient-to-br from-white to-orange-50/50 rounded-2xl border border-orange-100 p-4 flex flex-col justify-between shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#F37021]" />
                <div className="w-3 h-3 rounded-full bg-[#001E3C]" />
                <div className="w-3 h-3 rounded-full bg-[#00A859]" />
              </div>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                3 Portals
              </span>
            </div>
            {/* Funnel diagram */}
            <div className="space-y-1.5 my-auto">
              <div className="h-6 w-full bg-[#F37021]/15 rounded-md flex items-center justify-between px-2 text-[10px] font-bold text-slate-700">
                <span>Aggregator Leads</span>
                <span className="text-orange-600 font-extrabold">+1,420</span>
              </div>
              <div className="h-6 w-4/5 mx-auto bg-blue-500/15 rounded-md flex items-center justify-between px-2 text-[10px] font-bold text-slate-700">
                <span>Deduplicated</span>
                <span className="text-blue-600 font-extrabold">100%</span>
              </div>
              <div className="h-6 w-3/5 mx-auto bg-emerald-500/15 rounded-md flex items-center justify-between px-2 text-[10px] font-bold text-slate-700">
                <span>Assigned</span>
                <span className="text-emerald-600 font-extrabold">&lt;2s</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
              <Sparkles className="w-3 h-3 text-orange-500" /> Auto-Enriched
            </div>
          </div>
        </div>
      );

    case 'telephony':
      return (
        <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
          <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full" />
          <div className="relative w-48 h-36 bg-white rounded-2xl border border-red-100 shadow-md p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Call
              </div>
              <span className="text-[10px] font-mono text-slate-500">03:45</span>
            </div>
            {/* Audio Waveform visualization */}
            <div className="flex items-center justify-center gap-1 h-12 bg-red-50/60 rounded-xl px-3">
              {[40, 70, 90, 30, 85, 100, 45, 60, 95, 80, 50, 65, 30, 75].map((h, idx) => (
                <div key={idx} className="w-1.5 bg-[#D32F2F] rounded-full" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-600">
              <span>Auto-Recorded</span>
              <span className="text-emerald-600 font-bold">Logged in CRM</span>
            </div>
          </div>
        </div>
      );

    case 'ads':
      return (
        <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
          <div className="absolute inset-0 bg-indigo-500/10 blur-2xl rounded-full" />
          <div className="relative w-full h-full bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
              <span>Campaign Attribution</span>
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full text-[10px]">ROAS 4.8x</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-100">
                <p className="text-[10px] text-slate-500">Google Ads CPL</p>
                <p className="text-sm font-black text-blue-700">₹142.50</p>
              </div>
              <div className="p-2 rounded-lg bg-purple-50/80 border border-purple-100">
                <p className="text-[10px] text-slate-500">Meta CAPI Leads</p>
                <p className="text-sm font-black text-purple-700">3,890</p>
              </div>
            </div>
            <div className="text-[10px] font-medium text-slate-500 text-center">
              Server-Side Real-Time Conversion Sync
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full max-w-[280px] h-[190px] flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-indigo-50/60 to-slate-50 rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">EnrollIQ Verified Integration</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center justify-center gap-2 my-auto">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
                <CheckCircle2 className="w-8 h-8 text-[#2563EB]" />
              </div>
            </div>
            <p className="text-[11px] text-center font-medium text-slate-500">Two-Way Real-Time API Sync</p>
          </div>
        </div>
      );
  }
}

// ==========================================
// MAIN SERVICES DIRECTORY COMPONENT
// ==========================================

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Refs for scroll spy and direct scrolling
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileTabsRef = useRef<HTMLDivElement | null>(null);
  const isUserClicking = useRef(false);

  // Auto-scroll active tab to center in mobile horizontal bar
  useEffect(() => {
    const container = mobileTabsRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLButtonElement>(`[data-tab-id="${activeTab}"]`);
    if (!activeBtn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const scrollLeft = activeBtn.offsetLeft - containerRect.width / 2 + btnRect.width / 2;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [activeTab]);

  // IntersectionObserver / Scroll Spy for active category tracking relative to window
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    serviceCategories.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isUserClicking.current) {
            setActiveTab(cat.id);
          }
        },
        {
          root: null,
          rootMargin: '-120px 0px -55% 0px',
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Handle category button click with smooth window scrolling
  const handleCategoryClick = useCallback((id: string) => {
    setActiveTab(id);
    isUserClicking.current = true;

    if (id === 'all') {
      const section = document.getElementById('services-directory-section');
      if (section) {
        const topPos = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      }
    } else {
      const targetElement = sectionRefs.current[id];
      if (targetElement) {
        const topPos = targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      isUserClicking.current = false;
    }, 850);
  }, []);

  return (
    <section
      id="services-directory-section"
      className="relative bg-[#FAFBFF] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 text-slate-900"
    >
      {/* Background Decorative Matrix */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(#2563EB 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none overflow-hidden" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none overflow-hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold uppercase tracking-wider text-[#2563EB] shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            Native Integrations & Connectors
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-[1.12]">
            Connect EnrollIQ to Everything Your Institution Relies On
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From social ad capturing to cloud telephony, WhatsApp chatbots, and government verification gateways —
            seamless two-way data flow with zero manual effort.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE STICKY HORIZONTAL BAR (Visible on Mobile & Tablet)                  */}
        {/* ========================================================================= */}
        <div className="lg:hidden sticky top-[64px] z-30 -mx-4 px-4 py-3 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-xs mb-8">
          <div
            ref={mobileTabsRef}
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              type="button"
              data-tab-id="all"
              onClick={() => handleCategoryClick('all')}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                data-tab-id={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.menuTitle}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          <aside
            id="services-sticky-sidebar"
            className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-20 lg:top-24 self-start z-20"
          >
            <div
              ref={sidebarContainerRef}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden divide-y divide-slate-100 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* "All" button with solid blue active state */}
              <button
                type="button"
                id="tab-btn-all"
                onClick={() => handleCategoryClick('all')}
                className={`w-full text-left px-5 py-3 text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                  activeTab === 'all'
                    ? 'bg-[#2563EB] text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>All</span>
              </button>

              {/* All category list items */}
              {serviceCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    id={`tab-btn-${cat.id}`}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`w-full text-left px-5 py-3 text-sm transition-all cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#2563EB] text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span className="truncate pr-2">{cat.menuTitle}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isActive
                          ? 'text-white translate-x-0.5'
                          : 'text-slate-400 group-hover:text-slate-600 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT SIDE: SCROLLABLE SERVICE SECTIONS (NORMAL Y-AXIS FLOW)  */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-8 xl:col-span-9">
            {serviceCategories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => {
                    sectionRefs.current[cat.id] = el;
                  }}
                  className={`scroll-mt-24 space-y-6 pb-16 sm:pb-20 border-b border-slate-200/80 last:border-b-0 ${
                    index > 0 ? 'pt-12 sm:pt-16' : 'pt-0'
                  }`}
                >
                  {/* Content Section: Title & Description */}
                  <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-[#2563EB]">
                      <IconComponent className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{cat.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-tight">
                      {cat.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{cat.descriptionTop}</p>

                    {cat.descriptionBottom && (
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{cat.descriptionBottom}</p>
                    )}
                  </div>

                  {/* Bottom Row: Supported Connectors with generous gap between border and logos */}
                  <div className="mt-8 pt-3 pb-2">
                    <div className="flex flex-wrap gap-4 sm:gap-5 items-center">
                      {cat.logos.map((logoNode, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-slate-200/90 hover:border-[#2563EB]/70 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 transition-all shadow-2xs hover:shadow-xs flex items-center justify-center min-w-[150px] sm:min-w-[170px] min-h-[62px]"
                        >
                          {logoNode}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
