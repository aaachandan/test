"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function TeamMembersSection() {
  return (
    <section className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="gradient-text font-semibold text-sm tracking-wider uppercase">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Talented professionals dedicated to your success
            </p>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors group"
          >
            View All Team
            <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.slice(0, 6).map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glassmorphism-light rounded-2xl p-4 text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center mb-3">
                <span className="text-white font-heading text-2xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm">{member.name}</h3>
              <p className="text-gray-400 text-xs mt-1">{member.role}</p>
              <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="text-gray-500 hover:text-primary-light"><FaLinkedinIn className="w-3 h-3" /></a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="text-gray-500 hover:text-primary-light"><FaTwitter className="w-3 h-3" /></a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} className="text-gray-500 hover:text-primary-light"><FaInstagram className="w-3 h-3" /></a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
