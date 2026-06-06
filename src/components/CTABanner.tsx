"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function CTABanner() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl gradient-bg p-8 md:p-14">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative text-center space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                Professional websites designed to grow your business and attract more customers. Get started today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+917746969000"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/917746969000?text=Hello%20Ray%20DIGI%20Studio!%20I%20want%20to%20start%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  WhatsApp Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Start Project
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
