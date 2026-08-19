import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Users, Scale, Briefcase } from "lucide-react";

export const ProblemSolutionHowItWorks: React.FC = () => {
  const comparisonRows = [
    {
      label: "Billable Time Allocation",
      without: "Attorneys spend 15+ hours weekly on document formatting, file retrieval, and administrative triage instead of client counsel.",
      withVA: "100% of attorney time redirected to client advisory, strategy, courtroom preparation, and revenue-generating legal work."
    },
    {
      label: "Court Briefs & Commercial MOUs",
      without: "Rushed drafting, inconsistent numbering, citation errors, and formatting headaches before critical court filing deadlines.",
      withVA: "Court-ready briefs, agreements, and MOUs formatted strictly to jurisdictional standards, complete with verified citations."
    },
    {
      label: "Hearing Calendar & Deadlines",
      without: "Overlapping consultation dates, chaotic calendar reminders, and risk of delayed court appearances across timezones.",
      withVA: "Centralized court docketing, synchronized meeting links, and proactive reminders sent well before statutory deadlines."
    },
    {
      label: "Matter File Organization",
      without: "Scattered cloud folders across personal drives, duplicate draft versions, and misplaced client consultation notes.",
      withVA: "Standardized matter folder architecture in Google Workspace and Clio with instant document retrieval."
    },
    {
      label: "Client Inquiries & Intake",
      without: "Prospective client inquiries lost in unorganized email inboxes with delayed follow-ups and unrecorded matter details.",
      withVA: "Automated intake databases, timestamped dispute categorization, and rapid response coordination under 2h SLA."
    }
  ];

  const targetAudiences = [
    {
      icon: Scale,
      title: "Solo Practitioners & Barristers",
      desc: "Get executive-level practice support without the payroll overhead, physical office space, or benefits expense of full-time staff."
    },
    {
      icon: Briefcase,
      title: "Commercial & Litigation Chambers",
      desc: "Eliminate brief formatting bottlenecks, absorb matter volume spikes, and standardize case file indexing across your team."
    },
    {
      icon: Users,
      title: "Corporate Legal Advisors",
      desc: "Keep contracts, board minutes, and partner agreements formatted flawlessly with reliable calendar and intake coordination."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Scope & Practice Alignment",
      subtitle: "20-Min Discovery",
      desc: "We discuss your active caseload, matter types, formatting preferences, and existing tool ecosystem."
    },
    {
      num: "02",
      title: "NDA Execution & Integration",
      subtitle: "Same-Day Setup",
      desc: "Mutual Non-Disclosure Agreement execution and permission setup in your Google Workspace, Clio, or Microsoft 365."
    },
    {
      num: "03",
      title: "Immediate & Dependable Delivery",
      subtitle: "Active Retainer",
      desc: "Daily task logging, same-day document turnarounds, hearing docket updates, and structured weekly reporting."
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
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-tight mb-5 font-heading">
            Stop losing billable hours to <br />
            <span className="text-[#6b1728] font-normal">administrative bottlenecks.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            You trained for years to practice law, represent clients, and win cases. Routine administrative friction should not consume your evenings and weekends.
          </p>
        </div>

        {/* Audience Fit Cards (Who This Is For) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {targetAudiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#09090b] mb-2 font-heading">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                    {aud.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Comparison Table */}
        <div className="border-t border-[#e4e4e7] mb-24">
          <div className="hidden lg:grid grid-cols-12 py-4 border-b border-[#e4e4e7] text-xs font-mono font-bold uppercase tracking-wider text-[#71717a]">
            <div className="col-span-3">Practice Function</div>
            <div className="col-span-4 text-[#6b1728]">Traditional Practice Friction</div>
            <div className="col-span-5 text-[#09090b]">With Chibuchi Ovunda as Partner</div>
          </div>

          <div className="divide-y divide-[#e4e4e7]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="py-6 lg:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start hover:bg-[#faf9f5]/60 transition-colors duration-150"
              >
                <div className="lg:col-span-3">
                  <span className="text-xs font-mono text-[#71717a] block mb-1 lg:hidden">
                    FUNCTION {idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#09090b] font-heading">
                    {row.label}
                  </h3>
                </div>

                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#71717a] font-light leading-relaxed">
                  <X className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                  <span>{row.without}</span>
                </div>

                <div className="lg:col-span-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#09090b] font-medium leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.withVA}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Process Steps (Roadmap) */}
        <div className="pt-12 border-t border-[#e4e4e7]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-2">
                FRICTIONLESS ONBOARDING
              </p>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#09090b] tracking-tight font-heading">
                Three steps to a more organized practice
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 w-fit shrink-0 shadow-sm"
            >
              <span>Begin Step 01 Discovery</span>
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
                  <span className="text-4xl sm:text-5xl font-bold text-[#09090b] font-heading">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b1728] uppercase tracking-wider font-semibold">
                    {step.subtitle}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#09090b] mb-2 font-heading">
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
