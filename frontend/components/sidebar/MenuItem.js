"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItem({ icon: Icon, title, href = "#" }) {
  const pathname = usePathname();

  const isActive =
    href === "/" || href === "/dashboard"
      ? pathname === "/" || pathname === "/dashboard"
      : href !== "#" && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3
        px-4 py-3
        rounded-xl
        transition-all
        duration-200
        ${
          isActive
            ? "bg-[#EEF3ED] text-[#557A5A] font-semibold"
            : "hover:bg-[#F6F5F2] text-gray-700 font-medium"
        }
      `}
    >
      <Icon size={20} className={isActive ? "text-[#557A5A]" : "text-gray-500"} />
      <span>{title}</span>
    </Link>
  );
}