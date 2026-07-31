import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentDocuments from "@/components/dashboard/RecentDocuments";
import QuickActions from "@/components/dashboard/QuickActions";

export default function Home() {
  return (
    <div className="flex bg-[#FAF9F6] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <Navbar />

        <WelcomeSection />

        <StatsCards />

        <div className="grid grid-cols-2 gap-6">
          <RecentDocuments />
          <QuickActions />
        </div>

      </main>

    </div>
  );
}