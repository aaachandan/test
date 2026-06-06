"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary-light">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Raipur, Chhattisgarh — Serving All Over India
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Let&apos;s make</span>
              <br />
              <span className="gradient-text">Digital India!</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              We are a leading IT & AI-based digital marketing company in Raipur, Chhattisgarh — transforming businesses with smart, data-powered strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Start Your Project
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 text-gray-300 font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-32 h-32 rounded-2xl gradient-bg opacity-20 blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent opacity-10 blur-3xl"
              />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="glassmorphism rounded-3xl p-8 w-full max-w-sm">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">AI-Powered Solutions</p>
                        <p className="text-gray-500 text-xs">Smart. Fast. Effective.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Website Design", value: "50+" },
                        { label: "SEO Optimization", value: "200+" },
                        { label: "Happy Clients", value: "350+" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <span className="text-primary-light font-semibold text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
