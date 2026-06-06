"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { portfolioItems } from "@/lib/data";


const categories = ["All", ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function PortfolioShowcase() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Projects We&apos;re <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-gray-400">
            Real websites, real results — across restaurants, salons, healthcare, business & more.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat
                  ? "gradient-bg text-white"
                  : "glassmorphism-light text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glassmorphism-light rounded-xl overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-dark-3 relative flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-gray-600 font-heading text-lg block">{item.client}</span>
                    <span className="text-gray-700 text-xs">{item.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary-light font-medium mb-2 block">{item.category}</span>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
