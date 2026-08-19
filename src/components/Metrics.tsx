import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS_DATA } from "../data/portfolioData";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1600;
    const isDecimal = value % 1 !== 0;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums font-serif">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const Metrics: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 border-b border-[#0b0b0b]/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#e6cbd1]/60">
          {METRICS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-6 pt-6 sm:pt-0"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0b0b0b] tracking-tight mb-2 flex items-center justify-center">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  prefix={item.prefix}
                />
              </div>
              <h3 className="text-sm font-bold text-[#a83254] uppercase tracking-wider mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-[#0b0b0b]/70 font-medium max-w-[200px]">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
