"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { HiOutlineGlobe, HiOutlineChartBar, HiOutlineDeviceMobile, HiOutlineShieldCheck } from "react-icons/hi";

const features = [
  { icon: HiOutlineGlobe, title: "Digital Marketing", description: "Data-driven marketing strategies that maximize your ROI and grow your brand online." },
  { icon: HiOutlineChartBar, title: "SEO & Analytics", description: "Dominate search rankings with our proven SEO strategies and detailed analytics." },
  { icon: HiOutlineDeviceMobile, title: "Web & Mobile Apps", description: "Beautiful, responsive websites and mobile apps built with cutting-edge tech." },
  { icon: HiOutlineShieldCheck, title: "Brand Security", description: "Comprehensive brand protection and reputation management solutions." },
];

export default function CompanyIntro() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="space-y-6">
            <span className="text-primary-light font-semibold text-sm tracking-wider uppercase">
              About NexGen Digital
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transforming Businesses with
              <span className="gradient-text"> AI-Powered Digital Solutions</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              NexGen Digital is a leading IT & AI-based digital marketing company in Raipur, Chhattisgarh. We help businesses leverage the power of artificial intelligence and data-driven strategies to achieve remarkable growth in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["8+ Years Experience", "500+ Projects", "350+ Happy Clients", "12+ Team Members"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Know More About Us
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="right">
            <div className="grid gap-4">
              {features.map((feature, i) => (
                <div key={i} className="glassmorphism-light rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
