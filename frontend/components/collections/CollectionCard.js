import { FolderOpen, FileText } from "lucide-react";

export default function CollectionCard({
  title,
  files,
  updated,
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">

      <div className="w-14 h-14 rounded-2xl bg-[#EEF4EE] flex items-center justify-center mb-5">
        <FolderOpen
          className="text-[#6D8B74]"
          size={28}
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
        <FileText size={16} />
        <span>{files} files</span>
      </div>

      <p className="text-xs text-gray-400 mt-5">
        Updated {updated}
      </p>

    </div>
  );
}