"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { clients } from "@/lib/data";

export default function ClientsContent() {
  return (
    <div className="pt-24">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Our Clients</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Trusted by <span className="gradient-text">Leading Brands</span>
            </h1>
            <p className="text-gray-400 text-lg">
              We&apos;re proud to work with amazing brands across diverse industries.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <ScrollReveal key={client.id} delay={i * 0.05}>
                <div className="glassmorphism-light rounded-xl p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">{client.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{client.industry}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
