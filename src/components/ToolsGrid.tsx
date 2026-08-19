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
    <section id="tools" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#fffaf7] relative border-b border-[#0b0b0b]/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#a83254] mb-3"
          >
            Software & Tech Stack
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0b0b0b] tracking-tight leading-tight mb-5"
          >
            Trusted tools. <br />
            <span className="font-serif italic font-normal text-[#a83254]">Efficient workflows.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#0b0b0b]/75 leading-relaxed font-light"
          >
            I integrate seamlessly into your current software ecosystem, maintaining absolute data security and organized workflows.
          </motion.p>
        </div>

        {/* Dynamic Tool Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {TOOLS_DATA.map((tool, idx) => {
            const Icon = iconMap[tool.icon] || FileSpreadsheet;
            const isSelected = selectedTool?.name === tool.name;

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedTool(tool)}
                className={`p-5 rounded-2xl border transition-all duration-160 active:scale-[0.96] cursor-pointer flex flex-col items-center text-center group relative ${
                  isSelected
                    ? "bg-[#0b0b0b] text-white border-[#0b0b0b] shadow-lg"
                    : "bg-white/80 text-[#0b0b0b] border-[#e6cbd1] hover:border-[#a83254] hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-160 group-hover:scale-105 ${
                    isSelected
                      ? "bg-[#a83254] text-white"
                      : "bg-[#fff0f3] text-[#a83254]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-sm font-bold tracking-tight mb-1 font-serif">
                  {tool.name}
                </h3>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isSelected
                      ? "bg-[#f4c8d1] text-[#0b0b0b]"
                      : "bg-[#0b0b0b]/5 text-[#0b0b0b]/70"
                  }`}
                >
                  {tool.proficiency}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Tool Detail Inspector Box */}
        {selectedTool && (
          <motion.div
            key={selectedTool.name}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#feedf1] via-white to-[#feedf1] border border-[#e6cbd1] shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0b0b0b] text-[#f4c8d1] flex items-center justify-center shrink-0 shadow-md">
              {React.createElement(iconMap[selectedTool.icon] || FileSpreadsheet, {
                className: "w-7 h-7",
              })}
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h4 className="text-lg font-serif font-bold text-[#0b0b0b]">
                  {selectedTool.name}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#a83254] text-white text-[10px] font-bold uppercase tracking-wider">
                  {selectedTool.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f4c8d1] text-[#0b0b0b] text-[10px] font-bold uppercase tracking-wider">
                  {selectedTool.proficiency} Level
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#0b0b0b]/80 leading-relaxed font-light">
                {selectedTool.description}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
