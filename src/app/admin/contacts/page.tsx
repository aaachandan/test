"use client";

import { HiOutlineTrash, HiOutlineMail } from "react-icons/hi";

const contacts = [
  { id: 1, name: "Vikram Singh", email: "vikram@example.com", subject: "Website Inquiry", date: "2025-12-11", message: "I would like to know more about your web development services." },
  { id: 2, name: "Neha Jain", email: "neha@example.com", subject: "Partnership", date: "2025-12-10", message: "Interested in partnering with your agency for digital marketing." },
  { id: 3, name: "Rajesh Kumar", email: "rajesh@example.com", subject: "Support", date: "2025-12-09", message: "Need support with my existing website." },
];

export default function AdminContacts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-heading font-bold text-white">Contact Form Entries</h2>
      </div>
      <div className="space-y-4">
        {contacts.map((c) => (
          <div key={c.id} className="glassmorphism-light rounded-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.email} &middot; {c.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"><HiOutlineMail className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400"><HiOutlineTrash className="w-4 h-4" /></button>
              </div>
            </div>
            <p className="text-gray-400 text-sm"><span className="text-gray-500 font-medium">Subject:</span> {c.subject}</p>
            <p className="text-gray-400 text-sm mt-1">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
