"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlineHome, HiOutlinePencil, HiOutlineUserGroup, HiOutlineBriefcase, HiOutlineStar, HiOutlineMail, HiOutlineUsers } from "react-icons/hi";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: HiOutlineHome },
  { href: "/admin/blogs", label: "Blogs", icon: HiOutlinePencil },
  { href: "/admin/team", label: "Team", icon: HiOutlineUserGroup },
  { href: "/admin/portfolio", label: "Portfolio", icon: HiOutlineBriefcase },
  { href: "/admin/testimonials", label: "Testimonials", icon: HiOutlineStar },
  { href: "/admin/leads", label: "Leads", icon: HiOutlineUsers },
  { href: "/admin/contacts", label: "Contacts", icon: HiOutlineMail },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark flex">
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-dark-2 border-r border-white/5 transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 border-b border-white/5">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-heading font-bold text-white text-sm">Admin Panel</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive ? "gradient-bg text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/5">
          <Link href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
            &larr; Back to Website
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 h-16 bg-dark-2/80 backdrop-blur-md border-b border-white/5 flex items-center px-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-400 mr-4">
            {sidebarOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
          <h1 className="text-white font-semibold text-lg">Dashboard</h1>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
