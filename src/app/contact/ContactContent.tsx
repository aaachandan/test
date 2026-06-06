"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/lib/data";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineChatAlt, HiOutlinePaperAirplane, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-24">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have a project in mind? We&apos;d love to hear from you. Drop us a message and we&apos;ll get back to you shortly.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              {[
                { icon: HiOutlinePhone, title: "Phone", info: ["+91-88399-46717", "+91-94071-70994"], href: "tel:+918839946717" },
                { icon: HiOutlineMail, title: "Email", info: ["info@nexgendigital.in"], href: "mailto:info@nexgendigital.in" },
                { icon: HiOutlineLocationMarker, title: "Address", info: ["In front of Kota Stadium", "Kota, Raipur (492010)"], href: "#" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <a href={item.href} className="glassmorphism-light rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-all block">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
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

            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <div className="glassmorphism rounded-3xl p-8 md:p-12">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center"
                  >
                    Thank you! We&apos;ll get back to you shortly.
                  </motion.div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    </div>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="email" required placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="tel" required placeholder="Your Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    </div>
                    <div className="relative">
                      <HiOutlineChatAlt className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-primary/50 appearance-none">
                        <option value="" disabled>Select Service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-dark text-white">{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <textarea rows={4} required placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 resize-none" />
                  <button type="submit" className="w-full py-3.5 gradient-bg text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <HiOutlinePaperAirplane className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
