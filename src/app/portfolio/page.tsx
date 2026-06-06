"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioItems } from "@/lib/data";


const categories = ["All", ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
              <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Our Portfolio</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Our <span className="gradient-text">Work</span>
              </h1>
              <p className="text-gray-400">Explore our portfolio of successful projects across various industries.</p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    active === cat
                      ? "gradient-bg text-white"
                      : "glassmorphism-light text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glassmorphism-light rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-[4/3] bg-dark-3 flex items-center justify-center">
                    <span className="text-gray-600 font-heading">{item.client}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-primary-light font-medium">{item.category}</span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
