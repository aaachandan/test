"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/data";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlinePlus } from "react-icons/hi";

export default function AdminBlogs() {
  const [posts] = useState(blogPosts);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-white">Blog Management</h2>
        <button className="flex items-center gap-2 px-4 py-2 gradient-bg text-white text-sm font-medium rounded-lg hover:opacity-90">
          <HiOutlinePlus className="w-4 h-4" />
          New Post
        </button>
      </div>
      <div className="glassmorphism-light rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-gray-400">
              <th className="text-left p-4 font-medium">Title</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Category</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Author</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Date</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 text-white font-medium">{post.title}</td>
                <td className="p-4 text-gray-400 hidden md:table-cell">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary-light text-xs">{post.category}</span>
                </td>
                <td className="p-4 text-gray-400 hidden md:table-cell">{post.author}</td>
                <td className="p-4 text-gray-400 hidden md:table-cell">{post.date}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"><HiOutlinePencilAlt className="w-4 h-4" /></button>
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400"><HiOutlineTrash className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
