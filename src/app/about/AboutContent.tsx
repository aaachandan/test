"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

const values = [
  { emoji: "🎨", title: "Modern Design", desc: "Pixel-perfect, modern designs that captivate your audience." },
  { emoji: "📱", title: "Mobile Friendly", desc: "Every website is fully responsive across all devices." },
  { emoji: "⚡", title: "Fast Loading", desc: "Optimized for speed to provide the best user experience." },
  { emoji: "🔍", title: "SEO Optimized", desc: "Built with SEO best practices to help you rank higher." },
  { emoji: "🔒", title: "Secure Hosting", desc: "Reliable hosting with SSL certificates for security." },
  { emoji: "✨", title: "Premium UI/UX", desc: "Beautiful interfaces designed for optimal user experience." },
  { emoji: "💬", title: "WhatsApp Integration", desc: "Connect with customers directly through WhatsApp." },
  { emoji: "💰", title: "Affordable Pricing", desc: "Premium quality websites at budget-friendly prices." },
  { emoji: "🤝", title: "Reliable Support", desc: "Dedicated support team available for all your needs." },
  { emoji: "🏆", title: "Professional Approach", desc: "Professional workflow from consultation to launch." },
];

export default function AboutContent() {
  return (
    <div className="pt-20">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">&gt; About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Crafting Digital Excellence <span className="gradient-text">From Raipur</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Ray Web Services is a professional digital agency based in Raipur, Chhattisgarh, delivering premium websites and digital solutions to businesses across India.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal className="glassmorphism-light rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded with a vision to make premium web design accessible to every business, Ray Web Services has grown from a freelance operation into a full-fledged digital agency serving clients across India.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine creative design with technical expertise to build powerful online experiences that drive real growth for businesses of all sizes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="glassmorphism-light rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                {["100+ Projects Delivered", "50+ Happy Clients", "12+ Industries Served", "99% Client Satisfaction", "Affordable Pricing", "Timely Delivery", "Dedicated Support", "Premium Quality"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-8">
              Built Different. <span className="gradient-text">Built Better.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glassmorphism-light rounded-xl p-4 text-center h-full">
                  <span className="text-2xl mb-2 block">{v.emoji}</span>
                  <h3 className="text-white font-semibold text-sm mb-1">{v.title}</h3>
                  <p className="text-gray-400 text-xs">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <CTABanner />
        </div>
      </section>
    </div>
  );
}
