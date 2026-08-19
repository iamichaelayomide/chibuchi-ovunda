import React from "react";

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    "LEGAL ADMINISTRATION",
    "•",
    "DOCUMENT DRAFTING & FORMATTING",
    "•",
    "CLIENT INTAKE AUTOMATION",
    "•",
    "CASE LAW & STATUTE RESEARCH",
    "•",
    "CONFIDENTIAL FILE ARCHITECTURE",
    "•",
    "COURT-READY AGREEMENTS & MOUS",
    "•",
    "PRACTICE MANAGEMENT INTEGRATION",
    "•",
  ];

  return (
    <div className="bg-[#09090b] text-white py-3.5 border-y border-[#27272a] overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-[#a1a1aa] uppercase px-3">
          {tickerItems.map((item, idx) => (
            <span
              key={idx}
              className={item === "•" ? "text-[#6b1728] font-bold text-sm" : "hover:text-white transition-colors duration-150"}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-6 text-[11px] font-bold tracking-widest text-[#a1a1aa] uppercase px-3" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <span
              key={"dup-" + idx}
              className={item === "•" ? "text-[#6b1728] font-bold text-sm" : "hover:text-white transition-colors duration-150"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
