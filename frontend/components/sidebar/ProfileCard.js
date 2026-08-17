"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";

export default function ProfileCard() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-3 p-3 mt-4 rounded-xl bg-[#FAF9F6] border border-[#EAE7E1] hover:bg-[#EEF3ED] transition"
      >
        <div className="w-9 h-9 rounded-full bg-[#EEF3ED] text-[#6D8B74] flex items-center justify-center">
          <UserIcon size={18} />
        </div>
        <div className="overflow-hidden flex-1">
          <p className="text-sm font-semibold text-[#29251F] truncate">Sign In</p>
          <p className="text-xs text-[#716B61] truncate">Access your vault</p>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between p-3 mt-4 rounded-xl bg-[#FAF9F6] border border-[#EAE7E1]">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-9 h-9 rounded-full bg-[#6D8B74] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          {(user.name || user.email)[0].toUpperCase()}
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-[#29251F] truncate">{user.name || "User"}</p>
          <p className="text-xs text-[#716B61] truncate">{user.email}</p>
        </div>
      </div>

      <button
        onClick={logout}
        title="Log out"
        className="p-1.5 text-gray-400 hover:text-red-600 transition rounded-lg hover:bg-white cursor-pointer"
      >
        <LogOut size={16} />
      </button>
    </div>
  );
}
