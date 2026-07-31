import {
  Upload,
  FolderPlus,
  Sparkles,
  FilePlus,
  ChevronRight,
} from "lucide-react";

const actions = [
  {
    icon: Upload,
    title: "Upload Document",
  },
  {
    icon: FolderPlus,
    title: "Create Collection",
  },
  {
    icon: Sparkles,
    title: "Generate Summary",
  },
  {
    icon: FilePlus,
    title: "Create Flashcards",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm">

      <h2 className="font-semibold text-lg text-gray-900">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={index}
              className="w-full flex justify-between items-center p-4 rounded-xl hover:bg-[#F8F8F5] transition"
            >
              <div className="flex gap-4 items-center">

                <div className="bg-[#F3F8F3] p-3 rounded-xl">
                  <Icon
                    size={20}
                    className="text-[#5F7A65] hover:text-[#4A6350]"
                  />
                </div>

                <span className="text-gray-800 font-medium">
                  {action.title}
                </span>

              </div>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />

            </button>
          );
        })}

      </div>

    </div>
  );
}