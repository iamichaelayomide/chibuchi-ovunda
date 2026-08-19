import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090b] text-white py-12 px-4 sm:px-6 lg:px-12 border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60">
        
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#6b1728] text-white flex items-center justify-center  font-bold text-xs">
            CO
          </div>
          <div>
            <p className="text-white  font-semibold text-xs">
              © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-white/50">
              Virtual Legal Administration & Practice Operations
            </p>
          </div>
        </div>

        {/* Center: Location & Discretion Notice */}
        <div className="text-center">
          <p className="text-white/80 font-medium">
            {PORTFOLIO_INFO.location}
          </p>
          <p className="text-[10px] text-white/50">
            Strict Confidentiality & Privileged Record Handling
          </p>
        </div>

        {/* Right: Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.95] text-white transition-all duration-150 text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
