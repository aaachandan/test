"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { HiOutlineGlobe, HiOutlineChartBar, HiOutlineDeviceMobile, HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineUserGroup, HiOutlineSupport, HiOutlineBadgeCheck } from "react-icons/hi";

const values = [
  { icon: HiOutlineGlobe, title: "Digital Marketing", desc: "Data-driven marketing strategies that maximize ROI." },
  { icon: HiOutlineChartBar, title: "SEO & Analytics", desc: "Dominate search rankings with proven strategies." },
  { icon: HiOutlineDeviceMobile, title: "Web & Mobile Apps", desc: "Beautiful, responsive websites and mobile apps." },
  { icon: HiOutlineShieldCheck, title: "Brand Security", desc: "Comprehensive brand protection and reputation." },
  { icon: HiOutlineLightningBolt, title: "Fast Delivery", desc: "Timely delivery without compromising quality." },
  { icon: HiOutlineUserGroup, title: "Expert Team", desc: "Skilled professionals dedicated to your success." },
  { icon: HiOutlineSupport, title: "24/7 Support", desc: "Round-the-clock support for all your needs." },
  { icon: HiOutlineBadgeCheck, title: "Quality Assurance", desc: "Rigorous quality checks at every step." },
];

export default function AboutContent() {
  return (
    <div className="pt-20">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Transforming Businesses with <span className="gradient-text">AI-Powered Digital Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg">
              NexGen Digital is a leading IT & AI-based digital marketing company in Raipur, Chhattisgarh, dedicated to helping businesses thrive in the digital age.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal className="glassmorphism-light rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded with a vision to make premium digital services accessible to every business in India, NexGen Digital has grown from a small startup into a full-fledged digital agency serving clients across the country.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine artificial intelligence with creative expertise to build powerful digital experiences that drive real growth for businesses of all sizes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="glassmorphism-light rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                {["8+ Years of Experience", "500+ Projects Delivered", "350+ Happy Clients", "AI-Powered Strategies", "Affordable Pricing", "Timely Delivery", "Dedicated Support", "Premium Quality"].map((item, i) => (
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glassmorphism-light rounded-xl p-5 text-center h-full hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
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
