import { UploadCloud } from "lucide-react";

export default function UploadDropZone() {
  return (
    <div className="border-2 border-dashed border-[#D8E5D6] rounded-2xl p-8 bg-[#FCFBF8]">

      <div className="flex flex-col items-center text-center">

        <div className="bg-[#F3F8F3] p-4 rounded-full">
          <UploadCloud
            size={34}
            className="text-[#6D8B74]"
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-5">
          Drag & Drop your files
        </h3>

        <p className="text-gray-500 mt-2 text-sm">
          Upload PDF, DOCX or TXT files
        </p>

        <button className="mt-6 px-5 py-3 bg-[#6D8B74] text-white rounded-xl hover:bg-[#5B7762] transition">
          Browse Files
        </button>

      </div>

    </div>
  );
}