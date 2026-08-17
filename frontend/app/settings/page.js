import { User, Shield, Bell, Key, Database } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <p className="text-xs font-semibold text-[#6D8B74] tracking-wider uppercase mb-1">
          PREFERENCES
        </p>
        <h1 className="text-3xl font-bold text-[#29251F]">
          Settings
        </h1>
        <p className="text-[#716B61] mt-1 text-sm">
          Manage your account preferences, security settings, and AI storage configuration.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#EEF3ED]">
              <User size={20} className="text-[#6D8B74]" />
            </div>
            <div>
              <h2 className="font-semibold text-[#29251F]">Profile Settings</h2>
              <p className="text-xs text-[#716B61]">Manage your user identity and email preferences</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-medium text-[#716B61] mb-1">Display Name</label>
              <input type="text" defaultValue="Varsha Shekhawat" className="w-full p-3 rounded-xl border border-[#EAE7E1] text-sm text-[#29251F]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#716B61] mb-1">Email Address</label>
              <input type="email" defaultValue="varsha@example.com" className="w-full p-3 rounded-xl border border-[#EAE7E1] text-sm text-[#29251F]" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#EAE7E1] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#EEF3ED]">
              <Key size={20} className="text-[#6D8B74]" />
            </div>
            <div>
              <h2 className="font-semibold text-[#29251F]">AI & Integration Settings</h2>
              <p className="text-xs text-[#716B61]">Configure model endpoints and API preferences</p>
            </div>
          </div>
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-medium text-[#716B61] mb-1">AI Provider</label>
              <select className="w-full p-3 rounded-xl border border-[#EAE7E1] text-sm text-[#29251F] bg-white">
                <option>Google Gemini API (Default)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}