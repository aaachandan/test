"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

export default function ClientLogos() {
  const list = [...clients, ...clients];

  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-gray-400">
            Meet Our Happy Clients! - Leading brands in the Market.
          </p>
        </motion.div>

        <div className="marquee-container overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 w-max items-center"
          >
            {list.map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                className="flex-shrink-0 w-36 h-20 glassmorphism-light rounded-xl flex items-center justify-center px-4 hover:border-primary/20 transition-all"
              >
                <span className="text-gray-500 text-sm font-medium text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
