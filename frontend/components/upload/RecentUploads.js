import { FileText, CheckCircle2 } from "lucide-react";

const uploads = [
  "Operating Systems.pdf",
  "DBMS Notes.pdf",
  "Computer Networks.pdf",
];

export default function RecentUploads() {
  return (
    <div className="mt-8">

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Uploads
      </h3>

      <div className="space-y-3">

        {uploads.map((file, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#ECE8E1] p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">

              <FileText
                className="text-[#6D8B74]"
                size={20}
              />

              <span className="text-sm text-gray-800">
                {file}
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