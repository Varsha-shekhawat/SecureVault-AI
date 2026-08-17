import { Bot, Send, Sparkles } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-140px)]">
      <div>
        <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
          KNOWLEDGE ASSISTANT
        </p>
        <h1 className="text-3xl font-bold text-[#29251F]">
          AI Assistant
        </h1>
        <p className="text-[#716B61] mt-1 text-sm">
          Ask questions, query your documents, or request summaries.
        </p>
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-[#EAE7E1] p-6 flex flex-col justify-between shadow-sm overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#EEF3ED] flex items-center justify-center">
            <Bot size={32} className="text-[#6D8B74]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#29251F]">How can I help with your documents today?</h3>
            <p className="text-sm text-[#716B61] max-w-md mt-1">
              Select a collection or document to start querying your personal knowledge base with AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <span className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#EAE7E1] text-xs font-medium text-[#716B61] flex items-center gap-1.5 cursor-pointer hover:bg-[#EEF3ED] transition">
              <Sparkles size={14} className="text-[#6D8B74]" /> Summarize Operating Systems notes
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#EAE7E1] text-xs font-medium text-[#716B61] flex items-center gap-1.5 cursor-pointer hover:bg-[#EEF3ED] transition">
              <Sparkles size={14} className="text-[#6D8B74]" /> Generate DBMS flashcards
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#EAE7E1]">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Ask a question about your knowledge vault..."
              className="w-full py-3.5 pl-4 pr-12 rounded-xl border border-[#EAE7E1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D8B74] text-sm text-[#29251F]"
            />
            <button className="absolute right-3 p-2 bg-[#6D8B74] text-white rounded-lg hover:bg-[#5F7C66] transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}