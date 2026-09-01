"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, AlertCircle, Eye, EyeOff } from "lucide-react";
import { EnrolliLogo } from "./EnrolliLogo";

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
  onSignUpSuccess: (institutionName: string, email: string) => void;
}

export function SignUpForm({
  onSwitchToSignIn,
  onSignUpSuccess,
}: SignUpFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [institutionType, setInstitutionType] = useState(
    "Higher Education / University",
  );
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getPasswordStrength(password);
  const strengthLabels = ["Too weak", "Weak", "Fair", "Strong", "Very strong"];
  const strengthColors = [
    "bg-slate-200",
    "bg-red-500",
    "bg-amber-500",
    "bg-blue-500",
    "bg-emerald-500",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email || !email.includes("@")) {
      setErrorMessage("Please provide a valid official institution email.");
      return;
    }
    if (!institutionName.trim()) {
      setErrorMessage("Please enter your institution or organization name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your contact phone number.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    if (!agreedTerms) {
      setErrorMessage(
        "You must agree to the Terms of Service & Privacy Policy.",
      );
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSignUpSuccess(institutionName, email);
    }, 1300);
  };

  return (
    <div id="signup-form-container" className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="mb-6 text-left">
        {/* <EnrolliLogo size="md" id="signup-brand-logo" className="mb-3" /> */}
        <h1
          id="signup-heading"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          Create institution account
        </h1>
        <p id="signup-subheading" className="text-sm text-slate-500 mt-1.5">
          Start your 14-day free trial of EnrollIQ CRM Cloud
        </p>
      </div>

      {/* Error Alert */}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      {/* Registration Form with Enhanced Gapping */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="signup-fullname-input"
            className="block text-xs font-semibold text-slate-800 mb-1.5"
          >
            Full Name
          </label>
          <input
            id="signup-fullname-input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Dr. Eleanor Vance"
            required
            className="w-full px-4 py-2.5 sm:py-3 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Institution / University Name */}
        <div>
          <label
            htmlFor="signup-institution-input"
            className="block text-xs font-semibold text-slate-800 mb-1.5"
          >
            Institution / Organization Name
          </label>
          <div className="relative">
            <input
              id="signup-institution-input"
              type="text"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
              placeholder="e.g. Oxford Global Institute of Technology"
              required
              className="w-full px-4 py-2.5 sm:py-3 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Two-Column Grid: Institution Type & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label
              htmlFor="signup-type-select"
              className="block text-xs font-semibold text-slate-800 mb-1.5"
            >
              Institution Type
            </label>
            <select
              id="signup-type-select"
              value={institutionType}
              onChange={(e) => setInstitutionType(e.target.value)}
              className="w-full px-3.5 py-2.5 sm:py-3 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all cursor-pointer"
            >
              <option>Higher Education / University</option>
              <option>K-12 School / Academy</option>
              <option>Coaching & Test Prep</option>
              <option>EdTech / Online Learning</option>
              <option>Study Abroad Consultancy</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="signup-phone-input"
              className="block text-xs font-semibold text-slate-800 mb-1.5"
            >
              Contact Phone
            </label>
            <input
              id="signup-phone-input"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 019-2834"
              required
              className="w-full px-3.5 py-2.5 sm:py-3 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Official Email */}
        <div>
          <label
            htmlFor="signup-email-input"
            className="block text-xs font-semibold text-slate-800 mb-1.5"
          >
            Official Institution Email
          </label>
          <input
            id="signup-email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admissions.dean@university.edu"
            required
            className="w-full px-4 py-2.5 sm:py-3 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="signup-password-input"
            className="block text-xs font-semibold text-slate-800 mb-1.5"
          >
            Create Master Password
          </label>
          <div className="relative">
            <input
              id="signup-password-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters with letters & numbers"
              required
              className="w-full px-4 py-2.5 sm:py-3 pr-11 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
            />
            <button
              id="toggle-signup-password-btn"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Password Strength Meter */}
          {password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-full flex-1 transition-all duration-300 ${
                      strength >= step
                        ? strengthColors[strength]
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                {strengthLabels[strength]}
              </span>
            </div>
          )}
        </div>

        {/* Terms Agreement Checkbox */}
        <div className="pt-1.5">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              id="agree-terms-checkbox"
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
            />
            <span className="text-[11px] text-slate-600 leading-tight">
              I agree to the{" "}
              <span className="text-blue-600 font-semibold underline">
                Terms of Service
              </span>{" "}
              and acknowledge the{" "}
              <span className="text-blue-600 font-semibold underline">
                Privacy Policy
              </span>
              .
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          id="signup-submit-btn"
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transform hover:-translate-y-0.5 active:translate-y-0 mt-3"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Provisioning CRM Portal...</span>
            </>
          ) : (
            <>
              <span>Create Institution Account</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Sign In */}
      <div className="mt-5 text-center text-xs text-slate-600">
        <span>Already have an EnrollIQ account? </span>
        <button
          id="switch-to-signin-btn"
          type="button"
          onClick={onSwitchToSignIn}
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
