"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { teamMembers } from "@/lib/data";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

export default function TeamPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const member = selected !== null ? teamMembers.find((m) => m.id === selected) : null;

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Our Team</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Talented professionals dedicated to delivering exceptional digital solutions for your business.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(member.id)}
                  className="glassmorphism-light rounded-2xl p-6 text-center cursor-pointer group hover:border-primary/20 transition-all"
                >
                  <div className="w-24 h-24 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
                    <span className="text-white font-heading text-3xl font-bold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{member.role}</p>
                  <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.socials.linkedin && <a href={member.socials.linkedin} onClick={(e) => e.stopPropagation()} className="text-gray-500 hover:text-primary-light"><FaLinkedinIn className="w-4 h-4" /></a>}
                    {member.socials.twitter && <a href={member.socials.twitter} onClick={(e) => e.stopPropagation()} className="text-gray-500 hover:text-primary-light"><FaTwitter className="w-4 h-4" /></a>}
                    {member.socials.instagram && <a href={member.socials.instagram} onClick={(e) => e.stopPropagation()} className="text-gray-500 hover:text-primary-light"><FaInstagram className="w-4 h-4" /></a>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {member && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glassmorphism rounded-3xl p-8 max-w-md w-full relative"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white">
                <HiOutlineX className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
                  <span className="text-white font-heading text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl">{member.name}</h3>
                <p className="text-primary-light text-sm mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-6">
                  {member.socials.linkedin && <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light"><FaLinkedinIn /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light"><FaTwitter /></a>}
                  {member.socials.instagram && <a href={member.socials.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light"><FaInstagram /></a>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
