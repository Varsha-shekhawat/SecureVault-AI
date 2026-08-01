import Link from "next/link";
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

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen sticky top-0 bg-white border-r border-[#EAE7E1] p-7 flex flex-col justify-between">
      <div>

        <Logo />

        <div className="space-y-2">

          <MenuItem
            icon={Home}
            title="Workspace"
            active={true}
          />

          <MenuItem
            icon={FolderOpen}
            title="Collections"
          />

          <MenuItem
            icon={FileText}
            title="Documents"
          />

          <MenuItem
            icon={Bot}
            title="AI Assistant"
          />

          <MenuItem
            icon={Clock}
            title="Timeline"
          />

          <MenuItem
            icon={Star}
            title="Starred"
          />

        </div>

      </div>

      <div className="space-y-2">

        <MenuItem
          icon={Settings}
          title="Settings"
        />

        <MenuItem
          icon={CircleHelp}
          title="Help & Support"
        />

      </div>

    </aside>
  );
}