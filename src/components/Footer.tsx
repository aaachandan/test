import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-dark-2 border-t border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="font-heading text-xl font-bold text-white">
              NexGen <span className="gradient-text">Digital</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A leading IT & AI-based digital marketing company in Raipur, Chhattisgarh — transforming businesses with smart, data-powered strategies.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/nexgendigital" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/nexgendigital" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/nexgendigital" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/nexgendigital" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2.5">
              {["Website Design", "Web Development", "SEO", "Digital Marketing", "Social Media Marketing", "Branding"].map((label) => (
                <li key={label}>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact Info</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="tel:+919407170994" className="hover:text-white transition-colors">+91 94071-70994</a></li>
              <li><a href="mailto:info@nexgendigital.in" className="hover:text-white transition-colors">info@nexgendigital.in</a></li>
              <li>In front of Kota Stadium, Kota, Raipur (492010)</li>
              <li>Mon - Sat: 10AM - 7PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} NexGen Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
