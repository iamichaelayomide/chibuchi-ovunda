import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS_DATA } from "../data/portfolioData";
import { MetricItem } from "../types";

// Smooth Counting Number Component
const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  decimals?: number;
}> = ({ target, duration = 2.0, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth easeOutExpo curve
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      
      const currentVal = easedProgress * target;
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
    </span>
  );
};

export const Metrics: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
          VERIFIED TRACK RECORD
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold text-[#09090b] tracking-tight mb-14 font-heading">
          Precision execution backed by measurable standards.
        </h2>

        {/* 4 Center-Aligned Animated Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#e4e4e7]">
          {METRICS_DATA.map((item, idx) => {
            const hasDecimals = item.value % 1 !== 0;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className={`flex flex-col items-center justify-center ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
              >
                <div className="flex items-baseline justify-center gap-1 mb-2 font-heading">
                  {item.prefix && (
                    <span className="text-2xl sm:text-3xl text-[#6b1728] font-bold">
                      {item.prefix}
                    </span>
                  )}
                  <span className="text-4xl sm:text-6xl font-bold text-[#09090b] tracking-tight">
                    <AnimatedCounter
                      target={item.value}
                      decimals={hasDecimals ? 1 : 0}
                      duration={1.8 + idx * 0.15}
                    />
                  </span>
                  {item.suffix && (
                    <span className="text-2xl sm:text-3xl text-[#6b1728] font-bold">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#09090b] tracking-tight mb-1 font-heading text-center">
                  {item.label}
                </h3>
                
                <p className="text-xs text-[#71717a] font-light leading-relaxed max-w-xs text-center">
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
