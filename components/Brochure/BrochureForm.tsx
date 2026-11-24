'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';

const CRM_API_URL = 'https://crm.mediagarh.com/CRM/api/leads/create';
const CRM_API_KEY = 'b62d20f5cd5e82d3ee1cfe7fc85cccbbe43db37e36830923557c912602afe023';
const FORM_ID = 95;

interface BrochureFormProps {
  compact?: boolean;
  onSuccess?: () => void;
}

export function BrochureForm({ compact = false, onSuccess }: BrochureFormProps) {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [institutionType, setInstitutionType] = React.useState('HigherEd / University');
  const [counselorCount, setCounselorCount] = React.useState('1 - 5 Counselors');
  const [requirement, setRequirement] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const searchParams = new URLSearchParams(window.location.search);
    const utm_source = searchParams.get('utm_source') || '';
    const utm_medium = searchParams.get('utm_medium') || '';
    const utm_campaign = searchParams.get('utm_campaign') || '';
    const landing_url = window.location.href;
    const referrer_url = document.referrer || '';
    const cleanPhone = phone.replace(/\D/g, '');

    const payload = {
      form_id: FORM_ID,
      first_name: name.trim(),
      email,
      phone: cleanPhone,
      utm_source,
      utm_medium,
      utm_campaign,
      landing_url,
      referrer_url,
      custom_fields: {
        field_field_1795507100399_f1vfa: {
          label: 'Name',
          type: 'text',
          value: name,
          map_to: 'full_name',
        },
        field_field_1795507100892_idti8: {
          label: 'Email Address',
          type: 'email',
          value: email,
          map_to: 'email',
        },
        field_field_1795507101509_s8any: {
          label: 'Phone Number',
          type: 'phone',
          value: cleanPhone,
          map_to: 'phone_number',
        },
        field_field_1795507105977_v51q9: {
          label: 'Institution Type',
          type: 'select',
          value: institutionType,
          map_to: 'institution_type',
        },
        field_field_1795507109559_xik27: {
          label: 'Counselor Team Size',
          type: 'select',
          value: counselorCount,
          map_to: 'counselor_team_size',
        },
        field_field_1795507110276_rkwxk: {
          label: 'Message',
          type: 'textarea',
          value: requirement || '',
          map_to: 'message',
        },
      },
    };

    try {
      const res = await fetch(CRM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': CRM_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        console.error('CRM API error:', res.status, errText);
        throw new Error(`Server returned ${res.status}`);
      }

      // Store user data for the thank-you page
      sessionStorage.setItem(
        'brochure_form_data',
        JSON.stringify({
          name: name.trim(),
          email,
          phone: cleanPhone,
          institutionType,
          counselorCount,
          requirement: requirement || '',
        }),
      );

      // Set 24-hour popup cooldown
      localStorage.setItem('brochure_popup_submitted', Date.now().toString());

      // Close popup if open (e.g. on homepage)
      onSuccess?.();

      router.push('/thank-you');
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" id="brochure-form">
      <div>
        <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Full Name *"
          className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all"
          id="brochure-name-input"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-slate-600 mb-1">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work / Official Email *"
          className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all"
          id="brochure-email-input"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-slate-600 mb-1">Phone Number</label>
        <div className="flex rounded-xl bg-[#F8FAFC] border border-slate-200 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-600/15 overflow-hidden transition-all">
          <div className="px-3.5 py-2.5 bg-slate-100/80 border-r border-slate-200 text-sm font-semibold text-slate-700 flex items-center shrink-0">
            +91
          </div>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number *"
            className="w-full px-3.5 py-2.5 bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
            id="brochure-phone-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">Institution Type</label>
          <select
            value={institutionType}
            onChange={(e) => setInstitutionType(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-600 focus:bg-white transition-all cursor-pointer"
          >
            <option value="K-12 School Group">K-12 School Group</option>
            <option value="E-Tech Coaching">E-Tech Coaching</option>
            <option value="HigherEd / University">HigherEd / University</option>
            <option value="Study Abroad Agency">Study Abroad Agency</option>
            <option value="Vocation / Skill Center">Vocation / Skill Center</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">Counselor Team Size</label>
          <select
            value={counselorCount}
            onChange={(e) => setCounselorCount(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-indigo-600 focus:bg-white transition-all cursor-pointer"
          >
            <option value="1 - 5 Counselors">1 - 5 Counselors</option>
            <option value="5 - 15 Counselors">5 - 15 Counselors</option>
            <option value="15 - 50 Counselors">15 - 50 Counselors</option>
            <option value="50+ Counselors">50+ Counselors</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1">Message</label>
          <textarea
            rows={2}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="How can EnrollIQ help your team? (Optional)"
            className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-600/15 transition-all resize-none"
            id="brochure-requirement-input"
          />
        </div>
      )}

      <div className="pt-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 text-sm sm:text-base transform hover:-translate-y-0.5"
          id="brochure-submit-btn"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>Download Brochure</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {submitError && <p className="text-xs text-center text-red-600 font-medium pt-1">{submitError}</p>}

      <p className="text-[11px] text-center text-slate-500 pt-0.5">
        🔒 Your information is confidential. Get instant access to our brochure.
      </p>
    </form>
  );
}
