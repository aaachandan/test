"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import GlassmorphicCard from "@/components/GlassmorphicCard";
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

export default function ServicesContent() {
  return (
    <div className="pt-20">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">&gt; Our Services</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Premium <span className="gradient-text">Digital Services</span>
            </h1>
            <p className="text-gray-400 text-lg">
              End-to-end digital solutions designed to elevate your brand and accelerate your business growth.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <GlassmorphicCard key={service.id} delay={i * 0.05}>
                <div className="space-y-4">
                  <span className="text-3xl">{emojiMap[service.title] || "🚀"}</span>
                  <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
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
    </div>
  );
}
