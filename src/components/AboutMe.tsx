import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Mail, FolderKanban, FileText, ArrowRight } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const AboutMe: React.FC = () => {
  const credentials = [
    { label: "Calendar", value: "Scheduling, Deadlines & Buffer Time" },
    { label: "Email", value: "Custom Labels & Urgent Triage" },
    { label: "Documents", value: "Meeting Minutes, MOUs & Summaries" },
    { label: "File Systems", value: "8-Folder Google Drive Hierarchy" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3"
        >
          PRACTICE PROFILE
        </motion.p>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-12 font-heading max-w-3xl mx-auto"
        >
          Helping clients keep their practice organized, responsive & easy to manage.
        </motion.h2>

        {/* Scroll-Driven Reveal: iOS Rounded Portrait Plate */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xs sm:max-w-sm mx-auto mb-12"
        >
          <div className="p-3 bg-[#f5cad5] border border-[#09090b]/15 rounded-3xl shadow-xl">
            <div className="relative aspect-[3/4] bg-[#09090b] rounded-2xl overflow-hidden">
              <img
                src="/images/hero_portrait.webp"
                alt="Chibuchi Ovunda, Virtual Legal Assistant"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Top Tag */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#09090b]/90 text-white text-[10px] font-mono font-bold tracking-wider uppercase rounded-lg flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#f4c8d1]" />
                  <span>Virtual Legal Assistant</span>
                </span>
              </div>

              {/* Bottom Name Plate */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 bg-[#09090b]/90 border-t border-[#27272a] text-white text-center">
                <p className="text-sm font-bold font-heading">{PORTFOLIO_INFO.name}</p>
                <p className="text-[10px] text-[#a1a1aa] font-mono mt-0.5">Akure, Nigeria · Available for Remote Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed font-light max-w-2xl mx-auto mb-12"
        >
          <p>
            I am a virtual assistant supporting legal practitioners and busy professionals with dependable administrative workflows.
          </p>
          <p>
            Following your specific instructions, I manage appointment schedules, add buffer time, organize inboxes with custom matter labels, prepare structured meeting minutes, and maintain logical 8-folder cloud directories so every important document is easy to locate.
          </p>
          <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] text-xs sm:text-sm text-[#09090b] font-normal italic max-w-xl mx-auto">
            “Tell me what you need organized, and I’ll create a system that keeps everything accessible, structured, and under control.”
          </div>
        </motion.div>

        {/* Tabular Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-[#e4e4e7] mb-12 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e4e4e7] py-4 text-center">
            {credentials.map((cred, idx) => (
              <div key={idx} className="p-4 flex flex-col items-center justify-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-1">
                  {cred.label}
                </span>
                <span className="text-xs font-bold text-[#09090b] font-heading">
                  {cred.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-md rounded-2xl group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
