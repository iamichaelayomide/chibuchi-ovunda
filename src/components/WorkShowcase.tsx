import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Maximize2,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { WORK_SAMPLES } from "../data/portfolioData";
import { WorkSample } from "../types";

export const WorkShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSample, setActiveModalSample] = useState<WorkSample | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalSample(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = [
    { id: "all", label: "All Selected Work" },
    { id: "organization", label: "File Systems" },
    { id: "formatting", label: "Agreements & MOUs" },
    { id: "communication", label: "Intake Systems" },
    { id: "calendar", label: "Meeting Records" },
  ];

  const filteredSamples =
    selectedCategory === "all"
      ? WORK_SAMPLES
      : WORK_SAMPLES.filter((s) => s.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#6b1728] mb-3"
          >
            Verified Case Work
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-5"
          >
            Proof of execution, <br />
            <span className="font-serif italic font-normal text-[#6b1728]">confidential by default.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light"
          >
            Real-world file architectures, client intake databases, and formatted agreements prepared for active practices. Click any sample to inspect the case breakdown.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase active:scale-[0.96] transition-all duration-150 ${
                selectedCategory === cat.id
                  ? "bg-[#09090b] text-white shadow-sm"
                  : "bg-[#f4f4f5] text-[#52525b] hover:bg-[#e4e4e7] hover:text-[#09090b]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSamples.map((sample, idx) => (
              <motion.article
                key={sample.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveModalSample(sample)}
                className="bg-[#fbfbfa] rounded-2xl overflow-hidden border border-[#e4e4e7] shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#18181b] overflow-hidden border-b border-[#e4e4e7]">
                  <img
                    src={sample.imageSrc}
                    alt={`${sample.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-400 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#09090b]/85 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase">
                    {sample.categoryLabel}
                  </div>

                  {/* Redacted Watermark */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#6b1728] text-[9px] font-bold flex items-center gap-1 border border-[#e4e4e7]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Redacted</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#09090b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white">
                    <div className="p-2.5 px-3.5 rounded-full bg-white text-[#09090b] font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Breakdown</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-base font-bold font-serif text-[#09090b] mb-1.5 group-hover:text-[#6b1728] transition-colors duration-150">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-[#52525b] leading-relaxed line-clamp-2 mb-4 font-light">
                      {sample.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#e4e4e7] text-xs font-bold text-[#6b1728]">
                    <span>Case Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-160" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Centered CTA */}
        <div className="mt-14 pt-8 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#52525b] font-light">
            Have a custom legal document, intake flow, or folder system to organize?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#09090b] hover:text-[#6b1728] border-b-2 border-[#09090b] hover:border-[#6b1728] pb-0.5 active:scale-[0.98] transition-all duration-150 group"
          >
            <span>Discuss your matter requirements</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" />
          </a>
        </div>

      </div>

      {/* Case Study Deep-Dive Lightbox Modal */}
      <AnimatePresence>
        {activeModalSample && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setActiveModalSample(null)}
              className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#e4e4e7] z-10 my-auto max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalSample(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#09090b] text-white hover:bg-[#6b1728] active:scale-[0.95] transition-all duration-150 shadow-md focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Image Inspection */}
              <div className="md:w-1/2 bg-[#09090b] relative flex items-center justify-center p-6 min-h-[280px]">
                <img
                  src={activeModalSample.imageSrc}
                  alt={activeModalSample.title}
                  className="max-h-[480px] w-full object-contain rounded-lg shadow-xl"
                />
                
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-[#09090b]/90 backdrop-blur-sm text-white text-[10px] flex items-center justify-between border border-white/10">
                  <span className="flex items-center gap-1.5 text-[#f4c8d1]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f4c8d1]" />
                    <span>Client Details & Names Redacted</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Case Study Breakdown */}
              <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[500px] md:max-h-[600px] flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[#09090b] text-[10px] font-bold tracking-wider uppercase mb-3">
                    {activeModalSample.categoryLabel}
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-[#09090b] mb-2">
                    {activeModalSample.title}
                  </h3>

                  <p className="text-xs text-[#52525b] leading-relaxed mb-6 font-light">
                    {activeModalSample.fullDesc}
                  </p>

                  <div className="space-y-3.5 mb-6">
                    <div className="p-3.5 rounded-xl bg-[#fbfbfa] border border-[#e4e4e7]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#6b1728] mb-1">
                        The Challenge
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed">
                        {activeModalSample.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#fbfbfa] border border-[#e4e4e7]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#6b1728] mb-1">
                        Execution & Solution
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed">
                        {activeModalSample.solution}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#09090b] text-white border border-[#27272a]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#f4c8d1] mb-1">
                        Outcome & Impact
                      </h4>
                      <p className="text-xs text-white/90 leading-relaxed">
                        {activeModalSample.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] mb-2">
                      Tools & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalSample.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#f4f4f5] border border-[#e4e4e7] text-[11px] font-semibold text-[#09090b]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Modal CTA */}
                <div className="mt-8 pt-4 border-t border-[#e4e4e7]">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalSample(null)}
                    className="w-full py-3.5 rounded-xl bg-[#09090b] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm"
                  >
                    <span>Request Similar Workflow Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
