import { Search, Bell, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div className="relative w-[420px]">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full py-3 pl-11 pr-16 rounded-xl border border-[#EAE7E1] bg-white outline-none"
        />

        <span className="absolute right-4 top-3 text-xs bg-gray-100 px-2 py-1 rounded-md">
          Ctrl K
        </span>

      </div>

      <div className="flex gap-4 items-center">

        <Bell className="text-[#6D8B74]" />

        <Sun className="text-[#D8A94B]" />

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
          alt="profile"
        />

      </div>

    </div>
  );
}