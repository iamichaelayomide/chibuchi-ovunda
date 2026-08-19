import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

export const ProblemSolutionHowItWorks: React.FC = () => {
  const comparisonRows = [
    {
      label: "Billable Time Allocation",
      without: "15+ hours lost weekly to document formatting, folder searches, and administrative triage.",
      withVA: "Time redirected exclusively to client counsel, advisory work, and courtroom preparation."
    },
    {
      label: "Court Briefs & Agreements",
      without: "Rushed formatting, inconsistent heading styles, and manual Table of Authorities compiling.",
      withVA: "Impeccably formatted, court-ready documents following exact jurisdictional rules."
    },
    {
      label: "Matter File Systems",
      without: "Disorganized cloud folders, duplicate drafts, and difficulty retrieving consultation records.",
      withVA: "Standardized matter tree across Google Workspace & Clio with instant file retrieval."
    },
    {
      label: "Client Inquiries & Triage",
      without: "Prospective inquiries lost in email clutter; delayed hearing notifications to clients.",
      withVA: "Structured intake databases, automated logging, and priority updates under 2h SLA."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Scope & Matter Alignment",
      subtitle: "20-Min Discovery",
      desc: "We review your active caseload, document workflows, formatting standards, and preferred tools."
    },
    {
      num: "02",
      title: "NDA & Secure Integration",
      subtitle: "Same-Day Setup",
      desc: "Mutual Non-Disclosure Agreement execution and permission setup in your Google Workspace or Clio."
    },
    {
      num: "03",
      title: "Dependable Daily Execution",
      subtitle: "Active Retainer",
      desc: "Daily task logging, same-day brief turnarounds, and proactive statutory deadline tracking."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            02 / THE PRACTICE TRANSFORMATION
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-5">
            Operational friction, <br />
            <span className="font-serif italic font-normal text-[#6b1728]">systematically resolved.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            Attorneys lose an estimated 35% of their working week to administrative tasks. Here is the operational shift when partnering with a dedicated legal assistant.
          </p>
        </div>

        {/* Editorial Comparison Table (Zero Boxed Cards) */}
        <div className="border-t border-[#e4e4e7] mb-24">
          <div className="hidden lg:grid grid-cols-12 py-4 border-b border-[#e4e4e7] text-xs font-mono font-bold uppercase tracking-wider text-[#71717a]">
            <div className="col-span-3">Practice Area</div>
            <div className="col-span-4 text-[#6b1728]">Traditional Practice Friction</div>
            <div className="col-span-5 text-[#09090b]">With Chibuchi Ovunda</div>
          </div>

          <div className="divide-y divide-[#e4e4e7]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="py-6 lg:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start hover:bg-[#faf9f5]/60 transition-colors duration-150"
              >
                {/* Category */}
                <div className="lg:col-span-3">
                  <span className="text-xs font-mono text-[#71717a] block mb-1 lg:hidden">
                    AREA {idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-serif text-[#09090b]">
                    {row.label}
                  </h3>
                </div>

                {/* Without */}
                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#71717a] font-light leading-relaxed">
                  <X className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                  <span>{row.without}</span>
                </div>

                {/* With */}
                <div className="lg:col-span-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.withVA}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Process Steps (Clean Numbered Flow, Zero Bulky Cards) */}
        <div className="pt-12 border-t border-[#e4e4e7]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-2">
                ONBOARDING ROADMAP
              </p>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#09090b] tracking-tight">
                Three steps to an organized practice
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 w-fit shrink-0"
            >
              <span>Begin Step 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#e4e4e7]">
            {steps.map((step, sIdx) => (
              <div
                key={step.num}
                className={`${sIdx !== 0 ? "pt-8 md:pt-0 md:pl-8 lg:pl-12" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#09090b]">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b1728] uppercase tracking-wider font-semibold">
                    {step.subtitle}
                  </span>
                </div>

                <h4 className="text-lg font-serif font-bold text-[#09090b] mb-2">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
