"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight, AlertCircle, Smartphone } from "lucide-react";
import { EnrolliLogo } from "./EnrolliLogo";

interface LoginFormProps {
  onSwitchToSignUp: () => void;
  onSwitchToOtp: () => void;
  onForgotPassword: () => void;
  onScheduleDemo?: () => void;
  onLoginSuccess: (email: string) => void;
}

export function LoginForm({
  onSwitchToSignUp,
  onSwitchToOtp,
  onForgotPassword,
  onLoginSuccess,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [socialLoading, setSocialLoading] = useState<
    "google" | "microsoft" | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !email.includes("@")) {
      setErrorMessage(
        "Please enter a valid official or institutional email address.",
      );
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
    }, 1200);
  };

  const handleSocialLogin = (provider: "google" | "microsoft") => {
    setSocialLoading(provider);
    setErrorMessage("");
    setTimeout(() => {
      setSocialLoading(null);
      onLoginSuccess(
        provider === "google"
          ? "user.admin@university.edu"
          : "faculty@college.ac.uk",
      );
    }, 1400);
  };

  return (
    <div id="login-form-container" className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="mb-7 text-left">
        {/* <EnrolliLogo size="md" id="login-brand-logo" className="mb-4" /> */}
        <h1
          id="login-heading"
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          Welcome back
        </h1>
        <p id="login-subheading" className="text-sm text-slate-500 mt-1.5">
          Sign in to your EnrollIQ dashboard
        </p>
      </div>

      {/* Social Login Buttons (Google & Microsoft) */}
      <div className="grid grid-cols-2 gap-3.5 mb-6">
        {/* Google Auth Button */}
        <button
          id="google-signin-btn"
          type="button"
          onClick={() => handleSocialLogin("google")}
          disabled={!!socialLoading || isLoading}
          className="flex items-center justify-center gap-2.5 px-4 py-3 bg-white border border-slate-300/90 hover:border-slate-400 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-150 hover:bg-slate-50 active:scale-[0.98] shadow-2xs cursor-pointer disabled:opacity-60"
        >
          {socialLoading === "google" ? (
            <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
          )}
          <span>Google</span>
        </button>

        {/* Microsoft Auth Button */}
        <button
          id="microsoft-signin-btn"
          type="button"
          onClick={() => handleSocialLogin("microsoft")}
          disabled={!!socialLoading || isLoading}
          className="flex items-center justify-center gap-2.5 px-4 py-3 bg-white border border-slate-300/90 hover:border-slate-400 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-150 hover:bg-slate-50 active:scale-[0.98] shadow-2xs cursor-pointer disabled:opacity-60"
        >
          {socialLoading === "microsoft" ? (
            <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 23 23">
              <rect x="1" y="1" width="10" height="10" fill="#f25022" />
              <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
              <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
              <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
            </svg>
          )}
          <span>Microsoft</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-6">
        <div className="border-t border-slate-200 w-full" />
        <span className="bg-white px-3.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0">
          OR Sign In Using
        </span>
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

      {/* Main Form with Increased Field Gapping */}
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="official-email-input"
            className="block text-xs font-semibold text-slate-800 mb-2"
          >
            Enter Your Official Email
          </label>
          <div className="relative">
            <input
              id="official-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@institute.com"
              required
              className="w-full px-4 py-3 sm:py-3.5 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="password-input"
              className="block text-xs font-semibold text-slate-800"
            >
              Your Password
            </label>
            <button
              id="forgot-password-link"
              type="button"
              onClick={onForgotPassword}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <input
              id="password-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              required
              className="w-full px-4 py-3 sm:py-3.5 pr-11 bg-slate-50/50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-600 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-3 focus:ring-blue-100 transition-all"
            />
            <button
              id="toggle-password-visibility-btn"
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
        </div>

        {/* OTP Link and Remember Me */}
        <div className="pt-0.5 flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              id="remember-me-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
            />
            <span className="text-xs text-slate-600 font-medium">
              Remember for 30 days
            </span>
          </label>

          <button
            id="sign-in-otp-link"
            type="button"
            onClick={onSwitchToOtp}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer hover:underline"
          >
            <Smartphone className="w-3.5 h-3.5" />
            Sign In with OTP Instead
          </button>
        </div>

        {/* Primary Submit Button */}
        <button
          id="signin-submit-btn"
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Sign Up / Demo Row */}
      <div className="mt-7 text-center text-xs text-slate-600 flex flex-wrap items-center justify-center gap-2">
        <span className="text-slate-500">Not an existing client?</span>
        {/* Schedule a Demo - Static, non-clickable UI button per requirement (no link, URL, or navigation) */}
        <button
          id="switch-to-signup-btn"
          type="button"
          onClick={onSwitchToSignUp}
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
        >
          Create Free Account
        </button>
      </div>
    </div>
  );
}
