import React from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  FolderTree,
  FileCheck2,
  Clock,
  Sparkles
} from "lucide-react";

export const ProblemSolutionHowItWorks: React.FC = () => {
  const problems = [
    {
      title: "Lost Billable Hours",
      desc: "Spending hours weekly on document formatting, folder searching, and administrative triage instead of client advisory and courtroom prep."
    },
    {
      title: "Formatting & Citation Bottlenecks",
      desc: "Rushing to format motions, Table of Authorities, and commercial agreements before strict statutory filing deadlines."
    },
    {
      title: "Scattered Matter Records",
      desc: "Disorganized cloud storage, mixed document versions, and delayed responses to prospective client inquiries."
    }
  ];

  const solutions = [
    {
      title: "Reclaim Focus on Client Counsel",
      desc: "Delegate routine matter organization, pleadings indexing, and calendar docketing to a trusted virtual specialist."
    },
    {
      title: "Court-Compliant Precision",
      desc: "Receive clean, impeccably formatted agreements, MOUs, and briefs adhering to strict jurisdictional conventions."
    },
    {
      title: "Standardized File Architecture",
      desc: "Instant retrieval of client consultation notes, intake logs, and matter history with structured Google Workspace and Clio systems."
    }
  ];

  const steps = [
    {
      number: "01",
      tag: "DISCOVERY & SCOPE",
      title: "Initial Practice Consultation",
      desc: "We review your active matters, practice areas, document workflows, and specific support requirements."
    },
    {
      number: "02",
      tag: "NDA & INTEGRATION",
      title: "Secure Protocol Setup",
      desc: "Execution of strict Non-Disclosure Agreements, followed by frictionless integration into your Google Workspace, Clio, or Microsoft 365 repository."
    },
    {
      number: "03",
      tag: "ONGOING DELIVERY",
      title: "Dependable Daily Execution",
      desc: "Proactive matter management, same-day formatting turnarounds, and structured task logs delivered with under 2h response SLA."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3"
          >
            02 / THE PRACTICE UPGRADE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-5"
          >
            Eliminate operational friction. <br />
            <span className="font-serif italic font-normal text-[#6b1728]">Focus on legal counsel.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light"
          >
            Attorneys lose an estimated 35% of their working week to administrative bottlenecks. Here is how structured virtual support transforms your day-to-day practice.
          </motion.p>
        </div>

        {/* Problem vs Solution Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Problem Column */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#faf9f5] border border-[#e4e4e7]">
            <div className="flex items-center gap-2.5 mb-6 text-[#6b1728] font-serif font-bold text-lg sm:text-xl">
              <XCircle className="w-5 h-5 text-[#6b1728]" />
              <span>Without Dedicated Legal Operations</span>
            </div>

            <div className="space-y-6">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-[#6b1728] mt-2 shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-bold text-[#09090b] mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#09090b] text-white border border-[#27272a] shadow-lg">
            <div className="flex items-center gap-2.5 mb-6 text-[#f4c8d1] font-serif font-bold text-lg sm:text-xl">
              <CheckCircle2 className="w-5 h-5 text-[#f4c8d1]" />
              <span>With Chibuchi Ovunda as Practice Partner</span>
            </div>

            <div className="space-y-6">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-[#f4c8d1] mt-2 shrink-0"></div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* How It Works (3 Steps) */}
        <div className="pt-12 border-t border-[#e4e4e7]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-2">
              SEAMLESS ONBOARDING
            </p>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#09090b] tracking-tight">
              Three steps to a more organized practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col justify-between group hover:border-[#09090b] transition-colors duration-160"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#09090b]">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-[#e4e4e7] text-[#52525b] uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif text-[#09090b] mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#52525b] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Link */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
            >
              <span>Schedule Step 01 Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-160" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
