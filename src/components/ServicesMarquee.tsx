"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function ServicesMarquee() {
  const list = [...services, ...services];

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5" />
      <div className="marquee-container relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {list.map((service, i) => (
            <span
              key={`${service.id}-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism-light text-sm font-medium text-gray-300 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              {service.title}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
