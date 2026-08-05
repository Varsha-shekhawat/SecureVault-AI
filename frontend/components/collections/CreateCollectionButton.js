import { Plus } from "lucide-react";

export default function CreateCollectionButton() {
  return (
    <button
      className="bg-[#6D8B74] hover:bg-[#5C7862] text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
    >
      <Plus size={18} />
      Create Collection
    </button>
  );
}