import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CompanyIntro from "@/components/CompanyIntro";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CompanyIntro />
        <ServicesGrid />
        <PortfolioShowcase />
        <PricingSection />
        <ProcessSection />
        <TestimonialsCarousel />
        <FAQSection />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
