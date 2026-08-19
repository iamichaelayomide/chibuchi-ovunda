import React from "react";
import { Sparkles, Scale, FileText, Calendar, ShieldCheck, Mail, CheckCircle } from "lucide-react";

export const MarqueeTicker: React.FC = () => {
  const rowOneItems = [
    { label: "Litigation Support", icon: Scale },
    { label: "Court-Ready Formatting", icon: FileText },
    { label: "Calendar & Hearing Coordination", icon: Calendar },
    { label: "Discovery Indexing & Binders", icon: CheckCircle },
    { label: "Table of Authorities & TOC", icon: FileText },
    { label: "Confidential Client Triage", icon: Mail },
    { label: "Clio Practice Management", icon: ShieldCheck },
    { label: "Statutory Deadline Tracking", icon: Calendar },
  ];

  const rowTwoItems = [
    { label: "100% Strict NDA Protection" },
    { label: "Same-Day & 24h SLAs Available" },
    { label: "Multi-Pass Proofreading" },
    { label: "Zero Margin For Error" },
    { label: "Cloud Document Architecture" },
    { label: "High-Discretion Virtual Support" },
    { label: "Seamless Counsel Collaboration" },
    { label: "Impeccable Judicial Compliance" },
  ];

  return (
    <div className="bg-[#0b0b0b] text-white py-6 overflow-hidden border-y border-white/10 relative">
      
      {/* Subtle Gradient Edge Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 pointer-events-none"></div>

      {/* Row 1: Forward Marquee */}
      <div className="flex select-none gap-6 animate-marquee whitespace-nowrap mb-3.5">
        {[...rowOneItems, ...rowOneItems, ...rowOneItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#f4c8d1] hover:bg-white/15 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-[#f4c8d1]" />
              <span className="text-white font-sans">{item.label}</span>
              <span className="text-[#c84f70] text-sm">✦</span>
            </div>
          );
        })}
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="flex select-none gap-6 animate-marquee-reverse whitespace-nowrap">
        {[...rowTwoItems, ...rowTwoItems, ...rowTwoItems].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f4c8d1]/10 border border-[#f4c8d1]/20 text-xs font-medium uppercase tracking-widest text-[#f4c8d1]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c84f70]"></span>
            <span className="font-sans text-xs tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
};
