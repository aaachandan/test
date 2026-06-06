"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { careerPositions } from "@/lib/data";
import { HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineClock, HiOutlinePaperAirplane } from "react-icons/hi";

export default function CareerPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Career</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Shape Your <span className="gradient-text">Career With Us</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Join our dynamic team and be part of something extraordinary. We&apos;re always looking for talented individuals.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {careerPositions.map((pos, i) => (
                  <motion.div
                    key={pos.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelected(selected === pos.id ? null : pos.id)}
                    className={`glassmorphism-light rounded-xl p-5 cursor-pointer transition-all hover:border-primary/20 ${
                      selected === pos.id ? "border-primary/30" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-white font-semibold">{pos.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <HiOutlineBriefcase className="w-3 h-3" /> {pos.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <HiOutlineLocationMarker className="w-3 h-3" /> {pos.location}
                          </span>
                        </div>
                      </div>
                      <HiOutlineClock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </div>
                    {selected === pos.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-white/5"
                      >
                        <p className="text-gray-400 text-sm mb-3">{pos.description}</p>
                        <h4 className="text-white text-sm font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {pos.requirements.map((req, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <ScrollReveal delay={0.1}>
                <div className="glassmorphism rounded-3xl p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-6">Apply Now</h3>
                  {submitted && (
                    <div className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                      Application submitted! We&apos;ll be in touch.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    <input type="tel" required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-primary/50">
                      <option value="" disabled>Select Position</option>
                      {careerPositions.map((p) => (
                        <option key={p.id} value={p.title} className="bg-dark text-white">{p.title}</option>
                      ))}
                    </select>
                    <input type="text" required placeholder="Years of Experience" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50" />
                    <textarea rows={3} placeholder="Why do you want to join us?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 resize-none" />
                    <button type="submit" className="w-full py-3 gradient-bg text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <HiOutlinePaperAirplane className="w-5 h-5" />
                      Submit Application
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
