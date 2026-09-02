"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0E1A] via-[#0F172A] to-[#0A0D1A] pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-slate-800/80 text-white">
      {/* Background Decorative Gradients matching dark website theme */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[280px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle pill badge matching theme */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md shadow-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Services & Integrations</span>
        </motion.div>

        {/* Clean, Theme-Aligned Heading Only */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]"
        >
          Power Your Admissions with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Smart Services & Integrations
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
