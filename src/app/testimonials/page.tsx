"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/lib/data";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = testimonials[current];

  const next = () => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Testimonials</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h1>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="glassmorphism rounded-3xl p-8 md:p-16 relative"
                >
                  <FaQuoteLeft className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
                  <div className="text-center space-y-8">
                    <p className="text-gray-200 text-xl md:text-2xl leading-relaxed italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                      ))}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xl">{t.name}</h4>
                      <p className="text-gray-400">{t.designation}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-4 mt-8">
                <button onClick={prev} className="w-12 h-12 rounded-full glassmorphism-light flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <HiOutlineChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-7" : "bg-gray-600"}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-12 h-12 rounded-full glassmorphism-light flex items-center justify-center text-gray-400 hover:text-white transition-all">
                  <HiOutlineChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
