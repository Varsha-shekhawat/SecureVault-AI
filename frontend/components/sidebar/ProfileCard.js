export default function ProfileCard() {
  return (
    <div className="flex items-center gap-3 p-3 mt-4 rounded-xl bg-[#FAF9F6] border border-[#EAE7E1]">
      <img
        src="https://i.pravatar.cc/40"
        alt="Profile"
        className="w-9 h-9 rounded-full object-cover"
      />
      <div className="overflow-hidden">
        <p className="text-sm font-semibold text-[#29251F] truncate">Varsha</p>
        <p className="text-xs text-[#716B61] truncate">Personal Vault</p>
      </div>
    </div>
  );
}
