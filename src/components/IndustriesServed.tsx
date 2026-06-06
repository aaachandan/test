"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import * as HiIcons from "react-icons/hi";
import { IconType } from "react-icons";

function IndustryIcon({ icon }: { icon: string }) {
  const IconComponent = (HiIcons as Record<string, IconType>)[icon] || HiIcons.HiOutlineCube;
  return <IconComponent className="w-6 h-6" />;
}

export default function IndustriesServed() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="gradient-text font-semibold text-sm tracking-wider uppercase">
            Industries
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glassmorphism-light rounded-xl p-6 text-center hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3 text-white">
                <IndustryIcon icon={industry.icon} />
              </div>
              <h3 className="text-white font-medium text-sm">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
