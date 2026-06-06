"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { HiOutlineArrowRight } from "react-icons/hi";
import { formatDate } from "@/lib/utils";

export default function LatestBlogs() {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="gradient-text font-semibold text-sm tracking-wider uppercase">
              Our Blog
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors group"
          >
            See More
            <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glassmorphism-light rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[16/9] bg-dark-3 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center gradient-bg opacity-20 group-hover:opacity-30 transition-opacity" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full glassmorphism text-xs font-medium text-primary-light">
                  {post.category}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                <h3 className="text-white font-semibold line-clamp-2 group-hover:text-primary-light transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary-light hover:text-white transition-colors group/link"
                >
                  Read More
                  <HiOutlineArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
