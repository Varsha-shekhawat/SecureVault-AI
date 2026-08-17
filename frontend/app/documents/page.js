import RecentDocuments from "@/components/dashboard/RecentDocuments";
import UploadDropZone from "@/components/upload/UploadDropZone";

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
          FILE VAULT
        </p>
        <h1 className="text-3xl font-bold text-[#29251F]">
          Documents
        </h1>
        <p className="text-[#716B61] mt-1 text-sm">
          View, organize, and manage all your uploaded knowledge documents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentDocuments />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#29251F] mb-4">Quick Upload</h2>
          <UploadDropZone />
        </div>
      </div>
    </div>
  );
}