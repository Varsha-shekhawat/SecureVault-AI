"use client";

import {
  Home,
  FolderOpen,
  FileText,
  Bot,
  Clock,
  Star,
  Settings,
  CircleHelp,
} from "lucide-react";

import Logo from "../sidebar/Logo";
import MenuItem from "../sidebar/MenuItem";
import ProfileCard from "../sidebar/ProfileCard";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen flex-shrink-0 bg-white border-r border-[#EAE7E1] p-6 flex flex-col justify-between overflow-y-auto z-20">
      <div>
        <Logo />

        <div className="space-y-1 mt-6">
          <MenuItem
            icon={Home}
            title="Workspace"
            href="/dashboard"
          />

          <MenuItem
            icon={FolderOpen}
            title="Collections"
            href="/collections"
          />

          <MenuItem
            icon={FileText}
            title="Documents"
            href="/documents"
          />

          <MenuItem
            icon={Bot}
            title="AI Assistant"
            href="/chat"
          />

          <MenuItem
            icon={Clock}
            title="Timeline"
            href="/timeline"
          />

          <MenuItem
            icon={Star}
            title="Starred"
            href="/starred"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-[#EAE7E1] space-y-1">
        <MenuItem
          icon={Settings}
          title="Settings"
          href="/settings"
        />

        <MenuItem
          icon={CircleHelp}
          title="Help & Support"
          href="#"
        />

        <ProfileCard />
      </div>
    </aside>
  );
}