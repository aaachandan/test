"use client";

import ScrollReveal from "./ScrollReveal";

export default function CompanyIntro() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="space-y-6">
            <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
              &gt; About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Crafting Digital Excellence
              <span className="gradient-text"> From Raipur</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Ray Web Services is a professional digital agency based in Raipur, Chhattisgarh, delivering premium websites and digital solutions to businesses across India. We combine creative design with technical expertise to build powerful online experiences that drive real growth.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Website Design", "Website Development", "Graphic Designing", "Branding", "Business Websites", "Restaurant Websites", "Salon Websites", "NGO Websites", "Healthcare Websites", "Portfolio Websites", "Landing Pages", "Hosting & Domain Setup", "SEO Optimization", "Website Maintenance"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="right">
            <div className="terminal-bg">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="text-gray-500 text-xs ml-2 font-mono">developer@ray-services:~/stats</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-2 text-gray-500">
                  <span className="text-green-400">$</span>
                  <span>./stats --show</span>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-between border-b border-gray-700/30 pb-2">
                    <span>Projects Completed</span>
                    <span className="text-green-400 font-bold">100+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700/30 pb-2">
                    <span>Happy Clients</span>
                    <span className="text-green-400 font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-700/30 pb-2">
                    <span>Industries Served</span>
                    <span className="text-green-400 font-bold">12+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Client Satisfaction</span>
                    <span className="text-green-400 font-bold">99%</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
