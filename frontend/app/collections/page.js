import CollectionStats from "@/components/collections/CollectionStats";
import CollectionsGrid from "@/components/collections/CollectionsGrid";
import CreateCollectionButton from "@/components/collections/CreateCollectionButton";

export default function CollectionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
            KNOWLEDGE BASE
          </p>
          <h1 className="text-3xl font-bold text-[#29251F]">
            Collections
          </h1>
          <p className="text-[#716B61] mt-1 text-sm">
            Organize your documents into focused knowledge collections.
          </p>
        </div>

        <CreateCollectionButton />
      </div>

      <CollectionStats />

      <CollectionsGrid />
    </div>
  );
}