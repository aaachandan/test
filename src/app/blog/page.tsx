import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest insights, tips, and trends in digital marketing, web development, SEO and more.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
