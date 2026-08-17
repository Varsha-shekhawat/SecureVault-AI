"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  return (
    <AuthProvider>
      {isAuthRoute ? (
        <div className="min-h-screen w-full bg-[#FAF9F6] text-[#29251F] font-sans antialiased flex items-center justify-center p-6">
          {children}
        </div>
      ) : (
        <div className="h-full bg-[#FAF9F6] text-[#29251F] font-sans antialiased flex overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto p-8 lg:p-10">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      )}
    </AuthProvider>
  );
}
