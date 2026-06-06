"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown } from "react-icons/hi";

const servicesDropdown = [
  { href: "/services/website-design", label: "Website Design" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
  { href: "/services/branding", label: "Branding" },
];

const aboutDropdown = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/career", label: "Career" },
  { href: "/clients", label: "Our Clients" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-white">
              NexGen <span className="gradient-text">Digital</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Home
            </Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Services
                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl glassmorphism border border-white/5 p-2 shadow-xl"
                  >
                    {servicesDropdown.map((item) => (
                      <Link key={item.href} href={item.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5">
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/services"
                      className="block px-3 py-2 text-sm text-primary-light hover:text-white rounded-lg hover:bg-white/5 font-medium border-t border-white/5 mt-1 pt-2">
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                About
                <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-48 rounded-xl glassmorphism border border-white/5 p-2 shadow-xl"
                  >
                    {aboutDropdown.map((item) => (
                      <Link key={item.href} href={item.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Portfolio
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Blog
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium text-white gradient-bg rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glassmorphism border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5">Home</Link>
              <div className="px-4 py-2 text-sm font-medium text-gray-400">Services</div>
              {servicesDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block pl-8 pr-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5">{item.label}</Link>
              ))}
              <Link href="/services" onClick={() => setMobileOpen(false)}
                className="block pl-8 pr-4 py-2 text-sm text-primary-light rounded-lg">View All Services</Link>
              <div className="px-4 py-2 text-sm font-medium text-gray-400 pt-2">About</div>
              {aboutDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block pl-8 pr-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5">{item.label}</Link>
              ))}
              <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5">Portfolio</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5">Blog</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5">Contact</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="block text-center mt-4 px-4 py-3 text-sm font-medium text-white gradient-bg rounded-lg">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
