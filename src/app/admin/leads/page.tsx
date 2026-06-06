"use client";

import { HiOutlineTrash, HiOutlineMail } from "react-icons/hi";

const leads = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91-9876543210", service: "Web Development", date: "2025-12-10", status: "New" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", phone: "+91-9876543211", service: "Digital Marketing", date: "2025-12-09", status: "Contacted" },
  { id: 3, name: "Amit Kumar", email: "amit@example.com", phone: "+91-9876543212", service: "SEO", date: "2025-12-08", status: "New" },
  { id: 4, name: "Sneha Gupta", email: "sneha@example.com", phone: "+91-9876543213", service: "Mobile App", date: "2025-12-07", status: "Qualified" },
];

export default function AdminLeads() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-white">Lead Management</h2>
      </div>
      <div className="glassmorphism-light rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 text-gray-400">
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Contact</th>
              <th className="text-left p-4 font-medium hidden lg:table-cell">Service</th>
              <th className="text-left p-4 font-medium hidden lg:table-cell">Date</th>
              <th className="text-left p-4 font-medium hidden md:table-cell">Status</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4 text-white font-medium">{lead.name}</td>
                <td className="p-4 text-gray-400 hidden md:table-cell">
                  <div>
                    <p>{lead.email}</p>
                    <p className="text-xs">{lead.phone}</p>
                  </div>
                </td>
                <td className="p-4 text-gray-400 hidden lg:table-cell">{lead.service}</td>
                <td className="p-4 text-gray-400 hidden lg:table-cell">{lead.date}</td>
                <td className="p-4 hidden md:table-cell">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    lead.status === "New" ? "bg-blue-500/10 text-blue-400" :
                    lead.status === "Contacted" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-green-500/10 text-green-400"
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"><HiOutlineMail className="w-4 h-4" /></button>
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
