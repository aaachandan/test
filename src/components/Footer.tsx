import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-dark-2 border-t border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="font-heading text-xl font-bold text-white">
              Ray <span className="gradient-text">Web Services</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Design. Develop. Dominate. — A premium digital agency based in Raipur, Chhattisgarh, delivering professional websites, branding, and digital solutions to businesses across India.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/917746969000" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a href="tel:+917746969000" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaPhoneAlt className="w-4 h-4" />
              </a>
              <a href="mailto:rayservices.cg@gmail.com" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary-light hover:bg-primary/10 transition-all">
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2.5">
              {["Website Design", "Website Development", "Graphic Design", "Branding", "SEO Optimization", "Hosting & Domain"].map((label) => (
                <li key={label}>
                  <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact Info</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="tel:+917746969000" className="hover:text-white transition-colors">+91 7746969000</a></li>
              <li><a href="mailto:rayservices.cg@gmail.com" className="hover:text-white transition-colors">rayservices.cg@gmail.com</a></li>
              <li>Raipur, Chhattisgarh</li>
              <li>Mon - Sat: 10AM - 7PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            &copy; 2026 Designed by <a href="https://rayservices.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">Ray Services</a>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1 font-mono">Design. Develop. Dominate.</p>
        </div>
      </div>
    </footer>
  );
}
