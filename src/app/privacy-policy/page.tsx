import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of NexGen Digital - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-400">Last updated: January 2025</p>
            </div>
            <div className="glassmorphism-light rounded-3xl p-8 md:p-12 space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-heading font-bold text-white">1. Introduction</h2>
              <p>NexGen Digital (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

              <h2 className="text-2xl font-heading font-bold text-white">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Company information</li>
                <li>Project requirements and preferences</li>
                <li>Communication history with our team</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white">3. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and communications</li>
                <li>Sending relevant updates and marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white">4. Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2 className="text-2xl font-heading font-bold text-white">5. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or transfer your personally identifiable information to third parties without your consent, except as required by law or as necessary to provide our services.</p>

              <h2 className="text-2xl font-heading font-bold text-white">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at info@nexgendigital.in or call +91-94071-70994.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
