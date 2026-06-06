"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/data";
import { HiOutlineArrowRight } from "react-icons/hi";
import { formatDate } from "@/lib/utils";

export default function BlogContent() {
  return (
    <div className="pt-24">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="gradient-text font-semibold text-sm tracking-wider uppercase">Our Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Stay updated with the latest trends, tips, and strategies in digital marketing and technology.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <div className="glassmorphism-light rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="aspect-[16/9] bg-dark-3 relative">
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full glassmorphism text-xs font-medium text-primary-light z-10">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{formatDate(post.date)}</span>
                      <span>By {post.author}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-primary-light transition-colors flex-1">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary-light hover:text-white transition-colors group/link mt-auto pt-3"
                    >
                      Read More
                      <HiOutlineArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
