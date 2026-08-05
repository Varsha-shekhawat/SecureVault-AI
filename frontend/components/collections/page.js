import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import CollectionStats from "@/components/collections/CollectionStats";
import CollectionsGrid from "@/components/collections/CollectionsGrid";
import CreateCollectionButton from "@/components/collections/CreateCollectionButton";

export default function CollectionsPage() {
  return (
    <div className="flex bg-[#FAF9F6] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <Navbar />

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Collections
            </h1>

            <p className="text-gray-500 mt-1">
              Organize your documents efficiently.
            </p>
          </div>

          <CreateCollectionButton />

        </div>

        <CollectionStats />

        <CollectionsGrid />

      </main>

    </div>
  );
}