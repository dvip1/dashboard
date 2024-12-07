import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import MainContent from "@/components/MainContent";
import LeadInfo from "@/components/LeadInfo";
import ActivityPanel from "@/components/ActivityPanel";
import StageHistory from "@/components/StageHistory";
import CallLayout from "@/components/callLayout";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <NavBar />
      </div>
      <section className="flex min-h-screen">
        <div>
          <SideBar />
        </div>
        <div className="content flex flex-col w-full">
          <div className="w-full h-fit">
            <MainContent />
          </div>
          <div className="grid-container grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            <div className="lg:col-span-1">
              <LeadInfo />
            </div>
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <div className="overflow-auto">
                <ActivityPanel />
              </div>
              <div className="overflow-auto">
                <StageHistory />
              </div>
              <div className="overflow-auto">
                <CallLayout />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}