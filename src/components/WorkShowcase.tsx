import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles
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
    { id: "organization", label: "Case File Systems" },
    { id: "formatting", label: "Court Filings" },
    { id: "communication", label: "Client Ops" },
    { id: "calendar", label: "Calendar & Deadlines" },
  ];

  const filteredSamples =
    selectedCategory === "all"
      ? WORK_SAMPLES
      : WORK_SAMPLES.filter((s) => s.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#f4c8d1] relative border-b border-[#0b0b0b]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#a83254] mb-3"
          >
            Selected Work & Case Studies
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0b0b0b] tracking-tight leading-tight mb-5"
          >
            Supporting legal professionals <br />
            <span className="font-serif italic font-normal text-[#a83254]">behind the scenes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#0b0b0b]/80 leading-relaxed font-light"
          >
            Real-world systems, court filings, and workflow transformations executed for attorneys. Click any sample to inspect the detailed case study.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-[#0b0b0b] text-white shadow-md scale-105"
                  : "bg-white/60 text-[#0b0b0b]/75 hover:bg-white hover:text-[#0b0b0b]"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveModalSample(sample)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#e6cbd1] cursor-pointer flex flex-col group"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[4/3] bg-[#0b0b0b]/5 overflow-hidden border-b border-[#e6cbd1]/40">
                  <img
                    src={sample.imageSrc}
                    alt={`${sample.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0b0b0b]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                    {sample.categoryLabel}
                  </div>

                  {/* Redacted Watermark Pill */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#a83254] text-[9px] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Redacted</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0b0b0b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                    <div className="p-3 rounded-full bg-white text-[#0b0b0b] font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-serif text-[#0b0b0b] mb-1.5 group-hover:text-[#a83254] transition-colors">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-[#0b0b0b]/70 leading-relaxed line-clamp-2 mb-4">
                      {sample.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#0b0b0b]/5 text-xs font-bold text-[#a83254]">
                    <span>Case Study & Tools</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Centered Discuss CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0b0b0b] border-b-2 border-[#0b0b0b] hover:text-[#a83254] hover:border-[#a83254] pb-1 transition-colors group"
          >
            <span>Have a specific legal workflow to organize? Let’s talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              onClick={() => setActiveModalSample(null)}
              className="fixed inset-0 bg-[#0b0b0b]/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#fffaf7] rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 my-auto max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalSample(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0b0b0b] text-white hover:bg-[#a83254] transition-colors shadow-lg focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Inspection */}
              <div className="md:w-1/2 bg-[#0b0b0b] relative flex items-center justify-center p-4 min-h-[300px]">
                <img
                  src={activeModalSample.imageSrc}
                  alt={activeModalSample.title}
                  className="max-h-[500px] w-full object-contain rounded-lg shadow-xl"
                />
                
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-[#0b0b0b]/80 backdrop-blur-md text-white text-[10px] flex items-center justify-between border border-white/10">
                  <span className="flex items-center gap-1 text-[#f4c8d1]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f4c8d1]" />
                    <span>Confidentiality Protected: Sample Redacted</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Case Study Breakdown */}
              <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[500px] md:max-h-[600px] flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#f4c8d1] text-[#0b0b0b] text-[11px] font-bold tracking-wider uppercase mb-3">
                    {activeModalSample.categoryLabel}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b0b0b] mb-3">
                    {activeModalSample.title}
                  </h3>

                  <p className="text-xs text-[#0b0b0b]/80 leading-relaxed mb-6 font-light">
                    {activeModalSample.fullDesc}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-white border border-[#e6cbd1]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#a83254] mb-1">
                        The Challenge
                      </h4>
                      <p className="text-xs text-[#0b0b0b]/80 leading-relaxed">
                        {activeModalSample.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#e6cbd1]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#a83254] mb-1">
                        Execution & Solution
                      </h4>
                      <p className="text-xs text-[#0b0b0b]/80 leading-relaxed">
                        {activeModalSample.solution}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0b0b0b] text-white border border-white/10">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#f4c8d1] mb-1">
                        Outcome & Client Impact
                      </h4>
                      <p className="text-xs text-white/90 leading-relaxed">
                        {activeModalSample.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tools Used Chips */}
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0b0b0b]/60 mb-2">
                      Tools & Technologies Leveraged
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalSample.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#e6cbd1] text-[11px] font-semibold text-[#0b0b0b]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Modal CTA */}
                <div className="mt-8 pt-4 border-t border-[#0b0b0b]/10">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalSample(null)}
                    className="w-full py-3.5 rounded-xl bg-[#0b0b0b] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#a83254] transition-colors"
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
