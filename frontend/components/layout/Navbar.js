"use client";

import Link from "next/link";
import { Search, Bell, Sun, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center mb-10">
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-3.5 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full py-3 pl-11 pr-16 rounded-xl border border-[#EAE7E1] bg-white text-sm text-[#29251F] focus:outline-none focus:ring-2 focus:ring-[#6D8B74]"
        />

        <span className="absolute right-4 top-3 text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
          Ctrl K
        </span>
      </div>

      <div className="flex gap-4 items-center">
        <button title="Notifications" className="p-2 rounded-xl bg-white border border-[#EAE7E1] text-[#6D8B74] hover:bg-[#EEF3ED] transition cursor-pointer">
          <Bell size={18} />
        </button>

        <button title="Theme" className="p-2 rounded-xl bg-white border border-[#EAE7E1] text-[#D8A94B] hover:bg-amber-50 transition cursor-pointer">
          <Sun size={18} />
        </button>

        {user ? (
          <div className="w-10 h-10 rounded-full bg-[#6D8B74] text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {(user.name || user.email)[0].toUpperCase()}
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EEF3ED] text-[#557A5A] text-sm font-semibold hover:bg-[#e2ebe0] transition"
          >
            <User size={16} />
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </div>
  );
}