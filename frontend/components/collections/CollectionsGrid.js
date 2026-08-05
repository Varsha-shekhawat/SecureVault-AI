import CollectionCard from "./CollectionCard";

const collections = [
  {
    title: "Operating Systems",
    files: 18,
    updated: "2 days ago",
  },
  {
    title: "DBMS",
    files: 27,
    updated: "Yesterday",
  },
  {
    title: "Computer Networks",
    files: 15,
    updated: "Today",
  },
  {
    title: "DSA",
    files: 34,
    updated: "1 week ago",
  },
];

export default function CollectionsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {collections.map((collection, index) => (
        <CollectionCard
          key={index}
          {...collection}
        />
      ))}
    </div>
  );
}