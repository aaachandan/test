"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState(0);
  const t = testimonials[current];

  const next = () => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; Client Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400">
            Real feedback from real businesses we&apos;ve had the privilege to serve.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism rounded-2xl p-8 md:p-12 relative">
            <FaQuoteLeft className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-600"}`} />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <div className="w-12 h-12 mx-auto rounded-full gradient-bg flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{t.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.designation}, {t.company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-lg glassmorphism-light flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <HiOutlineChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-5" : "bg-gray-600"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-lg glassmorphism-light flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <HiOutlineChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
