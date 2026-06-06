"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import GlassmorphicCard from "./GlassmorphicCard";
import { services } from "@/lib/data";
import { HiOutlineArrowRight } from "react-icons/hi";
const emojiMap: Record<string, string> = {
  "Business Website": "🏢",
  "Restaurant Website": "🍽️",
  "Salon Website": "💇",
  "NGO Website": "🤝",
  "Healthcare Website": "🏥",
  "Portfolio Website": "🎨",
  "E-Commerce Website": "🛒",
  "Landing Page": "📄",
  "Graphic Design": "✏️",
  "Logo Design": "🔤",
  "Domain & Hosting": "🌐",
  "Website Maintenance": "🔧",
};

export default function ServicesGrid() {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Premium <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end digital solutions designed to elevate your brand and accelerate your business growth.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <GlassmorphicCard key={service.id} delay={i * 0.05}>
              <div className="space-y-4">
                <span className="text-3xl">{emojiMap[service.title] || "🚀"}</span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary-light hover:text-white transition-colors group"
                >
                  Learn More
                  <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
