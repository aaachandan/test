"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HiOutlineChevronDown } from "react-icons/hi";

const faqs = [
  { q: "What services does NexGen Digital offer?", a: "We offer a comprehensive range of digital services including Website Design, Web Development, SEO, Digital Marketing, Social Media Marketing, Branding, Graphic Design, Google Ads, WhatsApp API, Email Marketing, Software Development, and Mobile App Development." },
  { q: "Where is NexGen Digital located?", a: "We are based in Raipur, Chhattisgarh, India, and serve clients all across India." },
  { q: "How much does a website cost?", a: "Our pricing varies based on the complexity and requirements of the project. We offer affordable plans starting from competitive rates. Contact us for a personalized quote." },
  { q: "How long does it take to build a website?", a: "Typical website projects take 2-4 weeks depending on the scope. Simple landing pages can be delivered in 5-7 days, while complex web applications may take 6-8 weeks." },
  { q: "Do you provide hosting and domain services?", a: "Yes, we provide reliable hosting and domain registration services with all our website packages, including SSL certificates and ongoing maintenance." },
  { q: "What makes NexGen Digital different?", a: "We combine AI-powered strategies with creative expertise to deliver data-driven results. Our focus on quality, timely delivery, and client satisfaction sets us apart." },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="relative section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know about working with us.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="glassmorphism-light rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <HiOutlineChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openId === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openId === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
