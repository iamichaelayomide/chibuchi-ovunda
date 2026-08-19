import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  FolderGit2,
  ShieldAlert,
  HardDrive,
  Palette,
  FileSignature
} from "lucide-react";
import { TOOLS_DATA } from "../data/portfolioData";
import { ToolItem } from "../types";

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  FolderGit2,
  ShieldAlert,
  HardDrive,
  Palette,
  FileSignature,
};

export const ToolsGrid: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS_DATA[0]);

  return (
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#faf9f5] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            03 / LEGAL TECH STACK
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl  font-bold text-[#09090b] tracking-tight leading-tight mb-5">
            Software & systems, <br />
            <span className=" italic font-normal text-[#6b1728]">seamlessly integrated.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            I integrate directly into your existing law practice technology stack, maintaining zero onboarding delay and rigorous data privacy.
          </p>
        </div>

        {/* Unified Tool Matrix (Editorial Tabular Ribbon + Inspector) */}
        <div className="border-t border-[#e4e4e7] pt-8">
          
          {/* Software Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {TOOLS_DATA.map((tool) => {
              const Icon = iconMap[tool.icon] || FileSpreadsheet;
              const isSelected = selectedTool.name === tool.name;

              return (
                <button
                  type="button"
                  key={tool.name}
                  onClick={() => setSelectedTool(tool)}
                  className={`p-4 text-left rounded-xl transition-all duration-150 active:scale-[0.97] flex flex-col justify-between h-28 border ${
                    isSelected
                      ? "bg-[#09090b] text-white border-[#09090b] shadow-sm"
                      : "bg-white text-[#09090b] border-[#e4e4e7] hover:border-[#09090b]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-[#f4c8d1]" : "text-[#6b1728]"}`} />
                    <span className={`text-[9px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-white/15 text-white" : "bg-[#faf9f5] text-[#71717a]"
                    }`}>
                      {tool.proficiency}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold  leading-tight">
                      {tool.name}
                    </h3>
                    <p className={`text-[10px] font-mono mt-0.5 ${isSelected ? "text-white/60" : "text-[#71717a]"}`}>
                      {tool.categoryLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Capabilities Strip (Zero Bulky Cards) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e4e4e7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[#6b1728] uppercase">
                  {selectedTool.categoryLabel}
                </span>
                <span className="text-xs text-[#d4d4d8]">/</span>
                <h4 className="text-xl  font-bold text-[#09090b]">
                  {selectedTool.name}
                </h4>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#faf9f5] border border-[#e4e4e7] text-[#09090b]">
                  {selectedTool.proficiency} Proficiency
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                {selectedTool.description}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shrink-0"
            >
              <span>Connect Stack</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
