const stats = [
  {
    title: "Collections",
    value: "12",
  },
  {
    title: "Documents",
    value: "243",
  },
  {
    title: "Storage",
    value: "1.4 GB",
  },
];

export default function CollectionStats() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#EAE7E1] rounded-2xl p-6"
        >
          <p className="text-gray-500 text-sm">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}