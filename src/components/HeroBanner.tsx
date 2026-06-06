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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary-light">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />
              Raipur, Chhattisgarh — Serving All Over India
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">WE BUILD WEBSITES</span>
              <br />
              <span className="gradient-text">THAT GROW BUSINESSES</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Professional website design, development, branding, landing pages, business websites, restaurant websites, salon websites, NGO websites, healthcare websites and complete digital solutions — crafted for results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                View Portfolio
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-gray-300 font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="terminal-bg">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="text-gray-500 text-xs ml-2 font-mono">developer@ray-services:~/project</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex gap-2 text-gray-500">
                  <span>$</span>
                  <span>ls -la</span>
                </div>
                <div className="text-green-400">mario-game.js  styles.css</div>
                <div className="flex gap-2 text-gray-500 mt-4">
                  <span>$</span>
                  <span>npm run dev</span>
                </div>
                <div className="text-yellow-400">
                  <span className="text-green-400">Live Development</span> ⚡ 120 lines <span className="text-blue-400">🔒 Secured</span>
                </div>
                <div className="flex gap-4 text-gray-500 text-xs pt-2 border-t border-gray-700/50">
                  <span><span className="text-gray-400">&larr; &rarr;</span> Move</span>
                  <span><span className="text-gray-400">Space</span> Jump</span>
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
