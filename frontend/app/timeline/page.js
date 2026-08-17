import { Clock, FileText, FolderPlus, MessageSquare } from "lucide-react";

export default function TimelinePage() {
  const events = [
    { title: "Uploaded System Design Notes.pdf", time: "2 hours ago", icon: FileText, desc: "Added to Operating Systems collection" },
    { title: "Created DBMS Collection", time: "1 day ago", icon: FolderPlus, desc: "Contains 27 database files" },
    { title: "AI Assistant Summary Generated", time: "2 days ago", icon: MessageSquare, desc: "Generated summary for Operating Systems Notes" },
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
          ACTIVITY HISTORY
        </p>
        <h1 className="text-3xl font-bold text-[#29251F]">
          Timeline
        </h1>
        <p className="text-[#716B61] mt-1 text-sm">
          Track document uploads, collection edits, and AI interactions over time.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm space-y-6">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={index} className="flex gap-4 items-start pb-6 border-b border-[#EAE7E1] last:border-0 last:pb-0">
              <div className="p-3 rounded-xl bg-[#EEF3ED] text-[#6D8B74]">
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#29251F]">{event.title}</h3>
                  <span className="text-xs text-[#716B61] flex items-center gap-1">
                    <Clock size={12} /> {event.time}
                  </span>
                </div>
                <p className="text-sm text-[#716B61] mt-1">{event.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
