"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassmorphicCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`glassmorphism-light rounded-2xl p-6 transition-all duration-300 ${
        hover ? "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
