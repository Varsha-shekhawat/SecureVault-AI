import { Star, FileText } from "lucide-react";

export default function StarredPage() {
  const starredDocs = [
    { name: "System Design Notes.pdf", size: "2.4 MB", collection: "Operating Systems" },
    { name: "Database Normalization.pdf", size: "1.8 MB", collection: "DBMS" },
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
          QUICK ACCESS
        </p>
        <h1 className="text-3xl font-bold text-[#29251F]">
          Starred Documents
        </h1>
        <p className="text-[#716B61] mt-1 text-sm">
          Bookmark important documents and reference guides for fast retrieval.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm space-y-4">
        {starredDocs.map((doc, index) => (
          <div key={index} className="flex justify-between items-center p-3 hover:bg-[#FAF9F6] rounded-xl transition border border-transparent hover:border-[#EAE7E1]">
            <div className="flex gap-3 items-center">
              <div className="p-2.5 rounded-xl bg-[#EEF3ED]">
                <FileText size={20} className="text-[#6D8B74]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#29251F]">{doc.name}</h3>
                <p className="text-xs text-[#716B61]">{doc.collection} • {doc.size}</p>
              </div>
            </div>
            <Star size={18} className="text-[#D8A94B] fill-[#D8A94B] cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}
