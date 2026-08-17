import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentDocuments from "@/components/dashboard/RecentDocuments";
import QuickActions from "@/components/dashboard/QuickActions";
import UploadPanel from "@/components/upload/UploadPanel";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="flex-1 space-y-8">
        <WelcomeSection />
        <StatsCards />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentDocuments />
          <QuickActions />
        </div>
      </div>
      <UploadPanel />
    </div>
  );
}