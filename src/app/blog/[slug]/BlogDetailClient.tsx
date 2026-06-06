"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { BlogPost } from "@/lib/types";
import { HiOutlineArrowRight } from "react-icons/hi";
import { formatDate } from "@/lib/utils";

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  return (
    <div className="pt-24">
      <section className="relative section-padding">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mb-8">
              <HiOutlineArrowRight className="w-3 h-3 rotate-180" />
              Back to Blog
            </Link>
          </ScrollReveal>

          <ScrollReveal className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <span className="px-3 py-1 rounded-full glassmorphism-light text-primary-light text-xs font-medium">{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="aspect-[16/9] rounded-2xl bg-dark-3 mb-10 flex items-center justify-center">
              <span className="text-gray-600 font-heading text-lg">{post.category}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glassmorphism-light rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                <p className="text-gray-400 leading-relaxed">{post.content}</p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  This comprehensive guide covers everything you need to know about this topic. Whether you&apos;re a beginner or an experienced professional, you&apos;ll find valuable insights to help you make informed decisions for your business.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  At NexGen Digital, we&apos;re committed to sharing our knowledge and expertise to help businesses thrive in the digital landscape. Stay tuned for more insightful articles and updates.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <h4 className="text-white font-semibold mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full glassmorphism-light text-xs text-gray-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
