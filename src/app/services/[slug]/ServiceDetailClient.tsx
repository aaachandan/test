"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { Service } from "@/lib/types";
import { HiOutlineArrowRight, HiOutlineCheckCircle } from "react-icons/hi";

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div className="pt-24">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <Link href="/services" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                <HiOutlineArrowRight className="w-3 h-3 rotate-180" />
                Back to Services
              </Link>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-medium rounded-full"
              >
                Get Started
                <HiOutlineArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right">
              <div className="glassmorphism-light rounded-3xl p-8 md:p-12">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {["Expert Team with Years of Experience", "AI-Powered Solutions", "Timely Delivery", "24/7 Support", "Cost-Effective Pricing", "Proven Track Record"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full gradient-bg" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
