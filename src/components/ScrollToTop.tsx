import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0b0b0b] text-white flex items-center justify-center shadow-2xl hover:bg-[#a83254] transition-colors group focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
            <circle
              cx="20"
              cy="20"
              r="18"
              className="text-white/20 stroke-current"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              className="text-[#f4c8d1] stroke-current"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="113"
              strokeDashoffset={113 - (113 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
