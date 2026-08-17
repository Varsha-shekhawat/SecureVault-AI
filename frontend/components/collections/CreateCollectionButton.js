"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function CreateCollectionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleCreate = () => {
    if (!name.trim()) return;

    console.log("Collection created:", name);

    setName("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-5 py-3 bg-[#6D8B74] text-white rounded-xl font-medium hover:bg-[#5F7C66] transition cursor-pointer"
      >
        <Plus size={18} />
        Create Collection
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-900">
                Create Collection
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            <input
              type="text"
              placeholder="Collection name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#6D8B74]"
            />

            <button
              onClick={handleCreate}
              className="w-full mt-4 bg-[#6D8B74] text-white py-3 rounded-xl font-medium hover:bg-[#5F7C66] transition"
            >
              Create Collection
            </button>
          </div>
        </div>
      )}
    </>
  );
}