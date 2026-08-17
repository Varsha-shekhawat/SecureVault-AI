"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Lock, Mail, User, Shield, AlertCircle, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const { register, error } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email.trim() || !password) {
      setLocalError("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters long.");
      return;
    }

    setSubmitting(true);
    const res = await register(email, password, name);
    setSubmitting(false);

    if (!res.success) {
      setLocalError(res.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl border border-[#EAE7E1] p-8 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF3ED] text-[#6D8B74] flex items-center justify-center mx-auto">
            <Shield size={26} />
          </div>
          <h1 className="text-2xl font-bold text-[#29251F]">Create Knowledge Vault</h1>
          <p className="text-sm text-[#716B61]">Start organizing your documents with AI</p>
        </div>

        {(localError || error) && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2.5">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span>{localError || error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#29251F] uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User size={18} className="absolute left-3.5 text-[#716B61]" />
              <input
                type="text"
                placeholder="Varsha Shekhawat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EAE7E1] bg-[#FAF9F6] text-sm text-[#29251F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D8B74]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#29251F] uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-3.5 text-[#716B61]" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EAE7E1] bg-[#FAF9F6] text-sm text-[#29251F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D8B74]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#29251F] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-3.5 text-[#716B61]" />
              <input
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EAE7E1] bg-[#FAF9F6] text-sm text-[#29251F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D8B74]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 px-4 bg-[#6D8B74] text-white font-medium rounded-xl hover:bg-[#5F7C66] transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-sm mt-2"
          >
            <span>{submitting ? "Creating Vault..." : "Create Account"}</span>
            {!submitting && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="pt-4 border-t border-[#EAE7E1] text-center">
          <p className="text-sm text-[#716B61]">
            Already have a vault?{" "}
            <Link href="/login" className="font-semibold text-[#6D8B74] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
