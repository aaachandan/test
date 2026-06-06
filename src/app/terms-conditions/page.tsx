import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions of NexGen Digital - Understand the terms governing the use of our website and services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative section-padding">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                Terms & <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-gray-400">Last updated: January 2025</p>
            </div>
            <div className="glassmorphism-light rounded-3xl p-8 md:p-12 space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-heading font-bold text-white">1. Acceptance of Terms</h2>
              <p>By accessing or using the NexGen Digital website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our services.</p>

              <h2 className="text-2xl font-heading font-bold text-white">2. Services Description</h2>
              <p>NexGen Digital provides digital marketing, web development, design, and related services as described on our website. The specific scope of services will be outlined in individual service agreements.</p>

              <h2 className="text-2xl font-heading font-bold text-white">3. Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on our website are owned by NexGen Digital unless otherwise stated. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

              <h2 className="text-2xl font-heading font-bold text-white">4. Client Responsibilities</h2>
              <p>Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and timely information required for project execution</li>
                <li>Make payments as per the agreed schedule</li>
                <li>Review and provide feedback within reasonable timeframes</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-white">5. Payment Terms</h2>
              <p>Payment terms are specified in individual service agreements. Late payments may result in service suspension or additional charges.</p>

              <h2 className="text-2xl font-heading font-bold text-white">6. Limitation of Liability</h2>
              <p>NexGen Digital shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service giving rise to the claim.</p>

              <h2 className="text-2xl font-heading font-bold text-white">7. Termination</h2>
              <p>Either party may terminate the service agreement as per the terms specified in the individual contract. Upon termination, all fees due up to the date of termination shall be payable.</p>

              <h2 className="text-2xl font-heading font-bold text-white">8. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Raipur, Chhattisgarh.</p>

              <h2 className="text-2xl font-heading font-bold text-white">9. Contact Information</h2>
              <p>For questions about these Terms & Conditions, please contact us at info@nexgendigital.in or call +91-94071-70994.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
