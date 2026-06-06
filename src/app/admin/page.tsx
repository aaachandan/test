"use client";

import { HiOutlinePencil, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineStar, HiOutlineUsers, HiOutlineMail } from "react-icons/hi";

const cards = [
  { label: "Blog Posts", value: "6", icon: HiOutlinePencil, color: "from-blue-500 to-purple-500" },
  { label: "Team Members", value: "12", icon: HiOutlineUserGroup, color: "from-green-500 to-teal-500" },
  { label: "Portfolio Items", value: "6", icon: HiOutlineBriefcase, color: "from-orange-500 to-red-500" },
  { label: "Testimonials", value: "6", icon: HiOutlineStar, color: "from-yellow-500 to-orange-500" },
  { label: "Leads", value: "24", icon: HiOutlineUsers, color: "from-pink-500 to-rose-500" },
  { label: "Contact Entries", value: "18", icon: HiOutlineMail, color: "from-indigo-500 to-blue-500" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold text-white mb-6">Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div key={i} className="glassmorphism-light rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">{card.label}</span>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-3xl font-heading font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
