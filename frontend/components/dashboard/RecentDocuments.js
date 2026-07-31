import { FileText, MoreVertical } from "lucide-react";

const docs = [
  {
    name: "System Design Notes.pdf",
    size: "2.4 MB",
    time: "Uploaded 2h ago",
  },
  {
    name: "Database Normalization.pdf",
    size: "1.8 MB",
    time: "Uploaded yesterday",
  },
  {
    name: "Operating Systems Notes.pdf",
    size: "2.1 MB",
    time: "Uploaded 2 days ago",
  },
  {
    name: "Machine Learning Basics.pdf",
    size: "3.2 MB",
    time: "Uploaded 3 days ago",
  },
];

export default function RecentDocuments() {
  return (
    <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm">
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold text-lg text-gray-900">
          Recent Documents
        </h2>

        <button className="text-[#6D8B74] text-sm">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {docs.map((doc, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-[#F8F8F5] rounded-xl p-3 transition"
          >
            <div className="flex gap-3">

              <div className="bg-[#F3F8F3] p-3 rounded-xl">
                <FileText
                  size={20}
                  className="text-[#6D8B74]"
                />
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  {doc.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {doc.size} • {doc.time}
                </p>
              </div>

            </div>

            <MoreVertical
              size={18}
              className="text-gray-400"
            />

          </div>
        ))}
      </div>
    </div>
  );
}