"use client";

import { testimonials } from "@/lib/data";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlinePlus } from "react-icons/hi";

export default function AdminTestimonials() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-white">Testimonial Management</h2>
        <button className="flex items-center gap-2 px-4 py-2 gradient-bg text-white text-sm font-medium rounded-lg hover:opacity-90">
          <HiOutlinePlus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>
      <div className="glassmorphism-light rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-gray-400">
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Company</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Rating</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((t) => (
              <tr key={t.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4 text-white font-medium">{t.name}</td>
                <td className="p-4 text-gray-400 hidden md:table-cell">{t.company}</td>
                <td className="p-4 text-gray-400 hidden md:table-cell">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">&#9733;</span>
                    ))}
                  </div>
                </td>
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
