import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive digital services including website design, development, SEO, marketing, branding and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
