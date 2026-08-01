import UploadDropZone from "./UploadDropZone";
import RecentUploads from "./RecentUploads";

export default function UploadPanel() {
  return (
    <aside className="w-[360px] bg-white border-l border-[#EAE7E1] p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Upload Center
      </h2>

      <UploadDropZone />

      <RecentUploads />
    </aside>
  );
}