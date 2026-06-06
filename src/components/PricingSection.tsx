"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { pricingPlans } from "@/lib/data";
import { HiOutlineCheck, HiOutlineArrowRight } from "react-icons/hi";

export default function PricingSection() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Transparent Plans, <span className="gradient-text">Premium Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your business. All plans include modern design, mobile responsiveness & dedicated support.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 0.1}>
              <div className={`relative rounded-2xl p-6 h-full flex flex-col ${plan.popular ? "gradient-bg-dark border-2 border-primary/40" : "glassmorphism-light"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-semibold">
                    Best Value
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-heading font-bold text-white">&pi;&#8377;{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">one-time</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <HiOutlineCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg text-center font-medium transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90"
                      : "border border-white/10 text-gray-300 hover:bg-white/5"
                  }`}
                >
                  Get Started
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
