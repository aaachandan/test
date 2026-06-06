"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/lib/data";
import { HiOutlineMail, HiOutlinePhone, HiOutlinePaperAirplane, HiOutlineLocationMarker, HiOutlineClock, HiOutlineGlobe } from "react-icons/hi";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", business: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: "", phone: "", business: "", service: "", budget: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: HiOutlineLocationMarker, title: "Visit Us", info: ["Raipur, Chhattisgarh, India"] },
    { icon: HiOutlinePhone, title: "Call / WhatsApp", info: ["+91 7746969000"], href: "tel:+917746969000" },
    { icon: HiOutlineMail, title: "Email", info: ["rayservices.cg@gmail.com"], href: "mailto:rayservices.cg@gmail.com" },
    { icon: HiOutlineClock, title: "Working Hours", info: ["Mon - Sat: 10:00 AM - 7:00 PM"] },
    { icon: HiOutlineGlobe, title: "Service Area", info: ["All Over India"] },
  ];

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase font-mono">
            &gt; Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-gray-400">
            Ready to take your business online? Drop us a message and we&apos;ll respond within 24 hours.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <a href={item.href} className="glassmorphism-light rounded-xl p-4 flex items-start gap-3 hover:border-primary/20 transition-all block">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    {item.info.map((line, j) => (
                      <p key={j} className="text-gray-400 text-sm">{line}</p>
                    ))}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="glassmorphism rounded-2xl p-6 md:p-8">
              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary-light text-sm text-center">
                  Thank you! We&apos;ll respond within 24 hours.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm" />
                  <input type="tel" required placeholder="Mobile Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm" />
                </div>
                <input type="text" placeholder="Business Name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm" />
                <div className="grid md:grid-cols-2 gap-4">
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-primary/50 text-sm">
                    <option value="" disabled>Service Required</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-dark text-white">{s.title}</option>
                    ))}
                  </select>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-primary/50 text-sm">
                    <option value="" disabled>Budget Range</option>
                    <option value="Under ₹10,000" className="bg-dark text-white">Under ₹10,000</option>
                    <option value="₹10,000 - ₹15,000" className="bg-dark text-white">₹10,000 - ₹15,000</option>
                    <option value="₹15,000 - ₹25,000" className="bg-dark text-white">₹15,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000" className="bg-dark text-white">₹25,000 - ₹50,000</option>
                    <option value="₹50,000+" className="bg-dark text-white">₹50,000+</option>
                    <option value="Not Sure" className="bg-dark text-white">Not Sure</option>
                  </select>
                </div>
                <textarea rows={3} placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm resize-none" />
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="flex-1 py-3 gradient-bg text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm min-w-[200px]">
                    <HiOutlinePaperAirplane className="w-4 h-4" />
                    Send Inquiry
                  </button>
                  <a href="https://wa.me/917746969000?text=Hello%20Ray%20DIGI%20Studio!%20I%20want%20to%20discuss%20my%20project." target="_blank" rel="noopener noreferrer"
                    className="px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition-colors text-sm flex items-center gap-2">
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
