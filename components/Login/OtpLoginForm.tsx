'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Mail, 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle,
  KeyRound
} from 'lucide-react';
import { EnrolliLogo } from './EnrolliLogo';

interface OtpLoginFormProps {
  onBackToPassword: () => void;
  onOtpSuccess: (destination: string) => void;
}

export function OtpLoginForm({ onBackToPassword, onOtpSuccess }: OtpLoginFormProps) {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [phone, setPhone] = useState('+1 (555) 234-8900');
  const [email, setEmail] = useState('dean@oxford-edu.org');
  const [codeSent, setCodeSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (codeSent && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [codeSent, timeLeft]);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCodeSent(true);
      setTimeLeft(30);
      setOtp(['4', '8', '2', '9', '1', '5']); // Auto-fill sample OTP hint for ease of testing
    }, 800);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pasted = value.slice(0, 6).split('');
      const newOtp = [...otp];
      pasted.forEach((char, i) => {
        if (i < 6) newOtp[i] = char;
      });
      setOtp(newOtp);
      inputRefs.current[Math.min(pasted.length, 5)]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Advance focus
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otp.join('');
    if (fullCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onOtpSuccess(method === 'phone' ? phone : email);
    }, 1000);
  };

  const handleResend = () => {
    if (timeLeft > 0) return;
    setTimeLeft(30);
    setErrorMessage('');
    // Resend simulated code
  };

  return (
    <div id="otp-login-container" className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="mb-6 text-left">
        <EnrolliLogo size="md" id="otp-brand-logo" className="mb-3" />
        <h1 id="otp-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Sign In with OTP
        </h1>
        <p id="otp-subheading" className="text-sm text-slate-500 mt-1.5">
          {codeSent
            ? `Enter the 6-digit security code sent to ${method === 'phone' ? phone : email}`
            : 'Authenticate instantly via your verified phone number or email'}
        </p>
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      {!codeSent ? (
        /* Step 1: Destination Form */
        <form onSubmit={handleSendCode} className="space-y-5 sm:space-y-6">
          {/* Method Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
            <button
              type="button"
              onClick={() => setMethod('phone')}
              className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                method === 'phone'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Phone</span>
            </button>
            <button
              type="button"
              onClick={() => setMethod('email')}
              className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                method === 'email'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Institute Email</span>
            </button>
          </div>

          {method === 'phone' ? (
            <div>
              <label htmlFor="otp-phone-input" className="block text-xs font-semibold text-slate-800 mb-2">
                Registered Mobile Number
              </label>
              <input
                id="otp-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 019-2834"
                required
                className="w-full px-4 py-3 sm:py-3.5 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
              />
            </div>
          ) : (
            <div>
              <label htmlFor="otp-email-input" className="block text-xs font-semibold text-slate-800 mb-2">
                Registered Institute Email
              </label>
              <input
                id="otp-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@institute.com"
                required
                className="w-full px-4 py-3 sm:py-3.5 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
              />
            </div>
          )}

          <button
            id="send-otp-btn"
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Send One-Time Code</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* Step 2: 6-Digit OTP Verification */
        <form onSubmit={handleVerifyOtp} className="space-y-6">
          {/* OTP Digits Input Boxes */}
          <div className="flex justify-between gap-2 sm:gap-3">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                id={`otp-digit-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-11 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-extrabold bg-slate-50 hover:bg-white focus:bg-white border-2 border-slate-300 focus:border-blue-600 rounded-xl text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all shadow-2xs"
              />
            ))}
          </div>

          {/* Resend Code & Timer */}
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="text-slate-500">
              {timeLeft > 0 ? (
                `Resend available in ${timeLeft}s`
              ) : (
                'Did not receive code?'
              )}
            </span>
            <button
              type="button"
              onClick={handleResend}
              disabled={timeLeft > 0}
              className="font-bold text-blue-600 hover:text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
            >
              <RotateCw className="w-3 h-3" />
              Resend OTP
            </button>
          </div>

          <button
            id="verify-otp-btn"
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Verify & Sign In</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Back to password login */}
      <div className="mt-6 text-center">
        <button
          id="back-to-password-login-btn"
          type="button"
          onClick={onBackToPassword}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Password Login</span>
        </button>
      </div>
    </div>
  );
}
