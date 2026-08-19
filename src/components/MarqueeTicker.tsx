import React from "react";

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    "CALENDAR & HEARING MANAGEMENT",
    "•",
    "LEGAL ADMINISTRATION",
    "•",
    "COMMERCIAL AGREEMENTS & MOUS",
    "•",
    "CLIENT INTAKE DATABASES",
    "•",
    "CASE LAW & STATUTE RESEARCH",
    "•",
    "CONFIDENTIAL FILE SYSTEMS",
    "•",
    "COURT-COMPLIANT DRAFTING",
    "•",
    "CLIO & GOOGLE WORKSPACE",
    "•",
  ];

  return (
    <div className="bg-[#09090b] text-[#f5cad5] py-3.5 border-y border-[#27272a] overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-[#a1a1aa] uppercase px-3 font-mono">
          {tickerItems.map((item, idx) => (
            <span
              key={idx}
              className={item === "•" ? "text-[#f5cad5] font-bold text-sm" : "hover:text-white transition-colors duration-150"}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-[#a1a1aa] uppercase px-3 font-mono" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <span
              key={"dup-" + idx}
              className={item === "•" ? "text-[#f5cad5] font-bold text-sm" : "hover:text-white transition-colors duration-150"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
