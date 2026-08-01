import { FileText, CheckCircle2 } from "lucide-react";

const uploads = [
  {
    name: "Operating Systems.pdf",
    status: "Uploaded",
  },
  {
    name: "DBMS Notes.pdf",
    status: "Uploaded",
  },
];

export default function RecentUploads() {
  return (
    <div className="mt-6">

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Uploads
      </h3>

      <div className="space-y-3">

        {uploads.map((file, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white border border-[#EAE7E1] rounded-xl p-3"
          >
            <div className="flex items-center gap-3">
              <FileText className="text-[#6D8B74]" size={18} />

              <span className="text-sm text-gray-800">
                {file.name}
              </span>
            </div>

            <CheckCircle2
              className="text-green-600"
              size={18}
            />
          </div>
        ))}

      </div>

    </div>
  );
}