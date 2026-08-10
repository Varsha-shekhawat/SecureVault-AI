const collections = [
  {
    name: "Operating Systems",
    description: "Notes and documents related to Operating Systems.",
    files: 18,
    updated: "Updated 2 days ago",
    icon: "OS",
  },
  {
    name: "DBMS",
    description: "Database concepts, notes and reference material.",
    files: 27,
    updated: "Updated 4 days ago",
    icon: "DB",
  },
  {
    name: "Computer Networks",
    description: "Networking concepts, protocols and study material.",
    files: 14,
    updated: "Updated 1 week ago",
    icon: "CN",
  },
  {
    name: "Java Development",
    description: "Java programming notes, projects and references.",
    files: 21,
    updated: "Updated 1 week ago",
    icon: "JV",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-[#6F8F74]">
            YOUR LIBRARY
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937]">
            Collections
          </h1>

          <p className="mt-2 text-sm text-[#6B7280]">
            Organize your documents into focused knowledge collections.
          </p>
        </div>

        <button className="rounded-xl bg-[#6F8F74] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#5F7F64]">
          + Create Collection
        </button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#EAE7E1] bg-white p-5 shadow-sm">
          <p className="text-sm text-[#6B7280]">Collections</p>
          <p className="mt-2 text-2xl font-semibold text-[#1F2937]">4</p>
        </div>

        <div className="rounded-2xl border border-[#EAE7E1] bg-white p-5 shadow-sm">
          <p className="text-sm text-[#6B7280]">Documents</p>
          <p className="mt-2 text-2xl font-semibold text-[#1F2937]">80</p>
        </div>

        <div className="rounded-2xl border border-[#EAE7E1] bg-white p-5 shadow-sm">
          <p className="text-sm text-[#6B7280]">Storage Used</p>
          <p className="mt-2 text-2xl font-semibold text-[#1F2937]">
            1.8 GB
          </p>
        </div>
      </div>

      {/* Collections */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1F2937]">
            Your Collections
          </h2>

          <span className="text-sm text-[#6B7280]">
            {collections.length} collections
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group rounded-2xl border border-[#EAE7E1] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3ED] text-sm font-semibold text-[#6F8F74]">
                  {collection.icon}
                </div>

                <button className="text-xl text-[#9CA3AF] transition hover:text-[#1F2937]">
                  ⋯
                </button>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#1F2937]">
                {collection.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                {collection.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#EAE7E1] pt-4">
                <span className="text-sm font-medium text-[#1F2937]">
                  {collection.files} files
                </span>

                <span className="text-xs text-[#9CA3AF]">
                  {collection.updated}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}