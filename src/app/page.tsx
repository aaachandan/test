import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ServicesMarquee from "@/components/ServicesMarquee";
import CompanyIntro from "@/components/CompanyIntro";
import ServicesGrid from "@/components/ServicesGrid";
import StatisticsCounter from "@/components/StatisticsCounter";
import IndustriesServed from "@/components/IndustriesServed";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ClientLogos from "@/components/ClientLogos";
import TeamMembers from "@/components/TeamMembers";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LatestBlogs from "@/components/LatestBlogs";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <ServicesMarquee />
        <CompanyIntro />
        <ServicesGrid />
        <StatisticsCounter />
        <IndustriesServed />
        <PortfolioShowcase />
        <ClientLogos />
        <TeamMembers />
        <TestimonialsCarousel />
        <LatestBlogs />
        <CTABanner />
        <ContactForm />
        <GoogleMap />
      </main>
      <Footer />
    </>
  );
}
