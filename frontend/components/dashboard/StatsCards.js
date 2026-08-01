import {
  FileText,
  MessageSquare,
  FolderOpen,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Documents",
    value: "24",
    growth: "+8 this week",
    icon: FileText,
  },
  {
    title: "AI Chats",
    value: "128",
    growth: "+16 this week",
    icon: MessageSquare,
  },
  {
    title: "Collections",
    value: "12",
    growth: "+3 this week",
    icon: FolderOpen,
  },
  {
    title: "Summaries",
    value: "45",
    growth: "+10 this week",
    icon: Sparkles,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-sm">{item.title}</h3>

              <div className="bg-[#F3F8F3] p-2 rounded-xl">
                <Icon
                  size={20}
                  className="text-[#6D8B74]"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold mt-4 text-gray-900">
              {item.value}
            </h2>

            <p className="text-green-600 text-sm mt-2">
              ↑ {item.growth}
            </p>
          </div>
        );
      })}
    </div>
  );
}