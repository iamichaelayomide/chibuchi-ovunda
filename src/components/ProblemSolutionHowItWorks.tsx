import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Users, Scale, Briefcase } from "lucide-react";

export const ProblemSolutionHowItWorks: React.FC = () => {
  const comparisonRows = [
    {
      label: "Time & Focus",
      without: "Spending valuable hours sorting emails, searching for files, and managing calendars manually.",
      withVA: "Time redirected to core legal work and client advisory while administrative tasks are handled smoothly."
    },
    {
      label: "Meeting Records & Summaries",
      without: "Unorganized consultation notes, missing key action items, and delayed post-meeting follow-ups.",
      withVA: "Clear, concise meeting minutes and client consultation summaries with structured key decisions."
    },
    {
      label: "Calendar & Deadlines",
      without: "Overlapping appointment requests, unorganized schedules, and no buffer time between commitments.",
      withVA: "Structured calendar with planned commitments, dedicated buffer time, and timely reminders."
    },
    {
      label: "Digital File Organization",
      without: "Scattered cloud folders, inconsistent document naming, and time wasted searching for past files.",
      withVA: "Standardized 8-folder hierarchy in Google Drive where every document is organized and accessible."
    },
    {
      label: "Email Inbox Management",
      without: "Cluttered inbox with urgent client correspondence buried under routine newsletters and updates.",
      withVA: "Custom matter labels, urgent message flags, and organized communication trails."
    }
  ];

  const targetAudiences = [
    {
      icon: Scale,
      title: "Solo Practitioners",
      desc: "Get dependable administrative support for your practice without the overhead of full-time office staff."
    },
    {
      icon: Briefcase,
      title: "Law Chambers & Teams",
      desc: "Organize matter folders, streamline calendar commitments, and keep meeting documentation structured."
    },
    {
      icon: Users,
      title: "Busy Professionals",
      desc: "Keep schedules organized, inboxes under control, and digital documents structured for everyday use."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Discuss Your Needs",
      subtitle: "Initial Conversation",
      desc: "We discuss what you need organized—whether calendar scheduling, email triage, minutes, or file systems."
    },
    {
      num: "02",
      title: "Share Instructions & Access",
      subtitle: "Setup & Alignment",
      desc: "You share your preferred naming rules, calendar guidelines, and workspace access in Google Drive or Gmail."
    },
    {
      num: "03",
      title: "Smooth Daily Support",
      subtitle: "Ongoing Assistance",
      desc: "Daily task execution, structured document filing, prompt email organization, and timely updates."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Center-Aligned Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            02 / HOW IT WORKS
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-tight mb-5 font-heading">
            More order, less clutter in <br />
            <span className="text-[#6b1728] font-normal">your daily practice.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            Bringing structure, punctuality, and clean organization to your schedules, inboxes, and digital files.
          </p>
        </div>

        {/* Audience Fit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-center">
          {targetAudiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col items-center justify-between shadow-xs">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
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

        {/* Comparison Table */}
        <div className="border-t border-[#e4e4e7] mb-20 text-left">
          <div className="hidden lg:grid grid-cols-12 py-4 border-b border-[#e4e4e7] text-xs font-mono font-bold uppercase tracking-wider text-[#71717a]">
            <div className="col-span-3">Practice Area</div>
            <div className="col-span-4 text-[#6b1728]">Without Virtual Assistance</div>
            <div className="col-span-5 text-[#09090b]">With Chibuchi Ovunda</div>
          </div>

          <div className="divide-y divide-[#e4e4e7]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="py-5 lg:py-6 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-start hover:bg-[#faf9f5]/60 transition-colors duration-150"
              >
                <div className="lg:col-span-3">
                  <span className="text-xs font-mono text-[#71717a] block mb-1 lg:hidden">
                    AREA {idx + 1}
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

        {/* Process Steps */}
        <div className="pt-10 border-t border-[#e4e4e7]">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-2">
              SIMPLE ONBOARDING
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#09090b] tracking-tight font-heading mb-3">
              Three steps to get started
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#e4e4e7] text-center mb-10">
            {steps.map((step, sIdx) => (
              <div
                key={step.num}
                className={`${sIdx !== 0 ? "pt-8 md:pt-0 md:pl-8 lg:pl-10" : ""} flex flex-col items-center`}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-bold text-[#09090b] font-heading">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#6b1728] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-lg bg-[#f5cad5]">
                    {step.subtitle}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#09090b] mb-1.5 font-heading">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-md group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
