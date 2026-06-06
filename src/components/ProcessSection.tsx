"use client";

import ScrollReveal from "./ScrollReveal";
const processSteps = [
  { id: 1, step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
  { id: 2, step: "02", title: "Strategy", description: "We craft a tailored digital strategy aligned with your objectives." },
  { id: 3, step: "03", title: "Design", description: "Our designers create stunning visuals and intuitive interfaces." },
  { id: 4, step: "04", title: "Development", description: "We build your solution using cutting-edge technologies." },
  { id: 5, step: "05", title: "Testing", description: "Rigorous testing ensures everything works flawlessly." },
  { id: 6, step: "06", title: "Launch & Support", description: "We deploy your project and provide ongoing support." },
];

export default function ProcessSection() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; How We Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Our <span className="gradient-text">6-Step Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From idea to launch — a proven workflow that delivers exceptional results every time.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.08}>
              <div className="glassmorphism-light rounded-xl p-6 relative group hover:border-primary/20 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-heading font-bold gradient-text">{step.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
