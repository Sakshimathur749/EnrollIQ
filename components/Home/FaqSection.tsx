'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle
} from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can our team get started with EnrollIQ?',
    answer: 'You can be up and running in less than 10 minutes. EnrollIQ offers one-click integrations with Google Ads, Meta, and website forms. Our guided onboarding wizard helps you import historical contacts and configure your sales pipeline with zero downtime.'
  },
  {
    id: 'faq-2',
    question: 'How does AI lead scoring and auto-allocation work?',
    answer: 'EnrollIQ analyzes lead source, intent signals, location, and engagement patterns in real-time. Leads are assigned an algorithmic score (0-100) and automatically routed to the best-suited sales rep or counselor based on round-robin rules, availability, or language skills.'
  },
  {
    id: 'faq-3',
    question: 'Does EnrollIQ integrate with our existing tools and CRM?',
    answer: 'Yes! EnrollIQ natively connects with 100+ platforms including Google Ads, Facebook & Instagram Leads, WhatsApp Business API, HubSpot, Salesforce, Zapier, QuickBooks, Stripe, and telephony providers like Exotel, MCube, and Twilio.'
  },
  {
    id: 'faq-4',
    question: 'Is there a free trial available, and is a credit card required?',
    answer: 'We provide a comprehensive 14-day free trial with full access to all standard and AI features. No credit card is required to sign up. You can explore the dashboard, test integrations, and invite your entire team.'
  },
  {
    id: 'faq-5',
    question: 'Can we import our existing student or customer contacts?',
    answer: 'Absolutely. EnrollIQ supports seamless CSV/Excel bulk imports, API data pipelines, and automatic field-mapping. Our migration specialist team is also available to assist with enterprise database migrations free of charge.'
  },
  {
    id: 'faq-6',
    question: 'How secure is our business and student data?',
    answer: 'EnrollIQ is ISO 27001 certified and GDPR compliant. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We support role-based access control (RBAC), multi-factor authentication (MFA), and automated daily backups.'
  },
  {
    id: 'faq-7',
    question: 'Can we automate WhatsApp, Email, and SMS drip campaigns?',
    answer: 'Yes. You can build visual multi-channel workflows triggered by lead status, form submissions, or counselor notes. Send automated brochures, appointment reminders, and follow-ups through official WhatsApp Business APIs with detailed delivery and read receipts.'
  },
  {
    id: 'faq-8',
    question: 'What kind of support is provided after onboarding?',
    answer: 'All plans include 24/7 email and chat support. Growth and Enterprise plans receive dedicated account managers, 1-hour priority response SLAs, and custom team training workshops.'
  }
];

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section 
      className="relative py-20 lg:py-28 bg-[#FAFAFE] border-t border-slate-200/80 overflow-hidden" 
      id="faq-section"
    >
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-14">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF]/70 border border-purple-200 text-xs font-semibold text-[#7E22CE] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-[#4F46E5]">Questions</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Everything you need to know about getting started, features, lead automation, and integrations with EnrollIQ.
          </p>
        </div>

        {/* Accordion FAQ Items List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-indigo-200/90 shadow-md shadow-indigo-500/5' 
                    : 'bg-white/80 hover:bg-white border-slate-200/80 shadow-xs'
                }`}
                id={faq.id}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  id={`btn-${faq.id}`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#4F46E5] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

