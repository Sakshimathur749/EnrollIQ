"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CarouselSection } from "@/components/Login/CarouselSection";
import { LoginForm } from "@/components/Login/LoginForm";
import { SignUpForm } from "@/components/Login/SignUpForm";
import { OtpLoginForm } from "@/components/Login/OtpLoginForm";
import { AuthSuccessView } from "@/components/Login/AuthSuccessView";
import { ForgotPasswordModal } from "@/components/Login/ForgotPasswordModal";
import { ScheduleDemoModal } from "@/components/Login/ScheduleDemoModal";
import { ReportModal } from "@/components/Login/ReportModal";
import { LegalModal } from "@/components/Login/LegalModal";
import { FooterLinks } from "@/components/FooterLinks";
import { ShieldCheck } from "lucide-react";

type AuthViewMode = "login" | "signup" | "otp" | "authenticated";

export default function LoginPage() {
  const [viewMode, setViewMode] = useState<AuthViewMode>("login");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentInstitution, setCurrentInstitution] = useState(
    "Oxford Global University",
  );
  const [isNewAccount, setIsNewAccount] = useState(false);

  // Modals state
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  // Auth Handlers
  const handleLoginSuccess = (email: string) => {
    setCurrentUserEmail(email);
    setIsNewAccount(false);
    setViewMode("authenticated");
  };

  const handleSignUpSuccess = (institution: string, email: string) => {
    setCurrentInstitution(institution);
    setCurrentUserEmail(email);
    setIsNewAccount(true);
    setViewMode("authenticated");
  };

  const handleOtpSuccess = (destination: string) => {
    setCurrentUserEmail(destination);
    setIsNewAccount(false);
    setViewMode("authenticated");
  };

  const handleLogout = () => {
    setCurrentUserEmail("");
    setViewMode("login");
  };

  return (
    <main
      id="enrolli-auth-page"
      className="min-h-screen w-full bg-slate-50 flex flex-col lg:flex-row lg:h-screen font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 no-scrollbar overflow-x-hidden"
    >
      {/* ------------------------------------------------------------- */}
      {/* LEFT / TOP COLUMN: Feature & Insights Carousel (Top on Mobile) */}
      {/* ------------------------------------------------------------- */}
      <section
        id="carousel-column"
        aria-label="EnrollIQ CRM Insights and Announcements Carousel"
        className="w-full lg:w-[54%] xl:w-[56%] order-1 lg:order-1 flex flex-col justify-between lg:h-full overflow-hidden"
      >
        <CarouselSection
          onOpenReportModal={() => setIsReportModalOpen(true)}
          onOpenDemoModal={() => setIsScheduleDemoOpen(true)}
        />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* RIGHT / BOTTOM COLUMN: Authentication Portal & Form           */}
      {/* ------------------------------------------------------------- */}
      <section
        id="auth-column"
        aria-label="User Authentication and Registration"
        className="w-full lg:w-[46%] xl:w-[44%] order-2 lg:order-2 bg-white flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 min-h-[640px] lg:h-full lg:overflow-y-auto no-scrollbar shadow-xl lg:shadow-none z-20"
      >
        {/* Top Floating View Mode Switcher Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium"></div>

          {/* Quick Tab Switcher for Sign In / Sign Up */}
          {viewMode !== "authenticated" && (
            <div className="inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
              <button
                id="tab-btn-login"
                type="button"
                onClick={() => setViewMode("login")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  viewMode === "login" || viewMode === "otp"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign In
              </button>
              <button
                id="tab-btn-signup"
                type="button"
                onClick={() => setViewMode("signup")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  viewMode === "signup"
                    ? "bg-white text-blue-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Auth View Form Area */}
        <div className="my-auto py-2">
          <AnimatePresence mode="wait">
            {viewMode === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <LoginForm
                  onSwitchToSignUp={() => setViewMode("signup")}
                  onSwitchToOtp={() => setViewMode("otp")}
                  onForgotPassword={() => setIsForgotPasswordOpen(true)}
                  onScheduleDemo={() => setIsScheduleDemoOpen(true)}
                  onLoginSuccess={handleLoginSuccess}
                />
              </motion.div>
            )}

            {viewMode === "signup" && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                <SignUpForm
                  onSwitchToSignIn={() => setViewMode("login")}
                  onSignUpSuccess={handleSignUpSuccess}
                />
              </motion.div>
            )}

            {viewMode === "otp" && (
              <motion.div
                key="otp"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <OtpLoginForm
                  onBackToPassword={() => setViewMode("login")}
                  onOtpSuccess={handleOtpSuccess}
                />
              </motion.div>
            )}

            {viewMode === "authenticated" && (
              <motion.div
                key="authenticated"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <AuthSuccessView
                  userEmail={currentUserEmail}
                  institutionName={currentInstitution}
                  isNewAccount={isNewAccount}
                  onLogout={handleLogout}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Social Media and Legal Footer */}
        <FooterLinks
          onOpenPrivacy={() => setLegalModalType("privacy")}
          onOpenTerms={() => setLegalModalType("terms")}
        />
      </section>

      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />

      <ScheduleDemoModal
        isOpen={isScheduleDemoOpen}
        onClose={() => setIsScheduleDemoOpen(false)}
      />

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
