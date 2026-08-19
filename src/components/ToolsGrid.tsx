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
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(TOOLS_DATA[0]);

  return (
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#fbfbfa] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#6b1728] mb-3"
          >
            Software & Tech Stack
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-5"
          >
            Trusted platforms. <br />
            <span className="font-serif italic font-normal text-[#6b1728]">Integrated workflows.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light"
          >
            I plug directly into your current legal technology stack with zero learning curve, maintaining rigorous encryption and organized records.
          </motion.p>
        </div>

        {/* Dynamic Tool Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-8">
          {TOOLS_DATA.map((tool, idx) => {
            const Icon = iconMap[tool.icon] || FileSpreadsheet;
            const isSelected = selectedTool?.name === tool.name;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedTool(tool)}
                className={`p-5 rounded-2xl border transition-all duration-160 active:scale-[0.96] cursor-pointer flex flex-col items-center text-center group ${
                  isSelected
                    ? "bg-[#09090b] text-white border-[#09090b] shadow-md"
                    : "bg-white text-[#09090b] border-[#e4e4e7] hover:border-[#d4d4d8] hover:shadow-xs"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-160 group-hover:scale-105 ${
                    isSelected
                      ? "bg-[#6b1728] text-white"
                      : "bg-[#f4f4f5] text-[#09090b]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold tracking-tight mb-1 font-serif">
                  {tool.name}
                </h3>

                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-[#f4f4f5] text-[#52525b]"
                  }`}
                >
                  {tool.proficiency}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Tool Detail Inspector Box (Solid Card, Zero Gradient Bloat) */}
        {selectedTool && (
          <motion.div
            key={selectedTool.name}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e4e4e7] shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center shrink-0 shadow-xs">
              {React.createElement(iconMap[selectedTool.icon] || FileSpreadsheet, {
                className: "w-6 h-6",
              })}
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h4 className="text-base font-serif font-bold text-[#09090b]">
                  {selectedTool.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[#09090b] text-[10px] font-bold uppercase tracking-wider">
                  {selectedTool.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#6b1728] text-white text-[10px] font-bold uppercase tracking-wider">
                  {selectedTool.proficiency} Level
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                {selectedTool.description}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
