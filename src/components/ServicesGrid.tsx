"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import GlassmorphicCard from "./GlassmorphicCard";
import { services } from "@/lib/data";
import * as HiIcons from "react-icons/hi";
import { IconType } from "react-icons";
import { HiOutlineArrowRight } from "react-icons/hi";

const iconMap: Record<string, IconType> = {
  HiOutlineDesktopComputer: HiIcons.HiOutlineDesktopComputer,
  HiOutlineCode: HiIcons.HiOutlineCode,
  HiOutlineChartBar: HiIcons.HiOutlineChartBar,
  HiOutlineLightningBolt: HiIcons.HiOutlineLightningBolt,
  HiOutlineShare: HiIcons.HiOutlineShare,
  HiOutlineCube: HiIcons.HiOutlineCube,
  HiOutlineColorSwatch: HiIcons.HiOutlineColorSwatch,
  HiOutlineSearch: HiIcons.HiOutlineSearch,
  HiOutlineChat: HiIcons.HiOutlineChat,
  HiOutlineMail: HiIcons.HiOutlineMail,
  HiOutlineTerminal: HiIcons.HiOutlineTerminal,
  HiOutlineDeviceMobile: HiIcons.HiOutlineDeviceMobile,
};

export default function ServicesGrid() {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Comprehensive <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end digital solutions designed to elevate your brand and accelerate your business growth.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || HiIcons.HiOutlineCube;
            return (
              <GlassmorphicCard key={service.id} delay={i * 0.05}>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.slice(0, 3).map((f, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-gray-400">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-primary-light hover:text-white transition-colors group"
                  >
                    Learn More
                    <HiOutlineArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassmorphicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
