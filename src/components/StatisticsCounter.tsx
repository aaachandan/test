"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineClipboardList, HiOutlineEmojiHappy, HiOutlineUserGroup } from "react-icons/hi";

function Counter({ target, label, suffix = "+", icon: Icon }: { target: number; label: string; suffix?: string; icon: React.ComponentType<{ className?: string }> }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / target));
          const timer = setInterval(() => {
            start += 1;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}

export default function StatisticsCounter() {
  const stats = [
    { target: 8, label: "Years of Experience", suffix: "+", icon: HiOutlineBriefcase },
    { target: 500, label: "Projects Complete", suffix: "+", icon: HiOutlineClipboardList },
    { target: 350, label: "Happy Clients", suffix: "+", icon: HiOutlineEmojiHappy },
    { target: 12, label: "Team Members", suffix: "+", icon: HiOutlineUserGroup },
  ];

  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              500+ Businesses Served. Countless Success Stories.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re an IT &amp; AI-based Digital Marketing Company driving innovation, growth, and measurable results for every brand we partner with.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Counter key={i} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
